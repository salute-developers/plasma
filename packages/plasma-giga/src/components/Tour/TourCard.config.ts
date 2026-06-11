import { tourCardTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    h4Bold,
    inverseTextPrimary,
    inverseTextPrimaryActive,
    inverseTextPrimaryHover,
    surfaceAccent,
    surfaceSolidCard,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryActive,
    surfaceTransparentTertiaryHover,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.titleColor}: ${textPrimary};
                ${tokens.descriptionColor}: ${textPrimary};
                ${tokens.dotBackground}: ${surfaceTransparentTertiary};
                ${tokens.dotBackgroundHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.dotBackgroundActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.dotActiveBackground}: ${surfaceSolidDefault};
                ${tokens.dotActiveBackgroundHover}: ${surfaceSolidDefaultHover};
                ${tokens.dotActiveBackgroundActive}: ${surfaceSolidDefaultActive};
                ${tokens.closeButtonColor}: ${inverseTextPrimary};
                ${tokens.closeButtonBackgroundColor}: ${surfaceSolidDefault};
                ${tokens.closeButtonColorHover}: ${inverseTextPrimaryHover};
                ${tokens.closeButtonColorActive}: ${inverseTextPrimaryActive};
                ${tokens.closeButtonFocusColor}: ${surfaceAccent};
            `,
        },
        size: {
            s: css`
                ${tokens.padding}: 0.625rem;
                ${tokens.borderRadius}: 2rem;
                ${tokens.gap}: 1.5rem;

                ${tokens.textGap}: 0.25rem;
                ${tokens.textPadding}: 0.625rem 0.5rem 0.5rem 0.5rem;
                ${tokens.textPaddingExtra}: 0.625rem 0.5rem 1.5rem 0.5rem;

                ${tokens.titleFontFamily}: ${h4Bold.fontFamily};
                ${tokens.titleFontSize}: ${h4Bold.fontSize};
                ${tokens.titleFontStyle}: ${h4Bold.fontStyle};
                ${tokens.titleFontWeight}: ${h4Bold.fontWeight};
                ${tokens.titleFontLineHeight}: ${h4Bold.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyS.fontWeight};
                ${tokens.descriptionFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.dotsGap}: 0.5rem;
                ${tokens.dotSize}: 0.5rem;
                ${tokens.dotContainerMargin}: 1rem 0 0.5rem 0;

                ${tokens.actionButtonsMargin}: 1.125rem 0 0 0;

                ${tokens.skipButtonMargin}: 0.25rem 0 0 0;

                ${tokens.closeButtonWidth}: 2rem;
                ${tokens.closeButtonHeight}: 2rem;
                ${tokens.closeButtonRadius}: 100%;
            `,
        },
    },
};
