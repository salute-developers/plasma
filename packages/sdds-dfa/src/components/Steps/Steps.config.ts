import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
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
    dataGreenGradient,
    dataGreenGrayGradient,
    surfaceSolidTertiary,
    surfaceSolidTertiaryHover,
    textNegativeHover,
    textWarningHover,
    textPositiveHover,
} from '@salutejs/sdds-themes/tokens/sdds_dfa';

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

    ${tokens.completedBulletBackground}: ${surfaceSolidDefault};
    ${tokens.completedBulletBackgroundHover}: ${surfaceSolidDefaultHover};
    ${tokens.completedBulletBorder}: ${surfaceSolidTertiary};
    ${tokens.completedBulletBorderHover}: ${surfaceSolidTertiaryHover};

    ${tokens.bulletActiveBackground}: ${surfaceSolidDefault};
    ${tokens.bulletActiveIndicatorBorder}: solid ${surfaceSolidTertiary};

    ${tokens.inactiveTitleColor}: ${textSecondary};
    ${tokens.inactiveTitleColorHover}: ${textSecondaryHover};
    ${tokens.inactiveIndicatorColor}: ${textSecondary};
    ${tokens.inactiveIndicatorColorHover}: ${textSecondary};
    ${tokens.inactiveIndicatorBackground}: ${surfaceTransparentSecondary};
    ${tokens.inactiveIndicatorBackgroundHover}: ${surfaceTransparentSecondaryHover};
    
    ${tokens.inactiveBulletBackground}: ${textSecondary};
    ${tokens.inactiveBulletBackgroundHover}: ${textSecondaryHover};
    ${tokens.inactiveBulletBorder}: ${surfaceSolidTertiary};

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

    ${tokens.completedBulletBackground}: ${dataGreenGradient};
    ${tokens.completedBulletBackgroundHover}: ${dataGreenGradient};

    ${tokens.dividerGradientColor}: ${dataGreenGradient};
    ${tokens.dividerVerticalGradientColor}: ${dataGreenGradient};
    ${tokens.dividerActiveGradientColor}: ${dataGreenGrayGradient};
    ${tokens.dividerActiveVerticalGradientColor}: ${dataGreenGrayGradient};

    ${tokens.bulletActiveBackground}: ${dataGreenGradient};
    ${tokens.bulletActiveIndicatorBorder}: solid ${surfaceSolidTertiary};
