import fs from 'node:fs';
import path from 'node:path';

import fg from 'fast-glob';

export function toPosixPath(p) {
    return p.replace(/\\/g, '/');
}

export function absFrom(root, p) {
    return path.isAbsolute(p) ? p : path.resolve(root, p);
}

export async function readText(filePath) {
    return fs.promises.readFile(filePath, 'utf8');
}

export async function writeText(filePath, content) {
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
    await fs.promises.writeFile(filePath, content, 'utf8');
}

export async function listByGlob({ cwd, patterns }) {
    return fg(patterns, {
        cwd,
        onlyFiles: true,
        absolute: true,
        dot: false,
        followSymbolicLinks: true,
    });
}

/** @returns {Promise<{ name?: string } & Record<string, unknown>>} */
export async function readPackageJson(packageRoot) {
    const p = path.join(packageRoot, 'package.json');
    const raw = await fs.promises.readFile(p, 'utf8');
    return JSON.parse(raw);
}

