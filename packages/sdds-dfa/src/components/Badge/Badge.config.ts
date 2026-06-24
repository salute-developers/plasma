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
                ${badgeTokens.color}: var(--inverse-text-primary);
                ${badgeTokens.background}: var(--surface-solid-default);

                ${badgeTokens.colorTransparent}: var(--text-primary);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-secondary);

                ${badgeTokens.colorClear}: var(--text-primary);
            `,
            accent: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-accent);

                ${badgeTokens.colorTransparent}: var(--text-accent);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-accent);

                ${badgeTokens.colorClear}: var(--text-accent);
            `,
            positive: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-positive);

                ${badgeTokens.colorTransparent}: var(--text-positive);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-positive);

                ${badgeTokens.colorClear}: var(--text-positive);
            `,
            warning: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-warning);

                ${badgeTokens.colorTransparent}: var(--text-warning);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-warning);

                ${badgeTokens.colorClear}: var(--text-warning);
            `,
            negative: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-negative);

                ${badgeTokens.colorTransparent}: var(--text-negative);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-negative);

                ${badgeTokens.colorClear}: var(--text-negative);
            `,
            black: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--on-light-surface-solid-default);

                ${badgeTokens.colorTransparent}: var(--on-dark-text-primary);
                ${badgeTokens.backgroundTransparent}: var(--on-light-surface-transparent-deep);

                ${badgeTokens.colorClear}: var(--on-light-text-primary);
            `,
            white: css`
                ${badgeTokens.color}: var(--on-light-text-primary);
                ${badgeTokens.background}: var(--on-dark-surface-solid-default);

                ${badgeTokens.colorTransparent}: var(--on-dark-text-primary);
                ${badgeTokens.backgroundTransparent}: var(--on-dark-surface-transparent-card);

                ${badgeTokens.colorClear}: var(--on-dark-text-primary);
            `,
            // deprecated
            dark: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--on-light-surface-solid-default);

                ${badgeTokens.colorTransparent}: var(--on-dark-text-primary);
                ${badgeTokens.backgroundTransparent}: var(--on-light-surface-transparent-deep);

                ${badgeTokens.colorClear}: var(--on-light-text-primary);
            `,
            // deprecated
            light: css`
                ${badgeTokens.color}: var(--on-light-text-primary);
                ${badgeTokens.background}: var(--on-dark-surface-solid-default);

                ${badgeTokens.colorTransparent}: var(--on-dark-text-primary);
                ${badgeTokens.backgroundTransparent}: var(--on-dark-surface-transparent-card);

                ${badgeTokens.colorClear}: var(--on-dark-text-primary);
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
        clear: {
            true: css`
                ${badgeTokens.backgroundClear}: var(--surface-clear);
            `,
        },
    },
};
