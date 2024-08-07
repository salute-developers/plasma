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
                ${dividerTokens.background}: var(--surface-solid-primary);
            `,
            dark: css`
                ${dividerTokens.background}: var(--on-dark-surface-solid-primary);
            `,
            light: css`
                ${dividerTokens.background}: var(--on-light-surface-solid-primary);
            `,
            // TODO поменять на корректный токен --inverse-surface-transparent-tertiary когда он появится
            inverse: css`
                ${dividerTokens.background}: var(--inverse-surface-solid-primary);
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
