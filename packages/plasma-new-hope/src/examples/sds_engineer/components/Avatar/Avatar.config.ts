import { css } from '@linaria/core';

import { tokens } from '../../../../components/Avatar/Avatar.tokens';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-secondary);
                ${tokens.backgroundColor}: var(--surface-solid-primary);
            `,
        },
        size: {
            xxl: css`
                ${tokens.avatarSize}: 6.25rem;
                ${tokens.fontSize}: 1.125rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 1.5rem;
            `,
            xl: css`
                ${tokens.avatarSize}: 3.5rem;
                ${tokens.fontSize}: 1rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 1.25rem;
            `,
            l: css`
                ${tokens.avatarSize}: 2.75rem;
                ${tokens.fontSize}: 1rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 1.25rem;
            `,
            m: css`
                ${tokens.avatarSize}: 2.5rem;
                ${tokens.fontSize}: 0.875rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 1rem;
            `,
            s: css`
                ${tokens.avatarSize}: 1.75rem;
                ${tokens.fontSize}: 0.75rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 1rem;
            `,
            xs: css`
                ${tokens.avatarSize}: 1.5rem;
                ${tokens.fontSize}: 0.625rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 0.75rem;
            `,
            xxs: css`
                ${tokens.avatarSize}: 1.25rem;
                ${tokens.fontSize}: 0.625rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 0.75rem;
            `,
        },
    },
};
