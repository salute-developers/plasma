import { css } from 'styled-components';
import { tokens } from 'src/components/_ai/Markdown/Markdown.tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textColor}: var(--text-primary);
                ${tokens.linkColor}: var(--text-accent);
            `,
        },
        size: {
            xl: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.blockGap}: 1.25rem;
                ${tokens.checkboxSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.375rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.5rem;
            `,
            l: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.blockGap}: 1.125rem;
                ${tokens.checkboxSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.375rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.5rem;
            `,
            m: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.blockGap}: 1rem;
                ${tokens.checkboxSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.375rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.5rem;
            `,
            s: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.blockGap}: 0.875rem;
                ${tokens.checkboxSize}: 0.875rem;
                ${tokens.checkboxBorderRadius}: 0.25rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.25rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.375rem;
            `,
            xs: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.blockGap}: 0.75rem;
                ${tokens.checkboxSize}: 0.875rem;
                ${tokens.checkboxBorderRadius}: 0.25rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.25rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.25rem;
            `,
        },
    },
};
