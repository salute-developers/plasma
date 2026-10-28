#!/usr/bin/env node

import { spawn } from 'node:child_process';

const DEFAULT_MANIFEST_BASE_URL = 'https://plasma.sberdevices.ru/mcp';
const DEFAULT_SERVER_PACKAGE = '@salutejs/sdds-mcp';
const DEFAULT_TIMEOUT_MS = 30_000;
const DEFAULT_FETCH_ATTEMPTS = 10;
const DEFAULT_FETCH_DELAY_MS = 3_000;

function parseArgs(argv) {
    const args = {
        manifestBaseUrl: process.env.MCP_MANIFEST_BASE_URL || DEFAULT_MANIFEST_BASE_URL,
        serverPackage: process.env.MCP_SERVER_PACKAGE || DEFAULT_SERVER_PACKAGE,
        serverVersion: process.env.MCP_SERVER_VERSION || 'latest',
    };

    for (let index = 0; index < argv.length; index += 1) {
        const argument = argv[index];
        const next = argv[index + 1];

        if (argument === '--lib') {
            args.lib = next;
            index += 1;
        } else if (argument === '--version') {
            args.version = next;
            index += 1;
        } else if (argument === '--server-version') {
            args.serverVersion = next;
            index += 1;
        } else if (argument === '--server-package') {
            args.serverPackage = next;
            index += 1;
        } else if (argument === '--manifest-base-url') {
            args.manifestBaseUrl = next;
            index += 1;
        } else if (argument === '--help' || argument === '-h') {
            printUsage();
            process.exit(0);
        } else {
            throw new Error(`Unknown argument: ${argument}`);
        }
    }

    if (!args.lib) {
        throw new Error('Argument --lib is required');
    }

    if (!args.version) {
        throw new Error('Argument --version is required');
    }

    return args;
}

function printUsage() {
    console.log(`Usage: node ./index.mjs --lib <library> --version <version> [options]

Options:
  --server-version <version>       MCP server package version (default: latest)
  --server-package <package>       MCP server package name (default: ${DEFAULT_SERVER_PACKAGE})
  --manifest-base-url <url>        Manifest base URL (default: ${DEFAULT_MANIFEST_BASE_URL})
`);
}

function sleep(delayMs) {
    return new Promise((resolve) => setTimeout(resolve, delayMs));
}

async function fetchJson(url, label, attempt = 1) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        if (attempt < DEFAULT_FETCH_ATTEMPTS) {
            await sleep(DEFAULT_FETCH_DELAY_MS);
            return fetchJson(url, label, attempt + 1);
        }

        throw new Error(`${label}: ${error instanceof Error ? error.message : String(error)}`);
    }
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

function assertNonEmptyString(value, label) {
    assert(typeof value === 'string' && value.trim().length > 0, `${label} must be a non-empty string`);
}

function parseManifest(payload, manifestUrl) {
    assert(payload && typeof payload === 'object', `${manifestUrl}: manifest must be an object`);
    assert(Array.isArray(payload.tools), `${manifestUrl}: manifest.tools must be an array`);
    assert(payload.paths && typeof payload.paths === 'object', `${manifestUrl}: manifest.paths must be an object`);

    const { tools } = payload;
    const uniqueTools = new Set(tools);

    assert(tools.length > 0, `${manifestUrl}: manifest.tools must not be empty`);
    assert(uniqueTools.size === tools.length, `${manifestUrl}: manifest.tools contains duplicates`);

    tools.forEach((toolName, index) => assertNonEmptyString(toolName, `manifest.tools[${index}]`));

    return payload;
}

function getTextContent(result) {
    return (result?.content || [])
        .filter((item) => item?.type === 'text')
        .map((item) => item.text)
        .filter((text) => typeof text === 'string')
        .join('\n');
}

