import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';

import { pilled, sizeL, sizeM, sizeS } from './Badge.config.common';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${badgeTokens.color}: var(--text-primary);
            `,
            positive: css`
                ${badgeTokens.color}: var(--text-positive);
            `,
            warning: css`
                ${badgeTokens.color}: var(--text-warning);
            `,
            negative: css`
                ${badgeTokens.color}: var(--text-negative);
            `,
            dark: css`
                ${badgeTokens.color}: var(--on-dark-text-tertiary);
            `,
            light: css`
                ${badgeTokens.color}: var(--on-dark-text-tertiary);
            `,
        },
        size: {
            l: css`
                ${sizeL}
            `,
            m: css`
                ${sizeM}
            `,
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
