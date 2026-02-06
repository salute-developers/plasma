import { css, toolbarTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                /* TODO: заменить значение box-shadow на var(--shadow-down-soft-s). https://github.com/salute-developers/plasma/issues/1131 */
                ${toolbarTokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${toolbarTokens.background}: var(--surface-solid-card-brightness);

                ${toolbarTokens.dividerColor}: var(--surface-transparent-tertiary);
            `,
        },
        size: {
            xs: css`
                ${toolbarTokens.size}: 2.5rem;
                ${toolbarTokens.padding}: 0.25rem;
                ${toolbarTokens.borderRadius}: 0.75rem;

                ${toolbarTokens.dividerSize}: 1.25rem;
                ${toolbarTokens.dividerOffset}: 0.5rem;
                ${toolbarTokens.dividerBorderRadius}: 0.0625rem;
            `,
            s: css`
                ${toolbarTokens.size}: 3rem;
                ${toolbarTokens.padding}: 0.25rem;
                ${toolbarTokens.borderRadius}: 0.875rem;

                ${toolbarTokens.dividerSize}: 1.5rem;
                ${toolbarTokens.dividerOffset}: 0.5rem;
                ${toolbarTokens.dividerBorderRadius}: 0.0625rem;
            `,
            m: css`
                ${toolbarTokens.size}: 3.75rem;
                ${toolbarTokens.padding}: 0.375rem;
                ${toolbarTokens.borderRadius}: 1rem;

                ${toolbarTokens.dividerSize}: 1.75rem;
                ${toolbarTokens.dividerOffset}: 0.625rem;
                ${toolbarTokens.dividerBorderRadius}: 0.0625rem;
            `,
            l: css`
                ${toolbarTokens.size}: 4.5rem;
                ${toolbarTokens.padding}: 0.5rem;
                ${toolbarTokens.borderRadius}: 1.25rem;

                ${toolbarTokens.dividerSize}: 2rem;
                ${toolbarTokens.dividerOffset}: 0.75rem;
                ${toolbarTokens.dividerBorderRadius}: 0.0625rem;
            `,
        },
    },
};
