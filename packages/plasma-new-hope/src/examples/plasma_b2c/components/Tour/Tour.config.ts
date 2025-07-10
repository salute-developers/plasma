import { css } from '@linaria/core';

import { tokens } from '../../../../components/Tour/Tour.tokens';

export const config = {
    defaults: {
        view: 'accent',
        size: 's',
    },
    variations: {
        view: {
            default: css``,
        },
        size: {
            s: css`
                ${tokens.cardPadding}: 0.75rem;
                ${tokens.cardRadius}: 0.75rem;
                ${tokens.highlightRadius}: 0.75rem;
            `,
        },
    },
};
