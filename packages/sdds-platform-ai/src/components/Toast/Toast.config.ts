import { css, toastTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        closeIconType: 'default',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: var(--text-primary);
                ${toastTokens.background}: var(--surface-solid-card-brightness);

                ${toastTokens.closeIconColor}: var(--text-secondary);
                ${toastTokens.closeIconColorOnHover}: var(--text-secondary);
            `,
            positive: css`
                ${toastTokens.color}: var(--text-primary);
                ${toastTokens.background}: var(--surface-solid-card-brightness);
                ${toastTokens.contentLeftColor}: var(--text-positive);

                ${toastTokens.closeIconColor}: var(--text-secondary);
                ${toastTokens.closeIconColorOnHover}: var(--text-secondary);
            `,
            negative: css`
                ${toastTokens.color}: var(--text-primary);
                ${toastTokens.background}: var(--surface-solid-card-brightness);
                ${toastTokens.contentLeftColor}: var(--text-negative);

                ${toastTokens.closeIconColor}: var(--text-secondary);
                ${toastTokens.closeIconColorOnHover}: var(--text-secondary);
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

                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem -0.125rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.5rem;
            `,
        },
        closeIconType: {
            default: css`
                ${toastTokens.closeIconButtonSize}: 1rem;
                ${toastTokens.closeIconSize}: 1.5rem;
            `,
        },
        pilled: {
            true: css`
                ${toastTokens.pilledBorderRadius}: 1.5rem;

                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem -0.25rem;
                ${toastTokens.closeIconMargin}: -0.0625rem -0.25rem -0.0625rem 0.375rem;
            `,
        },
    },
};
