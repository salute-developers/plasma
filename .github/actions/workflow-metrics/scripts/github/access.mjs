import { requestGitHubJson } from './client.mjs';
import { number, epochDate } from './rateLimit.mjs';

export async function checkGitHubAccess(auth, { signal, onRetry, sleep } = {}) {
    const { data, rateLimit } = await requestGitHubJson('https://api.github.com/rate_limit', {
        fetcher: auth.fetcher,
        signal,
        cache: 'no-store',
        onRetry,
        sleep,
    });
    const core = data.resources?.core;
    // Headers describe the actual request and take precedence over potentially cached JSON counters.
    const limit = rateLimit.limit ?? number(core?.limit);
    const remaining = rateLimit.remaining ?? number(core?.remaining);
    const resetAt = rateLimit.resetAt ?? epochDate(core?.reset);
    if (limit === null || remaining === null || !resetAt) {
        throw new Error('GitHub вернул неполные сведения о лимите REST API (core).');
    }
    if (auth.source && limit <= 60) {
        throw new Error(
            `Токен из ${auth.source} отправлен, но GitHub сообщает лимит ${limit} запросов/ч. Авторизация не подтверждена; проверьте передачу Authorization через прокси.`,
        );
    }
    return { source: auth.source, limit, remaining, resetAt };
}
