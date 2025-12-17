import { css, cardTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.solidBackground}: var(--surface-solid-card);
            `,
        },
        size: {
            l: css`
                ${tokens.outlineWidth}: 0.75rem;
                ${tokens.borderWidth}: 0.0625rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.contentBorderRadius}: 0.5rem;
            `,
        },
    },
};
