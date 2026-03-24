import React, { ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { tokens } from '../Markdown.tokens';
import {
    CodeBlock,
    CodeBlockBody,
    CodeBlockHeader,
    CodeLanguage,
    InlineCode,
    StyledBlockImage,
    StyledInlineImage,
    TableScroll,
    syntaxTheme,
} from '../Markdown.styles';
import { sanitizeUrl } from '../utils/sanitizeUrl';

import { renderElement } from './renderUtils';

type CodeRendererProps = {
    [key: string]: unknown;
    children?: ReactNode;
    className?: string;
    inline?: boolean;
};

type ImageRendererProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    imageDisplay?: 'inline' | 'block';
};

const getCodeLanguage = (className?: string) => {
    if (!className) {
        return undefined;
    }

    const match = className.match(/(?:lang(?:uage)?-)([a-z0-9+#.-]+)/i);

    return match && match[1] ? match[1].toLowerCase() : undefined;
};

const CodeRenderer = ({ children, className, inline }: CodeRendererProps) => {
    const value = String(children || '').replace(/\n$/, '');

    if (inline) {
        return <InlineCode className={className}>{children}</InlineCode>;
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

export const renderCode = (key: string, props: CodeRendererProps) =>
    renderElement(key, CodeRenderer, props, props.children);

export const ImageRenderer = ({ alt, imageDisplay = 'inline', src, title }: ImageRendererProps) => {
    const sanitizedSrc = sanitizeUrl(src);

    if (!sanitizedSrc) {
        return null;
    }

    const Image = imageDisplay === 'block' ? StyledBlockImage : StyledInlineImage;

    return <Image alt={alt || ''} loading="lazy" src={sanitizedSrc} title={title} />;
};

export const LinkRenderer = ({ href, children, title }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const sanitizedHref = sanitizeUrl(href);
    const isExternal = typeof sanitizedHref === 'string' && /^https?:\/\//.test(sanitizedHref);

    return (
        <a
            href={sanitizedHref}
            rel={isExternal ? 'noreferrer noopener' : undefined}
            target={isExternal ? '_blank' : undefined}
            title={title}
        >
            {children}
        </a>
    );
};

export const TableRenderer = ({ children }: { children?: ReactNode }) => (
    <TableScroll>
        <table>{children}</table>
    </TableScroll>
);
