import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { rolldown } from 'rolldown';

import config from '../rolldown.config.mjs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const packageDir = path.resolve(dirname, '..');
const cssDir = path.resolve(packageDir, 'dist/css');

const build = await rolldown({
    ...config,
    output: undefined,
});

try {
    await build.write(config.output);
} finally {
    await build.close();
}

const swcResult = spawnSync(
    'swc',
    [
        'es',
        '-d',
        'cjs',
        '--strip-leading-paths',
        '--copy-files',
        '--no-swcrc',
        '-C',
        'module.type=commonjs',
        '-C',
        'jsc.target=es2015',
    ],
    {
        cwd: cssDir,
        stdio: 'inherit',
        env: process.env,
    },
);

if (swcResult.error) {
    throw swcResult.error;
}

if (swcResult.status !== 0) {
    process.exit(swcResult.status);
}
