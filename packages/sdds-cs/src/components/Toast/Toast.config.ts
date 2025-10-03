import { css, toastTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        closeIconType: 'thin',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: var(--text-primary);
                ${toastTokens.background}: var(--surface-solid-card-brightness);

                ${toastTokens.closeIconColor}: var(--text-accent);
                ${toastTokens.closeIconColorOnHover}: var(--text-accent-minor);
            `,
            /**
             * @deprecated
             * светлый и темный фон регулировать через `view` компонента `ViewContainer`
             */
            dark: css`
                ${toastTokens.color}: var(--on-dark-text-primary);
                ${toastTokens.background}: var(--on-dark-surface-solid-primary-brightness);

                ${toastTokens.closeIconColor}: var(--on-dark-text-accent);
                ${toastTokens.closeIconColorOnHover}: var(--on-dark-text-accent-minor);
            `,
            /**
             * @deprecated
             * светлый и темный фон регулировать через `view` компонента `ViewContainer`
             */
            light: css`
                ${toastTokens.color}: var(--on-light-text-primary);
                ${toastTokens.background}: var(--on-light-surface-solid-primary-brightness);

                ${toastTokens.closeIconColor}: var(--on-light-text-accent);
                ${toastTokens.closeIconColorOnHover}: var(--on-light-text-accent-minor);
            `,
        },
        size: {
            s: css`
                ${toastTokens.borderRadius}: 0.75rem;
                ${toastTokens.maxWidth}: calc(100vw - 5rem);
                ${toastTokens.padding}: 0.5rem 0.75rem;

                ${toastTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${toastTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${toastTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${toastTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${toastTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${toastTokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${toastTokens.contentLeftMargin}: -0.0625rem 0.5rem -0.0625rem 0rem;
                ${toastTokens.closeIconMargin}: -0.0625rem 0.125rem -0.0625rem 0.75rem;
            `,
        },
        closeIconType: {
            thin: css`
                ${toastTokens.closeIconButtonSize}: 1.5rem;
                ${toastTokens.closeIconSize}: 1.5rem;
            `,
        },
        pilled: {
            true: css`
                ${toastTokens.pilledBorderRadius}: 1.5rem;

                ${toastTokens.contentLeftMargin}: -0.0625rem 0.375rem -0.0625rem 0rem;
                ${toastTokens.closeIconMargin}: -0.0625rem 0.25rem -0.0625rem 0.375rem;
            `,
        },
    },
};
