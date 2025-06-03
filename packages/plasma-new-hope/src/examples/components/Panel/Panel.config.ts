import { css } from '@linaria/core';

import { panelTokens } from '../../../components/Panel';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        borderRadius: 'none',
    },
    variations: {
        view: {
            default: css`
                ${panelTokens.background}: var(--surface-solid-card);
                ${panelTokens.shadow}: 0 3.75rem 7rem -0.5rem rgba(0, 0, 0, 0.08);
                ${panelTokens.contentBackgroundColor}: var(--surface-transparent-primary);
            `,
        },
        size: {
            m: css`
                ${panelTokens.padding}: 1.5rem;
            `,
        },
        borderRadius: {
            none: css`
                ${panelTokens.borderRadius}: 0;
            `,
            default: css`
                ${panelTokens.borderRadius}: 0.625rem;
            `,
        },
    },
};
