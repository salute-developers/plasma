import {
    surfaceAccent,
    surfaceSolidPrimary,
    surfaceSolidPrimaryActive,
    surfaceSolidPrimaryHover,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, carouselNewTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.paginationDotBackground}: ${surfaceAccent};
                ${tokens.paginationDotActiveBackground}: ${textPrimary};
                ${tokens.controlIconButtonColor}: ${textAccent};
                ${tokens.controlIconButtonBackgroundColor}: ${surfaceSolidPrimary};
                ${tokens.controlIconButtonColorHover}: ${textAccentMinor};
                ${tokens.controlIconButtonBackgroundColorHover}: ${surfaceSolidPrimaryHover};
                ${tokens.controlIconButtonColorActive}: ${textAccentActive};
                ${tokens.controlIconButtonBackgroundColorActive}: ${surfaceSolidPrimaryActive};
            `,
        },
        size: {
            s: css`
                ${tokens.controlIconButtonRadius}: 0.75rem;
            `,
        },
    },
};
