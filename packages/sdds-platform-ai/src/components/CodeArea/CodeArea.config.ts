import { css, codeAreaTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.wrapperBackgroundColor}: transparent;
                ${tokens.fieldBackgroundColor}: var(--surface-transparent-primary);

                ${tokens.codeColor}: var(--text-primary);
                ${tokens.lineNumberColor}: var(--text-tertiary);
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.scrollTrackColor}: var(--surface-transparent-primary);
                ${tokens.scrollThumbColor}: var(--surface-transparent-tertiary);

                ${tokens.syntaxYellow}: var(--syntax-yellow);
                ${tokens.syntaxOrange}: var(--syntax-orange);
                ${tokens.syntaxPink}: var(--syntax-pink);
                ${tokens.syntaxSpring}: var(--syntax-spring);
                ${tokens.syntaxSkyBlue}: var(--syntax-sky-blue);
                ${tokens.syntaxRed}: var(--syntax-red);
            `,
        },
        size: {
            xl: css`
                ${tokens.wrapperPadding}: 0;
                ${tokens.wrapperGap}: 1.25rem;
                ${tokens.wrapperBorderRadius}: 0;

                ${tokens.overlayBorderRadius}: 1rem;
                ${tokens.overlayPadding}: 1.25rem 1.125rem;

                ${tokens.headerMarginBottom}: 1.25rem;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.lineNumberGap}: 0.5rem;
                ${tokens.numerationPaddingRight}: 0.5rem;
                ${tokens.codeMarginRight}: -1rem;
                ${tokens.codePaddingRight}: 2.875rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.scrollWidth}: 0.125rem;
            `,
            l: css`
                ${tokens.wrapperPadding}: 0;
                ${tokens.wrapperGap}: 1rem;
                ${tokens.wrapperBorderRadius}: 0;

                ${tokens.overlayBorderRadius}: 0.875rem;
                ${tokens.overlayPadding}: 1rem;

                ${tokens.headerMarginBottom}: 1rem;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.lineNumberGap}: 0.5rem;
                ${tokens.numerationPaddingRight}: 0.5rem;
                ${tokens.codeMarginRight}: -0.875rem;
                ${tokens.codePaddingRight}: 2.75rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.scrollWidth}: 0.125rem;
            `,
            m: css`
                ${tokens.wrapperPadding}: 0;
                ${tokens.wrapperGap}: 0.75rem;
                ${tokens.wrapperBorderRadius}: 0;

                ${tokens.overlayBorderRadius}: 0.75rem;
                ${tokens.overlayPadding}: 0.75rem 0.875rem;

                ${tokens.headerMarginBottom}: 0.75rem;
                ${tokens.contentGap}: 0.375rem;
                ${tokens.lineNumberGap}: 0.375rem;
                ${tokens.numerationPaddingRight}: 0.375rem;
                ${tokens.codeMarginRight}: -0.75rem;
                ${tokens.codePaddingRight}: 2.5rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.scrollWidth}: 0.125rem;
            `,
            s: css`
                ${tokens.wrapperPadding}: 0;
                ${tokens.wrapperGap}: 0.5rem;
                ${tokens.wrapperBorderRadius}: 0;

                ${tokens.overlayBorderRadius}: 0.625rem;
                ${tokens.overlayPadding}: 0.5rem 0.75rem;

                ${tokens.headerMarginBottom}: 0.5rem;
                ${tokens.contentGap}: 0.375rem;
                ${tokens.lineNumberGap}: 0.25rem;
                ${tokens.numerationPaddingRight}: 0.25rem;
                ${tokens.codeMarginRight}: -0.625rem;
                ${tokens.codePaddingRight}: 2.375rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.scrollWidth}: 0.125rem;
            `,
            xs: css`
                ${tokens.wrapperPadding}: 0;
                ${tokens.wrapperGap}: 0.5rem;
                ${tokens.wrapperBorderRadius}: 0;

                ${tokens.overlayBorderRadius}: 0.5rem;
                ${tokens.overlayPadding}: 0.5rem;

                ${tokens.headerMarginBottom}: 0.5rem;
                ${tokens.contentGap}: 0.25rem;
                ${tokens.lineNumberGap}: 0.25rem;
                ${tokens.numerationPaddingRight}: 0.25rem;
                ${tokens.codeMarginRight}: -0.375rem;
                ${tokens.codePaddingRight}: 1.5rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.scrollWidth}: 0.125rem;
            `,
        },
    },
};
