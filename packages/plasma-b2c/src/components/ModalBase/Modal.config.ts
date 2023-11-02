import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                --plasma-modal-overlay-with-blur-color: rgba(35, 35, 35, 0.2);
                --plasma-modal-overlay-color: rgba(8, 8, 8, 0.56);
            `,
        },
    },
};
