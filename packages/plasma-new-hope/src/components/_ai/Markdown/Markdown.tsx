import React, { forwardRef, useMemo } from 'react';
import { Marked } from 'marked';
import type { RootProps } from 'src/engines';

import { normalizeIncompleteMarkdown, renderBlockTokens } from './utils';
import type { MarkdownProps, MarkdownRootProps } from './Markdown.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './Markdown.styles';

export const markdownRoot = (Root: RootProps<HTMLDivElement, MarkdownRootProps>) =>
    forwardRef<HTMLDivElement, MarkdownProps>(
        (
            { content = '', tokenRenderer, markedOptions, shouldParseIncompleteMarkdown = true, size, view, ...rest },
            ref,
        ) => {
            const normalizedContent = useMemo(
                () => normalizeIncompleteMarkdown(content, shouldParseIncompleteMarkdown),
                [content, shouldParseIncompleteMarkdown],
            );
            const marked = useMemo(() => new Marked({ gfm: true }, ...(markedOptions ? [markedOptions] : [])), [
                markedOptions,
            ]);
            const tokenList = useMemo(() => marked.lexer(normalizedContent), [marked, normalizedContent]);

            const renderedContent = useMemo(
                () =>
                    renderBlockTokens(marked, tokenRenderer, tokenList, {
                        keyPrefix: 'markdown',
                    }),
                [marked, tokenRenderer, tokenList],
            );

            return (
                <Root ref={ref} size={size} view={view} {...rest}>
                    {renderedContent}
                </Root>
            );
        },
    );

export const markdownConfig = {
    name: 'Markdown',
    tag: 'div',
    layout: markdownRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
