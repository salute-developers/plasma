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
} from '@salutejs/plasma-themes/tokens/plasma_giga';
import { css, calendarDoubleTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        tooltipSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${calendarDoubleTokens.calendarSeparatorBackground}: ${surfaceTransparentSecondary};
                ${calendarDoubleTokens.calendarBackgroundColor}: transparent;
                ${calendarDoubleTokens.calendarSelectedItemBackground}: ${surfaceSolidDefault};
                ${calendarDoubleTokens.calendarSelectedItemColor}: ${inverseTextPrimary};
                ${calendarDoubleTokens.calendarSelectableItemBackgroundHover}: ${surfaceTransparentSecondary};
                ${calendarDoubleTokens.calendarCurrentItemBorderColor}: ${surfaceSolidDefault};
                ${calendarDoubleTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarDoubleTokens.calendarCurrentItemColorHover}: ${textPrimary};
                ${calendarDoubleTokens.calendarCurrentItemChildBackgroundHover}: ${surfaceTransparentSecondary};
                ${calendarDoubleTokens.calendarActiveItemBackground}: ${surfaceSolidDefault};
                ${calendarDoubleTokens.calendarActiveItemColor}: ${inverseTextPrimary};
                ${calendarDoubleTokens.calendarHoveredItemBackground}: ${surfaceAccent};
                ${calendarDoubleTokens.calendarHoveredItemColor}: ${textPrimary};
                ${calendarDoubleTokens.calendarRangeBackground}: ${surfaceTransparentSecondary};
                ${calendarDoubleTokens.calendarOutlineFocusColor}: ${surfaceAccent};
                ${calendarDoubleTokens.calendarContentPrimaryColor}: ${surfaceSolidDefault};
                ${calendarDoubleTokens.calendarContentPrimaryDisabledColor}: ${surfaceSolidDefault};
                ${calendarDoubleTokens.calendarHeaderArrowColor}: ${calendarDoubleTokens.calendarContentPrimaryColor};
                ${calendarDoubleTokens.calendarContentSecondaryColor}: ${textSecondary};
                ${calendarDoubleTokens.calendarContentSecondaryDisabledColor}: ${textSecondary};
                ${calendarDoubleTokens.calendarDisabledOpacity}: 0.4;

                ${calendarDoubleTokens.iconButtonColor}: ${textPrimary};
                ${calendarDoubleTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${calendarDoubleTokens.iconButtonColorHover}: ${textPrimaryHover};
                ${calendarDoubleTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${calendarDoubleTokens.iconButtonColorActive}: ${textPrimaryHover};
                ${calendarDoubleTokens.iconButtonBackgroundColorActive}: ${surfaceClear};
                ${calendarDoubleTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${calendarDoubleTokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${calendarDoubleTokens.tooltipBoxShadow}: ${shadowDownHardS};
                ${calendarDoubleTokens.tooltipColor}: ${textPrimary};
            `,
        },
        size: {
            xl: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 58.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 28.75rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.875rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: ${bodyL.fontFamily};
                ${calendarDoubleTokens.calendarYearFontSize}: ${bodyL.fontSize};
                ${calendarDoubleTokens.calendarYearFontStyle}: ${bodyL.fontStyle};
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarDoubleTokens.calendarYearFontLineHeight}: ${bodyL.lineHeight};
                ${calendarDoubleTokens.calendarYearFontWeight}: ${bodyL.fontWeight};
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.875rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: ${bodyL.fontFamily};
                ${calendarDoubleTokens.calendarQuarterFontSize}: ${bodyL.fontSize};
                ${calendarDoubleTokens.calendarQuarterFontStyle}: ${bodyL.fontStyle};
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: ${bodyL.lineHeight};
                ${calendarDoubleTokens.calendarQuarterFontWeight}: ${bodyL.fontWeight};
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.875rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: ${bodyL.fontFamily};
                ${calendarDoubleTokens.calendarMonthFontSize}: ${bodyL.fontSize};
                ${calendarDoubleTokens.calendarMonthFontStyle}: ${bodyL.fontStyle};
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: ${bodyL.lineHeight};
                ${calendarDoubleTokens.calendarMonthFontWeight}: ${bodyL.fontWeight};
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.875rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: ${bodyL.fontFamily};
                ${calendarDoubleTokens.calendarDayFontSize}: ${bodyL.fontSize};
                ${calendarDoubleTokens.calendarDayFontStyle}: ${bodyL.fontStyle};
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarDoubleTokens.calendarDayFontLineHeight}: ${bodyL.lineHeight};
                ${calendarDoubleTokens.calendarDayFontWeight}: ${bodyL.fontWeight};
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: ${h3.fontFamily};
                ${calendarDoubleTokens.calendarHeaderFontSize}: ${h3.fontSize};
                ${calendarDoubleTokens.calendarHeaderFontStyle}: ${h3.fontStyle};
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: ${h3.letterSpacing};
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: ${h3.lineHeight};
                ${calendarDoubleTokens.calendarHeaderFontWeight}: ${h3.fontWeight};
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: ${h3Bold.fontWeight};

                ${calendarDoubleTokens.iconButtonHeight}: 4rem;
                ${calendarDoubleTokens.iconButtonWidth}: 4rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1.25rem;
                ${calendarDoubleTokens.iconButtonRadius}: 1rem;
            `,
            l: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 51.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 25rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.75rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: ${bodyL.fontFamily};
                ${calendarDoubleTokens.calendarYearFontSize}: ${bodyL.fontSize};
                ${calendarDoubleTokens.calendarYearFontStyle}: ${bodyL.fontStyle};
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarDoubleTokens.calendarYearFontLineHeight}: ${bodyL.lineHeight};
                ${calendarDoubleTokens.calendarYearFontWeight}: ${bodyL.fontWeight};
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.75rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: ${bodyL.fontFamily};
                ${calendarDoubleTokens.calendarQuarterFontSize}: ${bodyL.fontSize};
                ${calendarDoubleTokens.calendarQuarterFontStyle}: ${bodyL.fontStyle};
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: ${bodyL.lineHeight};
                ${calendarDoubleTokens.calendarQuarterFontWeight}: ${bodyL.fontWeight};
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.75rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: ${bodyL.fontFamily};
                ${calendarDoubleTokens.calendarMonthFontSize}: ${bodyL.fontSize};
                ${calendarDoubleTokens.calendarMonthFontStyle}: ${bodyL.fontStyle};
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: ${bodyL.lineHeight};
                ${calendarDoubleTokens.calendarMonthFontWeight}: ${bodyL.fontWeight};
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.75rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: ${bodyL.fontFamily};
                ${calendarDoubleTokens.calendarDayFontSize}: ${bodyL.fontSize};
                ${calendarDoubleTokens.calendarDayFontStyle}: ${bodyL.fontStyle};
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: ${bodyL.letterSpacing};
                ${calendarDoubleTokens.calendarDayFontLineHeight}: ${bodyL.lineHeight};
                ${calendarDoubleTokens.calendarDayFontWeight}: ${bodyL.fontWeight};
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: ${bodyLBold.fontWeight};

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: ${h3.fontFamily};
                ${calendarDoubleTokens.calendarHeaderFontSize}: ${h3.fontSize};
                ${calendarDoubleTokens.calendarHeaderFontStyle}: ${h3.fontStyle};
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: ${h3.letterSpacing};
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: ${h3.lineHeight};
                ${calendarDoubleTokens.calendarHeaderFontWeight}: ${h3.fontWeight};
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: ${h3Bold.fontWeight};

                ${calendarDoubleTokens.iconButtonHeight}: 3.5rem;
                ${calendarDoubleTokens.iconButtonWidth}: 3.5rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.875rem;
            `,
            m: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 44.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 21rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: ${bodyM.fontFamily};
                ${calendarDoubleTokens.calendarYearFontSize}: ${bodyM.fontSize};
                ${calendarDoubleTokens.calendarYearFontStyle}: ${bodyM.fontStyle};
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: ${bodyM.letterSpacing};
                ${calendarDoubleTokens.calendarYearFontLineHeight}: ${bodyM.lineHeight};
                ${calendarDoubleTokens.calendarYearFontWeight}: ${bodyM.fontWeight};
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: ${bodyM.fontFamily};
                ${calendarDoubleTokens.calendarQuarterFontSize}: ${bodyM.fontSize};
                ${calendarDoubleTokens.calendarQuarterFontStyle}: ${bodyM.fontStyle};
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: ${bodyM.letterSpacing};
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: ${bodyM.lineHeight};
                ${calendarDoubleTokens.calendarQuarterFontWeight}: ${bodyM.fontWeight};
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: ${bodyM.fontFamily};
                ${calendarDoubleTokens.calendarMonthFontSize}: ${bodyM.fontSize};
                ${calendarDoubleTokens.calendarMonthFontStyle}: ${bodyM.fontStyle};
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: ${bodyM.letterSpacing};
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: ${bodyM.lineHeight};
                ${calendarDoubleTokens.calendarMonthFontWeight}: ${bodyM.fontWeight};
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${calendarDoubleTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: ${bodyM.fontFamily};
                ${calendarDoubleTokens.calendarDayFontSize}: ${bodyM.fontSize};
                ${calendarDoubleTokens.calendarDayFontStyle}: ${bodyM.fontStyle};
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: ${bodyM.letterSpacing};
                ${calendarDoubleTokens.calendarDayFontLineHeight}: ${bodyM.lineHeight};
                ${calendarDoubleTokens.calendarDayFontWeight}: ${bodyM.fontWeight};
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: ${bodyMBold.fontWeight};

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.75rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: ${h4.fontFamily};
                ${calendarDoubleTokens.calendarHeaderFontSize}: ${h4.fontSize};
                ${calendarDoubleTokens.calendarHeaderFontStyle}: ${h4.fontStyle};
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: ${h4.letterSpacing};
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: ${h4.lineHeight};
                ${calendarDoubleTokens.calendarHeaderFontWeight}: ${h4.fontWeight};
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: ${h4Bold.fontWeight};

                ${calendarDoubleTokens.iconButtonHeight}: 3rem;
                ${calendarDoubleTokens.iconButtonWidth}: 3rem;
                ${calendarDoubleTokens.iconButtonPadding}: 0.75rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.75rem;
            `,
            s: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 37.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 17rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: ${bodyS.fontFamily};
                ${calendarDoubleTokens.calendarYearFontSize}: ${bodyS.fontSize};
                ${calendarDoubleTokens.calendarYearFontStyle}: ${bodyS.fontStyle};
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarDoubleTokens.calendarYearFontLineHeight}: ${bodyS.lineHeight};
                ${calendarDoubleTokens.calendarYearFontWeight}: ${bodyS.fontWeight};
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: ${bodyS.fontFamily};
                ${calendarDoubleTokens.calendarQuarterFontSize}: ${bodyS.fontSize};
                ${calendarDoubleTokens.calendarQuarterFontStyle}: ${bodyS.fontStyle};
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: ${bodyS.lineHeight};
                ${calendarDoubleTokens.calendarQuarterFontWeight}: ${bodyS.fontWeight};
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: ${bodyS.fontFamily};
                ${calendarDoubleTokens.calendarMonthFontSize}: ${bodyS.fontSize};
                ${calendarDoubleTokens.calendarMonthFontStyle}: ${bodyS.fontStyle};
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: ${bodyS.lineHeight};
                ${calendarDoubleTokens.calendarMonthFontWeight}: ${bodyS.fontWeight};
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarDoubleTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: ${bodyS.fontFamily};
                ${calendarDoubleTokens.calendarDayFontSize}: ${bodyS.fontSize};
                ${calendarDoubleTokens.calendarDayFontStyle}: ${bodyS.fontStyle};
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarDoubleTokens.calendarDayFontLineHeight}: ${bodyS.lineHeight};
                ${calendarDoubleTokens.calendarDayFontWeight}: ${bodyS.fontWeight};
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: ${bodySBold.fontWeight};

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: ${h4.fontFamily};
                ${calendarDoubleTokens.calendarHeaderFontSize}: ${h4.fontSize};
                ${calendarDoubleTokens.calendarHeaderFontStyle}: ${h4.fontStyle};
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: ${h4.letterSpacing};
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: ${h4.lineHeight};
                ${calendarDoubleTokens.calendarHeaderFontWeight}: ${h4.fontWeight};
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: ${h4Bold.fontWeight};

                ${calendarDoubleTokens.iconButtonHeight}: 2.5rem;
                ${calendarDoubleTokens.iconButtonWidth}: 2.5rem;
                ${calendarDoubleTokens.iconButtonPadding}: 0.5rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.625rem;
            `,
            xs: css`
                ${calendarDoubleTokens.calendarContainerWidth}: 37.063rem;
                ${calendarDoubleTokens.calendarContainerHeight}: 15.5rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: ${bodyXS.fontFamily};
                ${calendarDoubleTokens.calendarYearFontSize}: ${bodyXS.fontSize};
                ${calendarDoubleTokens.calendarYearFontStyle}: ${bodyXS.fontStyle};
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarDoubleTokens.calendarYearFontLineHeight}: ${bodyXS.lineHeight};
                ${calendarDoubleTokens.calendarYearFontWeight}: ${bodyXS.fontWeight};
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: ${bodyXS.fontFamily};
                ${calendarDoubleTokens.calendarQuarterFontSize}: ${bodyXS.fontSize};
                ${calendarDoubleTokens.calendarQuarterFontStyle}: ${bodyXS.fontStyle};
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: ${bodyXS.lineHeight};
                ${calendarDoubleTokens.calendarQuarterFontWeight}: ${bodyXS.fontWeight};
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: ${bodyXS.fontFamily};
                ${calendarDoubleTokens.calendarMonthFontSize}: ${bodyXS.fontSize};
                ${calendarDoubleTokens.calendarMonthFontStyle}: ${bodyXS.fontStyle};
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: ${bodyXS.lineHeight};
                ${calendarDoubleTokens.calendarMonthFontWeight}: ${bodyXS.fontWeight};
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${calendarDoubleTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: ${bodyXS.fontFamily};
                ${calendarDoubleTokens.calendarDayFontSize}: ${bodyXS.fontSize};
                ${calendarDoubleTokens.calendarDayFontStyle}: ${bodyXS.fontStyle};
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarDoubleTokens.calendarDayFontLineHeight}: ${bodyXS.lineHeight};
                ${calendarDoubleTokens.calendarDayFontWeight}: ${bodyXS.fontWeight};
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0;
                ${calendarDoubleTokens.calendarArrowHeaderCustomSize}: 1rem;

                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: ${h5.fontFamily};
                ${calendarDoubleTokens.calendarHeaderFontSize}: ${h5.fontSize};
                ${calendarDoubleTokens.calendarHeaderFontStyle}: ${h5.fontStyle};
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: ${h5.letterSpacing};
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: ${h5.lineHeight};
                ${calendarDoubleTokens.calendarHeaderFontWeight}: ${h5.fontWeight};
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: ${h5Bold.fontWeight};

                ${calendarDoubleTokens.iconButtonHeight}: 2rem;
                ${calendarDoubleTokens.iconButtonWidth}: 2rem;
                ${calendarDoubleTokens.iconButtonPadding}: 0.5rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.5rem;
            `,
        },
        eventTooltipSize: {
            m: css`
                ${calendarDoubleTokens.tooltipPaddingTop}: 0.6875rem;
                ${calendarDoubleTokens.tooltipPaddingRight}: 0.875rem;
                ${calendarDoubleTokens.tooltipPaddingBottom}: 0.6875rem;
                ${calendarDoubleTokens.tooltipPaddingLeft}: 0.875rem;

                ${calendarDoubleTokens.tooltipMinHeight}: 2.5rem;
                ${calendarDoubleTokens.tooltipBorderRadius}: 0.625rem;

                ${calendarDoubleTokens.tooltipTextFontFamily}: ${bodyS.fontFamily};
                ${calendarDoubleTokens.tooltipTextFontSize}: ${bodyS.fontSize};
                ${calendarDoubleTokens.tooltipTextFontStyle}: ${bodyS.fontStyle};
                ${calendarDoubleTokens.tooltipTextFontWeight}: ${bodyS.fontWeight};
                ${calendarDoubleTokens.tooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${calendarDoubleTokens.tooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${calendarDoubleTokens.tooltipContentLeftMargin}: 0.375rem;

                ${calendarDoubleTokens.tooltipArrowMaskWidth}: 1.25rem;
                ${calendarDoubleTokens.tooltipArrowMaskHeight}: 1.25rem;
                ${calendarDoubleTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${calendarDoubleTokens.tooltipArrowHeight}: 0.5rem;
                ${calendarDoubleTokens.tooltipArrowEdgeMargin}: 0.625rem;
                ${calendarDoubleTokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
            s: css`
                ${calendarDoubleTokens.tooltipPaddingTop}: 0.5rem;
                ${calendarDoubleTokens.tooltipPaddingRight}: 0.75rem;
                ${calendarDoubleTokens.tooltipPaddingBottom}: 0.5rem;
                ${calendarDoubleTokens.tooltipPaddingLeft}: 0.75rem;

                ${calendarDoubleTokens.tooltipMinHeight}: 2rem;
                ${calendarDoubleTokens.tooltipBorderRadius}: 0.5rem;

                ${calendarDoubleTokens.tooltipTextFontFamily}: ${bodyXS.fontFamily};
                ${calendarDoubleTokens.tooltipTextFontSize}: ${bodyXS.fontSize};
                ${calendarDoubleTokens.tooltipTextFontStyle}: ${bodyXS.fontStyle};
                ${calendarDoubleTokens.tooltipTextFontWeight}: ${bodyXS.fontWeight};
                ${calendarDoubleTokens.tooltipTextFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${calendarDoubleTokens.tooltipTextFontLineHeight}: ${bodyXS.lineHeight};

                ${calendarDoubleTokens.tooltipContentLeftMargin}: 0.25rem;

                ${calendarDoubleTokens.tooltipArrowMaskWidth}: 1rem;
                ${calendarDoubleTokens.tooltipArrowMaskHeight}: 1rem;
                ${calendarDoubleTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${calendarDoubleTokens.tooltipArrowHeight}: 0.375rem;
                ${calendarDoubleTokens.tooltipArrowEdgeMargin}: 0.5625rem;
                ${calendarDoubleTokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
    },
};
