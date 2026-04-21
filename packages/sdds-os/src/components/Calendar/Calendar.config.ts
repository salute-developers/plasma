import {
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    h4,
    h4Bold,
    inverseTextPrimary,
    shadowDownHardS,
    surfaceAccent,
    surfaceClear,
    surfaceSolidCardBrightness,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    textPrimary,
    textPrimaryHover,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_os';
import { css, calendarBaseTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        tooltipSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${calendarBaseTokens.calendarSelectedItemBackground}: ${surfaceSolidDefault};
                ${calendarBaseTokens.calendarSelectedItemColor}: ${inverseTextPrimary};
                ${calendarBaseTokens.calendarSelectableItemBackgroundHover}: ${surfaceTransparentSecondary};
                ${calendarBaseTokens.calendarCurrentItemBorderColor}: ${surfaceSolidDefault};
                ${calendarBaseTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarBaseTokens.calendarCurrentItemColorHover}: ${textPrimary};
                ${calendarBaseTokens.calendarCurrentItemChildBackgroundHover}: ${surfaceTransparentSecondary};
                ${calendarBaseTokens.calendarActiveItemBackground}: ${surfaceSolidDefault};
                ${calendarBaseTokens.calendarActiveItemColor}: ${inverseTextPrimary};
                ${calendarBaseTokens.calendarHoveredItemBackground}: ${surfaceAccent};
                ${calendarBaseTokens.calendarHoveredItemColor}: ${textPrimary};
                ${calendarBaseTokens.calendarRangeBackground}: ${surfaceTransparentSecondary};
                ${calendarBaseTokens.calendarOutlineFocusColor}: ${surfaceAccent};
                ${calendarBaseTokens.calendarContentPrimaryColor}: ${surfaceSolidDefault};
                ${calendarBaseTokens.calendarContentPrimaryDisabledColor}: ${surfaceSolidDefault};
                ${calendarBaseTokens.calendarContentSecondaryColor}: ${textSecondary};
                ${calendarBaseTokens.calendarContentSecondaryDisabledColor}: ${textSecondary};
                ${calendarBaseTokens.calendarHeaderArrowColor}: ${calendarBaseTokens.calendarContentPrimaryColor};
                ${calendarBaseTokens.calendarDayOfWeekColor}: ${textSecondary};
                ${calendarBaseTokens.calendarDisabledOpacity}: 0.4;

                ${calendarBaseTokens.iconButtonColor}: ${textPrimary};
                ${calendarBaseTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${calendarBaseTokens.iconButtonColorHover}: ${textPrimaryHover};
                ${calendarBaseTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${calendarBaseTokens.iconButtonColorActive}: ${textPrimaryHover};
                ${calendarBaseTokens.iconButtonBackgroundColorActive}: ${surfaceClear};
                ${calendarBaseTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${calendarBaseTokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${calendarBaseTokens.tooltipBoxShadow}: ${shadowDownHardS};
                ${calendarBaseTokens.tooltipColor}: ${textPrimary};
            `,
        },
        size: {
            m: css`
                ${calendarBaseTokens.calendarContainerWidth}: 21rem;
                ${calendarBaseTokens.calendarContainerHeight}: 21rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.625rem;

                ${calendarBaseTokens.calendarYearFontFamily}: ${bodyM.fontFamily};
                ${calendarBaseTokens.calendarYearFontSize}: ${bodyM.fontSize};
                ${calendarBaseTokens.calendarYearFontStyle}: ${bodyM.fontStyle};
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: ${bodyM.letterSpacing};
                ${calendarBaseTokens.calendarYearFontLineHeight}: ${bodyM.lineHeight};
                ${calendarBaseTokens.calendarYearFontWeight}: ${bodyM.fontWeight};
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${calendarBaseTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.625rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: ${bodyM.fontFamily};
                ${calendarBaseTokens.calendarQuarterFontSize}: ${bodyM.fontSize};
                ${calendarBaseTokens.calendarQuarterFontStyle}: ${bodyM.fontStyle};
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: ${bodyM.letterSpacing};
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: ${bodyM.lineHeight};
                ${calendarBaseTokens.calendarQuarterFontWeight}: ${bodyM.fontWeight};
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${calendarBaseTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.625rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: ${bodyM.fontFamily};
                ${calendarBaseTokens.calendarMonthFontSize}: ${bodyM.fontSize};
                ${calendarBaseTokens.calendarMonthFontStyle}: ${bodyM.fontStyle};
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: ${bodyM.letterSpacing};
                ${calendarBaseTokens.calendarMonthFontLineHeight}: ${bodyM.lineHeight};
                ${calendarBaseTokens.calendarMonthFontWeight}: ${bodyM.fontWeight};
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${calendarBaseTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.625rem;

                ${calendarBaseTokens.calendarDayFontFamily}: ${bodyM.fontFamily};
                ${calendarBaseTokens.calendarDayFontSize}: ${bodyM.fontSize};
                ${calendarBaseTokens.calendarDayFontStyle}: ${bodyM.fontStyle};
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: ${bodyM.letterSpacing};
                ${calendarBaseTokens.calendarDayFontLineHeight}: ${bodyM.lineHeight};
                ${calendarBaseTokens.calendarDayFontWeight}: ${bodyM.fontWeight};
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: ${bodyMBold.fontWeight};

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 0.75rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: ${h4.fontFamily};
                ${calendarBaseTokens.calendarHeaderFontSize}: ${h4.fontSize};
                ${calendarBaseTokens.calendarHeaderFontStyle}: ${h4.fontStyle};
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: ${h4.letterSpacing};
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: ${h4.lineHeight};
                ${calendarBaseTokens.calendarHeaderFontWeight}: ${h4.fontWeight};
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: ${h4Bold.fontWeight};

                ${calendarBaseTokens.iconButtonHeight}: 3rem;
                ${calendarBaseTokens.iconButtonWidth}: 3rem;
                ${calendarBaseTokens.iconButtonPadding}: 0.75rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.75rem;
            `,
            s: css`
                ${calendarBaseTokens.calendarContainerWidth}: 17.5rem;
                ${calendarBaseTokens.calendarContainerHeight}: 17rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarYearFontFamily}: ${bodyS.fontFamily};
                ${calendarBaseTokens.calendarYearFontSize}: ${bodyS.fontSize};
                ${calendarBaseTokens.calendarYearFontStyle}: ${bodyS.fontStyle};
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarBaseTokens.calendarYearFontLineHeight}: ${bodyS.lineHeight};
                ${calendarBaseTokens.calendarYearFontWeight}: ${bodyS.fontWeight};
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarBaseTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: ${bodyS.fontFamily};
                ${calendarBaseTokens.calendarQuarterFontSize}: ${bodyS.fontSize};
                ${calendarBaseTokens.calendarQuarterFontStyle}: ${bodyS.fontStyle};
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: ${bodyS.lineHeight};
                ${calendarBaseTokens.calendarQuarterFontWeight}: ${bodyS.fontWeight};
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarBaseTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: ${bodyS.fontFamily};
                ${calendarBaseTokens.calendarMonthFontSize}: ${bodyS.fontSize};
                ${calendarBaseTokens.calendarMonthFontStyle}: ${bodyS.fontStyle};
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarBaseTokens.calendarMonthFontLineHeight}: ${bodyS.lineHeight};
                ${calendarBaseTokens.calendarMonthFontWeight}: ${bodyS.fontWeight};
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarBaseTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarDayFontFamily}: ${bodyS.fontFamily};
                ${calendarBaseTokens.calendarDayFontSize}: ${bodyS.fontSize};
                ${calendarBaseTokens.calendarDayFontStyle}: ${bodyS.fontStyle};
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarBaseTokens.calendarDayFontLineHeight}: ${bodyS.lineHeight};
                ${calendarBaseTokens.calendarDayFontWeight}: ${bodyS.fontWeight};
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: ${h4.fontFamily};
                ${calendarBaseTokens.calendarHeaderFontSize}: ${h4.fontSize};
                ${calendarBaseTokens.calendarHeaderFontStyle}: ${h4.fontStyle};
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: ${h4.letterSpacing};
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: ${h4.lineHeight};
                ${calendarBaseTokens.calendarHeaderFontWeight}: ${h4.fontWeight};
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: ${h4Bold.fontWeight};

                ${calendarBaseTokens.iconButtonHeight}: 2.5rem;
                ${calendarBaseTokens.iconButtonWidth}: 2.5rem;
                ${calendarBaseTokens.iconButtonPadding}: 0.5rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.625rem;
            `,
        },
        eventTooltipSize: {
            m: css`
                ${calendarBaseTokens.tooltipPaddingTop}: 0.6875rem;
                ${calendarBaseTokens.tooltipPaddingRight}: 0.875rem;
                ${calendarBaseTokens.tooltipPaddingBottom}: 0.6875rem;
                ${calendarBaseTokens.tooltipPaddingLeft}: 0.875rem;

                ${calendarBaseTokens.tooltipMinHeight}: 2.5rem;
                ${calendarBaseTokens.tooltipBorderRadius}: 0.625rem;

                ${calendarBaseTokens.tooltipTextFontFamily}: ${bodyS.fontFamily};
                ${calendarBaseTokens.tooltipTextFontSize}: ${bodyS.fontSize};
                ${calendarBaseTokens.tooltipTextFontStyle}: ${bodyS.fontStyle};
                ${calendarBaseTokens.tooltipTextFontWeight}: ${bodyS.fontWeight};
                ${calendarBaseTokens.tooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarBaseTokens.tooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${calendarBaseTokens.tooltipContentLeftMargin}: 0.375rem;

                ${calendarBaseTokens.tooltipArrowMaskWidth}: 1.25rem;
                ${calendarBaseTokens.tooltipArrowMaskHeight}: 1.25rem;
                ${calendarBaseTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${calendarBaseTokens.tooltipArrowHeight}: 0.5rem;
                ${calendarBaseTokens.tooltipArrowEdgeMargin}: 0.625rem;
                ${calendarBaseTokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
            s: css`
                ${calendarBaseTokens.tooltipPaddingTop}: 0.5rem;
                ${calendarBaseTokens.tooltipPaddingRight}: 0.75rem;
                ${calendarBaseTokens.tooltipPaddingBottom}: 0.5rem;
                ${calendarBaseTokens.tooltipPaddingLeft}: 0.75rem;

                ${calendarBaseTokens.tooltipMinHeight}: 2rem;
                ${calendarBaseTokens.tooltipBorderRadius}: 0.5rem;

                ${calendarBaseTokens.tooltipTextFontFamily}: ${bodyXS.fontFamily};
                ${calendarBaseTokens.tooltipTextFontSize}: ${bodyXS.fontSize};
                ${calendarBaseTokens.tooltipTextFontStyle}: ${bodyXS.fontStyle};
                ${calendarBaseTokens.tooltipTextFontWeight}: ${bodyXS.fontWeight};
                ${calendarBaseTokens.tooltipTextFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarBaseTokens.tooltipTextFontLineHeight}: ${bodyXS.lineHeight};

                ${calendarBaseTokens.tooltipContentLeftMargin}: 0.25rem;

                ${calendarBaseTokens.tooltipArrowMaskWidth}: 1rem;
                ${calendarBaseTokens.tooltipArrowMaskHeight}: 1rem;
                ${calendarBaseTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${calendarBaseTokens.tooltipArrowHeight}: 0.375rem;
                ${calendarBaseTokens.tooltipArrowEdgeMargin}: 0.5625rem;
                ${calendarBaseTokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
    },
};
