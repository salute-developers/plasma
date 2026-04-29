import { tourTokens as tokens, css } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.tailColor}: var(--surface-solid-card);
                ${tokens.overlayColor}: rgba(0, 0, 0, 0.45);
            `,
        },
        size: {
            s: css``,
        },
    },
};
