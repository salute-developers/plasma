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
            s: css`
                ${toolbarTokens.size}: 2.5rem;
                ${toolbarTokens.padding}: 0 0.25rem;
                ${toolbarTokens.borderRadius}: 0.875rem;

                ${toolbarTokens.dividerSize}: 1.5rem;
                ${toolbarTokens.dividerOffset}: 0.5rem;
                ${toolbarTokens.dividerBorderRadius}: 0.0625rem;
            `,
        },
    },
};
