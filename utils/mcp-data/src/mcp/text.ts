export function asString(value: unknown): string {
    return typeof value === 'string' ? value : '';
}

export function sanitizeFilename(name: string): string {
    return (
        name
            .trim()
            // eslint-disable-next-line no-control-regex
            .replace(/[<>:"/\\|?*\u0000-\u001f]/g, '_')
            .replace(/\s+/g, ' ')
    );
}

export function normalizeCategory(value: string): string {
    return sanitizeFilename(value) || 'uncategorized';
}

export function uniqueFileName(baseName: string, used: Set<string>): string {
    const safeBase = sanitizeFilename(baseName) || 'untitled';
    let candidate = safeBase;
    let suffix = 2;

    while (used.has(candidate)) {
        candidate = `${safeBase}-${suffix}`;
        suffix += 1;
    }

    used.add(candidate);
    return candidate;
}

export function extractCategoryFromUrl(url: string): string {
    if (!url) {
        return '';
    }

    try {
        const parsed = new URL(url);
        const segments = parsed.pathname.split('/').filter(Boolean);
        if (segments.length >= 2) {
            return segments[segments.length - 2] ?? '';
        }
        return segments[0] ?? '';
    } catch {
        return '';
    }
}

export function cleanText(value: string): string {
    return value
        .replace(/\r\n/g, '\n')
        .replace(/\s+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

export function normalizeFullContent(value: string): string {
    return value.replace(/\r\n/g, '\n').trim();
}

/** Убирает fallback-значения из `var(--token, fallback)`, оставляя `var(--token)`. */
export function stripCssVarFallbacks(value: string): string {
    let result = '';

    for (let i = 0; i < value.length; i += 1) {
        if (value.startsWith('var(', i)) {
            let depth = 0;
            let commaIndex = -1;
            let endIndex = -1;

            for (let j = i; j < value.length; j += 1) {
                const char = value[j];

                if (char === '(') {
                    depth += 1;
                } else if (char === ')') {
                    depth -= 1;
                    if (depth === 0) {
                        endIndex = j;
                        break;
                    }
                } else if (char === ',' && depth === 1 && commaIndex === -1) {
                    commaIndex = j;
                }
            }

            if (endIndex !== -1) {
                if (commaIndex !== -1) {
                    result += `${value.slice(i, commaIndex)})`;
                } else {
                    result += value.slice(i, endIndex + 1);
                }
                i = endIndex;

                // eslint-disable-next-line no-continue
                continue;
            }
        }

        result += value[i];
    }

    return result;
}

export function escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function normalizeMarkdown(value: string): string {
    return value
        .replace(/\r\n/g, '\n')
        .replace(/([^\n])\s(#{2,6}\s+)/g, '$1\n$2')
        .replace(/([^\n])\s(```[\w-]*\n)/g, '$1\n$2');
}
