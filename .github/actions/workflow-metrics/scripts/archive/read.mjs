// Read and verify chunks sequentially to bound memory.
/* eslint-disable no-await-in-loop */

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { parseHistory } from '../shared/model.mjs';
import {
    buildDailySeries,
    parseJobsChunk,
    parseManifest,
    parseSeriesChunk,
    parseStateChunk,
} from '../shared/schema.mjs';
import { hash } from '../utils/encoding.mjs';

import { sortHistory } from './build.mjs';

async function readChunk(directory, ref) {
    const bytes = await readFile(resolve(directory, ref.path));
    if (bytes.length !== ref.bytes || hash(bytes) !== ref.sha256) {
        throw new Error(`Размер или SHA-256 чанка не совпадает с манифестом: ${ref.path}.`);
    }
    return JSON.parse(bytes);
}

/** Reconstruct collector state, including runs without Cypress jobs. No information is inferred from chart series. */
export async function readArchive(directory, { verifySeries = true } = {}) {
    const manifest = parseManifest(JSON.parse(await readFile(resolve(directory, 'manifest.json'), 'utf8')));
    const runs = [];
    const measurements = [];
    for (const ref of manifest.state) {
        runs.push(...parseStateChunk(await readChunk(directory, ref), manifest, ref).runs);
    }
    for (const ref of manifest.jobs) {
        measurements.push(...parseJobsChunk(await readChunk(directory, ref), manifest, ref).measurements);
    }
    const history = sortHistory(
        parseHistory({
            version: 3,
            repository: manifest.repository,
            workflow: manifest.workflow,
            from: manifest.from,
            to: manifest.to,
            updatedAt: manifest.updatedAt,
            ...(manifest.collectionRevision !== undefined ? { collectionRevision: manifest.collectionRevision } : {}),
            coverage: manifest.coverage,
            warnings: manifest.warnings,
            runs,
            measurements,
        }),
    );
    if (
        history.runs.length !== manifest.totals.runs ||
        history.measurements.length !== manifest.totals.jobs ||
        JSON.stringify([...new Set(measurements.map((row) => row.packageName))].sort()) !==
            JSON.stringify(manifest.packages)
    ) {
        throw new Error('Счётчики или пакеты архива не совпадают с манифестом.');
    }
    if (verifySeries) {
        const rows = [];
        for (const ref of manifest.series) {
            rows.push(...parseSeriesChunk(await readChunk(directory, ref), manifest, ref).series);
        }
        rows.sort((a, b) =>
            `${a.day}/${a.packageName}/${a.browser}`.localeCompare(`${b.day}/${b.packageName}/${b.browser}`),
        );
        if (JSON.stringify(rows) !== JSON.stringify(buildDailySeries(measurements))) {
            throw new Error('Ряды графика не соответствуют подробным данным jobs.');
        }
    }
    return history;
}
