import { css, carouselNewTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import { surfaceSolidDefault, surfaceTransparentTertiary } from '@salutejs/sdds-themes/tokens/sdds_bizcom';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.paginationDotBackground}: ${surfaceTransparentTertiary};
                ${tokens.paginationDotActiveBackground}: ${surfaceSolidDefault};
            `,
        },
        size: {
            s: css``,
        },
    },
};
