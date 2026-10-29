// Requests and checkpoints share a mutable budget and run index; keep their order.
/* eslint-disable no-await-in-loop */

import {
    collectionRevision,
    fullRange,
    mergeRanges,
    missingRanges,
    repository,
    validateRange,
    workflowSources,
} from '../shared/model.mjs';
import { CollectionPaused } from '../github/errors.mjs';
import { requestGitHubJson } from '../github/client.mjs';
import { loadRunJobs } from '../github/jobs.mjs';

import { dayMs, splitWindows } from './windows.mjs';
import { mergeJobMeasurements } from './measurements.mjs';

export async function collectArchive(
    history,
    {
        from = history.from,
        to = history.to,
        refreshDays = 7,
        maxRequests = 1000,
        fetcher = fetch,
        signal,
        waitForRetry,
        onProgress = () => {},
        onCheckpoint = async () => {},
    } = {},
) {
    validateRange(from, to);
    if (
        !Number.isSafeInteger(maxRequests) ||
        maxRequests < 1 ||
        !Number.isSafeInteger(refreshDays) ||
        refreshDays < 0
    ) {
        throw new Error('maxRequests должен быть положительным целым числом, refreshDays — неотрицательным.');
    }
    const archive = {
        ...history,
        from: from < history.from ? from : history.from,
        to: to > history.to ? to : history.to,
        collectionRevision,
        coverage: history.collectionRevision === collectionRevision ? [...history.coverage] : [],
        warnings: [],
    };
    const runs = new Map(history.runs.map((run) => [run.id, run]));
    const measurements = new Map();
    history.measurements.forEach((measurement) => {
        const group = measurements.get(measurement.runId) || [];
        group.push(measurement);
        measurements.set(measurement.runId, group);
    });
    let requests = 0;
    let sinceCheckpoint = 0;
    const changedMonths = new Set();

    const checkpoint = async () => {
        archive.runs = [...runs.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.id - a.id);
        archive.measurements = [...measurements.values()]
            .flat()
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.jobId - a.jobId);
        archive.coverage = mergeRanges(archive.coverage);
        archive.updatedAt = new Date().toISOString();
        await onCheckpoint(archive, { changedMonths: [...changedMonths].sort() });
        changedMonths.clear();
        sinceCheckpoint = 0;
    };
    const request = async (path) => {
        const { data } = await requestGitHubJson(`https://api.github.com/repos/${repository}/actions/${path}`, {
            fetcher,
            signal,
            sleep: waitForRetry,
            onRetry: onProgress,
            beforeRequest: () => {
                signal?.throwIfAborted();
                if (requests >= maxRequests) {
                    throw new CollectionPaused(
                        `Сбор приостановлен: использован бюджет ${maxRequests} запросов. Повторный запуск продолжит историю.`,
                    );
                }
                requests += 1;
            },
        });
        return data;
    };
    const collectRange = async (range) => {
        const query = (page) =>
            new URLSearchParams({
                status: 'completed',
                created: `${range.from}..${range.to}`,
                per_page: '100',
                page: String(page),
            });
        for (const source of workflowSources[archive.workflow]) {
            onProgress(`${source}: ${range.from} — ${range.to}`);
            const first = await request(`workflows/${source}/runs?${query(1)}`);
            if (first.total_count >= 1000) {
                const start = Date.parse(range.from);
                const end = Date.parse(range.to);
                if (start >= end) {
                    throw new Error(
                        'GitHub вернул 1000 прогонов за одну секунду; полноту интервала подтвердить нельзя.',
                    );
                }
                const middle = Math.floor((start + end) / 2000) * 1000;
                await collectRange({ from: new Date(middle + 1000).toISOString(), to: range.to });
                await collectRange({ from: range.from, to: new Date(middle).toISOString() });
                return;
            }
            onProgress(`${source}: найдено ${first.total_count} завершённых прогонов.`);
            const discovered = [...first.workflow_runs];
            let page = 2;
            while (discovered.length < first.total_count) {
                const data = await request(`workflows/${source}/runs?${query(page)}`);
                if (!data.workflow_runs.length) {
                    throw new Error('Список прогонов изменился во время пагинации. Повторите сбор интервала.');
                }
                discovered.push(...data.workflow_runs);
                page += 1;
            }
            for (const run of discovered) {
                signal?.throwIfAborted();
                const previousRun = runs.get(run.id);
                if (previousRun?.attempt === run.run_attempt && previousRun.collectionRevision === collectionRevision) {
                    if (run.head_sha && run.head_sha !== previousRun.headSha) {
                        runs.set(run.id, { ...previousRun, headSha: run.head_sha });
                        changedMonths.add(previousRun.createdAt.slice(0, 7));
                    }
                    // eslint-disable-next-line no-continue
                    continue;
                }
                const jobs = await loadRunJobs(request, run.id);
                const latestMeasurements = mergeJobMeasurements({
                    jobs,
                    run,
                    workflow: archive.workflow,
                    source,
                    previousRun,
                    previousMeasurements: measurements.get(run.id) || [],
                });
                changedMonths.add(run.created_at.slice(0, 7));
                if (previousRun) {
                    changedMonths.add(previousRun.createdAt.slice(0, 7));
                }
                measurements.set(run.id, latestMeasurements);
                const headSha = run.head_sha || previousRun?.headSha;
                runs.set(run.id, {
                    id: run.id,
                    attempt: run.run_attempt,
                    createdAt: run.created_at,
                    collectionRevision,
                    ...(headSha ? { headSha } : {}),
                });
                sinceCheckpoint += 1;
                onProgress(`${source}: сохранено прогонов ${runs.size}, запросов ${requests}/${maxRequests}`);
                if (sinceCheckpoint >= 10) {
                    await checkpoint();
                }
            }
        }
        // Mark coverage only after every configured source and all pages have been inspected.
        archive.coverage.push(range);
        await checkpoint();
    };
    try {
        if (history.collectionRevision !== collectionRevision && (history.runs.length || history.coverage.length)) {
            onProgress(
                `${archive.workflow}: перепроверяем исторические workflows новой версией сборщика; сохранённые измерения остаются в архиве.`,
            );
        }
        const requested = fullRange(from, to);
        if (refreshDays) {
            const recent = new Date(Math.max(Date.parse(requested.from), Date.parse(to) - (refreshDays - 1) * dayMs))
                .toISOString()
                .slice(0, 10);
            for (const window of splitWindows(fullRange(recent, to))) {
                await collectRange(window);
            }
        }
        for (const gap of missingRanges(requested, archive.coverage).reverse()) {
            for (const window of splitWindows(gap)) {
                await collectRange(window);
            }
        }
        await checkpoint();
        return { archive, requests, paused: false };
    } catch (error) {
        archive.warnings = [error.message];
        await checkpoint();
        return { archive, requests, paused: error instanceof CollectionPaused, error };
    }
}
