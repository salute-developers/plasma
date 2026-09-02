import { surfaceSolidCard, textAccent } from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, drawerTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${drawerTokens.background}: ${surfaceSolidCard};
                ${drawerTokens.shadow}: 0 3.75rem 7rem -0.5rem rgba(0, 0, 0, 0.08);
                ${drawerTokens.contentBackgroundColor}: var(--surface-transparent-primary);
                ${drawerTokens.drawerOverlayWithBlurColor}: var(--overlay-blur);
                ${drawerTokens.drawerOverlayColor}: var(--overlay-soft);
                ${drawerTokens.closeIconColor}: ${textAccent};
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

export const headerConfig = {
    base: css`
        padding-bottom: 1.5rem;
    `,
};
