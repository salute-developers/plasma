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
    shadowDownHardM,
    shadowDownHardS,
    shadowDownSoftS,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfacePositive,
    surfaceSolidCard,
    surfaceSolidCardBrightness,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    textAccent,
    textNegative,
    textNegativeActive,
    textNegativeHover,
    textPositive,
    textPositiveActive,
    textPositiveHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { datePickerTokens as tokens } from '../../../components/DatePicker';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.outlineFocusColor}: ${surfaceAccent};

                ${tokens.background}: transparent;
                ${tokens.backgroundError}: transparent;
                ${tokens.backgroundSuccess}: transparent;

                ${tokens.clearDividerColor}: ${surfaceTransparentTertiary};

                ${tokens.dividerColor}: ${surfaceClear};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};

                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textPrimary};
                ${tokens.contentSlotColorHover}: ${textPrimaryHover};
                ${tokens.contentSlotColorActive}: ${textPrimaryActive};

                ${tokens.embedIconButtonFocusColor}: ${surfaceAccent};
                ${tokens.contentSlotRightColor}: ${textPrimary};
                ${tokens.contentSlotRightColorHover}: ${textPrimaryHover};
                ${tokens.contentSlotRightColorActive}: ${textPrimaryActive};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldContentSlotRightColor}: ${textSecondary};
                ${tokens.textFieldContentSlotRightColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotRightColorActive}: ${textSecondaryActive};

                ${tokens.contentSlotColorSuccess}: ${textPositive};
                ${tokens.contentSlotColorSuccessHover}: ${textPositiveHover};
                ${tokens.contentSlotColorSuccessActive}: ${textPositiveActive};

                ${tokens.textFieldContentSlotColorSuccess}: ${textPositive};
                ${tokens.textFieldContentSlotColorSuccessHover}: ${textPositiveHover};
                ${tokens.textFieldContentSlotColorSuccessActive}: ${textPositiveActive};

                ${tokens.contentSlotColorError}: ${textNegative};
                ${tokens.contentSlotColorErrorHover}: ${textNegativeHover};
                ${tokens.contentSlotColorErrorActive}: ${textNegativeActive};

                ${tokens.textFieldContentSlotColorError}: ${textNegative};
                ${tokens.textFieldContentSlotColorErrorHover}: ${textNegativeHover};
                ${tokens.textFieldContentSlotColorErrorActive}: ${textNegativeActive};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldColorSuccess}: ${textPositive};
                ${tokens.textFieldColorError}: ${textNegative};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.focusColor}: ${textAccent};

                ${tokens.textFieldBackgroundColor}: transparent;
                ${tokens.textFieldBackgroundColorFocus}: transparent;
                ${tokens.textFieldBackgroundErrorColor}: transparent;
                ${tokens.textFieldBackgroundErrorColorFocus}: transparent;
                ${tokens.textFieldBackgroundSuccessColor}: transparent;
                ${tokens.textFieldBackgroundSuccessColorFocus}: transparent;

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldContentRightSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentRightSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldContentSlotColorSuccess}: ${textPositive};
                ${tokens.textFieldContentSlotColorSuccessHover}: ${textPositiveHover};
                ${tokens.textFieldContentSlotColorSuccessActive}: ${textPositiveActive};
                ${tokens.textFieldContentSlotColorError}: ${textNegative};
                ${tokens.textFieldContentSlotColorErrorHover}: ${textNegativeHover};
                ${tokens.textFieldContentSlotColorErrorActive}: ${textNegativeActive};

                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};

                ${tokens.textFieldDividerColorSuccess}: ${surfacePositive};
                ${tokens.textFieldDividerColorError}: ${surfaceNegative};
                ${tokens.textFieldDividerColorHover}: ${textSecondary};
                ${tokens.textFieldDividerColorFocus}: ${surfaceAccent};

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorColor}: ${surfaceNegative};

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

                ${tokens.shortcutColor}: ${textPrimary};
                ${tokens.shortcutBackgroundHover}: ${surfaceTransparentSecondary};
            `,
        },
        size: {
            xl: css`
                ${tokens.width}: 30.25rem;
                ${tokens.borderRadius}: 1rem;

                ${tokens.dividerPadding}: 0 1.375rem;
                ${tokens.dividerFontFamily}: ${bodyL.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyL.fontStyle};
                ${tokens.dividerFontSize}: ${bodyL.fontSize};
                ${tokens.dividerFontWeight}: ${bodyL.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftContentMargin}: 0 1.125rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelInnerPadding}: 0.8125rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.813rem 0 0.813rem 0;

                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 1.5rem auto auto -0.875rem;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 1.5rem -0.875rem auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: 2.313rem -1.125rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 2.313rem auto auto -1.125rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 2.313rem -3.375rem auto auto;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.688rem -2.938rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.438rem;

                ${tokens.hintInnerLabelPlacementOffset}:0.82rem -2.063rem auto auto;

                ${tokens.titleCaptionOffset}: 0.375rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldHeight}: 4rem;
                ${tokens.textFieldBorderRadius}: 1rem;
                ${tokens.textFieldPadding}: 1.3125rem 0;
                ${tokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem 0;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0 -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.popoverBorderRadius}: 0.875rem;
                ${tokens.popoverGap}: 1rem;
                ${tokens.popoverPadding}: 1rem 1rem 1.125rem 1rem;
                ${tokens.popoverVerticalPadding}: 2.125rem;

                ${tokens.calendarWidth}: 24.5rem;
                ${tokens.calendarHeight}: 28.563rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.75rem;

                ${tokens.calendarYearFontFamily}: ${bodyL.fontFamily};
                ${tokens.calendarYearFontSize}: ${bodyL.fontSize};
                ${tokens.calendarYearFontStyle}: ${bodyL.fontStyle};
                ${tokens.calendarYearFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.calendarYearFontLineHeight}: ${bodyL.lineHeight};
                ${tokens.calendarYearFontWeight}: ${bodyL.fontWeight};
                ${tokens.calendarYearSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.75rem;

                ${tokens.calendarMonthFontFamily}: ${bodyL.fontFamily};
                ${tokens.calendarMonthFontSize}: ${bodyL.fontSize};
                ${tokens.calendarMonthFontStyle}: ${bodyL.fontStyle};
                ${tokens.calendarMonthFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.calendarMonthFontLineHeight}: ${bodyL.lineHeight};
                ${tokens.calendarMonthFontWeight}: ${bodyL.fontWeight};
                ${tokens.calendarMonthSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${tokens.calendarQuartersPadding}: 0.5rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.75rem;

                ${tokens.calendarQuarterFontFamily}: ${bodyL.fontFamily};
                ${tokens.calendarQuarterFontSize}: ${bodyL.fontSize};
                ${tokens.calendarQuarterFontStyle}: ${bodyL.fontStyle};
                ${tokens.calendarQuarterFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.calendarQuarterFontLineHeight}: ${bodyL.lineHeight};
                ${tokens.calendarQuarterFontWeight}: ${bodyL.fontWeight};
                ${tokens.calendarQuarterSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${tokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.75rem;

                ${tokens.calendarDayFontFamily}: ${bodyL.fontFamily};
                ${tokens.calendarDayFontSize}: ${bodyL.fontSize};
                ${tokens.calendarDayFontStyle}: ${bodyL.fontStyle};
                ${tokens.calendarDayFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.calendarDayFontLineHeight}: ${bodyL.lineHeight};
                ${tokens.calendarDayFontWeight}: ${bodyL.fontWeight};
                ${tokens.calendarDaySelectedFontWeight}: ${bodyLBold.fontWeight};

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;
                ${tokens.calendarHeaderArrowCustomSize}: 1.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${tokens.calendarHeaderDateGap}: 0.5rem;

                ${tokens.calendarHeaderFontFamily}: ${h3.fontFamily};
                ${tokens.calendarHeaderFontSize}: ${h3.fontSize};
                ${tokens.calendarHeaderFontStyle}: ${h3.fontStyle};
                ${tokens.calendarHeaderFontLetterSpacing}: ${h3.letterSpacing};
                ${tokens.calendarHeaderFontLineHeight}: ${h3.lineHeight};
                ${tokens.calendarHeaderFontWeight}: ${h3.fontWeight};
                ${tokens.calendarHeaderFontWeightBold}: ${h3Bold.fontWeight};

                ${tokens.iconButtonHeight}: 4rem;
                ${tokens.iconButtonWidth}: 4rem;
                ${tokens.iconButtonPadding}: 1.5rem;
                ${tokens.iconButtonRadius}: 1rem;

                ${tokens.shortcutFontFamily}: ${bodyL.fontFamily};
                ${tokens.shortcutFontStyle}: ${bodyL.fontStyle};
                ${tokens.shortcutFontSize}: ${bodyL.fontSize};
                ${tokens.shortcutFontWeight}: ${bodyL.fontWeight};
                ${tokens.shortcutLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.shortcutLineHeight}: ${bodyL.lineHeight};

                ${tokens.shortcutPadding}: 1.313rem 0.875rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.875rem;
            `,
            l: css`
                ${tokens.width}: 26.5rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.dividerPadding}: 0 1.375rem;
                ${tokens.dividerFontFamily}: ${bodyL.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyL.fontStyle};
                ${tokens.dividerFontSize}: ${bodyL.fontSize};
                ${tokens.dividerFontWeight}: ${bodyL.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftContentMargin}: 0 1.125rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.embedIconButtonHeight}: 3.5rem;
                ${tokens.embedIconButtonWidth}: 2.25rem;
                ${tokens.embedIconButtonPadding}: 0 0 0.75rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 1.5rem auto auto -0.875rem;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 1.5rem -0.875rem auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: 2.313rem -1.125rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 2.313rem auto auto -1.125rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 2.313rem -3.375rem auto auto;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.438rem -2.938rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.438rem;

                ${tokens.hintInnerLabelPlacementOffset}: 0.563rem -2.188rem auto auto;

                ${tokens.titleCaptionOffset}: 0.375rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldPadding}: 1.0625rem 0;
                ${tokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.popoverBorderRadius}: 0.875rem;
                ${tokens.popoverGap}: 1rem;
                ${tokens.popoverPadding}: 1rem 1rem 1.125rem 1rem;
                ${tokens.popoverVerticalPadding}: 2.125rem;

                ${tokens.calendarWidth}: 24.5rem;
                ${tokens.calendarHeight}: 25rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.75rem;

                ${tokens.calendarYearFontFamily}: ${bodyL.fontFamily};
                ${tokens.calendarYearFontSize}: ${bodyL.fontSize};
                ${tokens.calendarYearFontStyle}: ${bodyL.fontStyle};
                ${tokens.calendarYearFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.calendarYearFontLineHeight}: ${bodyL.lineHeight};
                ${tokens.calendarYearFontWeight}: ${bodyL.fontWeight};
                ${tokens.calendarYearSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.75rem;

                ${tokens.calendarMonthFontFamily}: ${bodyL.fontFamily};
                ${tokens.calendarMonthFontSize}: ${bodyL.fontSize};
                ${tokens.calendarMonthFontStyle}: ${bodyL.fontStyle};
                ${tokens.calendarMonthFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.calendarMonthFontLineHeight}: ${bodyL.lineHeight};
                ${tokens.calendarMonthFontWeight}: ${bodyL.fontWeight};
                ${tokens.calendarMonthSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${tokens.calendarQuartersPadding}: 0.5rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.75rem;

                ${tokens.calendarQuarterFontFamily}: ${bodyL.fontFamily};
                ${tokens.calendarQuarterFontSize}: ${bodyL.fontSize};
                ${tokens.calendarQuarterFontStyle}: ${bodyL.fontStyle};
                ${tokens.calendarQuarterFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.calendarQuarterFontLineHeight}: ${bodyL.lineHeight};
                ${tokens.calendarQuarterFontWeight}: ${bodyL.fontWeight};
                ${tokens.calendarQuarterSelectedFontWeight}: ${bodyLBold.fontWeight};

                ${tokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.75rem;

                ${tokens.calendarDayFontFamily}: ${bodyL.fontFamily};
                ${tokens.calendarDayFontSize}: ${bodyL.fontSize};
                ${tokens.calendarDayFontStyle}: ${bodyL.fontStyle};
                ${tokens.calendarDayFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.calendarDayFontLineHeight}: ${bodyL.lineHeight};
                ${tokens.calendarDayFontWeight}: ${bodyL.fontWeight};
                ${tokens.calendarDaySelectedFontWeight}: ${bodyLBold.fontWeight};

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;
                ${tokens.calendarHeaderArrowCustomSize}: 1.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${tokens.calendarHeaderDateGap}: 0.5rem;

                ${tokens.calendarHeaderFontFamily}: ${h3.fontFamily};
                ${tokens.calendarHeaderFontSize}: ${h3.fontSize};
                ${tokens.calendarHeaderFontStyle}: ${h3.fontStyle};
                ${tokens.calendarHeaderFontLetterSpacing}: ${h3.letterSpacing};
                ${tokens.calendarHeaderFontLineHeight}: ${h3.lineHeight};
                ${tokens.calendarHeaderFontWeight}: ${h3.fontWeight};
                ${tokens.calendarHeaderFontWeightBold}: ${h3Bold.fontWeight};

                ${tokens.iconButtonHeight}: 3.5rem;
                ${tokens.iconButtonWidth}: 3.5rem;
                ${tokens.iconButtonPadding}: 1.5rem;
                ${tokens.iconButtonRadius}: 0.875rem;

                ${tokens.shortcutFontFamily}: ${bodyL.fontFamily};
                ${tokens.shortcutFontStyle}: ${bodyL.fontStyle};
                ${tokens.shortcutFontSize}: ${bodyL.fontSize};
                ${tokens.shortcutFontWeight}: ${bodyL.fontWeight};
                ${tokens.shortcutLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.shortcutLineHeight}: ${bodyL.lineHeight};

                ${tokens.shortcutPadding}: 1.063rem 0.75rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.75rem;
            `,
            m: css`
                ${tokens.width}: 23rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.dividerPadding}: 0 1.25rem;
                ${tokens.dividerFontFamily}: ${bodyM.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyM.fontStyle};
                ${tokens.dividerFontSize}: ${bodyM.fontSize};
                ${tokens.dividerFontWeight}: ${bodyM.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyM.lineHeight};

                ${tokens.leftContentMargin}: 0 0.875rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyM.fontFamily};
                ${tokens.labelFontStyle}: ${bodyM.fontStyle};
                ${tokens.labelFontSize}: ${bodyM.fontSize};
                ${tokens.labelFontWeight}: ${bodyM.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyM.lineHeight};

                ${tokens.embedIconButtonHeight}: 3rem;
                ${tokens.embedIconButtonWidth}: 2.375rem;
                ${tokens.embedIconButtonPadding}: 0 0 0.875rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 1.25rem auto auto -0.875rem;
                ${tokens.indicatorOuterPlacement}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 1.25rem -0.875rem auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.6875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: 2.063rem -1rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 2.063rem auto auto -1rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 2.063rem -3.25rem auto auto;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.1875rem -2.813rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.438rem;

                ${tokens.hintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;

                ${tokens.titleCaptionOffset}: 0.313rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 0;
                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.popoverBorderRadius}: 0.75rem;
                ${tokens.popoverGap}: 1rem;
                ${tokens.popoverPadding}: 1rem 1rem 1.125rem 1rem;
                ${tokens.popoverVerticalPadding}: 2.125rem;

                ${tokens.calendarWidth}: 21rem;
                ${tokens.calendarHeight}: 21rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.625rem;

                ${tokens.calendarYearFontFamily}: ${bodyM.fontFamily};
                ${tokens.calendarYearFontSize}: ${bodyM.fontSize};
                ${tokens.calendarYearFontStyle}: ${bodyM.fontStyle};
                ${tokens.calendarYearFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.calendarYearFontLineHeight}: ${bodyM.lineHeight};
                ${tokens.calendarYearFontWeight}: ${bodyM.fontWeight};
                ${tokens.calendarYearSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${tokens.calendarQuartersPadding}: 0.5rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.625rem;

                ${tokens.calendarQuarterFontFamily}: ${bodyM.fontFamily};
                ${tokens.calendarQuarterFontSize}: ${bodyM.fontSize};
                ${tokens.calendarQuarterFontStyle}: ${bodyM.fontStyle};
                ${tokens.calendarQuarterFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.calendarQuarterFontLineHeight}: ${bodyM.lineHeight};
                ${tokens.calendarQuarterFontWeight}: ${bodyM.fontWeight};
                ${tokens.calendarQuarterSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.625rem;

                ${tokens.calendarMonthFontFamily}: ${bodyM.fontFamily};
                ${tokens.calendarMonthFontSize}: ${bodyM.fontSize};
                ${tokens.calendarMonthFontStyle}: ${bodyM.fontStyle};
                ${tokens.calendarMonthFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.calendarMonthFontLineHeight}: ${bodyM.lineHeight};
                ${tokens.calendarMonthFontWeight}: ${bodyM.fontWeight};
                ${tokens.calendarMonthSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${tokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.625rem;

                ${tokens.calendarDayFontFamily}: ${bodyM.fontFamily};
                ${tokens.calendarDayFontSize}: ${bodyM.fontSize};
                ${tokens.calendarDayFontStyle}: ${bodyM.fontStyle};
                ${tokens.calendarDayFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.calendarDayFontLineHeight}: ${bodyM.lineHeight};
                ${tokens.calendarDayFontWeight}: ${bodyM.fontWeight};
                ${tokens.calendarDaySelectedFontWeight}: ${bodyMBold.fontWeight};

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
                ${tokens.calendarHeaderArrowGap}: 0;
                ${tokens.calendarHeaderArrowCustomSize}: 1.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.75rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: ${h4.fontFamily};
                ${tokens.calendarHeaderFontSize}: ${h4.fontSize};
                ${tokens.calendarHeaderFontStyle}: ${h4.fontStyle};
                ${tokens.calendarHeaderFontLetterSpacing}: ${h4.letterSpacing};
                ${tokens.calendarHeaderFontLineHeight}: ${h4.lineHeight};
                ${tokens.calendarHeaderFontWeight}: ${h4.fontWeight};
                ${tokens.calendarHeaderFontWeightBold}: ${h4Bold.fontWeight};

                ${tokens.iconButtonHeight}: 3rem;
                ${tokens.iconButtonWidth}: 3rem;
                ${tokens.iconButtonPadding}: 1.25rem;
                ${tokens.iconButtonRadius}: 0.75rem;

                ${tokens.shortcutFontFamily}: ${bodyM.fontFamily};
                ${tokens.shortcutFontStyle}: ${bodyM.fontStyle};
                ${tokens.shortcutFontSize}: ${bodyM.fontSize};
                ${tokens.shortcutFontWeight}: ${bodyM.fontWeight};
                ${tokens.shortcutLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.shortcutLineHeight}: ${bodyM.lineHeight};

                ${tokens.shortcutPadding}: 0.875rem 0.625rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.625rem;
            `,
            s: css`
                ${tokens.width}: 19.5rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.dividerPadding}: 0 1.125rem;
                ${tokens.dividerFontFamily}: ${bodyS.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyS.fontStyle};
                ${tokens.dividerFontSize}: ${bodyS.fontSize};
                ${tokens.dividerFontWeight}: ${bodyS.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyS.lineHeight};

                ${tokens.leftContentMargin}: 0 0.75rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0 0 0.75rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 1.063rem auto auto -0.75rem;
                ${tokens.indicatorOuterPlacement}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 1.063rem -0.75rem auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.063rem -2.238rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: 1.813rem -0.875rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 1.813rem auto auto -0.875rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 1.813rem -3.125rem auto auto;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.938rem -2.688rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.438rem;

                ${tokens.hintInnerLabelPlacementOffset}: 0.062rem -2.188rem auto auto;

                ${tokens.titleCaptionOffset}: 0.188rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0;
                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

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
                ${tokens.width}: 19rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.dividerPadding}: 0 0.875rem;
                ${tokens.dividerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.dividerFontSize}: ${bodyXS.fontSize};
                ${tokens.dividerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.leftContentMargin}: 0 0.5rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelFontSize}: ${bodyXS.fontSize};
                ${tokens.labelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.embedIconButtonHeight}: 2rem;
                ${tokens.embedIconButtonWidth}: 1.5rem;
                ${tokens.embedIconButtonPadding}: 0 0 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.5rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0.813rem auto auto -0.625rem;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0.813rem -0.625rem auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.75rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 0.813rem -1.988rem auto auto;

                ${tokens.indicatorMarginTop}: 0.125rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: 1.675rem -0.75rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 1.675rem auto auto -0.75rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 1.675rem -2rem auto auto;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.688rem -2.063rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.688rem;

                ${tokens.hintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;

                ${tokens.titleCaptionOffset}: 0;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0;
                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

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

                ${tokens.calendarQuartersPadding}: 0.375rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${tokens.calendarQuarterFontFamily}: ${bodyXS.fontFamily};
                ${tokens.calendarQuarterFontSize}: ${bodyXS.fontSize};
                ${tokens.calendarQuarterFontStyle}: ${bodyXS.fontStyle};
                ${tokens.calendarQuarterFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.calendarQuarterFontLineHeight}: ${bodyXS.lineHeight};
                ${tokens.calendarQuarterFontWeight}: ${bodyXS.fontWeight};
                ${tokens.calendarQuarterSelectedFontWeight}: ${bodyXSBold.fontWeight};

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${tokens.calendarMonthFontFamily}: ${bodyXS.fontFamily};
                ${tokens.calendarMonthFontSize}: ${bodyXS.fontSize};
                ${tokens.calendarMonthFontStyle}: ${bodyXS.fontStyle};
                ${tokens.calendarMonthFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.calendarMonthFontLineHeight}: ${bodyXS.lineHeight};
                ${tokens.calendarMonthFontWeight}: ${bodyXS.fontWeight};
                ${tokens.calendarMonthSelectedFontWeight}: ${bodyXSBold.fontWeight};

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
        hintView: {
            default: css`
                ${tokens.hintTooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.hintTooltipBoxShadow}: ${shadowDownHardM};
                ${tokens.hintTooltipColor}: ${textPrimary};
                ${tokens.hintTooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        hintSize: {
            m: css`
                ${tokens.hintTooltipPaddingTop}: 0.6875rem;
                ${tokens.hintTooltipPaddingRight}: 0.875rem;
                ${tokens.hintTooltipPaddingBottom}: 0.6875rem;
                ${tokens.hintTooltipPaddingLeft}: 0.875rem;

                ${tokens.hintTooltipMinHeight}: 2.5rem;
                ${tokens.hintTooltipBorderRadius}: 0.625rem;

                ${tokens.hintTooltipTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.hintTooltipTextFontSize}: ${bodyS.fontSize};
                ${tokens.hintTooltipTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.hintTooltipTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.hintTooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.hintTooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.hintTooltipContentLeftMargin}: 0.375rem;

                ${tokens.hintTooltipArrowMaskWidth}: 1.25rem;
                ${tokens.hintTooltipArrowMaskHeight}: 1.25rem;
                ${tokens.hintTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.hintTooltipArrowHeight}: 0.5rem;
                ${tokens.hintTooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.hintTooltipPaddingTop}: 0.5rem;
                ${tokens.hintTooltipPaddingRight}: 0.75rem;
                ${tokens.hintTooltipPaddingBottom}: 0.5rem;
                ${tokens.hintTooltipPaddingLeft}: 0.75rem;

                ${tokens.hintTooltipMinHeight}: 2rem;
                ${tokens.hintTooltipBorderRadius}: 0.5rem;

                ${tokens.hintTooltipTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.hintTooltipTextFontSize}: ${bodyXS.fontSize};
                ${tokens.hintTooltipTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.hintTooltipTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.hintTooltipTextFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.hintTooltipTextFontLineHeight}: ${bodyXS.lineHeight};

                ${tokens.hintTooltipContentLeftMargin}: 0.25rem;

                ${tokens.hintTooltipArrowMaskWidth}: 1rem;
                ${tokens.hintTooltipArrowMaskHeight}: 1rem;
                ${tokens.hintTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.hintTooltipArrowHeight}: 0.375rem;
                ${tokens.hintTooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: transparent;
                ${tokens.labelColorReadOnly}: ${textPrimary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};

                ${tokens.dividerColorReadOnly}: ${textSecondary};
                ${tokens.dividerOpacityReadOnly}: 0.4;

                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: transparent;
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};

                ${tokens.rightContentOpacityReadOnly}: 0.4;
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
                ${tokens.textFieldReadOnlyOpacity}: 0.1;
                ${tokens.rangeReadOnlyOpacity}: 0.1;
            `,
        },
    },
};
