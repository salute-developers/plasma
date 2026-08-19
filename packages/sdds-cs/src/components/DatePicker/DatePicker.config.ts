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
    shadowDownSoftS,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidPrimary,
    surfaceTransparentAccent,
    textAccent,
    textAccentActive,
    textAccentHover,
    textAccentMinor,
    textNegative,
    textPositive,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { datePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.outlineFocusColor}: ${surfaceAccent};

                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.borderColor}: ${outlineSolidPrimary};
                ${tokens.borderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.borderColorFocus}: ${outlineAccent};
                ${tokens.borderColorError}: ${outlineNegative};
                ${tokens.borderColorSuccess}: ${outlineAccent};

                ${tokens.dividerColor}: ${textPrimary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.titleCaptionColor}: ${textSecondary};

                ${tokens.indicatorColor}: ${surfaceNegative};

                ${tokens.textFieldBorderColor}: ${outlineSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${tokens.textFieldBorderColorError}: ${outlineNegative};
                ${tokens.textFieldBorderColorErrorFocus}: ${outlineNegative};
                ${tokens.textFieldBorderColorSuccess}: ${outlineAccent};
                ${tokens.textFieldBorderColorSuccessFocus}: ${outlineAccent};
                ${tokens.textFieldBackgroundColor}: ${surfaceSolidCard};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};

                ${tokens.embedIconButtonFocusColor}: ${surfaceAccent};
                ${tokens.contentSlotRightColor}: ${textAccent};
                ${tokens.contentSlotRightColorHover}: ${textAccentHover};
                ${tokens.contentSlotRightColorActive}: ${textAccentActive};

                ${tokens.textFieldTextBeforeColor}: ${textSecondary};
                ${tokens.textFieldTextAfterColor}: ${textSecondary};

                ${tokens.focusColor}: ${textAccent};

                ${tokens.popoverShadow}: ${shadowDownSoftS};
                ${tokens.popoverSeparatorBackground}: var(--surface-transparent-secondary);
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
                ${tokens.calendarBorderColor}: ${outlineSolidPrimary};
                ${tokens.calendarDayOfWeekColor}: ${textSecondary};
                ${tokens.calendarDisabledOpacity}: 0.4;

                ${tokens.iconButtonColor}: ${textAccent};
                ${tokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${tokens.iconButtonColorHover}: ${textPrimaryHover};
                ${tokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${tokens.iconButtonColorActive}: ${textPrimaryHover};
                ${tokens.iconButtonBackgroundColorActive}: ${surfaceClear};
                ${tokens.iconButtonFocusColor}: ${surfaceAccent};

                ${tokens.textFieldContentRightSlotColor}: ${textAccent};
                ${tokens.textFieldContentRightSlotColorHover}: ${textAccentMinor};

                ${tokens.shortcutColor}: ${textPrimary};
                ${tokens.shortcutBackgroundHover}: var(--surface-transparent-secondary);
            `,
        },
        size: {
            s: css`
                ${tokens.width}: 19.5rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: ${bodyM.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyM.fontStyle};
                ${tokens.dividerFontSize}: ${bodyM.fontSize};
                ${tokens.dividerFontWeight}: ${bodyM.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyM.lineHeight};

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

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;
                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.titleCaptionOffset}: 0;
                ${tokens.titleCaptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.popoverBorderRadius}: 0.625rem;
                ${tokens.popoverGap}: 0.75rem;
                ${tokens.popoverPadding}: 0.75rem 1rem 0.875rem 1rem;
                ${tokens.popoverVerticalPadding}: 1.625rem;

                ${tokens.calendarBorderWidth}: 0.125rem;
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
        },
        disabled: {
            true: css`
                ${tokens.background}: ${surfaceSolidPrimary};
                ${tokens.borderColor}: ${surfaceSolidPrimary};
                ${tokens.borderColorHover}: ${surfaceSolidPrimary};
                ${tokens.borderColorFocus}: ${surfaceSolidPrimary};
                ${tokens.borderColorSuccess}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorFocus}: ${surfaceSolidPrimary};
                ${tokens.textFieldColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldCaretColor}: ${textSecondary};
                ${tokens.textFieldBackgroundColor}: ${surfaceSolidPrimary};
                ${tokens.labelColor}: ${textSecondary};
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: ${surfaceClear};
                ${tokens.borderColorReadOnly}: ${outlineSolidPrimary};

                ${tokens.labelColor}: ${textPrimary};
                ${tokens.labelColorReadOnly}: ${textPrimary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};

                ${tokens.dividerColorReadOnly}: ${textSecondary};
                ${tokens.dividerOpacityReadOnly}: 0.4;

                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceClear};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.borderColor}: transparent;
                ${tokens.borderWidth}: 0;
            `,
        },
    },
};
