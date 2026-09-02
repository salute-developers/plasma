import { css } from 'styled-components';

import { spinnerTokens } from '../../../components/Spinner';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        size: {
            xxs: css`
                ${spinnerTokens.size}: 1rem;
                ${spinnerTokens.padding}: 0.0625rem;
            `,
            xs: css`
                ${spinnerTokens.size}: 1.5rem;
                ${spinnerTokens.padding}: 0.125rem;
            `,
            s: css`
                ${spinnerTokens.size}: 2.25rem;
                ${spinnerTokens.padding}: 0.1875rem;
            `,
            m: css`
                ${spinnerTokens.size}: 3rem;
                ${spinnerTokens.padding}: 0.25rem;
            `,
            l: css`
                ${spinnerTokens.size}: 3.5rem;
                ${spinnerTokens.padding}: 0.25rem;
            `,
            xl: css`
                ${spinnerTokens.size}: 5.5rem;
                ${spinnerTokens.padding}: 0.375rem;
            `,
            xxl: css`
                ${spinnerTokens.size}: 8rem;
                ${spinnerTokens.padding}: 0.5rem;
            `,
        },
        view: {
            default: css`
                ${spinnerTokens.color}: var(--text-primary);
            `,
            secondary: css`
                ${spinnerTokens.color}: var(--text-secondary);
            `,
            tertiary: css`
                ${spinnerTokens.color}: var(--text-tertiary);
            `,
            paragraph: css`
                ${spinnerTokens.color}: var(--text-paragraph);
            `,
            accent: css`
                ${spinnerTokens.color}: var(--text-accent);
            `,
            positive: css`
                ${spinnerTokens.color}: var(--text-positive);
            `,
            warning: css`
                ${spinnerTokens.color}: var(--text-warning);
            `,
            negative: css`
                ${spinnerTokens.color}: var(--text-negative);
            `,
        },
    },
};
