export function createGitHubFetcher({ env = process.env, fetcher = fetch } = {}) {
    const source = ['GITHUB_TOKEN', 'GH_TOKEN'].find((name) => env[name]?.trim());
    const token = source ? env[source].trim() : undefined;
    if (token && !/^[\x21-\x7e]+$/.test(token)) {
        throw new Error(`${source} содержит пробелы или недопустимые символы. Укажите сам токен без префикса Bearer.`);
    }
    return {
        source: source || null,
        fetcher: (url, options) => {
            const headers = new Headers(options?.headers);
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return fetcher(url, { ...options, headers });
        },
    };
}
