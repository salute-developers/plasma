import { css } from '@linaria/core';

import { modalTokens } from '../../../../components/Modal';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${modalTokens.modalOverlayWithBlurColor}: var(--overlay-blur);
                ${modalTokens.modalOverlayColor}: var(--overlay-soft);
            `,
        },
    },
};
