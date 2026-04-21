import { css, modalTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: surfaceAccent
     */
    overlaySoft,
    surfaceSolidCard,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${modalTokens.modalOverlayWithBlurColor}: rgba(35, 35, 35, 0.2);
                ${modalTokens.modalOverlayColor}: ${overlaySoft};
                ${modalTokens.modalBodyBackground}: ${surfaceSolidCard};
                ${modalTokens.modalBodyBorderRadius}: 1.25rem;
                ${modalTokens.modalBodyPadding}: 2rem;
                ${modalTokens.modalContentPadding}: 0.625rem;
                ${modalTokens.modalCloseButtonRadius}: 0.375rem;
                ${modalTokens.modalCloseButtonColor}: ${textSecondary};
                ${modalTokens.modalCloseButtonHoverColor}: ${textSecondaryHover};
                ${modalTokens.modalCloseButtonActiveColor}: ${textSecondaryActive};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${modalTokens.modalOutlineFocusColor}: var(--surface-accent);
            `,
        },
    },
};
