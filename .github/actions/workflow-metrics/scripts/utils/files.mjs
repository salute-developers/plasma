import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

/** Same-directory rename publishes a complete object. A failed write leaves the previous file intact. */
async function writeAtomic(path, bytes) {
    await mkdir(dirname(path), { recursive: true });
    const temporary = `${path}.${process.pid}.${randomUUID()}.tmp`;
    try {
        await writeFile(temporary, bytes);
        await rename(temporary, path);
    } finally {
        await rm(temporary, { force: true });
    }
}

export async function writeChanged(path, bytes, immutable = false) {
    let existing;
    try {
        existing = await readFile(path);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }
    if (existing?.equals(bytes)) {
        return false;
    }
    if (existing && immutable) {
        throw new Error(`Повреждён неизменяемый чанк: ${path}.`);
    }
    await writeAtomic(path, bytes);
    return true;
}

export async function writeFileWithParents(path, bytes) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, bytes);
}
