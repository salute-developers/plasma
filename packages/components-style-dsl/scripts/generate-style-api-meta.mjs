#!/usr/bin/env node

import { readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import { tsImport } from 'tsx/esm/api';

import { collectRegisteredStyleApiMeta, resetStyleTokenApiRegistry } from '../dist/esm/index.js';

function readOption(name) {
    const index = process.argv.indexOf(name);
    const value = index === -1 ? undefined : process.argv[index + 1];

    if (!value || value.startsWith('--')) {
        throw new Error(`Style API meta: ${name} requires a path.`);
    }

    return resolve(value);
}

async function findDeclarations(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    const nested = await Promise.all(
        entries.map(async (entry) => {
            const path = resolve(directory, entry.name);

            if (entry.isDirectory()) {
                return findDeclarations(path);
            }

            return entry.isFile() && entry.name.endsWith('.style-api.ts') ? [path] : [];
        }),
    );

    return nested.flat().sort();
}

const source = readOption('--source');
const output = readOption('--out');
const declarations = await findDeclarations(source);

resetStyleTokenApiRegistry();

for (const [index, declaration] of declarations.entries()) {
    const runtimeDeclaration = `${declaration}.runtime-${process.pid}-${index}.ts`;
    const sourceText = await readFile(declaration, 'utf8');
    const runtimeSource = sourceText.replace(
        /(from\s+['"])(\.\.?\/[^'"]+)(['"])/g,
        (statement, prefix, specifier, suffix) =>
            /\.(?:[cm]?[jt]sx?)$/.test(specifier) ? statement : `${prefix}${specifier}.ts${suffix}`,
    );

    try {
        await writeFile(runtimeDeclaration, runtimeSource, 'utf8');
        await tsImport(`${pathToFileURL(runtimeDeclaration).href}?style-api=${index}`, import.meta.url);
    } finally {
        await unlink(runtimeDeclaration).catch(() => undefined);
    }
}

const metadata = collectRegisteredStyleApiMeta();
await writeFile(output, `${JSON.stringify(metadata, null, 2)}\n`);

process.stdout.write(`Generated ${metadata.length} Style API declarations at ${output}\n`);
