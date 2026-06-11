const SAFE_URL_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:']);

export const sanitizeUrl = (url?: string): string | undefined => {
    if (!url) {
        return undefined;
    }

    const trimmedUrl = url.trim();

    if (
        trimmedUrl.startsWith('#') ||
        (trimmedUrl.startsWith('/') && !trimmedUrl.startsWith('//')) ||
        trimmedUrl.startsWith('./') ||
        trimmedUrl.startsWith('../')
    ) {
        return trimmedUrl;
    }

    try {
        const baseUrl = typeof window === 'undefined' ? 'http://localhost' : window.location.href;
        const parsedUrl = new URL(trimmedUrl, baseUrl);

        return SAFE_URL_PROTOCOLS.has(parsedUrl.protocol) ? trimmedUrl : undefined;
    } catch {
        return undefined;
    }
};
