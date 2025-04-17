import { css, toastNewTokens as toastTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: var(--text-primary);
                ${toastTokens.background}: var(--surface-solid-card-brightness);

                ${toastTokens.closeIconColor}: var(--text-accent);
                ${toastTokens.closeIconColorOnHover}: #1A9E32;
            `,
        },
        size: {
            s: css`
                ${toastTokens.borderRadius}: 0.75rem;
                ${toastTokens.maxWidth}: calc(100vw - 5rem);
                ${toastTokens.padding}: 0.5rem 0.75rem;
                ${toastTokens.closeIconSize}: 1.5rem;
                ${toastTokens.closeIconButtonSize}: 1.5rem;
                ${toastTokens.closeIconMargin}: -0.0625rem 0.125rem -0.0625rem 0.75rem;
                ${toastTokens.contentLeftMargin}: -0.0625rem 0.5rem -0.0625rem 0rem;

                ${toastTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${toastTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${toastTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${toastTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${toastTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${toastTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
        pilled: {
            true: css`
                ${toastTokens.borderRadius}: 1.5rem;
                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem 0rem;
                ${toastTokens.closeIconMargin}: -0.0625rem 0.25rem -0.0625rem 0.375rem;
            `,
        },
    },
};
