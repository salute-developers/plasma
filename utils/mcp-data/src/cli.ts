#!/usr/bin/env node
import { parseArgs } from 'node:util';

import { loadConfig } from './config.ts';
import { resolveSite } from './site.ts';
import { generateIndex } from './index/generateIndex.ts';
import { generateMcpData } from './mcp/generateMcpData.ts';

const USAGE = `Usage: node utils/mcp-data/src/cli.ts <index|mcp-data> --lib <lib>

Commands:
  index      website/<lib>-docs/docs -> website/<lib>-docs/index.json (нужна собранная документация)
  mcp-data   website/<lib>-docs/index.json -> website/<lib>-docs/mcpData/`;

async function main(): Promise<void> {
    const { positionals, values } = parseArgs({
        allowPositionals: true,
        options: {
            lib: { type: 'string' },
            help: { type: 'boolean', short: 'h' },
        },
    });

    if (values.help) {
        console.log(USAGE);
        return;
    }

    const [command] = positionals;

    if ((command !== 'index' && command !== 'mcp-data') || positionals.length !== 1 || !values.lib) {
        throw new Error(USAGE);
    }

    const site = resolveSite(values.lib);
    const config = await loadConfig(site);

    if (command === 'index') {
        generateIndex(site, config);
    } else {
        generateMcpData(site, config);
    }
}

main().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
});
