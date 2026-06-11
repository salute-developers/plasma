import { css, badgeTokens } from '@salutejs/plasma-new-hope/emotion';

import { pilled, sizeS } from './Badge.config.common';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${badgeTokens.color}: var(--text-primary);
            `,
            accent: css`
                ${badgeTokens.color}: var(--text-accent);
            `,
            positive: css`
                ${badgeTokens.color}: var(--text-positive);
            `,
            negative: css`
                ${badgeTokens.color}: var(--text-negative);
            `,
        },
        size: {
            s: css`
                ${sizeS}
            `,
        },
        pilled: {
            true: css`
                ${pilled}
            `,
        },
        truncate: {
            true: css``,
        },
    },
};
