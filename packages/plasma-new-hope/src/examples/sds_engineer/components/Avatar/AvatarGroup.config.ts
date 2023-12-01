import { css } from '@linaria/core';

import { tokens } from '../../../../components/Avatar/AvatarGroup.tokens';

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
            xl: css`
                ${tokens.avatarGroupSize}: 3.5rem;
                ${tokens.fontSize}: 1rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 1.25rem;
            `,
            l: css`
                ${tokens.avatarGroupSize}: 2.75rem;
                ${tokens.fontSize}: 1rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 1.25rem;
            `,
            m: css`
                ${tokens.avatarGroupSize}: 2.5rem;
                ${tokens.fontSize}: 0.875rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 1rem;
            `,
            s: css`
                ${tokens.avatarGroupSize}: 1.75rem;
                ${tokens.fontSize}: 0.75rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 1rem;
            `,
            xs: css`
                ${tokens.avatarGroupSize}: 1.5rem;
                ${tokens.fontSize}: 0.625rem;
                ${tokens.fontWeight}: 500;
                ${tokens.lineHeight}: 0.75rem;
            `,
        },
    },
};
