import { css, drawerTokens } from '@salutejs/plasma-new-hope/styled-components';
import { overlaySoft, surfaceSolidCard, surfaceTransparentPrimary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: overlayBlur
 */
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
                ${drawerTokens.contentBackgroundColor}: ${surfaceTransparentPrimary};
                ${drawerTokens.drawerOverlayWithBlurColor}: var(--overlay-blur);
                ${drawerTokens.drawerOverlayColor}: ${overlaySoft};
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
