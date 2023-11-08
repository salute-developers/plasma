import { css } from '@linaria/core';

import { notificationTokens } from '../../../../components/Notification';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${notificationTokens.contentColor}: var(--text-secondary);
                ${notificationTokens.background}: var(--surface-transparent-card);
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
                ${notificationTokens.titleColor}: var(--text-positive);
            `,
            warning: css`
                ${notificationTokens.titleColor}: var(--text-warning);
            `,
            error: css`
                ${notificationTokens.titleColor}: var(--text-negative);
            `,
        },
    },
};
