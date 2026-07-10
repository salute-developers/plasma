import { surfaceSolidCard } from '@salutejs/sdds-themes/tokens/sdds_cs';
import { tourTokens as tokens, css } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.tailColor}: ${surfaceSolidCard};
                ${tokens.overlayColor}: rgba(0, 0, 0, 0.45);
            `,
        },
        size: {
            s: css``,
        },
    },
};
