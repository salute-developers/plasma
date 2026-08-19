import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateIcons } from './generate-icons.mjs';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildRoot = path.join(packageRoot, 'build-temp');
const distRoot = path.join(packageRoot, 'dist');

const runTypeScript = () =>
    new Promise((resolve, reject) => {
        const typeScript = spawn('tsc', ['-p', path.join(packageRoot, 'tsconfig.build.json')], {
            cwd: packageRoot,
            stdio: 'inherit',
        });

        typeScript.on('error', reject);
        typeScript.on('exit', (code, signal) => {
            if (code === 0) {
                resolve();
                return;
            }

            reject(new Error(signal ? `TypeScript was terminated by ${signal}` : `TypeScript exited with code ${code}`));
        });
    });

try {
    await fs.rm(distRoot, { recursive: true, force: true });
    await generateIcons({ outputRoot: buildRoot });
    await runTypeScript();
} catch (error) {
    await fs.rm(distRoot, { recursive: true, force: true });
    throw error;
} finally {
    await fs.rm(buildRoot, { recursive: true, force: true });
}
