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
                ${badgeTokens.color}: var(--inverse-text-primary);
                ${badgeTokens.background}: var(--surface-solid-default);

                ${badgeTokens.colorClear}: var(--text-primary);
            `,
            accent: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-accent);

                ${badgeTokens.colorTransparent}: var(--text-accent);
                ${badgeTokens.colorClear}: var(--text-accent);
            `,
            positive: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-positive);

                ${badgeTokens.colorTransparent}: var(--text-positive);
                ${badgeTokens.colorClear}: var(--text-positive);
            `,
            negative: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-negative);

                ${badgeTokens.colorTransparent}: var(--text-negative);
                ${badgeTokens.colorClear}: var(--text-negative);
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
        transparent: {
            true: css``,
        },
        clear: {
            true: css`
                ${badgeTokens.backgroundClear}: var(--surface-clear);
            `,
        },
    },
};
