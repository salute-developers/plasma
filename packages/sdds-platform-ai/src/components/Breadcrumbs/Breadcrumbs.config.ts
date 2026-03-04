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

                ${breadcrumbsTokens.breadcrumbsFocusOutlineColor}: var(--surface-accent);

                ${breadcrumbsTokens.breadcrumbsOpacity}: 0.4;
            `,
        },
        size: {
            s: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: var(--plasma-typo-body-s-font-family);
                ${breadcrumbsTokens.breadcrumbsFontSize}: var(--plasma-typo-body-s-font-size);
                ${breadcrumbsTokens.breadcrumbsFontStyle}: var(--plasma-typo-body-s-font-style);
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${breadcrumbsTokens.breadcrumbsLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
    },
};
