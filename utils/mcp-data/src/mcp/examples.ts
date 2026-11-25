import type { ComponentOutputFile } from './schemas.ts';
import { cleanText, normalizeMarkdown } from './text.ts';

function nearestHeading(markdown: string, offset: number): string {
    const before = markdown.slice(0, offset);
    const headings = before.match(/^#{2,6}\s+.+$/gm);
    if (!headings || headings.length === 0) {
        return '';
    }

    const last = headings[headings.length - 1] ?? '';
    return last.replace(/^#{2,6}\s+/, '').trim();
}

function compactTitle(rawTitle: string, fallbackIndex: number): string {
    const cleaned = cleanText(rawTitle).replace(/`/g, '');
    if (!cleaned) {
        return `Example ${fallbackIndex}`;
    }

    const firstTwoWords = cleaned.split(/\s+/).slice(0, 2).join(' ');
    if (firstTwoWords) {
        const repeatedAt = cleaned.toLowerCase().indexOf(firstTwoWords.toLowerCase(), firstTwoWords.length + 1);
        if (repeatedAt > 0) {
            return cleaned.slice(0, repeatedAt).trim();
        }
    }

    return cleaned.split(':')[0].trim() || `Example ${fallbackIndex}`;
}

/** Блоки кода из раздела «Примеры» (или со всей страницы, если раздела нет) с заголовком ближайшей секции. */
export function extractExamples(pageContent: string): ComponentOutputFile['examples'] {
    const normalized = normalizeMarkdown(pageContent);
    const examplesStart = normalized.search(/^##\s*Примеры\b/im);
    const source = examplesStart >= 0 ? normalized.slice(examplesStart) : normalized;

    const regex = /```[\t ]*([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/g;
    const examples: ComponentOutputFile['examples'] = [];
    let count = 1;

    Array.from(source.matchAll(regex)).forEach((match) => {
        const snippet = cleanText(match[2] ?? '');
        if (!snippet) {
            return;
        }

        const headingTitle = nearestHeading(source, match.index ?? 0);
        const title = compactTitle(headingTitle, count);
        count += 1;

        examples.push({
            title,
            snippet,
        });
    });

    return examples;
}
