import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import svg2vectordrawable from 'svg2vectordrawable';

const sizes = [16, 24, 36];
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const svgRoot = path.join(packageRoot, 'svg');
const nativeBuildRoot = path.join(packageRoot, 'native-build');
const androidRoot = path.join(nativeBuildRoot, 'android');
const archivePath = path.join(nativeBuildRoot, 'android-icons.zip');

const compareNames = (left, right) => {
    if (left < right) {
        return -1;
    }

    if (left > right) {
        return 1;
    }

    return 0;
};

const getSvgNames = async (size) => {
    const entries = await fs.readdir(path.join(svgRoot, String(size)), { withFileTypes: true });

    return entries
        .filter((entry) => entry.isFile() && path.extname(entry.name) === '.svg')
        .map((entry) => entry.name)
        .sort(compareNames);
};

const getSharedSvgNames = async () => {
    const namesBySize = await Promise.all(sizes.map(getSvgNames));
    const referenceNames = namesBySize[0];

    if (referenceNames.length === 0) {
        throw new Error('No SVG icons found');
    }

    for (let index = 1; index < namesBySize.length; index += 1) {
        if (referenceNames.join('\n') !== namesBySize[index].join('\n')) {
            throw new Error(`Icon sets for sizes ${sizes[0]} and ${sizes[index]} are different`);
        }
    }

    return referenceNames;
};

const camelToSnakeCase = (value) => {
    return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

const getAndroidFileName = (svgName, size) => `ic${camelToSnakeCase(svgName)}_${size}.xml`;

const createArchive = () =>
    new Promise((resolve, reject) => {
        const zip = spawn('zip', ['-q', '-r', archivePath, '.'], {
            cwd: androidRoot,
            stdio: 'inherit',
        });

        zip.on('error', reject);
        zip.on('exit', (code, signal) => {
            if (code === 0) {
                resolve();
                return;
            }

            reject(new Error(signal ? `zip was terminated by ${signal}` : `zip exited with code ${code}`));
        });
    });

const svgNames = await getSharedSvgNames();

await fs.rm(androidRoot, { recursive: true, force: true });
await fs.rm(archivePath, { force: true });
await fs.mkdir(androidRoot, { recursive: true });

await Promise.all(
    svgNames.flatMap((fileName) => {
        const iconName = path.basename(fileName, '.svg');

        return sizes.map(async (size) => {
            const svg = await fs.readFile(path.join(svgRoot, String(size), fileName), 'utf8');
            const vectorDrawable = await svg2vectordrawable(svg, {
                floatPrecision: 3,
                fillBlack: true,
            });

            await fs.writeFile(path.join(androidRoot, getAndroidFileName(iconName, size)), vectorDrawable, 'utf8');
        });
    }),
);

await createArchive();

console.log(`Built ${svgNames.length * sizes.length} Android VectorDrawable files and android-icons.zip.`);
