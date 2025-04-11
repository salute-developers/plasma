import { css } from '@linaria/core';

import { toastTokens } from '../../../../components/Toast';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${toastTokens.color}: var(--text-primary);
                ${toastTokens.background}: var(--surface-solid-card-brightness);

                ${toastTokens.closeIconColor}: var(--text-secondary);
                ${toastTokens.closeIconColorOnHover}: var(--text-secondary);
            `,
        },
    },
};
