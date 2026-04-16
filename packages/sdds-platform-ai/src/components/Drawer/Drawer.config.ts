import { css, drawerTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${drawerTokens.background}: var(--surface-solid-card);
                ${drawerTokens.shadow}: 0 3.75rem 7rem -0.5rem rgba(0, 0, 0, 0.08);
                ${drawerTokens.contentBackgroundColor}: var(--surface-transparent-primary);
                ${drawerTokens.drawerOverlayWithBlurColor}: var(--overlay-blur);
                ${drawerTokens.drawerOverlayColor}: var(--overlay-soft);
            `,
        },
        size: {
            m: css`
                ${drawerTokens.padding}: 1.5rem;
            `,
        },
        borderRadius: {
            none: css`
                ${drawerTokens.borderRadius}: 0;
            `,
            default: css`
                ${drawerTokens.borderRadius}: 1.25rem;
            `,
        },
    },
};
