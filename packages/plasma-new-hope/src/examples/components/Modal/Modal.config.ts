import {
    overlayBlur,
    overlaySoft,
    surfaceAccent,
    surfaceSolidCard,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { modalTokens } from '../../../components/Modal';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${modalTokens.modalOverlayWithBlurColor}: ${overlayBlur};
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
