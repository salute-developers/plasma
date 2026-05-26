import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs
 */
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

                ${tokens.indicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.indicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.indicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.indicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.indicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.indicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.titleFontFamily}: ${bodyS.fontFamily};
                ${tokens.titleFontSize}: ${bodyS.fontSize};
                ${tokens.titleFontStyle}: ${bodyS.fontStyle};
                ${tokens.titleFontWeight}: ${bodyS.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyS.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.indicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.activeIndicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.contentLineHeight}: var(--plasma-typo-body-xs-line-height);

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
