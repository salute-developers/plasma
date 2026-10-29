import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { gunzipSync } from 'node:zlib';

import { archiveDirectories, parseManifest } from '../shared/schema.mjs';

export const categories = Object.entries(archiveDirectories);

export const refs = (manifest) => [...manifest.series, ...manifest.jobs, ...manifest.state];

export const plain = (bytes) => (bytes[0] === 0x1f && bytes[1] === 0x8b ? gunzipSync(bytes) : bytes);

export const manifestAt = (bytes, workflow) => {
    const manifest = parseManifest(JSON.parse(plain(bytes)));
    if (manifest.workflow !== workflow) {
        throw new Error('Workflow манифеста не совпадает с каталогом S3.');
    }
    return manifest;
};

export async function readBaseline(baseline, category) {
    try {
        return await readFile(join(baseline, category, 'manifest.json'));
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
        // Only a successful restore is allowed to declare that an S3 manifest did not exist.
        await readFile(join(baseline, category, 'missing'));
        return undefined;
    }
}
