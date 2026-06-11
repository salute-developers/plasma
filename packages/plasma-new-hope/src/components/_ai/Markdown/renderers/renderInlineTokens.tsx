import type { Token, Tokens } from 'marked';
import React, { Fragment, ReactNode } from 'react';

import type { MarkedEngine, TokenRenderer } from '../Markdown.types';

import { ImageRenderer, LinkRenderer, renderCode } from './renderers';
import { renderElement, renderSanitizedHtml, resolveTokenNode } from './renderUtils';

export const renderCustomToken = (
    markedEngine: MarkedEngine,
    tokenRenderer: TokenRenderer,
    token: Token,
    key: string,
    inline?: boolean,
) => {
    const extensionRenderer = markedEngine.defaults.extensions?.renderers?.[token.type];
    let children: ReactNode;

    if ('tokens' in token && Array.isArray(token.tokens)) {
        children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-custom`);
    } else if ('text' in token && typeof token.text === 'string') {
        children = token.text;
    }

    const customNode = tokenRenderer?.(token, children);

    if (customNode !== undefined) {
        return customNode;
    }

    if (typeof extensionRenderer === 'function') {
        const parser = new markedEngine.Parser(markedEngine.defaults);
        const html = extensionRenderer.call({ parser }, token as Tokens.Generic);

        if (html !== false && html != null) {
            const tagName = !inline && 'block' in token && token.block ? 'div' : 'span';

            return renderSanitizedHtml(key, String(html), tagName);
        }
    }

    return null;
};

export const renderInlineTokens = (
    markedEngine: MarkedEngine,
    tokenRenderer: TokenRenderer,
    tokensList: Token[] = [],
    keyPrefix: string,
): ReactNode[] => {
    const content: ReactNode[] = [];

    tokensList.forEach((token, index) => {
        const key = `${keyPrefix}-${index}`;

        switch (token.type) {
            case 'strong':
                {
                    const children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-strong`);
                    const defaultNode = renderElement(key, 'strong', undefined, children);
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'em':
                {
                    const children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-em`);
                    const defaultNode = renderElement(key, 'em', undefined, children);
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'del':
                {
                    const children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-del`);
                    const defaultNode = renderElement(key, 'del', undefined, children);
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'codespan':
                {
                    const children = token.text;
                    const defaultNode = renderCode(key, {
                        ...token,
                        children,
                        inline: true,
                    });
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'br':
                content.push(resolveTokenNode(tokenRenderer, token, renderElement(key, 'br')));
                return;
            case 'link':
                {
                    const children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-link`);
                    const defaultNode = renderElement(
                        key,
                        LinkRenderer,
                        {
                            ...token,
                            href: token.href,
                            title: token.title || undefined,
                        },
                        children,
                    );
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'image':
                content.push(
                    resolveTokenNode(
                        tokenRenderer,
                        token,
                        renderElement(key, ImageRenderer, {
                            ...token,
                            alt: token.text,
                            src: token.href,
                            title: token.title || undefined,
                        }),
                    ),
                );
                return;
            case 'text':
                if (token.tokens?.length) {
                    content.push(
                        <Fragment key={key}>
                            {renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-text`)}
                        </Fragment>,
                    );
                    return;
                }

                content.push(token.text);
                return;
            case 'escape':
                content.push(token.text);
                return;
            case 'html':
                content.push(renderSanitizedHtml(key, token.raw, token.block ? 'div' : 'span'));
                return;
            default:
                {
                    const customToken = renderCustomToken(markedEngine, tokenRenderer, token, key, true);

                    if (customToken) {
                        content.push(customToken);
                        return;
                    }
                }

                if ('tokens' in token && Array.isArray(token.tokens)) {
                    content.push(
                        <Fragment key={key}>
                            {renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-fallback`)}
                        </Fragment>,
                    );
                    return;
                }

                if ('text' in token && typeof token.text === 'string') {
                    content.push(token.text);
                }
        }
    });

    return content;
};
