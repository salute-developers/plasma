// Escape, а не литерал: неразрывный пробел визуально неотличим от
// обычного, и опечатка в исходнике не ловится ни глазом, ни ревью.
const NBSP = '\u00A0';

const PLACEHOLDER_START = '\uE000';
const PLACEHOLDER_MARK = 0xe010;
const PLACEHOLDER_END = '\uE001';

const URL_RE = /https?:\/\/[^\s]+/gi;
const TRAILING_WRAP = /["<>]+$/;

const LEFT_BOUNDARY = /[\s([«„]/;
const LETTER = /[А-Яа-яЁёA-Za-z]/;

// Тире прижимается к предыдущему слову: оторвавшись на новую строку, оно
// мимикрирует под начало прямой речи.
const SPACED_DASH = /[ \t]+([—–])/g;

const urlToken = (index: number) =>
    `${PLACEHOLDER_START}${String.fromCharCode(PLACEHOLDER_MARK + index)}${PLACEHOLDER_END}`;

const isLeftBoundary = (char: string | undefined): boolean => char === undefined || LEFT_BOUNDARY.test(char);

const isLetter = (char: string | undefined): char is string => typeof char === 'string' && LETTER.test(char);

/**
 * Заменяет прямые кавычки на «ёлочки» первого уровня и „лапки“ второго.
 *
 * Пары не ищутся: сторона определяется по соседу слева. Так правило переживает
 * два случая, где парность недоступна — кусок текста может быть оборван
 * разметкой и может быть недописан, пока ответ стримится.
 */
export const quotes = (text: string): string => {
    if (!text.includes('"')) {
        return text;
    }

    let depth = 0;
    let out = '';

    for (let i = 0; i < text.length; i += 1) {
        const char = text[i];

        if (char !== '"') {
            out += char;
        } else {
            const prev = text[i - 1];
            const isOpening = prev === undefined || /[\s([{«„]/.test(prev);

            if (isOpening) {
                out += depth === 0 ? '«' : '„';
                depth += 1;
            } else {
                depth = Math.max(0, depth - 1);
                out += depth === 0 ? '»' : '“';
            }
        }
    }

    return out;
};

/**
 * Ставит неразрывный пробел после слов из одной-двух букв.
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
 * Прижимает длинное и среднее тире к предыдущему слову.
 */
export const dash = (text: string): string => text.replace(SPACED_DASH, `${NBSP}$1`);

/**
 * Прячет URL за плейсхолдеры на время применения правил (аналог typograf safeTags).
 * Замыкающие обёрточные кавычки/скобки в URL не входят, чтобы `"https://example.test"`
 * отдало обе кавычки правилу quotes.
 */
export const withProtectedUrls = (apply: (text: string) => string) => (text: string): string => {
    const urls: string[] = [];
    const urlRe = new RegExp(URL_RE.source, URL_RE.flags);

    const masked = text.replace(urlRe, (raw) => {
        const url = raw.replace(TRAILING_WRAP, '');
        const trailing = raw.slice(url.length);
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