function parseToolJson(result, toolName) {
    const text = getTextContent(result);
    assert(text.trim().length > 0, `${toolName}: tool returned empty content`);

    try {
        return JSON.parse(text);
    } catch {
        throw new Error(`${toolName}: tool returned invalid JSON: ${text.slice(0, 500)}`);
    }
}

function formatRpcError(error) {
    if (!error || typeof error !== 'object') {
        return String(error);
    }

    return `${error.code ?? 'unknown'} ${error.message ?? 'Unknown JSON-RPC error'}`;
}

class StdioMcpClient {
    constructor(command, args) {
        this.command = command;
        this.args = args;
        this.nextRequestId = 1;
        this.pending = new Map();
        this.stdoutBuffer = '';
        this.stderr = '';
        this.process = undefined;
    }

    async start() {
        this.process = spawn(this.command, this.args, {
            stdio: ['pipe', 'pipe', 'pipe'],
            env: process.env,
        });

        this.process.stdout.on('data', (chunk) => this.handleStdout(chunk));
        this.process.stderr.on('data', (chunk) => {
            this.stderr += chunk.toString();
        });
        this.process.on('error', (error) => this.rejectPending(error));
        this.process.on('close', (code, signal) => {
            const details = `MCP server exited with code ${code ?? 'unknown'}${signal ? ` (${signal})` : ''}`;
            this.rejectPending(new Error(`${details}${this.stderr ? `\nstderr: ${this.stderr}` : ''}`));
        });

        await new Promise((resolve, reject) => {
            const onSpawn = () => {
                cleanup();
                resolve();
            };
            const onError = (error) => {
                cleanup();
                reject(error);
            };
            const cleanup = () => {
                this.process.off('spawn', onSpawn);
                this.process.off('error', onError);
            };

            this.process.once('spawn', onSpawn);
            this.process.once('error', onError);
        });
    }

    handleStdout(chunk) {
        this.stdoutBuffer += chunk.toString();

        let lineEnd = this.stdoutBuffer.indexOf('\n');
        while (lineEnd !== -1) {
            const line = this.stdoutBuffer.slice(0, lineEnd).replace(/\r$/, '');
            this.stdoutBuffer = this.stdoutBuffer.slice(lineEnd + 1);

            if (line.trim()) {
                this.handleMessage(line);
            }

            lineEnd = this.stdoutBuffer.indexOf('\n');
        }
    }

    handleMessage(line) {
        let message;

        try {
            message = JSON.parse(line);
        } catch (error) {
            this.rejectPending(new Error(`Invalid JSON from MCP server: ${line}`));
            return;
        }

        if (!Object.hasOwn(message, 'id')) {
            return;
        }

        const pending = this.pending.get(message.id);
        if (!pending) {
            return;
        }

        this.pending.delete(message.id);
        clearTimeout(pending.timeout);

        if (message.error) {
            pending.reject(new Error(formatRpcError(message.error)));
        } else {
            pending.resolve(message.result);
        }
    }

    rejectPending(error) {
        for (const pending of this.pending.values()) {
            clearTimeout(pending.timeout);
            pending.reject(error);
        }

        this.pending.clear();
    }

    request(method, params = {}) {
        if (!this.process?.stdin) {
            return Promise.reject(new Error('MCP server is not running'));
        }

        const id = this.nextRequestId;
        this.nextRequestId += 1;

        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                this.pending.delete(id);
                reject(new Error(`MCP request timed out: ${method}`));
            }, DEFAULT_TIMEOUT_MS);

            this.pending.set(id, { resolve, reject, timeout });
            this.process.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', id, method, params })}\n`);
        });
    }

    notify(method, params = {}) {
        if (!this.process?.stdin) {
            throw new Error('MCP server is not running');
        }

        this.process.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', method, params })}\n`);
    }

    async close() {
        if (!this.process) {
            return;
        }

        const processToClose = this.process;
        this.process = undefined;
        processToClose.stdin.end();
        processToClose.kill('SIGTERM');
    }
}

