import type { Token, Tokens } from 'marked';
import React, { createElement, ElementType, Fragment, ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tokens } from 'src/components/_ai/Markdown/Markdown.tokens';

import type { MarkedEngine, MarkdownProps } from '../Markdown.types';
import {
    CodeBlock,
    CodeBlockBody,
    CodeBlockHeader,
    CodeLanguage,
    InlineCode,
    StyledImage,
    TableScroll,
    syntaxTheme,
} from '../Markdown.styles';

import { sanitizeHtml } from './sanitizeHtml';

type TokenRenderer = MarkdownProps['tokenRenderer'];
type CodeRendererProps = {
    children?: ReactNode;
    className?: string;
    inline?: boolean;
    [key: string]: unknown;
};
type RenderContext = {
    inTightListItem?: boolean;
    keyPrefix: string;
};

const getCodeLanguage = (className?: string) => {
    if (!className) {
        return undefined;
    }

    const match = className.match(/(?:lang(?:uage)?-)([a-z0-9+#.-]+)/i);

    return match && match[1] ? match[1].toLowerCase() : undefined;
};
const renderCode = (key: string, props: CodeRendererProps) => renderElement(key, CodeRenderer, props, props.children);
const renderElement = (key: string, fallback: ElementType, props?: Record<string, unknown>, children?: ReactNode) =>
    createElement(fallback, { ...props, key }, children);
const asRendererProps = (value: unknown) => value as Record<string, unknown>;
const renderSanitizedHtml = (key: string, html: string, tagName: 'div' | 'span' = 'span') =>
    createElement(tagName, {
        dangerouslySetInnerHTML: { __html: sanitizeHtml(html) },
        key,
    });
const resolveTokenNode = (tokenRenderer: TokenRenderer, token: Token, defaultNode: ReactNode, children?: ReactNode) => {
    const customNode = tokenRenderer?.(token, children);
    return customNode === undefined ? defaultNode : customNode;
};
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

const CodeRenderer = ({ children, className, inline, ...rest }: CodeRendererProps) => {
    const value = String(children || '').replace(/\n$/, '');

    if (inline) {
        return (
            <InlineCode className={className} {...rest}>
                {children}
            </InlineCode>
        );
    }

    const language = getCodeLanguage(className) || 'text';

    return (
        <CodeBlock>
            <CodeBlockHeader>
                <CodeLanguage>{language}</CodeLanguage>
            </CodeBlockHeader>
            <CodeBlockBody>
                <SyntaxHighlighter
                    PreTag="div"
                    codeTagProps={{
                        style: {
                            fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
                        },
                    }}
                    customStyle={{
                        margin: 0,
                        padding: `var(${tokens.codeBlockPadding}, 1rem 1.125rem)`,
                        background: 'transparent',
                        fontSize: `var(${tokens.codeFontSize}, 0.95em)`,
                        lineHeight: `var(${tokens.codeFontLineHeight}, 1.65)`,
                    }}
                    language={language}
                    style={syntaxTheme as never}
                    wrapLongLines
                >
                    {value}
                </SyntaxHighlighter>
            </CodeBlockBody>
        </CodeBlock>
    );
};

const ImageRenderer = ({ alt, src, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <StyledImage alt={alt || ''} loading="lazy" src={src} {...rest} />
);

const LinkRenderer = ({ href, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = typeof href === 'string' && /^https?:\/\//.test(href);

    return (
        <a
            href={href}
            rel={isExternal ? 'noreferrer noopener' : undefined}
            target={isExternal ? '_blank' : undefined}
            {...rest}
        >
            {children}
        </a>
    );
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
                    const defaultNode = renderElement(key, 'strong', asRendererProps(token), children);
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'em':
                {
                    const children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-em`);
                    const defaultNode = renderElement(key, 'em', asRendererProps(token), children);
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'del':
                {
                    const children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-del`);
                    const defaultNode = renderElement(key, 'del', asRendererProps(token), children);
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
                content.push(resolveTokenNode(tokenRenderer, token, renderElement(key, 'br', asRendererProps(token))));
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

const TableRenderer = ({ children }: { children?: ReactNode }) => (
    <TableScroll>
        <table>{children}</table>
    </TableScroll>
);

export const renderTable = (
    markedEngine: MarkedEngine,
    tokenRenderer: MarkdownProps['tokenRenderer'],
    token: Tokens.Table,
    key: string,
) => {
    const headerCells = token.header.map((cell, index) =>
        renderElement(
            `${key}-th-${index}`,
            'th',
            {
                style: {
                    textAlign: cell.align || undefined,
                },
            },
            renderInlineTokens(markedEngine, tokenRenderer, cell.tokens, `${key}-th-${index}-content`),
        ),
    );

    const bodyRows = token.rows.map((row, rowIndex) =>
        renderElement(
            `${key}-tr-${rowIndex}`,
            'tr',
            undefined,
            row.map((cell, cellIndex) =>
                renderElement(
                    `${key}-td-${rowIndex}-${cellIndex}`,
                    'td',
                    {
                        style: {
                            textAlign: cell.align || undefined,
                        },
                    },
                    renderInlineTokens(
                        markedEngine,
                        tokenRenderer,
                        cell.tokens,
                        `${key}-td-${rowIndex}-${cellIndex}-content`,
                    ),
                ),
            ),
        ),
    );

    const children = [
        renderElement(
            `${key}-thead`,
            'thead',
            undefined,
            renderElement(`${key}-thead-row`, 'tr', undefined, headerCells),
        ),
        renderElement(`${key}-tbody`, 'tbody', undefined, bodyRows),
    ];
    const defaultNode = renderElement(key, TableRenderer, asRendererProps(token), children);

    return resolveTokenNode(tokenRenderer, token, defaultNode, children);
};

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
                    const defaultNode = renderElement(key, 'p', asRendererProps(token), children);
                    content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                }
                return;
            case 'heading': {
                const depth = Math.min(Math.max(token.depth, 1), 6);
                const tagName = `h${depth}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
                const children = renderInlineTokens(markedEngine, tokenRenderer, token.tokens, `${key}-heading`);
                const defaultNode = renderElement(key, tagName, asRendererProps(token), children);

                content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                return;
            }
            case 'blockquote':
                {
                    const children = renderBlockTokens(markedEngine, tokenRenderer, token.tokens, {
                        keyPrefix: `${key}-blockquote`,
                    });
                    const defaultNode = renderElement(key, 'blockquote', asRendererProps(token), children);
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
                                disabled
                                key={`${key}-item-${itemIndex}-checkbox`}
                                readOnly
                                type="checkbox"
                            />,
                            ' ',
                            ...itemChildren,
                        ];
                    }

                    const itemDefaultNode = renderElement(
                        `${key}-li-${itemIndex}`,
                        'li',
                        asRendererProps(item),
                        childContent,
                    );

                    return resolveTokenNode(tokenRenderer, item, itemDefaultNode, childContent);
                });
                const defaultNode = renderElement(key, listTag, { ...listToken, start }, children);

                content.push(resolveTokenNode(tokenRenderer, token, defaultNode, children));
                return;
            }
            case 'hr':
                content.push(resolveTokenNode(tokenRenderer, token, renderElement(key, 'hr', asRendererProps(token))));
                return;
            case 'table':
                content.push(renderTable(markedEngine, tokenRenderer, token as Tokens.Table, key));
                return;
            case 'html':
                content.push(<Fragment key={key}>{token.raw}</Fragment>);
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
