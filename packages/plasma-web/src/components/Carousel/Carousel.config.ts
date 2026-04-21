import {
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_web';
import { css, carouselNewTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

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
