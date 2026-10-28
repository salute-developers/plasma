import {
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    inverseOutlineSolidSecondary,
    inverseTextPrimary,
    outlineAccent,
    outlineNegative,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    shadowDownHardM,
    shadowDownSoftS,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidCardBrightness,
    surfaceSolidPrimary,
    surfaceSolidSecondary,
    surfaceSolidTertiary,
    surfaceTransparentAccent,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textNegative,
    textPositive,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { dateTimePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/emotion';

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
                ${tokens.textFieldContentRightSlotColor}: ${textAccent};
                ${tokens.textFieldContentRightSlotColorHover}: ${textAccentMinor};
                ${tokens.textFieldContentRightSlotColorActive}: ${textAccentActive};

                ${tokens.textFieldBackgroundColor}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundColorHover}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundErrorColor}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundErrorColorFocus}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundSuccessColor}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundSuccessColorFocus}: ${surfaceSolidCard};

                ${tokens.textFieldBorderColor}: ${outlineSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${tokens.textFieldBorderColorError}: ${outlineNegative};
                ${tokens.textFieldBorderColorErrorHover}: ${outlineNegative};
                ${tokens.textFieldBorderColorErrorFocus}: ${outlineNegative};
                ${tokens.textFieldBorderColorSuccess}: ${outlineAccent};
                ${tokens.textFieldBorderColorSuccessHover}: ${outlineAccent};
                ${tokens.textFieldBorderColorSuccessFocus}: ${outlineAccent};

                ${tokens.titleCaptionColor}: ${textSecondary};
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

                ${tokens.textFieldTextBeforeColor}: ${textSecondary};
                ${tokens.textFieldTextAfterColor}: ${textSecondary};

                ${tokens.popoverShadow}: ${shadowDownSoftS};
                ${tokens.popoverSeparatorBackground}: ${surfaceSolidTertiary};
                ${tokens.popoverBackgroundColor}: ${surfaceSolidCard};

                ${tokens.calendarSelectedItemBackground}: ${surfaceAccent};
                ${tokens.calendarSelectedItemColor}: ${inverseTextPrimary};
                ${tokens.calendarSelectableItemBackgroundHover}: ${surfaceTransparentAccent};
                ${tokens.calendarCurrentItemBorderColor}: ${inverseOutlineSolidSecondary};
                ${tokens.calendarCurrentItemBackgroundHover}: transparent;
                ${tokens.calendarCurrentItemColorHover}: ${textPrimary};
                ${tokens.calendarCurrentItemChildBackgroundHover}: ${surfaceTransparentAccent};
                ${tokens.calendarActiveItemBackground}: ${surfaceAccent};
                ${tokens.calendarActiveItemColor}: ${inverseTextPrimary};
                ${tokens.calendarHoveredItemBackground}: ${surfaceAccent};
                ${tokens.calendarHoveredItemColor}: ${textPrimary};
                ${tokens.calendarRangeBackground}: ${surfaceTransparentAccent};
                ${tokens.calendarOutlineFocusColor}: ${surfaceAccent};
                ${tokens.calendarContentPrimaryColor}: ${textPrimary};
                ${tokens.calendarContentSecondaryColor}: ${textSecondary};
                ${tokens.calendarContentPrimaryDisabledColor}: ${textSecondary};
                ${tokens.calendarContentSecondaryDisabledColor}: ${textSecondary};
                ${tokens.calendarHeaderArrowColor}: ${textAccent};
                ${tokens.calendarDayOfWeekColor}: ${textSecondary};
                ${tokens.calendarDisabledOpacity}: 0.4;
                ${tokens.calendarSeparatorBackground}: ${surfaceSolidTertiary};

                ${tokens.iconButtonColor}: ${textAccent};
                ${tokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${tokens.iconButtonColorHover}: ${textPrimaryHover};
                ${tokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${tokens.iconButtonColorActive}: ${textPrimaryHover};
                ${tokens.iconButtonBackgroundColorActive}: ${surfaceClear};
                ${tokens.iconButtonFocusColor}: ${surfaceAccent};

                ${tokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.tooltipBoxShadow}: ${shadowDownHardM};
                ${tokens.tooltipColor}: ${textPrimary};

                ${tokens.timePickerItemBackgroundHover}: ${surfaceSolidSecondary};
                ${tokens.timePickerItemBackgroundActive}: ${surfaceSolidSecondary};
                ${tokens.timePickerScrollbarColor}: ${surfaceSolidTertiary};
                ${tokens.timePickerScrollbarTrackColor}: ${surfaceSolidPrimary};

                ${tokens.shortcutColor}: ${textPrimary};
                ${tokens.shortcutBackgroundHover}: ${surfaceTransparentAccent};

                ${tokens.timeGridDisabledOpacity}: 0.4;
            `,
        },
        size: {
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.375rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.titleCaptionOffset}: 0.25rem;
                ${tokens.titleCaptionMargin}: 0.1875rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyS.lineHeight};

                ${tokens.popoverBorderRadius}: 0.625rem;
                ${tokens.popoverGap}: 0.75rem;
                ${tokens.popoverPadding}: 0.75rem 1rem 0.875rem 1rem;
                ${tokens.popoverVerticalPadding}: 1.625rem;

                ${tokens.calendarWidth}: 19.5rem;
                ${tokens.calendarHeight}: 18.625rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.5rem;

                ${tokens.calendarYearFontFamily}: ${bodyS.fontFamily};
                ${tokens.calendarYearFontSize}: ${bodyS.fontSize};
                ${tokens.calendarYearFontStyle}: ${bodyS.fontStyle};
                ${tokens.calendarYearFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.calendarYearFontLineHeight}: ${bodyS.lineHeight};
                ${tokens.calendarYearFontWeight}: ${bodyS.fontWeight};
                ${tokens.calendarYearSelectedFontWeight}: ${bodySBold.fontWeight};

                ${tokens.calendarQuartersPadding}: 0.5rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${tokens.calendarQuarterFontFamily}: ${bodyS.fontFamily};
                ${tokens.calendarQuarterFontSize}: ${bodyS.fontSize};
                ${tokens.calendarQuarterFontStyle}: ${bodyS.fontStyle};
                ${tokens.calendarQuarterFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.calendarQuarterFontLineHeight}: ${bodyS.lineHeight};
                ${tokens.calendarQuarterFontWeight}: ${bodyS.fontWeight};
                ${tokens.calendarQuarterSelectedFontWeight}: ${bodySBold.fontWeight};

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${tokens.calendarMonthFontFamily}: ${bodyS.fontFamily};
                ${tokens.calendarMonthFontSize}: ${bodyS.fontSize};
                ${tokens.calendarMonthFontStyle}: ${bodyS.fontStyle};
                ${tokens.calendarMonthFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.calendarMonthFontLineHeight}: ${bodyS.lineHeight};
                ${tokens.calendarMonthFontWeight}: ${bodyS.fontWeight};
                ${tokens.calendarMonthSelectedFontWeight}: ${bodySBold.fontWeight};

                ${tokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;

                ${tokens.calendarDayFontFamily}: ${bodyS.fontFamily};
                ${tokens.calendarDayFontSize}: ${bodyS.fontSize};
                ${tokens.calendarDayFontStyle}: ${bodyS.fontStyle};
                ${tokens.calendarDayFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.calendarDayFontLineHeight}: ${bodyS.lineHeight};
                ${tokens.calendarDayFontWeight}: ${bodyS.fontWeight};
                ${tokens.calendarDaySelectedFontWeight}: ${bodySBold.fontWeight};

                ${tokens.calendarCurrentItemBorderWidth}: 0.125rem;
                ${tokens.calendarEventItemBottom}: 0.25rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;
                ${tokens.calendarHeaderArrowCustomSize}: 1.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: ${bodyMBold.fontFamily};
                ${tokens.calendarHeaderFontSize}: ${bodyMBold.fontSize};
                ${tokens.calendarHeaderFontStyle}: ${bodyMBold.fontStyle};
                ${tokens.calendarHeaderFontLetterSpacing}: ${bodyMBold.letterSpacing};
                ${tokens.calendarHeaderFontLineHeight}: ${bodyMBold.lineHeight};
                ${tokens.calendarHeaderFontWeight}: ${bodyMBold.fontWeight};
                ${tokens.calendarHeaderFontWeightBold}: ${bodyMBold.fontWeight};

                ${tokens.iconButtonHeight}: 2rem;
                ${tokens.iconButtonWidth}: 2rem;
                ${tokens.iconButtonPadding}: 0.75rem;
                ${tokens.iconButtonRadius}: 0.5rem;

                ${tokens.timePickerColumnWidth}: 2.5rem;
                ${tokens.timePickerColumnHeight}: 18.625rem;
                ${tokens.timePickerColumnGap}: 0.125rem;
                ${tokens.timePickerItemHeight}: 2.5rem;
                ${tokens.timePickerItemBorderRadius}: 0.5rem;
                ${tokens.timePickerItemPadding}: 0;
                ${tokens.timePickerItemFontFamily}: ${bodyM.fontFamily};
                ${tokens.timePickerItemFontStyle}: ${bodyM.fontStyle};
                ${tokens.timePickerItemFontSize}: ${bodyM.fontSize};
                ${tokens.timePickerItemFontWeight}: ${bodyM.fontWeight};
                ${tokens.timePickerItemLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.timePickerItemLineHeight}: ${bodyM.lineHeight};
                ${tokens.timePickerScrollbarWidth}: 0.125rem;
                ${tokens.timePickerScrollbarMargin}: 0.25rem;

                ${tokens.shortcutFontFamily}: ${bodyM.fontFamily};
                ${tokens.shortcutFontStyle}: ${bodyM.fontStyle};
                ${tokens.shortcutFontSize}: ${bodyM.fontSize};
                ${tokens.shortcutFontWeight}: ${bodyM.fontWeight};
                ${tokens.shortcutLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.shortcutLineHeight}: ${bodyM.lineHeight};

                ${tokens.shortcutPadding}: 0.5rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.75rem;
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

                ${tokens.textFieldColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldCaretColor}: ${textSecondary};
                ${tokens.labelColor}: ${textSecondary};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondary};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorHover}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorActive}: ${textSecondary};

                ${tokens.textFieldBackgroundColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorFocus}: ${surfaceSolidPrimary};
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
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;

                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceClear};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};

                ${tokens.textFieldBorderColorReadOnly}: transparent;
                ${tokens.textFieldBorderWidth}: 0;
            `,
        },
    },
};
