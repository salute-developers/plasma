import type { Token, Tokens } from 'marked';
import React, { Fragment, ReactNode } from 'react';

import type { MarkedEngine, TokenRenderer, RenderContext } from '../Markdown.types';

import { renderCode } from './renderers';
import { renderCustomToken, renderInlineTokens } from './renderInlineTokens';
import { renderTable } from './renderTable';
import { renderElement, renderSanitizedHtml, resolveTokenNode } from './renderUtils';

export const renderBlockTokens = (
    markedEngine: MarkedEngine,
    tokenRenderer: TokenRenderer,
    tokensList: Token[] = [],
    context: RenderContext,
): ReactNode[] => {
    const content: ReactNode[] = [];

    tokensList.forEach((token, index) => {
        const key = `${context.keyPrefix}-${index}`;

        switch (token.type) {
            case 'space':
            case 'def':
                return;
            case 'paragraph':
                {
                    const children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-paragraph`);
                    const defaultNode = renderElement(key, 'p', undefined, children);
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'heading': {
                const depth = Math.min(Math.max(token.depth, 1), 6);
                const tagName = `h${depth}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
                const children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-heading`);
                const defaultNode = renderElement(key, tagName, undefined, children);

                content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                return;
            }
            case 'blockquote':
                {
                    const children = renderBlockTokens(markedEngine, tokenRenderer, token.tokens, {
                        keyPrefix: `${key}-blockquote`,
                    });
                    const defaultNode = renderElement(key, 'blockquote', undefined, children);
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'code':
                {
                    const children = token.text;
                    const defaultNode = renderCode(key, {
                        ...token,
                        children,
                        className: token.lang ? `language-${token.lang}` : undefined,
                        inline: false,
                    });
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'list': {
                const listToken = token as Tokens.List;
                const listTag = listToken.ordered ? 'ol' : 'ul';
                const start = listToken.ordered && listToken.start !== '' ? Number(listToken.start) : undefined;
                const children = listToken.items.map((item: Tokens.ListItem, itemIndex: number) => {
                    const itemChildren = renderBlockTokens(markedEngine, tokenRenderer, item.tokens, {
                        inTightListItem: !item.loose,
                        keyPrefix: `${key}-item-${itemIndex}`,
                    });
                    let childContent = itemChildren;

                    if (item.task) {
                        childContent = [
                            <input
                                checked={Boolean(item.checked)}
                                key={`${key}-item-${itemIndex}-checkbox`}
                                type="checkbox"
                                disabled
                                readOnly
                            />,
                            ' ',
                            ...itemChildren,
                        ];
                    }

                    const itemDefaultNode = renderElement(`${key}-li-${itemIndex}`, 'li', undefined, childContent);

                    return resolveTokenNode(tokenRenderer, item, itemDefaultNode, childContent);
                });
                const defaultNode = renderElement(key, listTag, start === undefined ? undefined : { start }, children);

                content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                return;
            }
            case 'hr':
                content.push(resolveTokenNode(tokenRenderer, token, renderElement(key, 'hr')));
                return;
            case 'table':
                content.push(renderTable(markedEngine, tokenRenderer, token as Tokens.Table, key));
                return;
            case 'html':
                content.push(renderSanitizedHtml(key, token.raw, token.block ? 'div' : 'span'));
                return;
            case 'text':
                if (token.tokens?.length) {
                    const textContent = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-text`);

                    if (context.inTightListItem) {
                        content.push(<Fragment key={key}>{textContent}</Fragment>);
                    } else {
                        content.push(renderElement(key, 'p', undefined, textContent));
                    }

                    return;
                }

                if (context.inTightListItem) {
                    content.push(<Fragment key={key}>{token.text}</Fragment>);
                } else {
                    content.push(renderElement(key, 'p', undefined, token.text));
                }

                return;
            default:
                {
                    const customToken = renderCustomToken(markedEngine, tokenRenderer, token, key);

                    if (customToken) {
                        content.push(customToken);
                        return;
                    }
                }

                if ('tokens' in token && Array.isArray(token.tokens)) {
                    content.push(
                        ...renderBlockTokens(markedEngine, tokenRenderer, token.tokens, {
                            ...context,
                            keyPrefix: `${key}-fallback`,
                        }),
                    );
                }
        }
    });

    return content;
};
