import { css, ratingTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.helperTextColor}: var(--text-secondary);
                ${tokens.iconColor}: var(--text-primary);
                ${tokens.outlineIconColor}: var(--text-primary);
            `,
            accent: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.helperTextColor}: var(--text-secondary);
                // TODO: change with token data-yellow, when it will be added to theme
                ${tokens.iconColor}: #F3A912;
                ${tokens.outlineIconColor}: var(--text-tertiary);
            `,
        },
        size: {
            m: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1.25rem;
            `,
            s: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1rem;
            `,
        },
    },
};
