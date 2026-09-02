import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateIcons } from './generate-icons.mjs';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(packageRoot, 'dist');

const runTypeScript = (configPath) =>
    new Promise((resolve, reject) => {
        const typeScript = spawn('tsc', ['-p', configPath], {
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

const pathExists = async (targetPath) => {
    try {
        await fs.access(targetPath);
        return true;
    } catch (error) {
        if (error?.code === 'ENOENT') {
            return false;
        }

        throw error;
    }
};

const publishDist = async ({ nextDistRoot, previousDistRoot }) => {
    const hadPreviousDist = await pathExists(distRoot);

    if (hadPreviousDist) {
        await fs.rename(distRoot, previousDistRoot);
    }

    try {
        await fs.rename(nextDistRoot, distRoot);
    } catch (error) {
        if (hadPreviousDist && !(await pathExists(distRoot))) {
            await fs.rename(previousDistRoot, distRoot);
        }

        throw error;
    }

    if (hadPreviousDist) {
        await fs.rm(previousDistRoot, { recursive: true, force: true });
    }
};

const workingRoot = await fs.mkdtemp(path.join(packageRoot, '.build-temp-'));
const sourceRoot = path.join(workingRoot, 'source');
const nextDistRoot = path.join(workingRoot, 'dist');
const previousDistRoot = path.join(workingRoot, 'previous-dist');
const typeScriptConfigPath = path.join(workingRoot, 'tsconfig.json');

try {
    await generateIcons({ outputRoot: sourceRoot });
    await fs.writeFile(
        typeScriptConfigPath,
        `${JSON.stringify(
            {
                extends: '../tsconfig.json',
                compilerOptions: {
                    rootDir: './source',
                    outDir: './dist',
                },
                include: ['./source'],
            },
            null,
            4,
        )}\n`,
    );
    await runTypeScript(typeScriptConfigPath);
    await publishDist({ nextDistRoot, previousDistRoot });
} finally {
    await fs.rm(workingRoot, { recursive: true, force: true });
}
