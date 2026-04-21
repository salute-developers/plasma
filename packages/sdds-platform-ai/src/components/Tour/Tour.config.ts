import { tourTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.tailColor}: var(--surface-solid-card);
                ${tokens.overlayColor}: var(--inverse-overlay-soft);
            `,
        },
        size: {
            s: css``,
        },
    },
};
