import {
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    h4,
    h4Bold,
    h5,
    h5Bold,
    inverseTextPrimary,
    outlineAccent,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    outlineTransparentNegative,
    outlineTransparentPositive,
    shadowDownHardS,
    shadowDownSoftS,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidCardBrightness,
    surfaceSolidDefault,
    surfaceTransparentCard,
    surfaceTransparentNegative,
    surfaceTransparentNegativeActive,
    surfaceTransparentPositive,
    surfaceTransparentPositiveActive,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_finai';
import { dateTimePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.outlineFocusColor}: ${surfaceAccent};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};
                ${tokens.textFieldContentRightSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentRightSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCard};
                ${tokens.textFieldBackgroundErrorColor}: ${surfaceTransparentNegative};
                ${tokens.textFieldBackgroundErrorColorFocus}: ${surfaceTransparentNegativeActive};
                ${tokens.textFieldBackgroundSuccessColor}: ${surfaceTransparentPositive};
                ${tokens.textFieldBackgroundSuccessColorFocus}: ${surfaceTransparentPositiveActive};

                ${tokens.textFieldBorderColor}: ${outlineSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${tokens.textFieldBorderColorError}: ${outlineTransparentNegative};
                ${tokens.textFieldBorderColorSuccess}: ${outlineTransparentPositive};

                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorColor}: ${surfaceNegative};

                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};

                ${tokens.popoverShadow}: ${shadowDownSoftS};
                ${tokens.popoverSeparatorBackground}: ${surfaceTransparentSecondary};
                ${tokens.popoverBackgroundColor}: ${surfaceSolidCard};

                ${tokens.calendarSelectedItemBackground}: ${surfaceSolidDefault};
                ${tokens.calendarSelectedItemColor}: ${inverseTextPrimary};
                ${tokens.calendarSelectableItemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.calendarCurrentItemBorderColor}: ${surfaceSolidDefault};
                ${tokens.calendarCurrentItemBackgroundHover}: transparent;
                ${tokens.calendarCurrentItemColorHover}: ${textPrimary};
                ${tokens.calendarCurrentItemChildBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.calendarActiveItemBackground}: ${surfaceSolidDefault};
                ${tokens.calendarActiveItemColor}: ${inverseTextPrimary};
                ${tokens.calendarHoveredItemBackground}: ${surfaceAccent};
                ${tokens.calendarHoveredItemColor}: ${textPrimary};
                ${tokens.calendarRangeBackground}: ${surfaceTransparentSecondary};
                ${tokens.calendarOutlineFocusColor}: ${surfaceAccent};
                ${tokens.calendarContentPrimaryColor}: ${surfaceSolidDefault};
                ${tokens.calendarContentPrimaryDisabledColor}: ${surfaceSolidDefault};
                ${tokens.calendarHeaderArrowColor}: ${tokens.calendarContentPrimaryColor};
                ${tokens.calendarContentSecondaryColor}: ${textSecondary};
                ${tokens.calendarContentSecondaryDisabledColor}: ${textSecondary};
                ${tokens.calendarDisabledOpacity}: 0.4;
                ${tokens.calendarSeparatorBackground}: ${surfaceTransparentSecondary};

                ${tokens.iconButtonColor}: ${textPrimary};
                ${tokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${tokens.iconButtonColorHover}: ${textPrimaryHover};
                ${tokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${tokens.iconButtonColorActive}: ${textPrimaryHover};
                ${tokens.iconButtonBackgroundColorActive}: ${surfaceClear};
                ${tokens.iconButtonFocusColor}: ${surfaceAccent};

                ${tokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.tooltipBoxShadow}: ${shadowDownHardS};
                ${tokens.tooltipColor}: ${textPrimary};

                ${tokens.timePickerItemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.timePickerItemBackgroundActive}: ${surfaceTransparentSecondary};
                ${tokens.timePickerScrollbarColor}: ${surfaceTransparentTertiary};
                ${tokens.timePickerScrollbarTrackColor}: ${surfaceTransparentPrimary};

                ${tokens.shortcutColor}: ${textPrimary};
                ${tokens.shortcutBackgroundHover}: ${surfaceTransparentSecondary};
            `,
        },
        size: {
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.popoverBorderRadius}: 0.625rem;
                ${tokens.popoverGap}: 0.875rem;
                ${tokens.popoverPadding}: 0.875rem 0.875rem 1rem 0.875rem;
                ${tokens.popoverVerticalPadding}: 1.875rem;

                ${tokens.calendarWidth}: 17.5rem;
                ${tokens.calendarHeight}: 17rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.5rem;

                ${tokens.calendarYearFontFamily}: ${bodyS.fontFamily};
                ${tokens.calendarYearFontSize}: ${bodyS.fontSize};
                ${tokens.calendarYearFontStyle}: ${bodyS.fontStyle};
                ${tokens.calendarYearFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.calendarYearFontLineHeight}: ${bodyS.lineHeight};
                ${tokens.calendarYearFontWeight}: ${bodyS.fontWeight};
                ${tokens.calendarYearSelectedFontWeight}: ${bodySBold.fontWeight};

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${tokens.calendarMonthFontFamily}: ${bodyS.fontFamily};
                ${tokens.calendarMonthFontSize}: ${bodyS.fontSize};
                ${tokens.calendarMonthFontStyle}: ${bodyS.fontStyle};
                ${tokens.calendarMonthFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.calendarMonthFontLineHeight}: ${bodyS.lineHeight};
                ${tokens.calendarMonthFontWeight}: ${bodyS.fontWeight};
                ${tokens.calendarMonthSelectedFontWeight}: ${bodySBold.fontWeight};

                ${tokens.calendarQuartersPadding}: 0.5rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${tokens.calendarQuarterFontFamily}: ${bodyS.fontFamily};
                ${tokens.calendarQuarterFontSize}: ${bodyS.fontSize};
                ${tokens.calendarQuarterFontStyle}: ${bodyS.fontStyle};
                ${tokens.calendarQuarterFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.calendarQuarterFontLineHeight}: ${bodyS.lineHeight};
                ${tokens.calendarQuarterFontWeight}: ${bodyS.fontWeight};
                ${tokens.calendarQuarterSelectedFontWeight}: ${bodySBold.fontWeight};

                ${tokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;

                ${tokens.calendarDayFontFamily}: ${bodyS.fontFamily};
                ${tokens.calendarDayFontSize}: ${bodyS.fontSize};
                ${tokens.calendarDayFontStyle}: ${bodyS.fontStyle};
                ${tokens.calendarDayFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.calendarDayFontLineHeight}: ${bodyS.lineHeight};
                ${tokens.calendarDayFontWeight}: ${bodyS.fontWeight};
                ${tokens.calendarDaySelectedFontWeight}: ${bodySBold.fontWeight};

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
                ${tokens.calendarHeaderArrowGap}: 0;
                ${tokens.calendarHeaderArrowCustomSize}: 1.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: ${h4.fontFamily};
                ${tokens.calendarHeaderFontSize}: ${h4.fontSize};
                ${tokens.calendarHeaderFontStyle}: ${h4.fontStyle};
                ${tokens.calendarHeaderFontLetterSpacing}: ${h4.letterSpacing};
                ${tokens.calendarHeaderFontLineHeight}: ${h4.lineHeight};
                ${tokens.calendarHeaderFontWeight}: ${h4.fontWeight};
                ${tokens.calendarHeaderFontWeightBold}: ${h4Bold.fontWeight};

                ${tokens.iconButtonHeight}: 2.5rem;
                ${tokens.iconButtonWidth}: 2.5rem;
                ${tokens.iconButtonPadding}: 0.5rem;
                ${tokens.iconButtonRadius}: 0.625rem;

                ${tokens.timePickerColumnWidth}: 2.5rem;
                ${tokens.timePickerColumnHeight}: 17rem;
                ${tokens.timePickerColumnGap}: 0.125rem;
                ${tokens.timePickerItemHeight}: 2.5rem;
                ${tokens.timePickerItemBorderRadius}: 0.5rem;
                ${tokens.timePickerItemPadding}: 0;
                ${tokens.timePickerItemFontFamily}: ${bodyS.fontFamily};
                ${tokens.timePickerItemFontStyle}: ${bodyS.fontStyle};
                ${tokens.timePickerItemFontSize}: ${bodyS.fontSize};
                ${tokens.timePickerItemFontWeight}: ${bodyS.fontWeight};
                ${tokens.timePickerItemLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.timePickerItemLineHeight}: ${bodyS.lineHeight};
                ${tokens.timePickerScrollbarWidth}: 0.125rem;
                ${tokens.timePickerScrollbarMargin}: 0.5rem;

                ${tokens.shortcutFontFamily}: ${bodyS.fontFamily};
                ${tokens.shortcutFontStyle}: ${bodyS.fontStyle};
                ${tokens.shortcutFontSize}: ${bodyS.fontSize};
                ${tokens.shortcutFontWeight}: ${bodyS.fontWeight};
                ${tokens.shortcutLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.shortcutLineHeight}: ${bodyS.lineHeight};

                ${tokens.shortcutPadding}: 0.688rem 0.5rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.5rem;
            `,
            xs: css`
                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelOffset}: 0.375rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelFontSize}: ${bodyXS.fontSize};
                ${tokens.labelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.6875rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.popoverBorderRadius}: 0.5rem;
                ${tokens.popoverGap}: 0.75rem;
                ${tokens.popoverPadding}: 0.75rem 0.75rem 0.875rem 0.75rem;
                ${tokens.popoverVerticalPadding}: 1.625rem;

                ${tokens.calendarWidth}: 17.5rem;
                ${tokens.calendarHeight}: 15.5rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.5rem;

                ${tokens.calendarYearFontFamily}: ${bodyXS.fontFamily};
                ${tokens.calendarYearFontSize}: ${bodyXS.fontSize};
                ${tokens.calendarYearFontStyle}: ${bodyXS.fontStyle};
                ${tokens.calendarYearFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.calendarYearFontLineHeight}: ${bodyXS.lineHeight};
                ${tokens.calendarYearFontWeight}: ${bodyXS.fontWeight};
                ${tokens.calendarYearSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${tokens.calendarMonthFontFamily}: ${bodyXS.fontFamily};
                ${tokens.calendarMonthFontSize}: ${bodyXS.fontSize};
                ${tokens.calendarMonthFontStyle}: ${bodyXS.fontStyle};
                ${tokens.calendarMonthFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.calendarMonthFontLineHeight}: ${bodyXS.lineHeight};
                ${tokens.calendarMonthFontWeight}: ${bodyXS.fontWeight};
                ${tokens.calendarMonthSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${tokens.calendarQuartersPadding}: 0.375rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${tokens.calendarQuarterFontFamily}: ${bodyXS.fontFamily};
                ${tokens.calendarQuarterFontSize}: ${bodyXS.fontSize};
                ${tokens.calendarQuarterFontStyle}: ${bodyXS.fontStyle};
                ${tokens.calendarQuarterFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.calendarQuarterFontLineHeight}: ${bodyXS.lineHeight};
                ${tokens.calendarQuarterFontWeight}: ${bodyXS.fontWeight};
                ${tokens.calendarQuarterSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${tokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;

                ${tokens.calendarDayFontFamily}: ${bodyXS.fontFamily};
                ${tokens.calendarDayFontSize}: ${bodyXS.fontSize};
                ${tokens.calendarDayFontStyle}: ${bodyXS.fontStyle};
                ${tokens.calendarDayFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.calendarDayFontLineHeight}: ${bodyXS.lineHeight};
                ${tokens.calendarDayFontWeight}: ${bodyXS.fontWeight};
                ${tokens.calendarDaySelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
                ${tokens.calendarHeaderArrowGap}: 0;
                ${tokens.calendarHeaderArrowCustomSize}: 1rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: ${h5.fontFamily};
                ${tokens.calendarHeaderFontSize}: ${h5.fontSize};
                ${tokens.calendarHeaderFontStyle}: ${h5.fontStyle};
                ${tokens.calendarHeaderFontLetterSpacing}: ${h5.letterSpacing};
                ${tokens.calendarHeaderFontLineHeight}: ${h5.lineHeight};
                ${tokens.calendarHeaderFontWeight}: ${h5.fontWeight};
                ${tokens.calendarHeaderFontWeightBold}: ${h5Bold.fontWeight};

                ${tokens.iconButtonHeight}: 2rem;
                ${tokens.iconButtonWidth}: 2rem;
                ${tokens.iconButtonPadding}: 0.5rem;
                ${tokens.iconButtonRadius}: 0.5rem;

                ${tokens.timePickerColumnWidth}: 2rem;
                ${tokens.timePickerColumnHeight}: 15.5rem;
                ${tokens.timePickerColumnGap}: 0.125rem;
                ${tokens.timePickerItemHeight}: 2rem;
                ${tokens.timePickerItemBorderRadius}: 0.375rem;
                ${tokens.timePickerItemPadding}: 0;
                ${tokens.timePickerItemFontFamily}: ${bodyXS.fontFamily};
                ${tokens.timePickerItemFontStyle}: ${bodyXS.fontStyle};
                ${tokens.timePickerItemFontSize}: ${bodyXS.fontSize};
                ${tokens.timePickerItemFontWeight}: ${bodyXS.fontWeight};
                ${tokens.timePickerItemLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.timePickerItemLineHeight}: ${bodyXS.lineHeight};
                ${tokens.timePickerScrollbarWidth}: 0.125rem;
                ${tokens.timePickerScrollbarMargin}: 0.5rem;

                ${tokens.shortcutFontFamily}: ${bodyXS.fontFamily};
                ${tokens.shortcutFontStyle}: ${bodyXS.fontStyle};
                ${tokens.shortcutFontSize}: ${bodyXS.fontSize};
                ${tokens.shortcutFontWeight}: ${bodyXS.fontWeight};
                ${tokens.shortcutLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.shortcutLineHeight}: ${bodyXS.lineHeight};

                ${tokens.shortcutPadding}: 0.563rem 0.375rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.375rem;
            `,
        },
        eventTooltipSize: {
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
                ${tokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
            s: css`
                ${tokens.tooltipPaddingTop}: 0.5rem;
                ${tokens.tooltipPaddingRight}: 0.75rem;
                ${tokens.tooltipPaddingBottom}: 0.5rem;
                ${tokens.tooltipPaddingLeft}: 0.75rem;

                ${tokens.tooltipMinHeight}: 2rem;
                ${tokens.tooltipBorderRadius}: 0.5rem;

                ${tokens.tooltipTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.tooltipTextFontSize}: ${bodyXS.fontSize};
                ${tokens.tooltipTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.tooltipTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.tooltipTextFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.tooltipTextFontLineHeight}: ${bodyXS.lineHeight};

                ${tokens.tooltipContentLeftMargin}: 0.25rem;

                ${tokens.tooltipArrowMaskWidth}: 1rem;
                ${tokens.tooltipArrowMaskHeight}: 1rem;
                ${tokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.tooltipArrowHeight}: 0.375rem;
                ${tokens.tooltipArrowEdgeMargin}: 0.5625rem;
                ${tokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 1;

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondary};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondary};

                ${tokens.textFieldContentRightSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorHover}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorActive}: ${textSecondary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.textFieldBorderColor}: transparent;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.labelColorReadOnly}: ${textPrimary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondary};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondary};

                ${tokens.textFieldContentRightSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorHover}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorActive}: ${textSecondary};

                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceTransparentCard};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};

                ${tokens.textFieldBorderColorReadOnly}: ${outlineSolidPrimary};
                ${tokens.textFieldBorderWidth}: 0.125rem;
            `,
        },
    },
};
