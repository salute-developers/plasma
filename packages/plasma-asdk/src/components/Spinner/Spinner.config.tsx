import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        size: {
            xxs: css`
                ${tokens.size}: 1rem;
            `,
            xs: css`
                ${tokens.size}: 1.5rem;
            `,
            s: css`
                ${tokens.size}: 2.25rem;
            `,
            m: css`
                ${tokens.size}: 3rem;
            `,
            l: css`
                ${tokens.size}: 3.5rem;
            `,
            xl: css`
                ${tokens.size}: 5.5rem;
            `,
            xxl: css`
                ${tokens.size}: 8rem;
            `,
        },
        view: {
            accent: css`
                ${tokens.color}: var(--text-accent-main);
            `,
        },
    },
};
