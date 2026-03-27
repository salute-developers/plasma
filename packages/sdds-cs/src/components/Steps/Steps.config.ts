import {
    bodyM,
    bodyS,
    inverseTextPrimary,
    onDarkSurfaceSolidPrimary,
    surfaceAccent,
    surfaceClear,
    surfacePositive,
    surfacePositiveHover,
    surfaceSolidTertiary,
    surfaceSolidTertiaryHover,
    textAccent,
    textAccentHover,
    textPositive,
    textPositiveHover,
    textPrimary,
    textPrimaryHover,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/emotion';
export const config = {
    defaults: {
        size: 's',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.loaderSpinnerColor}: ${onDarkSurfaceSolidPrimary};

                ${tokens.activeTitleColor}: ${textPrimary};
                ${tokens.activeTitleColorHover}: ${textPrimaryHover};
                ${tokens.activeIndicatorColor}: ${inverseTextPrimary};
                ${tokens.activeIndicatorBackground}: ${onDarkSurfaceSolidPrimary};

                ${tokens.bulletActiveIndicatorBorder}: solid ${onDarkSurfaceSolidPrimary};
                ${tokens.bulletActiveBackground}: ${surfaceClear};

                ${tokens.completedTitleColor}: ${textAccent};
                ${tokens.completedTitleColorHover}: ${textAccentHover};
                ${tokens.completedIndicatorColor}: ${textPositive};
                ${tokens.completedIndicatorColorHover}: ${textPositiveHover};
                ${tokens.completedIndicatorBackground}: ${surfaceClear};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceClear};
                ${tokens.completedIndicatorBorder}: ${surfacePositive};
                ${tokens.completedIndicatorBorderHover}: ${surfacePositiveHover};

                ${tokens.completedBulletBorder}: ${surfacePositive};
                ${tokens.completedBulletBorderHover}: ${surfacePositiveHover};
                ${tokens.completedBulletBackground}: ${surfacePositive};
                ${tokens.completedBulletBackgroundHover}: ${surfacePositiveHover};

                ${tokens.inactiveTitleColor}: ${textPrimary};
                ${tokens.inactiveTitleColorHover}: ${textPrimaryHover};
                ${tokens.inactiveIndicatorColor}: ${textPrimary};
                ${tokens.inactiveIndicatorColorHover}: ${textPrimary};

                ${tokens.inactiveIndicatorBackground}: ${surfaceSolidTertiary};
                ${tokens.inactiveIndicatorBackgroundHover}: ${surfaceSolidTertiaryHover};

                ${tokens.contentColor}: ${textSecondary};
                ${tokens.focusColor}: ${surfaceAccent};

                ${tokens.dividerColor}: ${surfacePositive};
                ${tokens.dividerGradientColor}: linear-gradient(
                    90deg,
                    ${surfacePositive} 35%,
                    ${onDarkSurfaceSolidPrimary} 100%
                );
                ${tokens.dividerVerticalGradientColor}: linear-gradient(
                    180deg,
                    ${surfacePositive} 35%,
                    ${onDarkSurfaceSolidPrimary} 100%
                );
                ${tokens.dividerVerticalIndentColor}: ${onDarkSurfaceSolidPrimary};

                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        size: {
            s: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.5rem;
                ${tokens.contentPaddingTop}: 0.25rem;
                ${tokens.contentSidePadding}: 1.5rem;
                ${tokens.contentVerticalPadding}: 0.5rem;
                ${tokens.verticalContentPaddingLeft}: 1rem;

                ${tokens.smallIndicatorIndentHeight}: 0.5rem;
                ${tokens.largeIndicatorIndentHeight}: 0.5rem;
                ${tokens.smallBulletIndentHeight}: 1rem;
                ${tokens.largeBulletIndentHeight}: 0.75rem;

                ${tokens.indicatorFontFamily}: ${bodyS.fontFamily};
                ${tokens.indicatorFontSize}: ${bodyS.fontSize};
                ${tokens.indicatorFontStyle}: ${bodyS.fontStyle};
                ${tokens.indicatorFontWeight}: ${bodyS.fontWeight};
                ${tokens.indicatorLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.indicatorLineHeight}: ${bodyS.lineHeight};

                ${tokens.activeIndicatorFontFamily}: ${bodyS.fontFamily};
                ${tokens.activeIndicatorFontSize}: ${bodyS.fontSize};
                ${tokens.activeIndicatorFontStyle}: ${bodyS.fontStyle};
                ${tokens.activeIndicatorFontWeight}: ${bodyS.fontWeight};
                ${tokens.activeIndicatorLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.activeIndicatorLineHeight}: ${bodyS.lineHeight};

                ${tokens.titleFontFamily}: ${bodyM.fontFamily};
                ${tokens.titleFontSize}: ${bodyM.fontSize};
                ${tokens.titleFontStyle}: ${bodyM.fontStyle};
                ${tokens.titleFontWeight}: ${bodyM.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyM.lineHeight};

                ${tokens.contentFontFamily}: ${bodyS.fontFamily};
                ${tokens.contentFontSize}: ${bodyS.fontSize};
                ${tokens.contentFontStyle}: ${bodyS.fontStyle};
                ${tokens.contentFontWeight}: ${bodyS.fontWeight};
                ${tokens.contentLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.contentLineHeight}: ${bodyS.lineHeight};

                ${tokens.dividerThickness}: 0.125rem;
            `,
        },
    },
};
