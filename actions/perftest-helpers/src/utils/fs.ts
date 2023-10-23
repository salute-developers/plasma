import * as fs from 'fs';

export async function readJson<T>(path: string): Promise<T> {
    return JSON.parse(await fs.promises.readFile(path, 'utf-8'));
}
