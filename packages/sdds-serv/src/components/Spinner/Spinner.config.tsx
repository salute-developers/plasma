import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                --plasma-spinner-color: var(--text-primary);
            `,
            secondary: css`
                --plasma-spinner-color: var(--text-secondary);
            `,
            tertiary: css`
                --plasma-spinner-color: var(--text-tertiary);
            `,
            paragraph: css`
                --plasma-spinner-color: var(--text-paragraph);
            `,
            accent: css`
                --plasma-spinner-color: var(--text-accent);
            `,
            positive: css`
                --plasma-spinner-color: var(--text-positive);
            `,
            warning: css`
                --plasma-spinner-color: var(--text-warning);
            `,
            negative: css`
                --plasma-spinner-color: var(--text-negative);
            `,
        },
    },
};
