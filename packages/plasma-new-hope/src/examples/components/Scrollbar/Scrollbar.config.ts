import { css } from '@linaria/core';

import { scrollbarTokens as tokens } from '../../../components/Scrollbar';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.trackColor}: var(--surface-transparent-primary);
                ${tokens.thumbColor}: var(--surface-transparent-tertiary);
                ${tokens.thumbColorHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.thumbColorActive}: var(--surface-transparent-tertiary-active);
            `,
        },
        size: {
            m: css`
                ${tokens.width}: 0.25rem;
                ${tokens.trackWidth}: 0.25rem;
                ${tokens.trackBorderRadius}: 0.25rem;
                ${tokens.thumbBorderRadius}: 0.25rem;
            `,
            s: css`
                ${tokens.width}: 0.125rem;
                ${tokens.trackWidth}: 0.125rem;
                ${tokens.trackBorderRadius}: 0.125rem;
                ${tokens.thumbBorderRadius}: 0.125rem;
            `,
        },
    },
};
