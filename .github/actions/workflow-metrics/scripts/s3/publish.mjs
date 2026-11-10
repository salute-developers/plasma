// Publish payloads before replacing the corresponding manifest.
/* eslint-disable no-await-in-loop */

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { gunzipSync } from 'node:zlib';

import { readArchive } from '../archive/read.mjs';

import { categories, manifestAt, plain, readBaseline, refs } from './manifest.mjs';

/** Immutable gzip objects first, mutable manifests last. No remote deletes. Single writer required. */
export async function publishToS3({ directory, baseline, transport }) {
    const plans = [];
    for (const [workflow, category] of categories) {
        const source = join(directory, 'v3', category);
        const bytes = await readFile(join(source, 'manifest.json'));
        const manifest = manifestAt(bytes, workflow);
        await readArchive(source);
        const previous = await readBaseline(baseline, category);
        const old = previous && manifestAt(previous, workflow);
        if (old && Date.parse(old.updatedAt) > Date.parse(manifest.updatedAt)) {
            throw new Error(`Нельзя опубликовать устаревший архив ${category}.`);
        }
        plans.push({ category, source, bytes, manifest, previous, old });
    }
    const result = [];
    for (const plan of plans) {
        const { category, source, bytes, manifest, previous, old } = plan;
        const key = `v3/${category}/manifest.json`;
        const assertUnchanged = async () => {
            const current = await transport.get(key);
            if (
                previous === undefined
                    ? current !== undefined
                    : current === undefined || !plain(current).equals(previous)
            ) {
                throw new Error(`Манифест ${category} в S3 изменился после загрузки. Повторите сбор с новым снимком.`);
            }
        };
        await assertUnchanged();
        const known = new Set(old ? refs(old).map((ref) => ref.path) : []);
        let uploaded = 0;
        for (const ref of refs(manifest)) {
            if (known.has(ref.path)) {
                // eslint-disable-next-line no-continue
                continue;
            }
            const gzip = await readFile(join(source, `${ref.path}.gz`));
            const json = await readFile(join(source, ref.path));
            if (gzip.length !== ref.gzipBytes || !gunzipSync(gzip).equals(json)) {
                throw new Error(`Повреждена gzip-копия ${category}/${ref.path}.`);
            }
            await transport.put(`v3/${category}/${ref.path}`, gzip, {
                'Content-Encoding': 'gzip',
                'Cache-Control': 'public,max-age=31536000,immutable',
            });
            uploaded += 1;
        }
        const changed = !previous?.equals(bytes);
        if (changed) {
            await assertUnchanged();
            await transport.put(key, bytes, { 'Cache-Control': 'no-cache' });
        }
        result.push({ category, chunksUploaded: uploaded, manifestChanged: changed, ...manifest.totals });
    }
    return result;
}
