// Update workflow archives sequentially with one shared request budget.
/* eslint-disable no-await-in-loop */

import { resolve } from 'node:path';

import { formatDateTime, formatMessageDates, validateRange, workflows, yearsAgo } from '../shared/model.mjs';
import { archiveDirectories } from '../shared/schema.mjs';
import { defaultArchiveDirectory } from '../shared/paths.mjs';
import { collectArchive } from '../collection/collector.mjs';
import { openArchive, publishArchive } from '../archive/index.mjs';
import { checkGitHubAccess, CollectionPaused, createGitHubFetcher } from '../github/index.mjs';

/** Validate API access before opening archives, then checkpoint each selected workflow. */
export async function collectMetrics(values) {
    const from = values.from || yearsAgo(values.to);

    validateRange(from, values.to);

    const selected = values.workflow === 'all' ? Object.keys(workflows) : [values.workflow];

    const maxRequests = Number(values['max-requests']);

    const refreshDays = Number(values['refresh-days']);

    if (
        selected.some((workflow) => !Object.hasOwn(workflows, workflow)) ||
        !Number.isSafeInteger(maxRequests) ||
        maxRequests < selected.length ||
        !Number.isSafeInteger(refreshDays) ||
        refreshDays < 0
    ) {
        throw new Error('Проверьте --workflow, --refresh-days и --max-requests (не меньше числа архивов).');
    }

    const auth = createGitHubFetcher();

    console.error(`Источник токена: ${auth.source || 'не задан (запросы без авторизации)'}.`);

    if (values['require-token'] && !auth.source) {
        throw new Error(
            'Не найден непустой GITHUB_TOKEN или GH_TOKEN в окружении этого процесса. Экспортируйте токен в том же терминале, где запускаете npm.',
        );
    }

    const access = await checkGitHubAccess(auth, {
        onRetry: (message) => console.error(formatMessageDates(message)),
    });

    console.error(
        `GitHub REST API (core): лимит ${access.limit} запросов/ч, осталось ${
            access.remaining
        }. Сброс: ${formatDateTime(access.resetAt)}.`,
    );

    if (values['check-auth']) {
        return;
    }

    if (access.remaining === 0) {
        throw new CollectionPaused(
            `Лимит GitHub исчерпан. Повторите после ${access.resetAt}.`,
            access.resetAt,
            'primary-rate-limit',
            access,
        );
    }

    console.error(
        `Бюджет сборщика: ${maxRequests} запросов, по ${Math.floor(maxRequests / selected.length)} на архив.`,
    );

    const directory = values['output-dir'] ? resolve(values['output-dir']) : defaultArchiveDirectory;

    const entries = [];

    for (const workflow of selected) {
        const path = resolve(directory, 'v3', archiveDirectories[workflow]);
        const archive = await openArchive(path, workflow, from, values.to);
        entries.push({ path, archive });
    }

    const controller = new AbortController();

    const abort = () => controller.abort();

    process.once('SIGINT', abort);

    process.once('SIGTERM', abort);

    try {
        for (const { path, archive } of entries) {
            const result = await collectArchive(archive, {
                from: values.from || (archive.from < from ? archive.from : from),
                to: values.to,
                refreshDays,
                maxRequests: Math.floor(maxRequests / selected.length),
                signal: controller.signal,
                onProgress: (message) => console.error(formatMessageDates(message)),
                onCheckpoint: (data, changes) => publishArchive(path, data, changes),
                fetcher: auth.fetcher,
            });
            console.log(`${path}: ${result.archive.runs.length} прогонов, ${result.archive.measurements.length} jobs.`);
            if (result.error) {
                console.error(formatMessageDates(result.error.message));
                const code = result.paused ? 2 : 1;
                process.exitCode = process.exitCode === 1 ? 1 : code;
                if (result.error.stopAll) {
                    break;
                }
            }
            if (controller.signal.aborted) {
                break;
            }
        }
    } finally {
        process.removeListener('SIGINT', abort);
        process.removeListener('SIGTERM', abort);
    }
}
