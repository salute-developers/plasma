import { css, modalTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    overlaySoft,
    surfaceAccent,
    surfaceSolidCard,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${modalTokens.modalOverlayWithBlurColor}: rgba(35, 35, 35, 0.2);
                ${modalTokens.modalOverlayColor}: ${overlaySoft};
                ${modalTokens.modalBodyBackground}: ${surfaceSolidCard};
                ${modalTokens.modalBodyBorderRadius}: 1.25rem;
                ${modalTokens.modalCloseButtonColor}: ${textPrimary};
                ${modalTokens.modalCloseButtonHoverColor}: ${textPrimaryHover};
                ${modalTokens.modalCloseButtonActiveColor}: ${textPrimaryActive};
                ${modalTokens.modalOutlineFocusColor}: ${surfaceAccent};
            `,
        },
        size: {
            s: css`
                ${modalTokens.modalWidth}: 30rem;
                ${modalTokens.modalBodyPadding}: 0rem;
                ${modalTokens.modalContentPadding}: 0rem;
                ${modalTokens.modalCloseButtonSize}: 2.5rem;
                ${modalTokens.modalCloseButtonTop}: 1.125rem;
                ${modalTokens.modalCloseButtonRight}: 1.5rem;
                ${modalTokens.modalCloseButtonRadius}: 1.25rem;
                ${modalTokens.modalHeaderPadding}: 1.5rem 1.5rem 0.75rem;
                ${modalTokens.modalFooterPadding}: 1.5rem;
                ${modalTokens.modalFooterGap}: 0.5rem;
            `,
            m: css`
                ${modalTokens.modalWidth}: 40rem;
                ${modalTokens.modalBodyPadding}: 0rem;
                ${modalTokens.modalContentPadding}: 0rem;
                ${modalTokens.modalCloseButtonSize}: 2.5rem;
                ${modalTokens.modalCloseButtonTop}: 2rem;
                ${modalTokens.modalCloseButtonRight}: 2rem;
                ${modalTokens.modalCloseButtonRadius}: 1.25rem;
                ${modalTokens.modalHeaderPadding}: 2rem;
                ${modalTokens.modalFooterPadding}: 2rem;
                ${modalTokens.modalFooterGap}: 0.5rem;
            `,
        },
    },
};
