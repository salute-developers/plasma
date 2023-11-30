import { css, notificationTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${notificationTokens.contentColor}: var(--plasma-colors-secondary);
                ${notificationTokens.background}: var(--plasma-colors-surface-card);
                ${notificationTokens.boxShadow}: 0px 1px 1px rgba(0, 0, 0, 0.05), 0px 4px 14px rgba(0, 0, 0, 0.08);
                ${notificationTokens.contentFontFamily}: var(--plasma-typo-footnote1-font-family);
                ${notificationTokens.contentFontSize}: var(--plasma-typo-footnote1-font-size);
                ${notificationTokens.contentFontStyle}: var(--plasma-typo-footnote1-font-style);
                ${notificationTokens.contentFontWeight}: var(--plasma-typo-footnote1-font-weight);
                ${notificationTokens.contentFontLetterSpacing}: var(--plasma-typo-footnote1-letter-spacing);
                ${notificationTokens.contentFontLineHeight}: var(--plasma-typo-footnote1-line-height);
                ${notificationTokens.titleFontFamily}: var(--plasma-typo-headline5-font-family,'SB Sans Text', sans-serif);
                ${notificationTokens.titleFontSize}: var(--plasma-typo-headline5-font-size, 1rem);
                ${notificationTokens.titleFontStyle}: var(--plasma-typo-headline5-font-style, normal);
                ${notificationTokens.titleFontWeight}: var(--plasma-typo-headline5-font-weight, 600);
                ${notificationTokens.titleFontLetterSpacing}: var(--plasma-typo-headline5-letter-spacing, -0.0190em);
                ${notificationTokens.titleFontLineHeight}: var(--plasma-typo-headline5-line-height, 1.25rem);
            `,
        },
        status: {
            success: css`
                ${notificationTokens.titleColor}: #09a552;
            `,
            warning: css`
                ${notificationTokens.titleColor}: var(--plasma-colors-warning);
            `,
            error: css`
                ${notificationTokens.titleColor}: var(--plasma-colors-critical);
            `,
        },
    },
};
