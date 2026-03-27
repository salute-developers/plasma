import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    inverseTextPrimary,
    onDarkTextPrimary,
    onDarkTextPrimaryHover,
    surfaceAccent,
    surfaceAccentHover,
    surfaceClear,
    surfaceNegative,
    surfaceNegativeHover,
    surfacePositive,
    surfacePositiveHover,
    surfaceSolidDefault,
    surfaceSolidDefaultHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryHover,
    surfaceWarning,
    surfaceWarningHover,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textSecondaryHover,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { stepsTokens as tokens } from '../../../components/Steps';

const baseItemView = `
    ${tokens.activeTitleColor}: ${textPrimary};
    ${tokens.activeTitleColorHover}: ${textPrimaryHover};
    ${tokens.activeIndicatorBorder}: solid ${surfaceSolidDefault};
    ${tokens.activeIndicatorColor}: ${textPrimary};
    ${tokens.activeIndicatorBackground}: ${surfaceClear};
    
    ${tokens.completedIndicatorColor}: ${inverseTextPrimary};
    ${tokens.completedIndicatorColorHover}: ${inverseTextPrimary};
    ${tokens.completedIndicatorBackground}: ${surfaceSolidDefault};
    ${tokens.completedIndicatorBackgroundHover}: ${surfaceSolidDefaultHover};
    ${tokens.completedTitleColor}: ${textPrimary};
    ${tokens.completedTitleColorHover}: ${textPrimaryHover};

    ${tokens.inactiveTitleColor}: ${textSecondary};
    ${tokens.inactiveTitleColorHover}: ${textSecondaryHover};
    ${tokens.inactiveIndicatorColor}: ${textSecondary};
    ${tokens.inactiveIndicatorColorHover}: ${textSecondary};
    ${tokens.inactiveIndicatorBackground}: ${surfaceTransparentSecondary};
    ${tokens.inactiveIndicatorBackgroundHover}: ${surfaceTransparentSecondaryHover};

    ${tokens.contentColor}: ${textSecondary};
    ${tokens.focusColor}: ${surfaceAccent};

    ${tokens.disabledOpacity}: 0.4;
`;

const accentConfig = `
    ${tokens.completedTitleColor}: ${textPrimary};
    ${tokens.completedTitleColorHover}: ${textPrimaryHover};
    
    ${tokens.completedIndicatorBackground}: ${surfaceAccent};
    ${tokens.completedIndicatorBackgroundHover}: ${surfaceAccentHover};
    
    // Цвет контента внутри элемента Step
    ${tokens.completedIndicatorColor}: ${onDarkTextPrimary};
    ${tokens.completedIndicatorColorHover}: ${onDarkTextPrimaryHover};
`;

