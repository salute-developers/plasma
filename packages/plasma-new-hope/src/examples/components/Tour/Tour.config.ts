import { css } from '@linaria/core';

import { tourTokens as tokens } from '../../../components/Tour';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.tailColor}: var(--surface-solid-card);
                ${tokens.overlayColor}: var(--inverse-overlay-soft);
            `,
        },
        size: {
            s: css``,
        },
    },
};
