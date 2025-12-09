import { css, breadcrumbsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${breadcrumbsTokens.breadcrumbsColor}: var(--text-primary);
                ${breadcrumbsTokens.breadcrumbsColorText}: var(--text-primary);
                ${breadcrumbsTokens.breadcrumbsColorSeparator}: var(--text-primary);
                ${breadcrumbsTokens.breadcrumbsOpacity}: 0.4;
                ${breadcrumbsTokens.breadcrumbsFocusOutlineColor}: var(--surface-accent);
            `,
        },
        size: {
            s: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.25rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: var(--plasma-typo-body-s-font-family);
                ${breadcrumbsTokens.breadcrumbsFontSize}: var(--plasma-typo-body-s-font-size);
                ${breadcrumbsTokens.breadcrumbsFontStyle}: var(--plasma-typo-body-s-font-style);
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-s-bold-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${breadcrumbsTokens.breadcrumbsLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
    },
};
