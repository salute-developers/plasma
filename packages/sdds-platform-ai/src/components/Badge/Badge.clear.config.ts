import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';

import { pilled, sizeL, sizeM, sizeXS } from './Badge.config.common';

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
            accent: css`
                ${badgeTokens.color}: var(--text-accent);
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
                ${badgeTokens.color}: var(--on-light-text-primary);
            `,
            light: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
            `,
        },
        size: {
            l: css`
                ${sizeL}
            `,
            m: css`
                ${sizeM}
            `,
            xs: css`
                ${sizeXS}
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
