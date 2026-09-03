// Escape, а не литерал: неразрывный пробел визуально неотличим от
// обычного, и опечатка в исходнике не ловится ни глазом, ни ревью.
export const NBSP = '\u00A0';

const PLACEHOLDER_START = '\uE000';
const PLACEHOLDER_MARK = 0xe010;
const PLACEHOLDER_END = '\uE001';

// Схема с ://, www.* и голые домены с безопасным списком TLD (не file.ts / node.js).
const URL_RE = /(?:[a-z][\w+.-]*:\/\/[^\s]+|\bwww\.[^\s]+|\b(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:com|ru|org|net|io|ai|dev|app|test)(?:\/[^\s]*)?)/gi;

const LEFT_BOUNDARY = /[\s([«„]/;
const OPENING_QUOTE = /[\s([{«„:;—–]/;
const LETTER = /[А-Яа-яЁё]/;

const urlToken = (index: number) =>
    `${PLACEHOLDER_START}${String.fromCharCode(PLACEHOLDER_MARK + index)}${PLACEHOLDER_END}`;

const peelTrailingWrap = (raw: string, before: string | undefined): { url: string; trailing: string } => {
    let url = raw;
    let trailing = '';

    while (url.length > 0) {
        const last = url[url.length - 1];
        const isBracket = last === '<' || last === '>';
        const isWrappedQuote = last === '"' && before === '"';

        if (!isBracket && !isWrappedQuote) {
            break;
        }

        trailing = `${last}${trailing}`;
        url = url.slice(0, -1);
    }

    return { url, trailing };
};

const isLeftBoundary = (char: string | undefined): boolean => char === undefined || LEFT_BOUNDARY.test(char);

const isLetter = (char: string | undefined): char is string => typeof char === 'string' && LETTER.test(char);

export type QuotesState = { text: string; depth: number; prev?: string };

/**
 * Заменяет прямые кавычки на «ёлочки» первого уровня и „лапки“ второго.
 *
 * Пары не ищутся: сторона определяется по соседу слева. Так правило переживает
 * два случая, где парность недоступна — кусок текста может быть оборван
 * разметкой и может быть недописан, пока ответ стримится.
 *
 * @param prev Последний символ предыдущего куска исходного текста.
 *   Без него кавычка в начале токена не видит соседа слева и снова открывает.
 *   В результате — последний символ этого куска, его нужно отдать в следующий вызов.
 * @param depth Сколько уровней кавычек уже открыто к началу этого куска.
 *   Для целой строки оставьте `0`. Если текст режется на токены, передайте
 *   `depth` из предыдущего вызова — иначе кусок, который начинается с `"`,
 *   снова откроет внешние «ёлочки», а не продолжит вложенность.
 *   В результате — сколько уровней осталось открыто после этого куска.
 */
export const applyQuotes = (text: string, prev?: string, depth = 0): QuotesState => {
    const nextPrev = text.length === 0 ? prev : text[text.length - 1];

    if (!text.includes('"')) {
        return { text, depth, prev: nextPrev };
    }

    let nextDepth = depth;
    let out = '';

    for (let i = 0; i < text.length; i += 1) {
        const char = text[i];

        if (char !== '"') {
            out += char;
        } else {
            const neighbor = i === 0 ? prev : text[i - 1];
            const isOpening = neighbor === undefined || OPENING_QUOTE.test(neighbor);

            if (isOpening) {
                out += nextDepth === 0 ? '«' : '„';
                nextDepth += 1;
            } else {
                nextDepth = Math.max(0, nextDepth - 1);
                out += nextDepth === 0 ? '»' : '“';
            }
        }
    }

    return { text: out, depth: nextDepth, prev: nextPrev };
};

export const quotes = (text: string, prev?: string, depth = 0): string => applyQuotes(text, prev, depth).text;

/**
 * Ставит неразрывный пробел после кириллических слов из одной-двух букв.
 * Один проход слева направо: уже поставленный NBSP становится границей для следующего слова.
 */
export const afterShortWord = (text: string): string => {
    let out = '';
    let i = 0;

    while (i < text.length) {
        const prev = out.length === 0 ? undefined : out[out.length - 1];
        let step = 1;
        let chunk = text[i];

        if (isLeftBoundary(prev)) {
            const first = text[i];
            const second = text[i + 1];
            const third = text[i + 2];

            if (isLetter(first) && isLetter(second) && third === ' ') {
                chunk = `${first}${second}${NBSP}`;
                step = 3;
            } else if (isLetter(first) && second === ' ') {
                chunk = `${first}${NBSP}`;
                step = 2;
            }
        }

        out += chunk;
        i += step;
    }

    return out;
};

/**
 * Прижимает длинное и среднее тире к предыдущему слову: оторвавшись на новую
 * строку, оно мимикрирует под начало прямой речи.
 */
export const dash = (text: string): string => {
    let out = '';
    let i = 0;

    while (i < text.length) {
        const char = text[i];

        if (char === ' ' || char === '\t') {
            let j = i;

            while (j < text.length && (text[j] === ' ' || text[j] === '\t')) {
                j += 1;
            }

            const next = text[j];

            if (next === '—' || next === '–') {
                out += `${NBSP}${next}`;
                i = j + 1;
            } else {
                out += text.slice(i, j);
                i = j;
            }
        } else {
            out += char;
            i += 1;
        }
    }

    return out;
};

/**
 * Прячет URL за плейсхолдеры на время применения правил (аналог typograf safeTags).
 * Замыкающие обёрточные скобки и кавычки в URL не входят, чтобы `"https://example.test"`
 * отдало обе кавычки правилу quotes. Кавычка из query (`?value="c"`) остаётся в URL:
 * её снимаем, только если перед ссылкой стоит такая же обёрточная `"`.
 */
export const withProtectedUrls = (apply: (text: string) => string) => (text: string): string => {
    const urls: string[] = [];
    const urlRe = new RegExp(URL_RE.source, URL_RE.flags);

    const masked = text.replace(urlRe, (raw, offset: number) => {
        const before = offset > 0 ? text[offset - 1] : undefined;
        const { url, trailing } = peelTrailingWrap(raw, before);
        const token = urlToken(urls.length);

        urls.push(url);

        return `${token}${trailing}`;
    });

    let processed = apply(masked);

    urls.forEach((url, index) => {
        processed = processed.split(urlToken(index)).join(url);
    });

    return processed;
};
