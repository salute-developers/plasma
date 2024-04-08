import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        size: {
            s: css`
                --plasma-spinner-size: 16px;
            `,
            m: css`
                --plasma-spinner-size: 24px;
            `,
            l: css`
                --plasma-spinner-size: 36px;
            `,
        },
        view: {
            default: css`
                --plasma-spinner-color: var(--text-primary);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
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
