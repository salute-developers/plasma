import { PROPS_MARKER_REGEX } from '../propsMarker.ts';

import { cleanText, escapeRegExp, normalizeMarkdown } from './text.ts';

/** Первое предложение (до 300 символов) текста страницы после заголовка и до таблицы props. */
export function extractSummary(pageContent: string, headingText: string): string {
    const normalized = normalizeMarkdown(pageContent);
    const heading = headingText.trim();
    const headingRegex = heading ? new RegExp(`^#\\s+${escapeRegExp(heading)}\\s*`, 'i') : /^#\s+\S+\s*/;
    const afterHeading = normalized.replace(headingRegex, '').trim();
    const beforeProps = afterHeading.split(PROPS_MARKER_REGEX)[0] ?? afterHeading;
    const withoutBlocks = beforeProps
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/^#{1,6}\s+.*$/gm, ' ')
        .replace(/:::[\s\S]*?:::/g, ' ')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\s+/g, ' ')
        .trim();
    const sentence = withoutBlocks.match(/^(.{1,300}?[.!?])(?:\s|$)/u)?.[1];
    const summary = sentence ?? withoutBlocks.slice(0, 300);
    return cleanText(summary);
}
