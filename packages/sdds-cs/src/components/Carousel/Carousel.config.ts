import { css, carouselNewTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.paginationDotBackground}: var(--surface-accent);
                ${tokens.paginationDotActiveBackground}: var(--text-primary);
                ${tokens.controlIconButtonColor}: var(--text-accent);
                ${tokens.controlIconButtonBackgroundColor}: var(--surface-solid-primary);
                ${tokens.controlIconButtonColorHover}: var(--text-positive);
                ${tokens.controlIconButtonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${tokens.controlIconButtonColorActive}: var(--text-accent-active);
                ${tokens.controlIconButtonBackgroundColorActive}: var(--surface-solid-primary-active);
            `,
        },
        size: {
            s: css`
                ${tokens.controlIconButtonRadius}: 0.75rem;
            `,
        },
    },
};
