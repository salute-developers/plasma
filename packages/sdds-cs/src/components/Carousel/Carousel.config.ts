import {
    surfaceAccent,
    surfaceClear,
    surfaceSolidSecondary,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, carouselNewTokens as tokens } from '@salutejs/plasma-new-hope/emotion';
import { surfaceSolidSecondaryActive, surfaceSolidSecondaryHover } from '@salutejs/sdds-themes/tokens';

const baseControlView = `
    ${tokens.controlIconButtonColor}: ${textAccent};
    ${tokens.controlIconButtonColorHover}: ${textAccentMinor};
    ${tokens.controlIconButtonBackgroundColorHover}: ${surfaceSolidSecondaryHover};
    ${tokens.controlIconButtonColorActive}: ${textAccentActive};
    ${tokens.controlIconButtonBackgroundColorActive}: ${surfaceSolidSecondaryActive};
`;

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
            `,
        },
        controlArrowsPlacement: {
            inner: css`
                ${baseControlView}
                ${tokens.controlIconButtonBackgroundColor}: ${surfaceSolidSecondary};
                ${tokens.controlIconButtonOffset}: 0.75rem;
            `,
            outer: css`
                ${baseControlView}
                ${tokens.controlIconButtonBackgroundColor}: ${surfaceClear};
                ${tokens.controlIconButtonOffset}: 0.75rem;
            `,
        },
        size: {
            s: css`
                ${tokens.controlIconButtonWidth}: 2.5rem;
                ${tokens.controlIconButtonHeight}: 2.5rem;
                ${tokens.controlIconButtonPadding}: 1rem;
                ${tokens.controlIconButtonRadius}: 0.75rem;
            `,
        },
    },
};
