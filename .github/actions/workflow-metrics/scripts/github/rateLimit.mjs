export const number = (value) =>
    value !== null && value !== undefined && value !== '' && Number.isFinite(Number(value)) ? Number(value) : null;

export const epochDate = (value) => (number(value) !== null ? new Date(Number(value) * 1000).toISOString() : undefined);

export function readRateLimit(response) {
    return {
        limit: number(response.headers.get('x-ratelimit-limit')),
        remaining: number(response.headers.get('x-ratelimit-remaining')),
        resetAt: epochDate(response.headers.get('x-ratelimit-reset')),
        resource: response.headers.get('x-ratelimit-resource'),
    };
}

export const quotaMessage = (rate) =>
    rate.limit === null ? '' : ` Лимит GitHub: ${rate.limit} запросов/ч, осталось ${rate.remaining ?? 'неизвестно'}.`;

export function retryAfterDate(response) {
    const retry = response.headers.get('retry-after');
    if (retry !== null) {
        const seconds = number(retry);
        if (seconds !== null && seconds >= 0) {
            return new Date(Date.now() + seconds * 1000).toISOString();
        }
        if (Number.isFinite(Date.parse(retry))) {
            return new Date(retry).toISOString();
        }
    }
    return undefined;
}
