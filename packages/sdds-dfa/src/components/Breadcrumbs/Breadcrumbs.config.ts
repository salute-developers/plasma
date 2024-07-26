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
                ${breadcrumbsTokens.breadcrumbsOpacity}: 0.4;
                ${breadcrumbsTokens.breadcrumbsFocusOutlineColor}: var(--surface-accent);
            `,
        },
        size: {
            l: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.5rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: var(--plasma-typo-body-l-font-family);
                ${breadcrumbsTokens.breadcrumbsFontSize}: var(--plasma-typo-body-l-font-size);
                ${breadcrumbsTokens.breadcrumbsFontStyle}: var(--plasma-typo-body-l-font-style);
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-l-bold-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${breadcrumbsTokens.breadcrumbsLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.375rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: var(--plasma-typo-body-m-font-family);
                ${breadcrumbsTokens.breadcrumbsFontSize}: var(--plasma-typo-body-m-font-size);
                ${breadcrumbsTokens.breadcrumbsFontStyle}: var(--plasma-typo-body-m-font-style);
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-m-bold-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${breadcrumbsTokens.breadcrumbsLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.25rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: var(--plasma-typo-body-s-font-family);
                ${breadcrumbsTokens.breadcrumbsFontSize}: var(--plasma-typo-body-s-font-size);
                ${breadcrumbsTokens.breadcrumbsFontStyle}: var(--plasma-typo-body-s-font-style);
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-s-bold-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${breadcrumbsTokens.breadcrumbsLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${breadcrumbsTokens.breadcrumbsFontSize}: var(--plasma-typo-body-xs-font-size);
                ${breadcrumbsTokens.breadcrumbsFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${breadcrumbsTokens.breadcrumbsFontWeight}: var(--plasma-typo-body-xs-bold-weight);
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${breadcrumbsTokens.breadcrumbsLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
