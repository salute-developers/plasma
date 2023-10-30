import { css } from '@linaria/core';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                --plasma-modal-overlay-with-blur-color: var(--overlay-blur);
                --plasma-modal-overlay-color: var(--overlay-soft);
            `,
        },
    },
};
