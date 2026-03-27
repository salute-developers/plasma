import {
    bodyM,
    bodyS,
    inverseTextPrimary,
    outlineSolidPrimary,
    surfaceAccent,
    surfaceAccentHover,
    surfaceClear,
    textAccent,
    textAccentMinor,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 's',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.activeTitleColor}: ${textAccent};
                ${tokens.activeTitleColorHover}: ${textAccentMinor};
                ${tokens.activeIndicatorBorder}: solid ${textAccent};
                ${tokens.activeIndicatorColor}: ${textPositive};
                ${tokens.activeIndicatorBackground}: ${surfaceClear};

                ${tokens.completedIndicatorColor}: ${inverseTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${inverseTextPrimary};
                ${tokens.completedIndicatorBackground}: ${surfaceAccent};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceAccentHover};

                ${tokens.inactiveTitleColor}: ${textSecondary};
                ${tokens.inactiveTitleColorHover}: ${textSecondaryHover};
                ${tokens.inactiveIndicatorColor}: ${textPrimary};
                ${tokens.inactiveIndicatorColorHover}: ${textPrimary};
                ${tokens.inactiveIndicatorBackground}: ${outlineSolidPrimary};
                ${tokens.inactiveIndicatorBackgroundHover}: #e9eef2;

                ${tokens.contentColor}: ${textSecondary};
                ${tokens.focusColor}: ${surfaceAccent};

                ${tokens.dividerColor}: ${textPositive};

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
