import { css } from '@linaria/core';

import { dividerTokens } from '../../../../components/Divider';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        orientation: 'horizontal',
    },
    variations: {
        view: {
            default: css`
                ${dividerTokens.background}: var(--surface-transparent-tertiary);
            `,
        },
        size: {
            m: css`
                ${dividerTokens.borderRadius}: 0.0625rem;
            `,
        },
        orientation: {
            horizontal: css`
                ${dividerTokens.scaleSide}: 0.0625rem;
            `,
            vertical: css`
                ${dividerTokens.scaleSide}: 0.0625rem;
            `,
        },
    },
};
