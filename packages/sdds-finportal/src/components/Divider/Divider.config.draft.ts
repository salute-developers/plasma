import { css, dividerTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        orientation: 'horizontal',
    },
    variations: {
        view: {
            default: css`
                ${dividerTokens.background}: var(--outline-solid-primary);
            `,
            dark: css`
                ${dividerTokens.background}: var(--on-dark-outline-solid-primary);
            `,
            light: css`
                ${dividerTokens.background}: var(--on-light-outline-solid-primary);
            `,
            inverse: css`
                ${dividerTokens.background}: var(--inverse-outline-solid-primary);
            `,
        },
        size: {
            m: css`
                ${dividerTokens.borderRadius}: 0.0625rem;
            `,
        },
        orientation: {
            horizontal: css`
                ${dividerTokens.baseSideSize}: 0.0625rem;
            `,
            vertical: css`
                ${dividerTokens.baseSideSize}: 0.0625rem;
            `,
        },
    },
};
