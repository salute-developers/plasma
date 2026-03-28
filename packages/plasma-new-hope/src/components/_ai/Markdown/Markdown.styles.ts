import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { tokens } from './Markdown.tokens';

export const base = css`
    position: relative;
    box-sizing: border-box;
    width: 100%;

    color: var(${tokens.textColor}, var(--text-primary));
    font-family: var(${tokens.bodyFontFamily}, var(--plasma-typo-body-m-font-family));
    font-size: var(${tokens.bodyFontSize}, var(--plasma-typo-body-m-font-size));
    font-style: var(${tokens.bodyFontStyle}, var(--plasma-typo-body-m-font-style));
    font-weight: var(${tokens.bodyFontWeight}, var(--plasma-typo-body-m-font-weight));
    letter-spacing: var(${tokens.bodyLetterSpacing}, var(--plasma-typo-body-m-letter-spacing));
    line-height: var(${tokens.bodyLineHeight}, var(--plasma-typo-body-m-line-height));
    word-break: break-word;

    & > * {
        box-sizing: border-box;
        min-width: 0;
    }

    & > :first-child {
        margin-top: 0;
    }

    & > :last-child {
        margin-bottom: 0;
    }

    p,
    ul,
    ol,
    blockquote,
    hr {
        margin: 0 0 var(${tokens.blockGap}, 1rem);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: calc(var(${tokens.blockGap}, 1rem) * 1.5) 0 calc(var(${tokens.blockGap}, 1rem) * 0.75);
        color: var(${tokens.headingColor}, var(--text-primary));
        font-weight: 600;
        letter-spacing: -0.02em;
        line-height: 1.15;
    }

    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1.65em;
    }

    h3 {
        font-size: 1.35em;
    }

    h4 {
        font-size: 1.15em;
    }

    h5,
    h6 {
        font-size: 1em;
    }

    ul,
    ol {
        padding-left: 1.25em;
    }

    li + li {
        margin-top: var(${tokens.nestedGap}, 0.375rem);
    }

    li > ul,
    li > ol {
        margin-top: 0.5rem;
        margin-bottom: 0;
    }

    a {
        color: var(${tokens.linkColor}, var(--text-accent));
        text-decoration: none;
        box-shadow: inset 0 -1px 0 currentColor;
        transition: color 0.15s ease, box-shadow 0.15s ease;
    }

    a:hover {
        color: var(${tokens.linkHoverColor}, var(--text-accent));
        box-shadow: inset 0 -2px 0 currentColor;
    }

    strong {
        font-weight: 600;
    }

    blockquote {
        padding: var(${tokens.blockquotePadding}, 1rem 1.125rem);
        border-radius: var(${tokens.blockquoteBorderRadius}, 1rem);
        border-inline-start: 0.1875rem solid var(${tokens.blockquoteBorderColor}, var(--text-accent));
        background: var(${tokens.blockquoteBackgroundColor}, var(--surface-transparent-secondary));
        color: var(${tokens.blockquoteTextColor}, var(--text-primary));
    }

    hr {
        height: 1px;
        border: 0;
        background: var(${tokens.hrColor}, var(--surface-transparent-secondary));
    }

    table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        background: var(${tokens.tableCellBackgroundColor}, transparent);
    }

    th,
    td {
        padding: var(${tokens.tableCellPadding}, 0.75rem 0.875rem);
        border-bottom: 1px solid var(${tokens.tableBorderColor}, var(--surface-transparent-secondary));
        text-align: left;
        vertical-align: top;
    }

    th {
        background: var(${tokens.tableHeaderBackgroundColor}, var(--surface-transparent-secondary));
        color: var(${tokens.headingColor}, var(--text-primary));
        font-weight: 600;
    }

    tbody tr:last-child td {
        border-bottom: 0;
    }

    code,
    pre {
        font-size: var(${tokens.codeFontSize}, 0.95em);
        line-height: var(${tokens.codeFontLineHeight}, 1.65);
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    }

    input[type='checkbox'] {
        accent-color: var(${tokens.linkColor}, var(--text-accent));
        margin-inline-end: 0.5rem;
    }
`;

