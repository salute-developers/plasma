import { css, avatarTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'xxl',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-accent-gradient);
                ${tokens.backgroundColor}: linear-gradient(94deg, rgba(62, 121, 240, 0.2) 6.49%, rgba(39, 198, 229, 0.2) 93.51%);
                ${tokens.statusOnlineColor}: var(--surface-positive);
                ${tokens.statusOfflineColor}: var(--surface-solid-tertiary);
                ${tokens.scaleHover}: 1.02;
                ${tokens.fontFamily}: var(--plasma-typo-text-font-family);
            `,
        },
        size: {
            // TODO: #1044 токены типографики в Avatar
            xxl: css`
                ${tokens.avatarSize}: 6.25rem;
                ${tokens.fontSize}: 2rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 2rem;
                ${tokens.statusIconSize}: 0.75rem;
            `,
            l: css`
                ${tokens.avatarSize}: 3rem;
                ${tokens.fontSize}: 1.25rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 1.25rem;
                ${tokens.statusIconSize}: 0.5rem;
            `,
            m: css`
                ${tokens.avatarSize}: 2.25rem;
                ${tokens.fontSize}: 0.875rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 0.875rem;
                ${tokens.statusIconSize}: 0.5rem;
            `,
            s: css`
                ${tokens.avatarSize}: 1.5rem;
                ${tokens.fontSize}: 0.5rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 0.5rem;
                ${tokens.statusIconSize}: 0.375rem;
            `,
            fit: css`
                ${tokens.avatarSize}: 100%;
                ${tokens.fontSize}: 0;
                ${tokens.fontWeight}: 0;
                ${tokens.lineHeight}: 0;
                ${tokens.statusIconSize}: 0;
            `,
        },
        focused: {
            true: css`
                ${tokens.outlineSize}: 0.1rem;
                ${tokens.outlineOffset}: -0.2rem;
                ${tokens.outlineColor}: var(--surface-accent);
            `,
        },
    },
};
