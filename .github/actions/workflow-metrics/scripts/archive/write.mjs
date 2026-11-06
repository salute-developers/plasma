// Write payloads before committing the manifest pointer.
/* eslint-disable no-await-in-loop */

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { createHistory } from '../shared/model.mjs';
import { parseManifest } from '../shared/schema.mjs';
import { jsonBytes } from '../utils/encoding.mjs';
import { writeChanged } from '../utils/files.mjs';

import { buildArchive } from './build.mjs';
import { readArchive } from './read.mjs';

/** Single writer per directory. Upload objects first and manifest.json last when publishing to S3 too. */
export async function publishArchive(directory, value, { changedMonths } = {}) {
    let previous;
    try {
        previous = parseManifest(JSON.parse(await readFile(resolve(directory, 'manifest.json'), 'utf8')));
        if (previous.workflow !== value.workflow) {
            throw new Error('В каталоге уже опубликован другой workflow.');
        }
        if (Date.parse(previous.updatedAt) > Date.parse(value.updatedAt)) {
            throw new Error('В каталоге уже опубликован более новый архив. Устаревший снимок не записан.');
        }
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }
    const bundle = buildArchive(value, { previous, changedMonths });
    let written = 0;
    let reused =
        (bundle.manifest.jobs.length +
            bundle.manifest.state.length +
            bundle.manifest.series.length -
            bundle.files.size) *
        2;
    for (const [path, { json, gzip }] of bundle.files) {
        for (const [suffix, bytes] of [
            ['', json],
            ['.gz', gzip],
        ]) {
            if (await writeChanged(resolve(directory, path + suffix), bytes, true)) {
                written += 1;
            } else {
                reused += 1;
            }
        }
    }
    // The mutable pointer is the commit step: errors above never change the visible snapshot.
    const manifestChanged = await writeChanged(resolve(directory, 'manifest.json'), jsonBytes(bundle.manifest));
    return { ...bundle, written, reused, manifestChanged };
}

/** A missing manifest starts a new native archive. Missing referenced chunks always fail, never reset history. */
export async function openArchive(directory, workflow, from, to) {
    try {
        await readFile(resolve(directory, 'manifest.json'));
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
        const history = createHistory(workflow, from, to);
        await publishArchive(directory, history);
        return history;
    }
    const history = await readArchive(directory);
    if (history.workflow !== workflow) {
        throw new Error('Workflow не совпадает с каталогом архива.');
    }
    return history;
}
