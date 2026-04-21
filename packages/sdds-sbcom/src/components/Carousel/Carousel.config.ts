import { css, carouselNewTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    textPrimary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';
/*
 * NOTE: Raw var(--…) follows the SBCOM theme CSS. Prefer @salutejs-ds/sdds_sbcom/theme/tokens when the same
 * name exists there; keep raw values only for DS gaps (e.g. surfaceAccent).
 */

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
