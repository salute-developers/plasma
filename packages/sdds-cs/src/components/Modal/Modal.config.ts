import { css, modalTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${modalTokens.modalOverlayWithBlurColor}: rgba(35, 35, 35, 0.2);
                ${modalTokens.modalOverlayColor}: var(--overlay-soft);
                ${modalTokens.modalBodyBackground}: var(--surface-solid-card);
                ${modalTokens.modalBodyBorderRadius}: 1.25rem;
                ${modalTokens.modalBodyPadding}: 2rem;
                ${modalTokens.modalContentPadding}: 0.625rem;
                ${modalTokens.modalCloseButtonRadius}: 0.375rem;
                ${modalTokens.modalCloseButtonColor}: var(--text-accent);
                ${modalTokens.modalCloseButtonHoverColor}: var(--text-accent-minor);
                ${modalTokens.modalCloseButtonActiveColor}: var(--text-accent-active);
                ${modalTokens.modalOutlineFocusColor}: var(--surface-accent);
            `,
        },
    },
};
