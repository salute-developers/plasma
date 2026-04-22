import { tourTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';

const tourCss = tokens as typeof tokens & { tailColor: string; overlayColor: string };

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tourCss.tailColor}: var(--surface-solid-card);
                ${tourCss.overlayColor}: var(--inverse-overlay-soft);
            `,
        },
        size: {
            s: css``,
        },
    },
};
