import { parseHistory, validateRange } from '../model/index.ts';
import type { History, Workflow } from '../model/types.ts';
import {
    archiveDirectories,
    parseJobsChunk,
    parseManifest,
    parseSeriesChunk,
    parseStateChunk,
} from '../archive/index.ts';
import type { ArchiveManifest, DailySeries } from '../archive/types.ts';
import { planJobPage, selectDailySeries } from '../archive/selectors.ts';
import type { MetricsFilter } from '../archive/selectors.ts';
import { parallelMap } from '../utils/async.ts';

import { createChunkLoader } from './chunkLoader.ts';

/** Immutable chunks use a bounded LRU; each consumer can cancel without aborting other consumers. */
export function createMetricsClient(
    baseUrl: string,
    {
        fetcher = fetch,
        maxCachedBytes = 16 * 1024 * 1024,
        maxCachedEntries = 24,
        concurrency = 4,
    }: { fetcher?: typeof fetch; maxCachedBytes?: number; maxCachedEntries?: number; concurrency?: number } = {},
) {
    if (
        !Number.isSafeInteger(maxCachedBytes) ||
        maxCachedBytes < 0 ||
        !Number.isSafeInteger(maxCachedEntries) ||
        maxCachedEntries < 0 ||
        !Number.isSafeInteger(concurrency) ||
        concurrency < 1
    ) {
        throw new Error('Некорректные настройки кеша или параллельной загрузки.');
    }
    const root = (workflow: Workflow) => `${baseUrl.replace(/\/$/, '')}/v3/${archiveDirectories[workflow]}`;

    const chunk = createChunkLoader(root, { fetcher, maxCachedBytes, maxCachedEntries });

    return {
        manifestUrl: (workflow: Workflow) => `${root(workflow)}/manifest.json`,
        async loadManifest(workflow: Workflow, signal?: AbortSignal) {
            signal?.throwIfAborted();
            const response = await fetcher(`${root(workflow)}/manifest.json`, { signal, cache: 'no-cache' });
            if (!response.ok) throw new Error(`Не удалось загрузить индекс архива (${response.status}).`);
            const manifest = parseManifest(await response.json());
            signal?.throwIfAborted();
            if (manifest.workflow !== workflow) throw new Error('Workflow в индексе не совпадает с выбранным архивом.');
            return manifest;
        },
        async loadSeries(manifest: ArchiveManifest, from: string, to: string, signal?: AbortSignal) {
            validateRange(from, to);
            signal?.throwIfAborted();
            const refs = manifest.series.filter(
                (ref) => ref.period >= from.slice(0, 4) && ref.period <= to.slice(0, 4),
            );
            const chunks = await parallelMap(refs, concurrency, (ref) =>
                chunk(manifest, ref, parseSeriesChunk, signal),
            );
            signal?.throwIfAborted();
            return chunks.flatMap((value) => value.series);
        },
        async loadJobsPage(
            manifest: ArchiveManifest,
            series: DailySeries[],
            filter: MetricsFilter,
            page: number,
            pageSize: number,
            signal?: AbortSignal,
        ) {
            signal?.throwIfAborted();
            const plan = planJobPage(selectDailySeries(series, filter), page, pageSize);
            const packages = new Set(filter.packages);
            const months = await parallelMap(plan.months, concurrency, async ({ period, count }) => {
                const ref = manifest.jobs.find((ref) => ref.period === period);
                if (!ref) throw new Error('В индексе отсутствуют данные для выбранной страницы.');
                const loaded = await chunk(manifest, ref, parseJobsChunk, signal);
                const rows = loaded.measurements
                    .filter(
                        (row) =>
                            row.jobConclusion === 'success' &&
                            packages.has(row.packageName) &&
                            (!filter.browser || row.browser === filter.browser) &&
                            row.createdAt.slice(0, 10) >= filter.from &&
                            row.createdAt.slice(0, 10) <= filter.to,
                    )
                    .sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.jobId - a.jobId);
                if (rows.length !== count) throw new Error('Данные таблицы не совпадают с графиком. Обновите архив.');
                return rows;
            });
            signal?.throwIfAborted();
            return {
                rows: months.flat().slice(plan.offset, plan.offset + pageSize),
                total: plan.total,
                page: plan.page,
            };
        },
        /** Full v3 snapshot export is deliberately explicit; normal rendering never reads collector state. */
        async loadHistory(manifest: ArchiveManifest, signal?: AbortSignal): Promise<History> {
            const jobs = await parallelMap(manifest.jobs, concurrency, (ref) =>
                chunk(manifest, ref, parseJobsChunk, signal),
            );
            const state = await parallelMap(manifest.state, concurrency, (ref) =>
                chunk(manifest, ref, parseStateChunk, signal),
            );
            signal?.throwIfAborted();
            const history = parseHistory({
                version: 3,
                repository: manifest.repository,
                workflow: manifest.workflow,
                from: manifest.from,
                to: manifest.to,
                updatedAt: manifest.updatedAt,
                ...(manifest.collectionRevision !== undefined
                    ? { collectionRevision: manifest.collectionRevision }
                    : {}),
                coverage: manifest.coverage,
                warnings: manifest.warnings,
                runs: state
                    .flatMap((value) => value.runs)
                    .sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.id - a.id),
                measurements: jobs
                    .flatMap((value) => value.measurements)
                    .sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.jobId - a.jobId),
            });
            if (history.runs.length !== manifest.totals.runs || history.measurements.length !== manifest.totals.jobs) {
                throw new Error('Число записей не совпадает с индексом архива.');
            }
            return history;
        },
    };
}

export type MetricsClient = ReturnType<typeof createMetricsClient>;