`;

export const config = {
    defaults: {
        size: 'm',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.dividerColor}: ${surfaceSolidDefault};
            `,
            accent: css`
                ${tokens.dividerColor}: ${dataGreenGradient};
            `,
        },
        itemView: {
            default: css`
                ${baseItemView};
            `,
            negative: css`
                ${baseItemView};

                ${tokens.activeTitleColor}: ${textNegative};
                ${tokens.activeTitleColorHover}: ${textNegativeHover};
                ${tokens.activeIndicatorBorder}: solid ${surfaceNegative};
                ${tokens.activeIndicatorColor}: ${textNegative};

                ${tokens.bulletActiveBackground}: ${textNegative};
            `,
            warning: css`
                ${baseItemView};

                ${tokens.activeTitleColor}: ${textWarning};
                ${tokens.activeTitleColorHover}: ${textWarningHover};
                ${tokens.activeIndicatorBorder}: solid ${surfaceWarning};
                ${tokens.activeIndicatorColor}: ${textWarning};

                ${tokens.bulletActiveBackground}: ${textWarning};
            `,
            positive: css`
                ${baseItemView};

                ${tokens.activeTitleColor}: ${textPositive};
                ${tokens.activeTitleColorHover}: ${textPositiveHover};
                ${tokens.activeIndicatorBorder}: solid ${surfacePositive};
                ${tokens.activeIndicatorColor}: ${textPositive};

                ${tokens.bulletActiveBackground}: ${textPositive};
            `,
        },
        size: {
            l: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 1.5rem;
                ${tokens.activeBulletSize}: 1.5rem;

                ${tokens.titlePaddingTop}: 0.75rem;
                ${tokens.contentPaddingTop}: 0.375rem;
                ${tokens.contentSidePadding}: 2rem;
                ${tokens.contentVerticalPadding}: 1.0625rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

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
                ${tokens.bulletBorderThickness}: 0.375rem;
                ${tokens.activeBulletBorderThickness}: 0.375rem;
            `,
            m: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 1.5rem;
                ${tokens.activeBulletSize}: 1.5rem;

                ${tokens.titlePaddingTop}: 0.625rem;
                ${tokens.contentPaddingTop}: 0.375rem;
                ${tokens.contentSidePadding}: 1.75rem;
                ${tokens.contentVerticalPadding}: 0.875rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

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
                ${tokens.bulletBorderThickness}: 0.375rem;
                ${tokens.activeBulletBorderThickness}: 0.375rem;
            `,
            s: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 1.5rem;
                ${tokens.activeBulletSize}: 1.5rem;

                ${tokens.titlePaddingTop}: 0.5rem;
                ${tokens.contentPaddingTop}: 0.375rem;
                ${tokens.contentSidePadding}: 1.5rem;
                ${tokens.contentVerticalPadding}: 0.6875rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

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
                ${tokens.bulletBorderThickness}: 0.375rem;
                ${tokens.activeBulletBorderThickness}: 0.375rem;
            `,
            xs: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 1.5rem;
                ${tokens.activeBulletSize}: 1.5rem;

                ${tokens.titlePaddingTop}: 0.5rem;
                ${tokens.contentPaddingTop}: 0.25rem;
                ${tokens.contentSidePadding}: 1.5rem;
                ${tokens.contentVerticalPadding}: 0.5625rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

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
                ${tokens.bulletBorderThickness}: 0.375rem;
                ${tokens.activeBulletBorderThickness}: 0.375rem;
            `,
        },
    },
    intersections: [
        {
            view: 'accent',
            itemView: 'default',
            style: css`
                ${accentConfig};

                ${tokens.dividerGradientColor}: unset;
                ${tokens.dividerVerticalGradientColor}: unset;

                ${tokens.activeIndicatorBorder}: solid ${surfaceAccent};
                ${tokens.activeIndicatorColor}: ${textAccent};
            `,
        },
        {
            view: 'accent',
            itemView: 'negative',
            style: css`
                ${accentConfig};

                ${tokens.activeTitleColor}: ${surfaceNegative};
                ${tokens.activeTitleColorHover}: ${surfaceNegativeHover};

                ${tokens.completedBulletBackground}: ${textNegative};
                ${tokens.completedBulletBackgroundHover}: ${textNegativeHover};

                ${tokens.bulletActiveBackground}: ${textNegative};

                ${tokens.dividerGradientColor}: unset;
                ${tokens.dividerVerticalGradientColor}: unset;
            `,
        },
        {
            view: 'accent',
            itemView: 'warning',
            style: css`
                ${accentConfig};

                ${tokens.activeTitleColor}: ${surfaceWarning};
                ${tokens.activeTitleColorHover}: ${surfaceWarningHover};

                ${tokens.completedBulletBackground}: ${textWarning};
                ${tokens.completedBulletBackgroundHover}: ${textWarningHover};

                ${tokens.bulletActiveBackground}: ${textWarning};

                ${tokens.dividerGradientColor}: unset;
                ${tokens.dividerVerticalGradientColor}: unset;
            `,
        },
        {
            view: 'accent',
            itemView: 'positive',
            style: css`
                ${accentConfig};

                ${tokens.activeTitleColor}: ${surfacePositive};
                ${tokens.activeTitleColorHover}: ${surfacePositiveHover};

                ${tokens.completedBulletBackground}: ${textPositive};
                ${tokens.completedBulletBackgroundHover}: ${textPositiveHover};

                ${tokens.bulletActiveBackground}: ${textPositive};

                ${tokens.dividerGradientColor}: unset;
                ${tokens.dividerVerticalGradientColor}: unset;
            `,
        },
    ],
};
