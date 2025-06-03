import { css } from '@linaria/core';

import { carouselNewTokens as tokens } from '../../../components/Carousel';

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
                ${tokens.controlIconButtonColor}: var(--text-primary);
                ${tokens.controlIconButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.controlIconButtonColorHover}: var(--text-primary);
                ${tokens.controlIconButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${tokens.controlIconButtonColorActive}: var(--text-primary);
                ${tokens.controlIconButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
        },
        size: {
            s: css`
                ${tokens.controlIconButtonRadius}: 100%;
            `,
        },
    },
};
