import { tourTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';
import { inverseOverlaySoft, surfaceSolidCard } from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.tailColor}: ${surfaceSolidCard};
                ${tokens.overlayColor}: ${inverseOverlaySoft};
            `,
        },
        size: {
            s: css``,
        },
    },
};
