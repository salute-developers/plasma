import {
    surfaceAccent,
    surfaceSolidCard,
    textAccent,
    textAccentActive,
    textAccentMinor,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, modalTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${modalTokens.modalOverlayWithBlurColor}: rgba(35, 35, 35, 0.2);
                ${modalTokens.modalOverlayColor}: var(--overlay-soft);
                ${modalTokens.modalBodyBackground}: ${surfaceSolidCard};
                ${modalTokens.modalBodyBorderRadius}: 1.25rem;
                ${modalTokens.modalBodyPadding}: 2rem;
                ${modalTokens.modalContentPadding}: 0.625rem;
                ${modalTokens.modalCloseButtonRadius}: 0.375rem;
                ${modalTokens.modalCloseButtonColor}: ${textAccent};
                ${modalTokens.modalCloseButtonHoverColor}: ${textAccentMinor};
                ${modalTokens.modalCloseButtonActiveColor}: ${textAccentActive};
                ${modalTokens.modalOutlineFocusColor}: ${surfaceAccent};
            `,
        },
    },
};
