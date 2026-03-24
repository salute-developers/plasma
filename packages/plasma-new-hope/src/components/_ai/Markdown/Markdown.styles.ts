import styled, { css } from 'styled-components';

import { tokens } from './Markdown.tokens';

export const base = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: var(${tokens.textColor});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
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
    hr,
    table {
        margin: 0 0 var(${tokens.blockGap});
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 600;
    }

    h1 {
        font-family: var(--plasma-typo-h1-font-family);
        font-size: var(--plasma-typo-h1-font-size);
        line-height: var(--plasma-typo-h1-line-height);
        margin: 0.5rem 0 0.75rem;
    }

    h2 {
        font-family: var(--plasma-typo-h2-font-family);
        font-size: var(--plasma-typo-h2-font-size);
        line-height: var(--plasma-typo-h2-line-height);
        margin: 0.5rem 0 0.75rem;
    }

    h3 {
        font-family: var(--plasma-typo-h3-font-family);
        font-size: var(--plasma-typo-h3-font-size);
        line-height: var(--plasma-typo-h3-line-height);
        margin: 0.5rem 0 0.75rem;
    }

    h4 {
        font-family: var(--plasma-typo-h4-font-family);
        font-size: var(--plasma-typo-h4-font-size);
        line-height: var(--plasma-typo-h4-line-height);
        margin: 0.5rem 0;
    }

    h5 {
        font-family: var(--plasma-typo-h5-font-family);
        font-size: var(--plasma-typo-h5-font-size);
        line-height: var(--plasma-typo-h5-line-height);
        margin: 0.5rem 0;
    }

    h6 {
        font-family: var(--plasma-typo-h6-font-family);
        font-size: var(--plasma-typo-h6-font-size);
        line-height: var(--plasma-typo-h6-line-height);
        margin: 0.375rem 0;
    }

    ul {
        list-style-type: disc;
    }

    ul,
    ol {
        padding-left: 1.25em;
    }

    ul ul,
    ol ol {
        margin-bottom: 0;
    }

    li {
        padding: 0.125rem 0;
    }

    input[type='checkbox'] {
        position: relative;
        appearance: none;
        margin: 0;
        width: var(${tokens.checkboxSize});
        height: var(${tokens.checkboxSize});
        vertical-align: middle;
        border-radius: var(${tokens.checkboxBorderRadius});
        border: 0.125rem solid var(--text-secondary);
    }

    input[type='checkbox']:checked {
        background: var(--text-accent);
        border-color: var(--text-accent);
    }

    input[type='checkbox']:checked::after {
        content: '';
        position: absolute;

        width: 25%;
        height: 50%;

        border: solid var(--on-dark-text-primary);
        border-width: 0 0.125rem 0.125rem 0;

        left: 50%;
        top: 45%;

        transform: translate(-50%, -50%) rotate(45deg);
    }

    a {
        color: var(${tokens.linkColor});
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    strong {
        font-weight: 600;
    }

    blockquote {
        position: relative;
        padding: 0 0 0 0.75rem;
    }

    blockquote:before {
        content: '';
        width: 0.125rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.0625rem;
        background: var(--outline-solid-primary);
    }

    blockquote p:last-child {
        margin-bottom: 0;
    }

    hr {
        width: 100%;
        height: 0.0625rem;
        border: 0;
        background: var(--surface-transparent-tertiary);
    }

    table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: var(--plasma-typo-body-s-font-size);
        line-height: var(--plasma-typo-body-s-line-height);
    }

    th,
    td {
        padding: 0.5rem;
        border-bottom: 0.0625rem solid var(--outline-solid-primary);
        text-align: left;
        vertical-align: top;
    }

    th {
        font-weight: 600;
    }

    tbody tr:last-child td {
        border-bottom: 0;
    }

    code,
    pre {
        font-family: 'SB Sans Text Mono', sans-serif;
    }
`;

export const TableScroll = styled.div`
    overflow-x: auto;
`;

export const InlineCode = styled.code`
    display: inline-block;
    padding: var(${tokens.codeInlineBlockPadding});
    border-radius: var(${tokens.codeInlineBlockBorderRadius});
    background: var(--surface-transparent-secondary);
    vertical-align: baseline;
`;

export const CodeBlock = styled.div`
    overflow: hidden;
    margin-bottom: var(${tokens.blockGap}, 1rem);
    border-radius: var(${tokens.codeBlockBorderRadius}, 1rem);
    background: var(--surface-transparent-primary);
`;

export const CodeBlockHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: var(${tokens.codeBlockHeaderPadding}, 0.625rem 0.875rem);
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

export const StyledInlineImage = styled.img`
    border-radius: 0.5rem;
    display: inline;
    margin-inline-end: 0.5rem;
    vertical-align: middle;
`;

export const StyledBlockImage = styled.img`
    border-radius: 0.5rem;
    display: block;
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
