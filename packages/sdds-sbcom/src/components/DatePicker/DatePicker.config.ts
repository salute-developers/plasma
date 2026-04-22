import { datePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    h3,
    h3Bold,
    h4,
    h4Bold,
    inverseTextPrimary,
    shadowDownHardM,
    shadowDownHardS,
    shadowDownSoftS,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidCardBrightness,
    surfaceSolidDefault,
    surfaceTransparentNegative,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXsBold, h5, h5Bold, surfaceTransparentNegativeActive
 * surfaceTransparentPositive, surfaceTransparentPositiveActive
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        hintSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.outlineFocusColor}: ${surfaceAccent};

                ${tokens.background}: ${surfaceTransparentPrimary};
                ${tokens.backgroundError}: ${surfaceTransparentNegative};
                ${tokens.backgroundSuccess}: var(--surface-transparent-positive);

                ${tokens.dividerColor}: ${textPrimary};
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

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldContentRightSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentRightSlotColorActive}: ${textSecondaryActive};

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorColor}: ${surfaceNegative};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentSecondary};
                ${tokens.textFieldBackgroundErrorColor}: ${surfaceTransparentNegative};
                ${tokens.textFieldBackgroundErrorColorFocus}: var(--surface-transparent-negative-active);
                ${tokens.textFieldBackgroundSuccessColor}: var(--surface-transparent-positive);
                ${tokens.textFieldBackgroundSuccessColorFocus}: var(--surface-transparent-positive-active);

                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

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

                ${tokens.leftContentMargin}: 0 0 0 1.125rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelInnerPadding}: 0.8125rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.813rem 0 0.813rem 0;

                ${tokens.labelWrapperOffset}: 0.75rem;
                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.688rem -2.938rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 0.813rem 0 -0.438rem;

                ${tokens.hintInnerLabelPlacementOffset}: 0.813rem -2.938rem auto auto;

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

                ${tokens.textFieldHeight}: 4rem;
                ${tokens.textFieldBorderRadius}: 1rem;
                ${tokens.textFieldPadding}: 1.3125rem 1.125rem;
                ${tokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.popoverBorderRadius}: 0.875rem;
                ${tokens.popoverGap}: 1rem;
                ${tokens.popoverPadding}: 1rem 1rem 1.125rem 1rem;
                ${tokens.popoverVerticalPadding}: 2.125rem;

                ${tokens.calendarWidth}: 28rem;
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

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: ${bodyL.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyL.fontStyle};
                ${tokens.dividerFontSize}: ${bodyL.fontSize};
                ${tokens.dividerFontWeight}: ${bodyL.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftContentMargin}: 0 0 0 1rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.labelWrapperOffset}: 0.75rem;
                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.embedIconButtonHeight}: 3.5rem;
                ${tokens.embedIconButtonWidth}: 3.5rem;
                ${tokens.embedIconButtonPadding}: 1rem;
                ${tokens.embedIconButtonRadius}: 0.875rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.438rem -2.938rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 0.563rem 0 -0.438rem;

                ${tokens.hintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.563rem -2.188rem auto auto;

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

                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: ${bodyM.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyM.fontStyle};
                ${tokens.dividerFontSize}: ${bodyM.fontSize};
                ${tokens.dividerFontWeight}: ${bodyM.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyM.lineHeight};

                ${tokens.leftContentMargin}: 0 0 0 0.875rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.625rem;
                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.labelWrapperOffset}: 0.625rem;
                ${tokens.labelFontFamily}: ${bodyM.fontFamily};
                ${tokens.labelFontStyle}: ${bodyM.fontStyle};
                ${tokens.labelFontSize}: ${bodyM.fontSize};
                ${tokens.labelFontWeight}: ${bodyM.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyM.lineHeight};

                ${tokens.embedIconButtonHeight}: 3rem;
                ${tokens.embedIconButtonWidth}: 3rem;
                ${tokens.embedIconButtonPadding}: 0.75rem;
                ${tokens.embedIconButtonRadius}: 0.75rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.6875rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.1875rem -2.813rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 0.313rem 0 -0.438rem;

                ${tokens.hintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;

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

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.625rem;

                ${tokens.calendarMonthFontFamily}: ${bodyM.fontFamily};
                ${tokens.calendarMonthFontSize}: ${bodyM.fontSize};
                ${tokens.calendarMonthFontStyle}: ${bodyM.fontStyle};
                ${tokens.calendarMonthFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.calendarMonthFontLineHeight}: ${bodyM.lineHeight};
                ${tokens.calendarMonthFontWeight}: ${bodyM.fontWeight};
                ${tokens.calendarMonthSelectedFontWeight}: ${bodyMBold.fontWeight};

                ${tokens.calendarQuartersPadding}: 0.5rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.625rem;

                ${tokens.calendarQuarterFontFamily}: ${bodyM.fontFamily};
                ${tokens.calendarQuarterFontSize}: ${bodyM.fontSize};
                ${tokens.calendarQuarterFontStyle}: ${bodyM.fontStyle};
                ${tokens.calendarQuarterFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.calendarQuarterFontLineHeight}: ${bodyM.lineHeight};
                ${tokens.calendarQuarterFontWeight}: ${bodyM.fontWeight};
                ${tokens.calendarQuarterSelectedFontWeight}: ${bodyMBold.fontWeight};

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

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: ${bodyS.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyS.fontStyle};
                ${tokens.dividerFontSize}: ${bodyS.fontSize};
                ${tokens.dividerFontWeight}: ${bodyS.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyS.lineHeight};

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelWrapperOffset}: 0.5rem;
                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.938rem -2.688rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 0.063rem 0 -0.438rem;

                ${tokens.hintInnerLabelPlacementOffset}: 0.062rem -2.688rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.062rem -2.188rem auto auto;

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

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.dividerPadding}: 0 0.375rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.5rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.375rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelWrapperOffset}: 0.375rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.embedIconButtonHeight}: 2rem;
                ${tokens.embedIconButtonWidth}: 2rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.5rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.6875rem auto auto;

                ${tokens.indicatorMarginTop}: 0.125rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.375rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.375rem 0;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.688rem -2.063rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.188rem 0 -0.688rem;

                ${tokens.hintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;

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

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.375rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
                ${tokens.calendarHeaderArrowGap}: 0;
                ${tokens.calendarHeaderArrowCustomSize}: 1rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.calendarHeaderFontFamily}: var(--plasma-typo-h5-font-family);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.calendarHeaderFontSize}: var(--plasma-typo-h5-font-size);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.calendarHeaderFontStyle}: var(--plasma-typo-h5-font-style);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h5-line-height);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.calendarHeaderFontWeight}: var(--plasma-typo-h5-font-weight);
                /* NOTE: no token h5Bold in @salutejs/sdds-themes/tokens */
                ${tokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h5-bold-font-weight);

                ${tokens.iconButtonHeight}: 2rem;
                ${tokens.iconButtonWidth}: 2rem;
                ${tokens.iconButtonPadding}: 0.5rem;
                ${tokens.iconButtonRadius}: 0.5rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.shortcutFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.shortcutFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.shortcutFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.shortcutFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.shortcutLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.shortcutLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                ${tokens.backgroundReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.labelColorReadOnly}: ${textPrimary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};

                ${tokens.dividerColorReadOnly}: ${textPrimary};
                ${tokens.dividerOpacityReadOnly}: 0.4;

                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};

                ${tokens.rightContentOpacityReadOnly}: 0.4;
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
                ${tokens.textFieldReadOnlyOpacity}: 0.1;
                ${tokens.rangeReadOnlyOpacity}: 0.1;
            `,
        },
    },
};
