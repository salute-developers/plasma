import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        size: {
            s: css`
                ${tokens.size}: 1rem;
                ${tokens.padding}: 0.063rem;
            `,
            m: css`
                ${tokens.size}: 1.5rem;
                ${tokens.padding}: 0.125rem;
            `,
            l: css`
                ${tokens.size}: 2.25rem;
                ${tokens.padding}: 0.188rem;
            `,
        },
        view: {
            default: css`
                ${tokens.color}: var(--text-primary);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${tokens.color}: var(--text-primary);
            `,
            secondary: css`
                ${tokens.color}: var(--text-secondary);
            `,
            tertiary: css`
                ${tokens.color}: var(--text-tertiary);
            `,
            paragraph: css`
                ${tokens.color}: var(--text-paragraph);
            `,
            accent: css`
                ${tokens.color}: var(--text-accent);
            `,
            positive: css`
                ${tokens.color}: var(--text-positive);
            `,
            warning: css`
                ${tokens.color}: var(--text-warning);
            `,
            negative: css`
                ${tokens.color}: var(--text-negative);
            `,
        },
    },
};
