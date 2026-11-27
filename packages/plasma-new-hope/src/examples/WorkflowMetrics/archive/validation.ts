import { repository, workflows } from '../model/constants.ts';
import { parseHistory } from '../model/history.ts';
import type { History } from '../model/types.ts';
import { isDate } from '../utils/dates.ts';

import type { ArchiveManifest, ChunkReference, DailySeries, JobsChunk, SeriesChunk, StateChunk } from './types.ts';

const integer = (value: unknown): value is number =>
    typeof value === 'number' && Number.isSafeInteger(value) && value >= 0;

const record = (value: unknown): value is Record<string, unknown> =>
    value !== null && typeof value === 'object' && !Array.isArray(value);

const packageName = (value: unknown): value is string =>
    typeof value === 'string' && /^(plasma|sdds)-[a-z][a-z0-9-]*$/.test(value);

const fail = (): never => {
    throw new Error('Неверный формат чанков workflow-metrics v3. Проверьте сохранённый манифест и чанки.');
};

function validateSnapshotFields(value: unknown): History {
    try {
        return parseHistory(value);
    } catch {
        return fail();
    }
}

export function parseManifest(value: unknown): ArchiveManifest {
    if (!record(value) || value.version !== 3 || !record(value.totals)) return fail();
    // Reuse the existing date, coverage and metadata validation without requiring job data.
    validateSnapshotFields({ ...value, version: 3, runs: [], measurements: [] });
    if (
        !integer(value.totals.runs) ||
        !integer(value.totals.jobs) ||
        !Array.isArray(value.packages) ||
        !value.packages.every(packageName) ||
        new Set(value.packages).size !== value.packages.length
    ) {
        return fail();
    }
    const manifest = (value as unknown) as ArchiveManifest;
    for (const kind of ['series', 'jobs', 'state'] as const) {
        const refs = manifest[kind];
        if (!Array.isArray(refs)) return fail();
        const periods = new Set<string>();
        for (const ref of refs) {
            const year = kind === 'series';
            if (
                !record(ref) ||
                typeof ref.period !== 'string' ||
                !(year ? /^\d{4}$/.test(ref.period) : /^\d{4}-\d{2}$/.test(ref.period)) ||
                !isDate(`${ref.period}${year ? '-01-01' : '-01'}`) ||
                ref.period < manifest.from.slice(0, year ? 4 : 7) ||
                ref.period > manifest.to.slice(0, year ? 4 : 7) ||
                typeof ref.sha256 !== 'string' ||
                !/^[a-f0-9]{64}$/.test(ref.sha256) ||
                ref.path !== `${kind}/${ref.period}.${ref.sha256}.json` ||
                !integer(ref.bytes) ||
                ref.bytes === 0 ||
                !integer(ref.gzipBytes) ||
                ref.gzipBytes === 0 ||
                !integer(ref.count) ||
                ref.count === 0 ||
                periods.has(ref.period)
            ) {
                return fail();
            }
            periods.add(ref.period);
        }
    }
    if (
        manifest.jobs.reduce((sum, ref) => sum + ref.count, 0) !== manifest.totals.jobs ||
        manifest.state.reduce((sum, ref) => sum + ref.count, 0) !== manifest.totals.runs ||
        (manifest.totals.jobs > 0 && (!manifest.packages.length || !manifest.series.length))
    ) {
        return fail();
    }
    return manifest;
}

function checkHeader(value: unknown, manifest: ArchiveManifest): asserts value is Record<string, unknown> {
    if (
        !record(value) ||
        value.version !== 3 ||
        value.repository !== repository ||
        value.workflow !== manifest.workflow ||
        !Object.hasOwn(workflows, value.workflow as string)
    ) {
        fail();
    }
}

export function parseJobsChunk(value: unknown, manifest: ArchiveManifest, ref: ChunkReference): JobsChunk {
    checkHeader(value, manifest);
    if (value.month !== ref.period || !Array.isArray(value.measurements) || value.measurements.length !== ref.count) {
        return fail();
    }
    const runs = new Map<number, History['runs'][number]>();
    for (const row of value.measurements) {
        if (!record(row) || typeof row.createdAt !== 'string' || row.createdAt.slice(0, 7) !== ref.period) {
            return fail();
        }
        runs.set(row.runId as number, {
            id: row.runId as number,
            attempt: row.attempt as number,
            createdAt: row.createdAt,
        });
    }
    validateSnapshotFields({ ...manifest, version: 3, runs: [...runs.values()], measurements: value.measurements });
    if (value.measurements.some((row) => !manifest.packages.includes(row.packageName))) return fail();
    return (value as unknown) as JobsChunk;
}

export function parseStateChunk(value: unknown, manifest: ArchiveManifest, ref: ChunkReference): StateChunk {
    checkHeader(value, manifest);
    if (value.month !== ref.period || !Array.isArray(value.runs) || value.runs.length !== ref.count) return fail();
    const history = validateSnapshotFields({ ...manifest, version: 3, runs: value.runs, measurements: [] });
    if (history.runs.some((run) => run.createdAt.slice(0, 7) !== ref.period)) return fail();
    return (value as unknown) as StateChunk;
}

export function parseSeriesChunk(value: unknown, manifest: ArchiveManifest, ref: ChunkReference): SeriesChunk {
    checkHeader(value, manifest);
    if (value.year !== ref.period || !Array.isArray(value.series) || value.series.length !== ref.count) return fail();
    const keys = new Set<string>();
    for (const candidate of value.series) {
        const row = candidate as DailySeries;
        if (
            !record(candidate) ||
            typeof row.day !== 'string' ||
            !isDate(row.day) ||
            row.day.slice(0, 4) !== ref.period ||
            row.day < manifest.from ||
            row.day > manifest.to ||
            !packageName(row.packageName) ||
            !manifest.packages.includes(row.packageName) ||
            !['chromium', 'webkit'].includes(row.browser) ||
            !integer(row.jobs) ||
            row.jobs === 0 ||
            !integer(row.success) ||
            !integer(row.errors) ||
            row.success + row.errors > row.jobs ||
            !Array.isArray(row.runIds) ||
            !row.runIds.length ||
            row.runIds.length > row.jobs ||
            !row.runIds.every(integer) ||
            new Set(row.runIds).size !== row.runIds.length ||
            !Array.isArray(row.seconds) ||
            row.seconds.length > row.success ||
            !row.seconds.every((seconds) => typeof seconds === 'number' && Number.isFinite(seconds) && seconds >= 0)
        ) {
            return fail();
        }
        if (row.specFiles !== null) {
            const spec = row.specFiles;
            if (
                !record(spec) ||
                !integer(spec.minimum) ||
                !integer(spec.maximum) ||
                spec.minimum > spec.maximum ||
                typeof spec.estimated !== 'boolean' ||
                !integer(spec.known) ||
                spec.known === 0 ||
                spec.known > row.seconds.length ||
                spec.total !== row.seconds.length
            ) {
                return fail();
            }
        }
        const key = `${row.day}/${row.packageName}/${row.browser}`;
        if (keys.has(key)) return fail();
        keys.add(key);
    }
    return (value as unknown) as SeriesChunk;
}
