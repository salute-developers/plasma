import { css, carouselNewTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    surfaceClear,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_bizcom';

const baseControlView = `
    ${tokens.controlIconButtonColor}: ${textPrimary};
    ${tokens.controlIconButtonColorHover}: ${textPrimary};
    ${tokens.controlIconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
    ${tokens.controlIconButtonColorActive}: ${textPrimary};
    ${tokens.controlIconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
`;

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
        controlArrowsPlacement: {
            inner: css`
                ${baseControlView}
                ${tokens.controlIconButtonBackgroundColor}: ${surfaceTransparentSecondary};
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
