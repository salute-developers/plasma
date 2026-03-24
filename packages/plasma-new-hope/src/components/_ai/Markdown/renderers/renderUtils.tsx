import type { Token } from 'marked';
import { createElement, ElementType, ReactNode } from 'react';

import { sanitizeHtml } from '../utils/sanitizeHtml';
import type { TokenRenderer } from '../Markdown.types';

export const renderElement = (
    key: string,
    fallback: ElementType,
    props?: Record<string, unknown>,
    children?: ReactNode,
) => createElement(fallback, { ...props, key }, children);

export const renderSanitizedHtml = (key: string, html: string, tagName: 'div' | 'span' = 'span') =>
    createElement(tagName, {
        dangerouslySetInnerHTML: { __html: sanitizeHtml(html) },
        key,
    });

export const resolveTokenNode = (
    tokenRenderer: TokenRenderer,
    token: Token,
    defaultNode: ReactNode,
    children?: ReactNode,
) => {
    const customNode = tokenRenderer?.(token, children);

    return customNode === undefined ? defaultNode : customNode;
};
