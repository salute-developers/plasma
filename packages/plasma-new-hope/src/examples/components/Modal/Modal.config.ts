import { css } from '@linaria/core';

import { modalTokens } from '../../../components/Modal';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${modalTokens.modalOverlayWithBlurColor}: var(--overlay-blur);
                ${modalTokens.modalOverlayColor}: var(--overlay-soft);
                ${modalTokens.modalBodyBackground}: var(--surface-solid-card);
                ${modalTokens.modalBodyBorderRadius}: 1.25rem;
                ${modalTokens.modalBodyPadding}: 2rem;
                ${modalTokens.modalContentPadding}: 0.625rem;
                ${modalTokens.modalCloseButtonRadius}: 0.375rem;
                ${modalTokens.modalCloseButtonColor}: var(--text-secondary);
                ${modalTokens.modalCloseButtonHoverColor}: var(--text-secondary-hover);
                ${modalTokens.modalCloseButtonActiveColor}: var(--text-secondary-active);
                ${modalTokens.modalOutlineFocusColor}: var(--surface-accent);
            `,
        },
    },
};
