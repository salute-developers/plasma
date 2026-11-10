// Retries and their delays must run in order.
/* eslint-disable no-await-in-loop */

import { setTimeout as delay } from 'node:timers/promises';

import { CollectionPaused, GitHubApiError } from './errors.mjs';
import { readRateLimit, quotaMessage, retryAfterDate } from './rateLimit.mjs';

const apiHeaders = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };

const retryableStatuses = new Set([408, 500, 502, 503, 504]);

const retryableNetworkCodes = new Set([
    'ECONNRESET',
    'ETIMEDOUT',
    'EAI_AGAIN',
    'UND_ERR_CONNECT_TIMEOUT',
    'UND_ERR_SOCKET',
]);

const maxRetries = 4;

const waitForRetry = (milliseconds, signal) => delay(milliseconds, undefined, { signal });

async function requestGitHubJsonOnce(url, { fetcher, signal, cache }) {
    signal?.throwIfAborted();
    const response = await fetcher(url, { signal, cache, headers: apiHeaders });
    const rateLimit = readRateLimit(response);
    if (!response.ok) {
        const body = await response.json().catch(() => null);
        const detail = typeof body?.message === 'string' ? body.message.slice(0, 600) : '';
        const limited =
            response.status === 429 ||
            (response.status === 403 &&
                (rateLimit.remaining === 0 ||
                    response.headers.has('retry-after') ||
                    /rate[\s-]*limit|abuse/i.test(detail)));
        if (limited) {
            const retryAt =
                retryAfterDate(response) ||
                (rateLimit.remaining === 0 && rateLimit.resetAt) ||
                new Date(Date.now() + 60000).toISOString();
            const reason = rateLimit.remaining === 0 ? 'primary-rate-limit' : 'secondary-rate-limit';
            const secondary = reason === 'secondary-rate-limit' ? ' Вторичное ограничение частоты запросов.' : '';
            throw new CollectionPaused(
                `GitHub ограничил запросы (${response.status}).${secondary}${quotaMessage(
                    rateLimit,
                )} Повторите после ${retryAt}. Прогресс сохранён.`,
                retryAt,
                reason,
                rateLimit,
            );
        }
        let message = `GitHub API: HTTP ${response.status} для ${new URL(url).pathname}.`;
        if (response.status === 401) {
            message = 'GitHub не принял токен (HTTP 401). Проверьте токен, его срок действия и источник в окружении.';
        }
        if (response.status === 403) {
            message = 'GitHub отказал в доступе (HTTP 403). Проверьте доступ токена к репозиторию и Actions: read.';
        }
        throw new GitHubApiError(
            `${message}${detail ? ` ${detail}` : ''}${quotaMessage(rateLimit)}`,
            response.status,
            rateLimit,
            retryAfterDate(response),
        );
    }
    return { data: await response.json(), rateLimit };
}

export async function requestGitHubJson(
    url,
    { fetcher = fetch, signal, cache, beforeRequest = () => {}, onRetry = () => {}, sleep = waitForRetry } = {},
) {
    for (let retry = 0; ; retry += 1) {
        signal?.throwIfAborted();
        // Budget checks belong outside the catch: a controlled pause must never be retried.
        beforeRequest();
        try {
            return await requestGitHubJsonOnce(url, { fetcher, signal, cache });
        } catch (error) {
            signal?.throwIfAborted();
            if (error.name === 'AbortError') {
                throw error;
            }
            const network = error instanceof TypeError || retryableNetworkCodes.has(error.cause?.code || error.code);
            if (!network && !(error instanceof GitHubApiError && retryableStatuses.has(error.status))) {
                throw error;
            }
            const failure = network
                ? new GitHubApiError(`Ошибка соединения с GitHub для ${new URL(url).pathname}.`, 0)
                : error;
            if (failure.rateLimit?.remaining === 0) {
                const retryAt = failure.rateLimit.resetAt || new Date(Date.now() + 60000).toISOString();
                throw new CollectionPaused(
                    `Лимит GitHub исчерпан.${quotaMessage(
                        failure.rateLimit,
                    )} Повторите после ${retryAt}. Прогресс сохранён.`,
                    retryAt,
                    'primary-rate-limit',
                    failure.rateLimit,
                );
            }
            if (retry >= maxRetries) {
                failure.message += ` Выполнено ${
                    maxRetries + 1
                } попыток. Прогресс сохранён; повторный запуск продолжит сбор.`;
                throw failure;
            }
            const milliseconds = Math.max(
                1000 * 2 ** retry,
                failure.retryAt ? Date.parse(failure.retryAt) - Date.now() : 0,
            );
            // Do not wait silently for a long server-requested pause or retry earlier than requested.
            if (milliseconds > 30000) {
                throw new CollectionPaused(
                    `${failure.message} Повторите после ${failure.retryAt}. Прогресс сохранён.`,
                    failure.retryAt,
                    'service-unavailable',
                    failure.rateLimit,
                );
            }
            onRetry(`${failure.message} Повтор ${retry + 1}/${maxRetries} через ${Math.ceil(milliseconds / 1000)} с.`);
            await sleep(milliseconds, signal);
        }
    }
}
