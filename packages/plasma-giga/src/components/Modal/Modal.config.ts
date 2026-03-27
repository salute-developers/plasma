import {
    overlaySoft,
    surfaceAccent,
    surfaceSolidCard,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/plasma-themes/tokens/plasma_giga';
import { css, modalTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${modalTokens.modalOutlineFocusColor}: ${surfaceAccent};
            `,
        },
    },
};
