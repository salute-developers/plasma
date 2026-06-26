import styled, { css } from 'styled-components';
import { addScrollbar } from 'src/mixins';

import { classes, tokens } from './CodeArea.tokens';

export const base = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: var(${tokens.wrapperGap});
    padding: var(${tokens.wrapperPadding});
    border-radius: var(${tokens.wrapperBorderRadius});
    background: var(${tokens.wrapperBackgroundColor});
    color: var(${tokens.codeColor});
`;

export const syntaxTheme = {
    'code[class*="language-"]': {
        color: `var(${tokens.codeColor})`,
        fontFamily: `var(${tokens.fontFamily})`,
        fontSize: `var(${tokens.fontSize})`,
        fontStyle: `var(${tokens.fontStyle})`,
        fontWeight: `var(${tokens.fontWeight})`,
        letterSpacing: `var(${tokens.letterSpacing})`,
        lineHeight: `var(${tokens.lineHeight})`,
        textShadow: 'none',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
    },
    'pre[class*="language-"]': {
        color: `var(${tokens.codeColor})`,
        fontFamily: `var(${tokens.fontFamily})`,
        fontSize: `var(${tokens.fontSize})`,
        fontStyle: `var(${tokens.fontStyle})`,
        fontWeight: `var(${tokens.fontWeight})`,
        letterSpacing: `var(${tokens.letterSpacing})`,
        lineHeight: `var(${tokens.lineHeight})`,
        textShadow: 'none',
        background: 'transparent',
        margin: 0,
        padding: 0,
        overflow: 'visible',
    },
    punctuation: {
        color: `var(${tokens.lineNumberColor})`,
    },
    operator: {
        color: `var(${tokens.syntaxOrange})`,
        background: 'transparent',
    },
    atrule: {
        color: `var(${tokens.syntaxSkyBlue})`,
    },
    keyword: {
        color: `var(${tokens.syntaxSkyBlue})`,
    },
    boolean: {
        color: `var(${tokens.syntaxRed})`,
    },
    number: {
        color: `var(${tokens.syntaxOrange})`,
    },
    constant: {
        color: `var(${tokens.syntaxRed})`,
    },
    string: {
        color: `var(${tokens.syntaxSpring})`,
    },
    char: {
        color: `var(${tokens.syntaxSpring})`,
    },
    property: {
        color: `var(${tokens.syntaxPink})`,
    },
    tag: {
        color: `var(${tokens.syntaxRed})`,
    },
    symbol: {
        color: `var(${tokens.syntaxRed})`,
    },
    deleted: {
        color: `var(${tokens.syntaxRed})`,
    },
    selector: {
        color: `var(${tokens.syntaxYellow})`,
    },
    function: {
        color: `var(${tokens.syntaxYellow})`,
    },
    inserted: {
        color: `var(${tokens.syntaxSpring})`,
    },
    comment: {
        color: `var(${tokens.lineNumberColor})`,
    },
    'class-name': {
        color: `var(${tokens.syntaxRed})`,
    },
    builtin: {
        color: `var(${tokens.syntaxRed})`,
    },
    variable: {
        color: `var(${tokens.syntaxPink})`,
    },
};

export const Field = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    border-radius: var(${tokens.overlayBorderRadius});
    background: var(${tokens.fieldBackgroundColor});
`;

export const Overlay = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    padding: var(${tokens.overlayPadding});
`;

export const Outer = styled.div`
    flex-shrink: 0;
`;

export const Header = styled.div`
    flex-shrink: 0;
    margin-bottom: var(${tokens.headerMarginBottom});

    &.${classes.contentHeaderDivider} {
        border-bottom: 0.0625rem solid var(${tokens.dividerColor});
    }
`;

export const Action = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    gap: var(${tokens.contentGap});
    align-items: stretch;
    width: 100%;
    min-width: 0;
    min-height: 0;
    box-sizing: border-box;
`;

export const Code = styled.div`
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    box-sizing: border-box;
    overflow: auto;
    padding: 0.0625rem 0;
    margin-right: var(${tokens.codeMarginRight});
    padding-right: var(${tokens.codePaddingRight});

    pre,
    code {
        tab-size: 4;
    }

    .linenumber {
        display: flex !important;
        align-self: stretch;
        align-items: flex-start;
        justify-content: flex-end;
        min-width: var(${tokens.lineNumberMinWidth}, 1ch) !important;
        padding-right: var(${tokens.numerationPaddingRight}) !important;
        box-sizing: content-box;
        color: var(${tokens.lineNumberColor}) !important;
        border-right: 0.0625rem solid var(${tokens.dividerColor});
        text-align: right !important;
        user-select: none;
    }

    .${classes.line} {
        display: grid !important;
        grid-template-columns: max-content minmax(0, 1fr);
        column-gap: var(${tokens.lineNumberGap}, 0.5rem);
        align-items: stretch;
    }

    .${classes.lineWithoutNumber} {
        grid-template-columns: minmax(0, 1fr);
    }

    .${classes.lineContent} {
        display: block;
        min-width: 0;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
    }

    ${addScrollbar({
        scrollWidth: `var(${tokens.scrollWidth})`,
        trackColor: `var(${tokens.scrollTrackColor})`,
        thumbColor: `var(${tokens.scrollThumbColor})`,
    })}
`;
