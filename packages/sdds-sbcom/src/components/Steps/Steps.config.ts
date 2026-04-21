import { stepsTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, surfaceAccent, surfaceAccentHover
     */
    bodyL,
    bodyS,
    inverseTextPrimary,
    onDarkTextPrimary,
    onDarkTextPrimaryHover,
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
    /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
    ${tokens.focusColor}: var(--surface-accent);

    ${tokens.disabledOpacity}: 0.4;
`;

const accentConfig = `
    ${tokens.completedTitleColor}: ${textPrimary};
    ${tokens.completedTitleColorHover}: ${textPrimaryHover};
    
    /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
    ${tokens.completedIndicatorBackground}: var(--surface-accent);
    /* NOTE: no token surfaceAccentHover in @salutejs/sdds-themes/tokens */
    ${tokens.completedIndicatorBackgroundHover}: var(--surface-accent-hover);
    
    /* Цвет контента внутри элемента Step */
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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tokens.dividerColor}: var(--surface-accent);
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

                ${tokens.titleFontFamily}: ${bodyL.fontFamily};
                ${tokens.titleFontSize}: ${bodyL.fontSize};
                ${tokens.titleFontStyle}: ${bodyL.fontStyle};
                ${tokens.titleFontWeight}: ${bodyL.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyL.lineHeight};

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.contentFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.contentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.contentLineHeight}: var(--plasma-typo-body-m-line-height);

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

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.titleLineHeight}: var(--plasma-typo-body-m-line-height);

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

                ${tokens.smallIndicatorIndentHeight}: 0.25rem;
                ${tokens.largeIndicatorIndentHeight}: 0.25rem;
                ${tokens.smallBulletIndentHeight}: 0.75rem;
                ${tokens.largeBulletIndentHeight}: 0.5rem;

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
