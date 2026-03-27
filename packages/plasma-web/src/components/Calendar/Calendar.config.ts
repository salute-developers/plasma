import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    h3,
    h3Bold,
    h4,
    h4Bold,
    h5,
    h5Bold,
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
} from '@salutejs/plasma-themes/tokens/plasma_web';
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
            xl: css`
                ${calendarBaseTokens.calendarContainerWidth}: 28rem;
                ${calendarBaseTokens.calendarContainerHeight}: 28.75rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.875rem;

                ${calendarBaseTokens.calendarYearFontFamily}: ${bodyL.fontFamily};
                ${calendarBaseTokens.calendarYearFontSize}: ${bodyL.fontSize};
                ${calendarBaseTokens.calendarYearFontStyle}: ${bodyL.fontStyle};
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarBaseTokens.calendarYearFontLineHeight}: ${bodyL.lineHeight};
                ${calendarBaseTokens.calendarYearFontWeight}: ${bodyL.fontWeight};
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarBaseTokens.calendarQuartersPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.875rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: ${bodyL.fontFamily};
                ${calendarBaseTokens.calendarQuarterFontSize}: ${bodyL.fontSize};
                ${calendarBaseTokens.calendarQuarterFontStyle}: ${bodyL.fontStyle};
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: ${bodyL.lineHeight};
                ${calendarBaseTokens.calendarQuarterFontWeight}: ${bodyL.fontWeight};
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarBaseTokens.calendarMonthsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.875rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: ${bodyL.fontFamily};
                ${calendarBaseTokens.calendarMonthFontSize}: ${bodyL.fontSize};
                ${calendarBaseTokens.calendarMonthFontStyle}: ${bodyL.fontStyle};
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarBaseTokens.calendarMonthFontLineHeight}: ${bodyL.lineHeight};
                ${calendarBaseTokens.calendarMonthFontWeight}: ${bodyL.fontWeight};
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarBaseTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.875rem;

                ${calendarBaseTokens.calendarDayFontFamily}: ${bodyL.fontFamily};
                ${calendarBaseTokens.calendarDayFontSize}: ${bodyL.fontSize};
                ${calendarBaseTokens.calendarDayFontStyle}: ${bodyL.fontStyle};
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarBaseTokens.calendarDayFontLineHeight}: ${bodyL.lineHeight};
                ${calendarBaseTokens.calendarDayFontWeight}: ${bodyL.fontWeight};
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: ${h3.fontFamily};
                ${calendarBaseTokens.calendarHeaderFontSize}: ${h3.fontSize};
                ${calendarBaseTokens.calendarHeaderFontStyle}: ${h3.fontStyle};
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: ${h3.letterSpacing};
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: ${h3.lineHeight};
                ${calendarBaseTokens.calendarHeaderFontWeight}: ${h3.fontWeight};
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: ${h3Bold.fontWeight};

                ${calendarBaseTokens.iconButtonHeight}: 4rem;
                ${calendarBaseTokens.iconButtonWidth}: 4rem;
                ${calendarBaseTokens.iconButtonPadding}: 1.25rem;
                ${calendarBaseTokens.iconButtonRadius}: 1rem;
            `,
            l: css`
                ${calendarBaseTokens.calendarContainerWidth}: 24.5rem;
                ${calendarBaseTokens.calendarContainerHeight}: 25rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.75rem;

                ${calendarBaseTokens.calendarYearFontFamily}: ${bodyL.fontFamily};
                ${calendarBaseTokens.calendarYearFontSize}: ${bodyL.fontSize};
                ${calendarBaseTokens.calendarYearFontStyle}: ${bodyL.fontStyle};
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarBaseTokens.calendarYearFontLineHeight}: ${bodyL.lineHeight};
                ${calendarBaseTokens.calendarYearFontWeight}: ${bodyL.fontWeight};
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarBaseTokens.calendarQuartersPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.75rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: ${bodyL.fontFamily};
                ${calendarBaseTokens.calendarQuarterFontSize}: ${bodyL.fontSize};
                ${calendarBaseTokens.calendarQuarterFontStyle}: ${bodyL.fontStyle};
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: ${bodyL.lineHeight};
                ${calendarBaseTokens.calendarQuarterFontWeight}: ${bodyL.fontWeight};
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarBaseTokens.calendarMonthsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.75rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: ${bodyL.fontFamily};
                ${calendarBaseTokens.calendarMonthFontSize}: ${bodyL.fontSize};
                ${calendarBaseTokens.calendarMonthFontStyle}: ${bodyL.fontStyle};
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarBaseTokens.calendarMonthFontLineHeight}: ${bodyL.lineHeight};
                ${calendarBaseTokens.calendarMonthFontWeight}: ${bodyL.fontWeight};
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarBaseTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.75rem;

                ${calendarBaseTokens.calendarDayFontFamily}: ${bodyL.fontFamily};
                ${calendarBaseTokens.calendarDayFontSize}: ${bodyL.fontSize};
                ${calendarBaseTokens.calendarDayFontStyle}: ${bodyL.fontStyle};
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarBaseTokens.calendarDayFontLineHeight}: ${bodyL.lineHeight};
                ${calendarBaseTokens.calendarDayFontWeight}: ${bodyL.fontWeight};
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: ${h3.fontFamily};
                ${calendarBaseTokens.calendarHeaderFontSize}: ${h3.fontSize};
                ${calendarBaseTokens.calendarHeaderFontStyle}: ${h3.fontStyle};
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: ${h3.letterSpacing};
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: ${h3.lineHeight};
                ${calendarBaseTokens.calendarHeaderFontWeight}: ${h3.fontWeight};
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: ${h3Bold.fontWeight};

                ${calendarBaseTokens.iconButtonHeight}: 3.5rem;
                ${calendarBaseTokens.iconButtonWidth}: 3.5rem;
                ${calendarBaseTokens.iconButtonPadding}: 1rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.875rem;
            `,
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
            xs: css`
                ${calendarBaseTokens.calendarContainerWidth}: 17.5rem;
                ${calendarBaseTokens.calendarContainerHeight}: 15.5rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarYearFontFamily}: ${bodyXS.fontFamily};
                ${calendarBaseTokens.calendarYearFontSize}: ${bodyXS.fontSize};
                ${calendarBaseTokens.calendarYearFontStyle}: ${bodyXS.fontStyle};
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarBaseTokens.calendarYearFontLineHeight}: ${bodyXS.lineHeight};
                ${calendarBaseTokens.calendarYearFontWeight}: ${bodyXS.fontWeight};
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${calendarBaseTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: ${bodyXS.fontFamily};
                ${calendarBaseTokens.calendarQuarterFontSize}: ${bodyXS.fontSize};
                ${calendarBaseTokens.calendarQuarterFontStyle}: ${bodyXS.fontStyle};
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: ${bodyXS.lineHeight};
                ${calendarBaseTokens.calendarQuarterFontWeight}: ${bodyXS.fontWeight};
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${calendarBaseTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: ${bodyXS.fontFamily};
                ${calendarBaseTokens.calendarMonthFontSize}: ${bodyXS.fontSize};
                ${calendarBaseTokens.calendarMonthFontStyle}: ${bodyXS.fontStyle};
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarBaseTokens.calendarMonthFontLineHeight}: ${bodyXS.lineHeight};
                ${calendarBaseTokens.calendarMonthFontWeight}: ${bodyXS.fontWeight};
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${calendarBaseTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarDayFontFamily}: ${bodyXS.fontFamily};
                ${calendarBaseTokens.calendarDayFontSize}: ${bodyXS.fontSize};
                ${calendarBaseTokens.calendarDayFontStyle}: ${bodyXS.fontStyle};
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarBaseTokens.calendarDayFontLineHeight}: ${bodyXS.lineHeight};
                ${calendarBaseTokens.calendarDayFontWeight}: ${bodyXS.fontWeight};
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: ${h5.fontFamily};
                ${calendarBaseTokens.calendarHeaderFontSize}: ${h5.fontSize};
                ${calendarBaseTokens.calendarHeaderFontStyle}: ${h5.fontStyle};
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: ${h5.letterSpacing};
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: ${h5.lineHeight};
                ${calendarBaseTokens.calendarHeaderFontWeight}: ${h5.fontWeight};
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: ${h5Bold.fontWeight};

                ${calendarBaseTokens.iconButtonHeight}: 2rem;
                ${calendarBaseTokens.iconButtonWidth}: 2rem;
                ${calendarBaseTokens.iconButtonPadding}: 0.5rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.5rem;
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
