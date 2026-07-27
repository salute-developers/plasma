import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';

import { pilled, sizeL, sizeM, sizeS, sizeXS } from './Badge.config.common';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${badgeTokens.color}: var(--text-primary);
                ${badgeTokens.background}: var(--surface-transparent-secondary);
            `,
            accent: css`
                ${badgeTokens.color}: var(--text-accent);
                ${badgeTokens.background}: var(--surface-transparent-accent);
            `,
            positive: css`
                ${badgeTokens.color}: var(--text-positive);
                ${badgeTokens.background}: var(--surface-transparent-positive);
            `,
            warning: css`
                ${badgeTokens.color}: var(--text-warning);
                ${badgeTokens.background}: var(--surface-transparent-warning);
            `,
            negative: css`
                ${badgeTokens.color}: var(--text-negative);
                ${badgeTokens.background}: var(--surface-transparent-negative);
            `,
            dark: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--on-light-surface-transparent-deep);
            `,
            light: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--on-dark-surface-transparent-card);
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
            xs: css`
                ${sizeXS}
            `,
        },
        pilled: {
            true: css`
                ${pilled}
            `,
        },
        transparent: {
            true: css``,
        },
        truncate: {
            true: css``,
        },
    },
};
