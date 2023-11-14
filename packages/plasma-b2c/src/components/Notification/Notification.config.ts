import { css, notificationTokens } from '@salutejs/plasma-new-hope/styled-components';
import { surfaceCard, secondary, warning, critical } from '@salutejs/plasma-core';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${notificationTokens.contentColor}: ${secondary};
                ${notificationTokens.background}: ${surfaceCard};
                ${notificationTokens.contentFontFamily}: var(--plasma-typo-footnote1-font-family);
                ${notificationTokens.contentFontSize}: var(--plasma-typo-footnote1-font-size);
                ${notificationTokens.contentFontStyle}: var(--plasma-typo-footnote1-font-style);
                ${notificationTokens.contentFontWeight}: var(--plasma-typo-footnote1-font-weight);
                ${notificationTokens.contentFontLetterSpacing}: var(--plasma-typo-footnote1-letter-spacing);
                ${notificationTokens.contentFontLineHeight}: var(--plasma-typo-footnote1-line-height);
            `,
        },
        status: {
            success: css`
                ${notificationTokens.titleColor}: #09a552;
            `,
            warning: css`
                ${notificationTokens.titleColor}: ${warning};
            `,
            error: css`
                ${notificationTokens.titleColor}: ${critical};
            `,
        },
    },
};
