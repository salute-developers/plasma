import {
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { carouselNewTokens as tokens } from '../../../components/Carousel';

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
                ${tokens.controlIconButtonColor}: ${textPrimary};
                ${tokens.controlIconButtonBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.controlIconButtonColorHover}: ${textPrimary};
                ${tokens.controlIconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.controlIconButtonColorActive}: ${textPrimary};
                ${tokens.controlIconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
        },
        size: {
            s: css`
                ${tokens.controlIconButtonRadius}: 100%;
            `,
        },
    },
};
