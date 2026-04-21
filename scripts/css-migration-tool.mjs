#!/usr/bin/env node

import path from 'node:path';

import { Command } from 'commander';

import { migrateConfigs } from './css-migration-tool/migrate-configs.mjs';
import { updateStorybook } from './css-migration-tool/update-storybook.mjs';

function normalizePackageRoot(val) {
    // allow `.` and relative paths
    return path.resolve(process.cwd(), val || '.');
}

const program = new Command();

program.name('css-migration-tool').description('Config token migration + Storybook missing-token refresh');

program
    .command('migrate-configs')
    .description('Migrate config files to token references, add per-line NOTE markers, and upsert summary NOTE blocks')
    .option(
        '--tokens-import <spec>',
        "Exact module id for theme token imports (e.g. @salutejs/plasma-themes/tokens/plasma_giga or @salutejs-ds/sdds_sbcom/theme/tokens)",
    )
    .option(
        '--tokens-package <name>',
        'Shorthand: tokens module is `<package>/theme/tokens` (ignored if --tokens-import is set)',
    )
    .option('--package-root <path>', 'Target package root (defaults to cwd)', '.')
    .option(
        '--configs <glob...>',
        'Config glob(s) relative to package root',
        ['src/components/**/*.config.ts', 'src/components/**/*.config.tsx'],
    )
    .option('--dry-run', 'Do not write files', false)
    .action(async (opts) => {
        if (!opts.tokensImport && !opts.tokensPackage) {
            throw new Error('migrate-configs: pass --tokens-import or --tokens-package');
        }
        const res = await migrateConfigs({
            packageRoot: normalizePackageRoot(opts.packageRoot),
            tokensPackage: opts.tokensPackage,
            tokensImport: opts.tokensImport,
            configsGlob: opts.configs,
            dryRun: Boolean(opts.dryRun),
        });
        process.stdout.write(
            `migrate-configs: total=${res.stats.total} changed=${res.stats.changed} migrated=${res.stats.migrated} repairedImports=${res.stats.repairedImports} updatedNotes=${res.stats.updatedNotes} plasmaImportsAdded=${res.stats.plasmaImportsAdded}\n`,
        );
    });

program
    .command('update-storybook')
    .description('Regenerate MissingTokens data file and update story title warning emojis')
    .option('--package-root <path>', 'Target package root (defaults to cwd)', '.')
    .option(
        '--package-name <name>',
        'npm package name for missingTokensDescription (default: read from package.json in --package-root)',
    )
    .option(
        '--tokens-import <spec>',
        'Primary token module id for missingTokensDescription (e.g. @salutejs-ds/sdds_sbcom/theme/tokens)',
    )
    .option(
        '--missing-tokens-description <text>',
        'Override generated missingTokensDescription string entirely',
    )
    .option('--only <mode>', 'all|data|titles', 'all')
    .action(async (opts) => {
        const res = await updateStorybook({
            packageRoot: normalizePackageRoot(opts.packageRoot),
            only: opts.only,
            packageName: opts.packageName,
            tokensImport: opts.tokensImport,
            missingTokensDescription: opts.missingTokensDescription,
        });
        const s = res.stats;
        process.stdout.write(
            `update-storybook: configsScanned=${s.configsScanned} configsWithMissing=${s.configsWithMissing} uniqueTokens=${s.uniqueTokens} updatedStories=${s.updatedStories}\n`,
        );
    });

await program.parseAsync(process.argv);

