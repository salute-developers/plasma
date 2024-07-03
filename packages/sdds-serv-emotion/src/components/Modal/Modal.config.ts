import { css, modalTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${modalTokens.modalOverlayWithBlurColor}: rgba(35, 35, 35, 0.2);
                ${modalTokens.modalOverlayColor}: var(--plasma-colors-overlay);
            `,
        },
    },
};
