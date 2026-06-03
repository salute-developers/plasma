#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires, import/no-dynamic-require, global-require */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */

const { spawnSync } = require('child_process');

const CYPRESS_IMAGE = 'plasmadockerhub/cypress:15.9.0-webkit';

const browser = process.env.BROWSER || 'chromium';

const envVars = {
    NODE_OPTIONS: '--max-old-space-size=16384',
    CYPRESS_CONFIG_FILE: 'cypress.config.ts',
    PACKAGE_NAME: process.env.PACKAGE_NAME,
    SPEC_GROUP: process.env.SPEC_GROUP,
    COMPONENTS: process.env.COMPONENTS,
    RETRIES: process.env.RETRIES,
    CYPRESS_updateSnapshots: process.env.CYPRESS_updateSnapshots,
    WEBPACK_CACHE_ENABLED: process.env.WEBPACK_CACHE_ENABLED,
    BROWSER: process.env.BROWSER,
};

const envArgs = Object.entries(envVars).flatMap(([key, value]) => [
    '-e',
    value !== undefined ? `${key}=${value}` : key,
]);

const args = [
    'run',
    '--rm',
    '-v',
    `${process.cwd()}:/e2e`,
    '-w',
    '/e2e',
    '--entrypoint',
    '/bin/bash',
    ...envArgs,
    CYPRESS_IMAGE,
    '-c',
    `cypress run --component --browser ${browser}`,
];

console.log(`docker ${args.join(' ')}`);

const result = spawnSync('docker', args, { stdio: 'inherit' });

process.exit(result.status || 0);
