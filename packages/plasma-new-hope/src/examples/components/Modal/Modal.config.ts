import { css } from 'styled-components';

import { modalTokens } from '../../../components/Modal';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${modalTokens.modalOverlayWithBlurColor}: var(--overlay-blur);
                ${modalTokens.modalOverlayColor}: var(--overlay-soft);
                ${modalTokens.modalBodyBackground}: var(--surface-solid-card);
                ${modalTokens.modalBodyBorderRadius}: 1.25rem;
                ${modalTokens.modalCloseButtonColor}: var(--text-secondary);
                ${modalTokens.modalCloseButtonHoverColor}: var(--text-secondary-hover);
                ${modalTokens.modalCloseButtonActiveColor}: var(--text-secondary-active);
                ${modalTokens.modalOutlineFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            s: css`
                ${modalTokens.modalWidth}: 30rem;
                ${modalTokens.modalBodyPadding}: 2rem;
                ${modalTokens.modalContentPadding}: 0.625rem;
                ${modalTokens.modalCloseButtonSize}: 2.5rem;
                ${modalTokens.modalCloseButtonTop}: 1.5rem;
                ${modalTokens.modalCloseButtonRight}: 1.5rem;
                ${modalTokens.modalCloseButtonRadius}: 1.25rem;
                ${modalTokens.modalHeaderPadding}: 1.5rem 1.5rem 0.75rem;
                ${modalTokens.modalFooterPadding}: 1.125rem 1.5rem;
                ${modalTokens.modalFooterGap}: 0.5rem;
            `,
            m: css`
                ${modalTokens.modalWidth}: 40rem;
                ${modalTokens.modalBodyPadding}: 2rem;
                ${modalTokens.modalContentPadding}: 0.625rem;
                ${modalTokens.modalCloseButtonSize}: 2.5rem;
                ${modalTokens.modalCloseButtonTop}: 2rem;
                ${modalTokens.modalCloseButtonRight}: 2rem;
                ${modalTokens.modalCloseButtonRadius}: 1.25rem;
                ${modalTokens.modalHeaderPadding}: 2rem;
                ${modalTokens.modalFooterPadding}: 0.875rem 1.5rem;
                ${modalTokens.modalFooterGap}: 0.5rem;
            `,
        },
    },
};
