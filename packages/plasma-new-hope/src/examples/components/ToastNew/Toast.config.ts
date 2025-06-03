import { css } from '@linaria/core';

import { toastNewTokens as toastTokens } from '../../../components/Toast/ToastNew';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: var(--text-primary);
                ${toastTokens.background}: var(--surface-solid-card-brightness);

                ${toastTokens.closeIconColor}: var(--text-secondary);
                ${toastTokens.closeIconColorOnHover}: var(--text-secondary);
            `,
        },
        size: {
            m: css`
                ${toastTokens.borderRadius}: 0.75rem;
                ${toastTokens.maxWidth}: calc(100vw - 5rem);
                ${toastTokens.padding}: 0.5625rem 0.75rem;
                ${toastTokens.closeIconSize}: 1rem;
                ${toastTokens.closeIconButtonSize}: 1rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.5rem;
                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem -0.125rem;

                ${toastTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${toastTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${toastTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${toastTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${toastTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${toastTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        pilled: {
            true: css`
                ${toastTokens.borderRadius}: 1.5rem;
                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem -0.25rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.375rem;
            `,
        },
    },
};
