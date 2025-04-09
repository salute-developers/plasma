import { css, ratingTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
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
                ${tokens.iconColor}: var(--text-warning);
                ${tokens.outlineIconColor}: var(--text-tertiary);
            `,
        },
        size: {
            s: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1rem;
            `,
            h4: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.5rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.5rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1.25rem;
            `,
        },
    },
};
