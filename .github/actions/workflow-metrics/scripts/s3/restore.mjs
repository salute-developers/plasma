// Validate each restored snapshot before recording its baseline.
/* eslint-disable no-await-in-loop */

import { cp, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';

import { readArchive } from '../archive/read.mjs';
import { hash } from '../utils/encoding.mjs';
import { writeFileWithParents as save } from '../utils/files.mjs';

import { categories, manifestAt, plain, refs } from './manifest.mjs';

/** Restore precisely the published snapshot, not orphaned objects from earlier snapshots. */
export async function restoreFromS3({ directory, baseline, bootstrap, transport }) {
    // Reusing a restore directory could mix an old baseline with a new snapshot.
    await mkdir(directory, { recursive: false });
    await mkdir(baseline, { recursive: false });
    const result = [];
    for (const [workflow, category] of categories) {
        const key = `v3/${category}/manifest.json`;
        const remote = await transport.get(key);
        const target = join(directory, 'v3', category);
        if (remote === undefined) {
            const source = join(bootstrap, 'v3', category);
            await readArchive(source);
            await cp(source, target, { recursive: true });
            await save(join(baseline, category, 'missing'), '');
        } else {
            const manifest = manifestAt(remote, workflow);
            for (const ref of refs(manifest)) {
                const payload = await transport.get(`v3/${category}/${ref.path}`);
                if (payload === undefined) {
                    throw new Error(`В S3 отсутствует чанк ${category}/${ref.path}.`);
                }
                const json = plain(payload);
                if (json.length !== ref.bytes || hash(json) !== ref.sha256) {
                    throw new Error(`Размер или SHA-256 S3-чанка не совпадает: ${category}/${ref.path}.`);
                }
                await save(join(target, ref.path), json);
                // s3cmd returns the compressed object body; the collector needs plain JSON and a gzip sidecar.
                const gzip = payload[0] === 0x1f && payload[1] === 0x8b ? payload : gzipSync(json, { level: 9 });
                await save(join(target, `${ref.path}.gz`), gzip);
            }
            await save(join(target, 'manifest.json'), plain(remote));
            await readArchive(target);
            await save(join(baseline, category, 'manifest.json'), plain(remote));
        }
        result.push({ category, source: remote === undefined ? 'repository' : 's3' });
    }
    return result;
}