export const TableScroll = styled.div`
    overflow-x: auto;
    margin-bottom: var(${tokens.blockGap}, 1rem);
    border: 1px solid var(${tokens.tableBorderColor}, var(--surface-transparent-secondary));
    border-radius: var(${tokens.codeBlockBorderRadius}, 1rem);
`;

export const InlineCode = styled.code`
    display: inline-block;
    padding: var(${tokens.inlineCodePadding}, 0.125rem 0.375rem);
    border-radius: var(${tokens.inlineCodeBorderRadius}, 0.5rem);
    border: 1px solid var(${tokens.inlineCodeBorderColor}, var(--surface-transparent-secondary));
    background: var(${tokens.inlineCodeBackgroundColor}, var(--surface-transparent-secondary));
    color: var(${tokens.inlineCodeColor}, var(--text-primary));
    vertical-align: baseline;
`;

export const CodeBlock = styled.div`
    overflow: hidden;
    margin-bottom: var(${tokens.blockGap}, 1rem);
    border: 1px solid var(${tokens.codeBlockBorderColor}, var(--surface-transparent-secondary));
    border-radius: var(${tokens.codeBlockBorderRadius}, 1rem);
    background: var(
        ${tokens.codeBlockBackgroundColor},
        linear-gradient(180deg, rgba(11, 117, 106, 0.08) 0%, rgba(11, 117, 106, 0.03) 100%),
        var(--surface-transparent-secondary)
    );
`;

export const CodeBlockHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: var(${tokens.codeBlockHeaderPadding}, 0.625rem 0.875rem);
    border-bottom: 1px solid var(${tokens.codeBlockBorderColor}, var(--surface-transparent-secondary));
    background: var(${tokens.codeBlockHeaderBackgroundColor}, rgba(11, 117, 106, 0.08));
`;

export const CodeLanguage = styled.span`
    color: var(${tokens.codeBlockLanguageColor}, var(--text-secondary));
    font-size: 0.75em;
    font-weight: 600;
    letter-spacing: 0.08em;
    line-height: 1;
    text-transform: uppercase;
`;

export const CodeBlockBody = styled.div`
    overflow-x: auto;
`;

export const StyledImage = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    border: 1px solid var(${tokens.imageBorderColor}, var(--surface-transparent-secondary));
    border-radius: calc(var(${tokens.codeBlockBorderRadius}, 1rem) - 0.125rem);
    background: var(${tokens.imageBackgroundColor}, var(--surface-transparent-secondary));
`;

export const syntaxTheme = {
    'pre[class*="language-"]': {
        background: 'transparent',
        color: '#223042',
        margin: 0,
        padding: 0,
    },
    'code[class*="language-"]': {
        background: 'transparent',
        color: '#223042',
    },
    comment: {
        color: '#8a94a4',
        fontStyle: 'italic',
    },
    punctuation: {
        color: '#62707f',
    },
    property: {
        color: '#0f766e',
    },
    tag: {
        color: '#0f766e',
    },
    boolean: {
        color: '#7c3aed',
    },
    number: {
        color: '#7c3aed',
    },
    constant: {
        color: '#7c3aed',
    },
    symbol: {
        color: '#c2410c',
    },
    string: {
        color: '#b45309',
    },
    char: {
        color: '#b45309',
    },
    selector: {
        color: '#0f766e',
    },
    attrName: {
        color: '#0f766e',
    },
    inserted: {
        color: '#15803d',
    },
    operator: {
        color: '#223042',
    },
    entity: {
        color: '#1d4ed8',
    },
    url: {
        color: '#1d4ed8',
    },
    keyword: {
        color: '#2563eb',
    },
    atrule: {
        color: '#2563eb',
    },
    function: {
        color: '#0f172a',
    },
    deleted: {
        color: '#dc2626',
    },
    regex: {
        color: '#d97706',
    },
    variable: {
        color: '#a21caf',
    },
    builtin: {
        color: '#2563eb',
    },
    className: {
        color: '#c2410c',
    },
} as const;
