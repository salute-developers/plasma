import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseConfig } from '../src/config.ts';
import type { McpDataConfig, ResolvedMcpDataConfig } from '../src/config.ts';
import type { Site } from '../src/site.ts';

export const FIXTURE_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'site');

export const BASE_CONFIG: McpDataConfig = {
    baseUrl: 'https://example.test/fixture/',
    tools: ['list_components', 'get_component'],
    // Разрешается от `fixtures/site/vertical/package.json`.
    tokens: { entry: './theme/tokens' },
};

/** Сайт на фикстуре; результаты пишутся во временный каталог. */
export function createFixtureSite(): Site {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sdds-mcp-data-'));

    return {
        lib: 'fixture',
        siteDir: FIXTURE_DIR,
        configPath: path.join(FIXTURE_DIR, 'mcp.config.mjs'),
        docsDir: path.join(FIXTURE_DIR, 'docs'),
        docgenDir: path.join(FIXTURE_DIR, 'docgen'),
        indexJsonPath: path.join(tmpDir, 'index.json'),
        outputDir: path.join(tmpDir, 'mcpData'),
        packageJsonPath: path.join(FIXTURE_DIR, 'vertical', 'package.json'),
    };
}

export function createConfig(overrides: Partial<McpDataConfig> = {}): ResolvedMcpDataConfig {
    return parseConfig({ ...BASE_CONFIG, ...overrides }, 'test');
}

export function readJson<T = unknown>(filePath: string): T {
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}