export const config = {
    defaults: {
        size: 'm',
        view: 'default',
        itemView: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.dividerColor}: ${surfaceSolidDefault};
            `,
            accent: css`
                ${tokens.dividerColor}: ${surfaceAccent};
            `,
        },
        itemView: {
            default: css`
                ${baseItemView};
            `,
            negative: css`
                ${baseItemView};

                ${tokens.activeTitleColor}: ${surfaceNegative};
                ${tokens.activeTitleColorHover}: ${surfaceNegativeHover};
                ${tokens.activeIndicatorBorder}: solid ${surfaceNegative};
                ${tokens.activeIndicatorColor}: ${textNegative};
            `,
            warning: css`
                ${baseItemView};

                ${tokens.activeTitleColor}: ${surfaceWarning};
                ${tokens.activeTitleColorHover}: ${surfaceWarningHover};
                ${tokens.activeIndicatorBorder}: solid ${surfaceWarning};
                ${tokens.activeIndicatorColor}: ${textWarning};
            `,
            positive: css`
                ${baseItemView};

                ${tokens.activeTitleColor}: ${surfacePositive};
                ${tokens.activeTitleColorHover}: ${surfacePositiveHover};
                ${tokens.activeIndicatorBorder}: solid ${surfacePositive};
                ${tokens.activeIndicatorColor}: ${textPositive};
            `,
        },
        size: {
            l: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 2.25rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.75rem;
                ${tokens.contentPaddingTop}: 0.375rem;
                ${tokens.contentSidePadding}: 2rem;
                ${tokens.contentVerticalPadding}: 1.0625rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

                ${tokens.smallIndicatorIndentHeight}: 1rem;
                ${tokens.largeIndicatorIndentHeight}: 0.625rem;
                ${tokens.smallBulletIndentHeight}: 1.5rem;
                ${tokens.largeBulletIndentHeight}: 1.25rem;

                ${tokens.indicatorFontFamily}: ${bodyXS.fontFamily};
                ${tokens.indicatorFontSize}: ${bodyXS.fontSize};
                ${tokens.indicatorFontStyle}: ${bodyXS.fontStyle};
                ${tokens.indicatorFontWeight}: ${bodyXS.fontWeight};
                ${tokens.indicatorLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.indicatorLineHeight}: ${bodyXS.lineHeight};

                ${tokens.activeIndicatorFontFamily}: ${bodyS.fontFamily};
                ${tokens.activeIndicatorFontSize}: ${bodyS.fontSize};
                ${tokens.activeIndicatorFontStyle}: ${bodyS.fontStyle};
                ${tokens.activeIndicatorFontWeight}: ${bodyS.fontWeight};
                ${tokens.activeIndicatorLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.activeIndicatorLineHeight}: ${bodyS.lineHeight};

                ${tokens.titleFontFamily}: ${bodyL.fontFamily};
                ${tokens.titleFontSize}: ${bodyL.fontSize};
                ${tokens.titleFontStyle}: ${bodyL.fontStyle};
                ${tokens.titleFontWeight}: ${bodyL.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyL.lineHeight};

                ${tokens.contentFontFamily}: ${bodyM.fontFamily};
                ${tokens.contentFontSize}: ${bodyM.fontSize};
                ${tokens.contentFontStyle}: ${bodyM.fontStyle};
                ${tokens.contentFontWeight}: ${bodyM.fontWeight};
                ${tokens.contentLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.contentLineHeight}: ${bodyM.lineHeight};

                ${tokens.dividerThickness}: 0.125rem;
            `,
            m: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 2.25rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.625rem;
                ${tokens.contentPaddingTop}: 0.375rem;
                ${tokens.contentSidePadding}: 1.75rem;
                ${tokens.contentVerticalPadding}: 0.875rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

                ${tokens.smallIndicatorIndentHeight}: 0.75rem;
                ${tokens.largeIndicatorIndentHeight}: 0.4375rem;
                ${tokens.smallBulletIndentHeight}: 1.25rem;
                ${tokens.largeBulletIndentHeight}: 1.125rem;

                ${tokens.indicatorFontFamily}: ${bodyXS.fontFamily};
                ${tokens.indicatorFontSize}: ${bodyXS.fontSize};
                ${tokens.indicatorFontStyle}: ${bodyXS.fontStyle};
                ${tokens.indicatorFontWeight}: ${bodyXS.fontWeight};
                ${tokens.indicatorLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.indicatorLineHeight}: ${bodyXS.lineHeight};

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
            s: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.5rem;
                ${tokens.contentPaddingTop}: 0.375rem;
                ${tokens.contentSidePadding}: 1.5rem;
                ${tokens.contentVerticalPadding}: 0.6875rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

                ${tokens.smallIndicatorIndentHeight}: 0.5rem;
                ${tokens.largeIndicatorIndentHeight}: 0.5rem;
                ${tokens.smallBulletIndentHeight}: 1rem;
                ${tokens.largeBulletIndentHeight}: 0.75rem;

                ${tokens.indicatorFontFamily}: ${bodyXS.fontFamily};
                ${tokens.indicatorFontSize}: ${bodyXS.fontSize};
                ${tokens.indicatorFontStyle}: ${bodyXS.fontStyle};
                ${tokens.indicatorFontWeight}: ${bodyXS.fontWeight};
                ${tokens.indicatorLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.indicatorLineHeight}: ${bodyXS.lineHeight};

                ${tokens.activeIndicatorFontFamily}: ${bodyXS.fontFamily};
                ${tokens.activeIndicatorFontSize}: ${bodyXS.fontSize};
                ${tokens.activeIndicatorFontStyle}: ${bodyXS.fontStyle};
                ${tokens.activeIndicatorFontWeight}: ${bodyXS.fontWeight};
                ${tokens.activeIndicatorLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.activeIndicatorLineHeight}: ${bodyXS.lineHeight};

                ${tokens.titleFontFamily}: ${bodyS.fontFamily};
                ${tokens.titleFontSize}: ${bodyS.fontSize};
                ${tokens.titleFontStyle}: ${bodyS.fontStyle};
                ${tokens.titleFontWeight}: ${bodyS.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyS.lineHeight};

                ${tokens.contentFontFamily}: ${bodyXS.fontFamily};
                ${tokens.contentFontSize}: ${bodyXS.fontSize};
                ${tokens.contentFontStyle}: ${bodyXS.fontStyle};
                ${tokens.contentFontWeight}: ${bodyXS.fontWeight};
                ${tokens.contentLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.contentLineHeight}: ${bodyXS.lineHeight};

                ${tokens.dividerThickness}: 0.125rem;
            `,
            xs: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.5rem;
                ${tokens.contentPaddingTop}: 0.25rem;
                ${tokens.contentSidePadding}: 1.5rem;
                ${tokens.contentVerticalPadding}: 0.5625rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

                ${tokens.smallIndicatorIndentHeight}: 0.25rem;
                ${tokens.largeIndicatorIndentHeight}: 0.25rem;
                ${tokens.smallBulletIndentHeight}: 0.75rem;
                ${tokens.largeBulletIndentHeight}: 0.5rem;

                ${tokens.indicatorFontFamily}: ${bodyXS.fontFamily};
                ${tokens.indicatorFontSize}: ${bodyXS.fontSize};
                ${tokens.indicatorFontStyle}: ${bodyXS.fontStyle};
                ${tokens.indicatorFontWeight}: ${bodyXS.fontWeight};
                ${tokens.indicatorLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.indicatorLineHeight}: ${bodyXS.lineHeight};

                ${tokens.activeIndicatorFontFamily}: ${bodyXS.fontFamily};
                ${tokens.activeIndicatorFontSize}: ${bodyXS.fontSize};
                ${tokens.activeIndicatorFontStyle}: ${bodyXS.fontStyle};
                ${tokens.activeIndicatorFontWeight}: ${bodyXS.fontWeight};
                ${tokens.activeIndicatorLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.activeIndicatorLineHeight}: ${bodyXS.lineHeight};

                ${tokens.titleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleFontSize}: ${bodyXS.fontSize};
                ${tokens.titleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.contentFontFamily}: ${bodyXS.fontFamily};
                ${tokens.contentFontSize}: ${bodyXS.fontSize};
                ${tokens.contentFontStyle}: ${bodyXS.fontStyle};
                ${tokens.contentFontWeight}: ${bodyXS.fontWeight};
                ${tokens.contentLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.contentLineHeight}: ${bodyXS.lineHeight};

                ${tokens.dividerThickness}: 0.125rem;
            `,
        },
    },
    intersections: [
        {
            view: 'accent',
            itemView: 'default',
            style: css`
                ${tokens.activeIndicatorBorder}: solid ${textAccent};
                ${tokens.activeIndicatorColor}: ${textAccent};

                ${accentConfig};
            `,
        },
        {
            view: 'accent',
            itemView: 'negative',
            style: css`
                ${accentConfig};
            `,
        },
        {
            view: 'accent',
            itemView: 'warning',
            style: css`
                ${accentConfig};
            `,
        },
        {
            view: 'accent',
            itemView: 'positive',
            style: css`
                ${accentConfig};
            `,
        },
    ],
};
