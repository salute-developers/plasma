import { informationWrapperTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs
     */
    bodyL,
    bodyS,
    surfaceNegative,
    surfaceSolidCardBrightness,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.rightHelperColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
            positive: css`
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textPositive};
                ${tokens.rightHelperColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
            warning: css`
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textWarning};
                ${tokens.rightHelperColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
            negative: css`
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textNegative};
                ${tokens.rightHelperColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
        },
        size: {
            l: css`
                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.75rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 1rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.438rem -2.938rem auto auto;

                ${tokens.titleCaptionOffset}: 0.375rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;
            `,
            m: css`
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.625rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.875rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.438rem -2.813rem auto auto;

                ${tokens.titleCaptionOffset}: 0.313rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;
            `,
            s: css`
                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.5rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.75rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.438rem -2.688rem auto auto;

                ${tokens.titleCaptionOffset}: 0.188rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;
            `,
            xs: css`
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.375rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.5rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.188rem -2.063rem auto auto;

                ${tokens.titleCaptionOffset}: 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.rightHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorMarginTop}: 0.125rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.375rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.375rem 0;
            `,
        },
        hintView: {
            default: css`
                ${tokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.tooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${tokens.tooltipColor}: ${textPrimary};
                ${tokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        hintSize: {
            m: css`
                ${tokens.tooltipPaddingTop}: 0.6875rem;
                ${tokens.tooltipPaddingRight}: 0.875rem;
                ${tokens.tooltipPaddingBottom}: 0.6875rem;
                ${tokens.tooltipPaddingLeft}: 0.875rem;

                ${tokens.tooltipMinHeight}: 2.5rem;
                ${tokens.tooltipBorderRadius}: 0.625rem;

                ${tokens.tooltipTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.tooltipTextFontSize}: ${bodyS.fontSize};
                ${tokens.tooltipTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.tooltipTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.tooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.tooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.tooltipContentLeftMargin}: 0.375rem;

                ${tokens.tooltipArrowMaskWidth}: 1.25rem;
                ${tokens.tooltipArrowMaskHeight}: 1.25rem;
                ${tokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.tooltipArrowHeight}: 0.5rem;
                ${tokens.tooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.tooltipPaddingTop}: 0.5rem;
                ${tokens.tooltipPaddingRight}: 0.75rem;
                ${tokens.tooltipPaddingBottom}: 0.5rem;
                ${tokens.tooltipPaddingLeft}: 0.75rem;

                ${tokens.tooltipMinHeight}: 2rem;
                ${tokens.tooltipBorderRadius}: 0.5rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.tooltipContentLeftMargin}: 0.25rem;

                ${tokens.tooltipArrowMaskWidth}: 1rem;
                ${tokens.tooltipArrowMaskHeight}: 1rem;
                ${tokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.tooltipArrowHeight}: 0.375rem;
                ${tokens.tooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
