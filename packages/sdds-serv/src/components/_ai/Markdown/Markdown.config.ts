import { css, markdownTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL, bodyM, bodyS, bodyXS, textAccent, textPrimary } from '@salutejs/sdds-themes/tokens/sdds_serv';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textColor}: ${textPrimary};
                ${tokens.linkColor}: ${textAccent};
            `,
        },
        size: {
            xl: css`
                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};
                ${tokens.blockGap}: 1.25rem;
                ${tokens.checkboxSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.375rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.5rem;
            `,
            l: css`
                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};
                ${tokens.blockGap}: 1.125rem;
                ${tokens.checkboxSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.375rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.5rem;
            `,
            m: css`
                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};
                ${tokens.blockGap}: 1rem;
                ${tokens.checkboxSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.375rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.5rem;
            `,
            s: css`
                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};
                ${tokens.blockGap}: 0.875rem;
                ${tokens.checkboxSize}: 0.875rem;
                ${tokens.checkboxBorderRadius}: 0.25rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.25rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.375rem;
            `,
            xs: css`
                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.lineHeight}: ${bodyXS.lineHeight};
                ${tokens.blockGap}: 0.75rem;
                ${tokens.checkboxSize}: 0.875rem;
                ${tokens.checkboxBorderRadius}: 0.25rem;
                ${tokens.codeInlineBlockPadding}: 0.125rem 0.25rem;
                ${tokens.codeInlineBlockBorderRadius}: 0.25rem;
            `,
        },
    },
};
