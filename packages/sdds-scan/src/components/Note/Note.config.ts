import { css, noteTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-transparent-secondary);
                ${tokens.color}: var(--text-primary);
                ${tokens.contentBeforeColor}: var(--text-primary);
            `,
            positive: css`
                ${tokens.background}: var(--surface-transparent-positive);
                ${tokens.color}: var(--text-primary);
                ${tokens.contentBeforeColor}: var(--text-positive);
            `,
            warning: css`
                ${tokens.background}: var(--surface-transparent-warning);
                ${tokens.color}: var(--text-primary);
                ${tokens.contentBeforeColor}: var(--text-warning);
            `,
            negative: css`
                ${tokens.background}: var(--surface-transparent-negative);
                ${tokens.color}: var(--text-primary);
                ${tokens.contentBeforeColor}: var(--text-negative);
            `,
            info: css`
                ${tokens.background}: var(--surface-transparent-info);
                ${tokens.color}: var(--text-primary);
                ${tokens.contentBeforeColor}: var(--text-info);
            `,
        },
        size: {
            m: css`
                ${tokens.padding}: 1.25rem 1.5rem;
                ${tokens.paddingScalable}: 1.25rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.gap}: 0.625rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.75rem;
                ${tokens.closeIconRight}: 0.75rem;
                ${tokens.closeIconColor}: var(--text-secondary);
                ${tokens.closeIconColorOnHover}: var(--text-secondary-hover);
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1.5rem;
                ${tokens.fixedContentBeforeHeight}: 1.5rem;
                ${tokens.fixedContentBeforePadding}: 0;

                ${tokens.titleFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-text-m-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-text-m-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-text-m-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-text-m-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-text-m-line-height);

                ${tokens.textFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.textFontSize}: var(--plasma-typo-text-m-font-size);
                ${tokens.textFontStyle}: var(--plasma-typo-text-m-font-style);
                ${tokens.textFontWeight}: var(--plasma-typo-text-m-font-weight);
                ${tokens.textLetterSpacing}: var(--plasma-typo-text-m-letter-spacing);
                ${tokens.textLineHeight}: var(--plasma-typo-text-m-line-height);
            `,
            s: css`
                ${tokens.padding}: 1rem 1.25rem;
                ${tokens.paddingScalable}: 1rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.gap}: 0.5rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.625rem;
                ${tokens.closeIconRight}: 0.625rem;
                ${tokens.closeIconColor}: var(--text-secondary);
                ${tokens.closeIconColorOnHover}: var(--text-secondary-hover);
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1rem;
                ${tokens.fixedContentBeforeHeight}: 1.125rem;
                ${tokens.fixedContentBeforePadding}: 0.063rem 0;

                ${tokens.titleFontFamily}: var(--plasma-typo-text-s-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-text-s-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-text-s-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-text-s-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-text-s-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-text-s-line-height);

                ${tokens.textFontFamily}: var(--plasma-typo-text-s-font-family);
                ${tokens.textFontSize}: var(--plasma-typo-text-s-font-size);
                ${tokens.textFontStyle}: var(--plasma-typo-text-s-font-style);
                ${tokens.textFontWeight}: var(--plasma-typo-text-s-font-weight);
                ${tokens.textLetterSpacing}: var(--plasma-typo-text-s-letter-spacing);
                ${tokens.textLineHeight}: var(--plasma-typo-text-s-line-height);
            `,
        },
    },
};
