import { gzipSync } from 'node:zlib';

import { isDate, parseHistory } from '../shared/model.mjs';
import {
    buildDailySeries,
    parseJobsChunk,
    parseManifest,
    parseSeriesChunk,
    parseStateChunk,
} from '../shared/schema.mjs';
import { hash, jsonBytes } from '../utils/encoding.mjs';

const groupsBy = (rows, period) => {
    const groups = new Map();
    for (const row of rows) {
        const key = period(row);
        const group = groups.get(key) || [];
        group.push(row);
        groups.set(key, group);
    }
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
};

export function sortHistory(history) {
    return {
        ...history,
        runs: [...history.runs].sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.id - a.id),
        measurements: [...history.measurements].sort(
            (a, b) => b.createdAt.localeCompare(a.createdAt) || b.jobId - a.jobId,
        ),
    };
}

/** Build native v3 chunks without timestamps in immutable payloads. */
export function buildArchive(value, { previous, changedMonths } = {}) {
    const history = sortHistory(parseHistory(value));
    const incremental = previous !== undefined && changedMonths !== undefined;
    if (incremental) {
        parseManifest(previous);
        if (
            !Array.isArray(changedMonths) ||
            changedMonths.some(
                (month) => typeof month !== 'string' || !/^\d{4}-\d{2}$/.test(month) || !isDate(`${month}-01`),
            )
        ) {
            throw new Error('Некорректный список изменённых месяцев.');
        }
        if (previous.workflow !== history.workflow) {
            throw new Error('В каталоге уже опубликован другой workflow.');
        }
    }
    const dirty = new Set(changedMonths || []);
    const years = new Set([...dirty].map((month) => month.slice(0, 4)));
    const header = { version: 3, repository: history.repository, workflow: history.workflow };
    const files = new Map();
    const chunk = (kind, period, value, count) => {
        const json = jsonBytes(value);
        const gzip = gzipSync(json, { level: 9 });
        const sha256 = hash(json);
        const path = `${kind}/${period}.${sha256}.json`;
        files.set(path, { json, gzip });
        return { period, path, sha256, bytes: json.length, gzipBytes: gzip.length, count };
    };
    const refs = (kind, fresh, periods) =>
        [...(incremental ? previous[kind].filter((ref) => !periods.has(ref.period)) : []), ...fresh].sort((a, b) =>
            a.period.localeCompare(b.period),
        );
    const seriesMeasurements = incremental
        ? history.measurements.filter((row) => years.has(row.createdAt.slice(0, 4)))
        : history.measurements;
    const jobMeasurements = incremental
        ? history.measurements.filter((row) => dirty.has(row.createdAt.slice(0, 7)))
        : history.measurements;
    const stateRuns = incremental ? history.runs.filter((run) => dirty.has(run.createdAt.slice(0, 7))) : history.runs;
    const manifest = {
        ...header,
        from: history.from,
        to: history.to,
        updatedAt: history.updatedAt,
        ...(history.collectionRevision !== undefined ? { collectionRevision: history.collectionRevision } : {}),
        coverage: history.coverage,
        warnings: history.warnings,
        totals: { runs: history.runs.length, jobs: history.measurements.length },
        packages: [...new Set(history.measurements.map((row) => row.packageName))].sort(),
        series: refs(
            'series',
            groupsBy(buildDailySeries(seriesMeasurements), (row) => row.day.slice(0, 4)).map(([year, series]) =>
                chunk('series', year, { ...header, year, series }, series.length),
            ),
            years,
        ),
        jobs: refs(
            'jobs',
            groupsBy(jobMeasurements, (row) => row.createdAt.slice(0, 7)).map(([month, measurements]) =>
                chunk('jobs', month, { ...header, month, measurements }, measurements.length),
            ),
            dirty,
        ),
        state: refs(
            'state',
            groupsBy(stateRuns, (row) => row.createdAt.slice(0, 7)).map(([month, runs]) =>
                chunk('state', month, { ...header, month, runs }, runs.length),
            ),
            dirty,
        ),
    };
    parseManifest(manifest);
    for (const [kind, parse] of [
        ['series', parseSeriesChunk],
        ['jobs', parseJobsChunk],
        ['state', parseStateChunk],
    ]) {
        for (const ref of manifest[kind]) {
            if (files.has(ref.path)) {
                parse(JSON.parse(files.get(ref.path).json), manifest, ref);
            }
        }
    }
    return { manifest, files };
}

export function archiveSizes(bundle) {
    const sizes = {};
    for (const kind of ['series', 'jobs', 'state']) {
        const refs = bundle.manifest[kind];
        sizes[kind] = {
            chunks: refs.length,
            bytes: refs.reduce((sum, ref) => sum + ref.bytes, 0),
            gzipBytes: refs.reduce((sum, ref) => sum + ref.gzipBytes, 0),
        };
    }
    sizes.manifestBytes = jsonBytes(bundle.manifest).length;
    return sizes;
}
