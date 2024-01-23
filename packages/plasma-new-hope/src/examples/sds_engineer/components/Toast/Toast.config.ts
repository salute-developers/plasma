import { css } from '@linaria/core';

import { toastTokens } from '../../../../components/Toast';

export const config = {
    defaults: {
        view: 'primary',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                ${toastTokens.color}: var(--text-primary);
                ${toastTokens.background}: var(--surface-solid-card);

                ${toastTokens.closeIconColor}: var(--text-secondary);
                ${toastTokens.closeIconColorOnHover}: var(--text-secondary);
            `,
            dark: css`
                ${toastTokens.color}: var(--on-dark-text-primary);
                ${toastTokens.background}: var(--on-dark-surface-solid-primary);

                ${toastTokens.closeIconColor}: var(--on-dark-text-secondary);
                ${toastTokens.closeIconColorOnHover}: var(--on-dark-text-secondary);
            `,
            light: css`
                ${toastTokens.color}: var(--on-light-text-primary);
                ${toastTokens.background}: var(--on-light-surface-solid-primary);

                ${toastTokens.closeIconColor}: var(--on-light-text-secondary);
                ${toastTokens.closeIconColorOnHover}: var(--on-light-text-secondary);
            `,
        },
        size: {
            m: css`
                ${toastTokens.borderRadius}: 0.75rem;
                ${toastTokens.maxWidth}: calc(100vw - 5rem);
                ${toastTokens.padding}: 0.5625rem 0.75rem;

                ${toastTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${toastTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${toastTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${toastTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${toastTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${toastTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${toastTokens.leftContentMargin}: -0.0625rem 0.375rem -0.0625rem -0.125rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.5rem;
            `,
        },
        pilled: {
            true: css`
                ${toastTokens.pilledBorderRadius}: 1.5rem;

                ${toastTokens.leftContentMargin}: -0.0625rem 0.375rem -0.0625rem -0.25rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.375rem;
            `,
        },
    },
};
