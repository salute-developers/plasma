import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function getCurrentVersion(): Promise<string> {
    const packageJson = JSON.parse(
        await fsPromises.readFile(path.resolve(dirname, '../../package.json'), { encoding: 'utf-8' }),
    );

    return packageJson.version;
}