async function listTools(client, cursor, tools = []) {
    const result = await client.request('tools/list', cursor ? { cursor } : {});
    const allTools = [...tools, ...(result?.tools || [])];

    if (!result?.nextCursor) {
        return allTools;
    }

    return listTools(client, result.nextCursor, allTools);
}

async function callTool(client, name, args) {
    const result = await client.request('tools/call', {
        name,
        arguments: args,
    });

    if (result?.isError === true) {
        throw new Error(`${name}: ${getTextContent(result) || 'tool returned isError=true'}`);
    }

    return result;
}

function assertToolResult(toolName, value) {
    switch (toolName) {
        case 'list_components':
            assert(Array.isArray(value) && value.length > 0, `${toolName}: expected a non-empty array`);
            value.forEach((item, index) => {
                assertNonEmptyString(item?.name, `${toolName}[${index}].name`);
                assertNonEmptyString(item?.href, `${toolName}[${index}].href`);
            });
            break;
        case 'get_component':
            assert(value && typeof value === 'object', `${toolName}: expected an object`);
            assertNonEmptyString(value.name, `${toolName}.name`);
            assert(Array.isArray(value.api?.props), `${toolName}.api.props must be an array`);
            assert(Array.isArray(value.examples), `${toolName}.examples must be an array`);
            break;
        case 'search_icons':
            assert(Array.isArray(value), `${toolName}: expected an array`);
            break;
        default:
            assert(value && typeof value === 'object', `${toolName}: expected an object`);
            assertNonEmptyString(value.name, `${toolName}.name`);
            break;
    }
}

function getToolArguments(toolName, componentName) {
    switch (toolName) {
        case 'search_icons':
            return { query: 'arrow', limit: 5 };
        case 'get_component':
            assertNonEmptyString(componentName, `${toolName}: component fixture is missing`);
            return { name: componentName };
        default:
            return {};
    }
}

async function run() {
    const args = parseArgs(process.argv.slice(2));
    const manifestUrl = new URL(
        `${encodeURIComponent(args.lib)}/${encodeURIComponent(args.version)}/manifest.json`,
        `${args.manifestBaseUrl.replace(/\/+$/, '')}/`,
    ).toString();
    const manifest = parseManifest(await fetchJson(manifestUrl, 'manifest'), manifestUrl);

    const serverPackage = `${args.serverPackage}@${args.serverVersion}`;
    const client = new StdioMcpClient('npx', ['--yes', serverPackage, '--lib', args.lib, '--version', args.version]);

    console.log(`Testing ${args.lib}@${args.version} with ${serverPackage}`);

    try {
        await client.start();
        await client.request('initialize', {
            protocolVersion: '2025-06-18',
            capabilities: {},
            clientInfo: {
                name: 'plasma-mcp-tests',
                version: '0.1.0',
            },
        });
        client.notify('notifications/initialized');

        const advertisedTools = await listTools(client);
        const advertisedToolNames = advertisedTools.map((tool) => tool.name).sort();
        const expectedToolNames = [...manifest.tools].sort();

        assert(
            JSON.stringify(advertisedToolNames) === JSON.stringify(expectedToolNames),
            `tools/list does not match manifest.tools\nexpected: ${expectedToolNames.join(
                ', ',
            )}\nactual: ${advertisedToolNames.join(', ')}`,
        );

        let componentName;
        if (manifest.tools.includes('list_components')) {
            const result = await callTool(client, 'list_components', {});
            const components = parseToolJson(result, 'list_components');
            assertToolResult('list_components', components);
            componentName = components[0].name;
        }

        await Promise.all(
            manifest.tools.map(async (toolName) => {
                const result = await callTool(client, toolName, getToolArguments(toolName, componentName));
                const value = parseToolJson(result, toolName);
                assertToolResult(toolName, value);
                console.log(`✓ ${toolName}`);
            }),
        );

        console.log(`MCP checks passed for ${args.lib}@${args.version}`);
    } finally {
        await client.close();
    }
}

run().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
});
