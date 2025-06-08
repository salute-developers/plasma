import { css } from '@linaria/core';

import { carouselNewTokens as tokens } from '../../../../components/Carousel';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.paginationDotBackground}: var(--surface-transparent-tertiary);
                ${tokens.paginationDotActiveBackground}: var(--surface-solid-default);
            `,
        },
        size: {
            s: css``,
        },
    },
};
