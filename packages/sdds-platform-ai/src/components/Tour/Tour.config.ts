import { tourTokens, css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 's',
    },
    variations: {
        view: {
            default: css``,
        },
        size: {
            s: css`
                ${tourTokens.cardPadding}: 0.75rem;
                ${tourTokens.cardRadius}: 0.75rem;
                ${tourTokens.highlightRadius}: 0.75rem;
            `,
        },
    },
};
