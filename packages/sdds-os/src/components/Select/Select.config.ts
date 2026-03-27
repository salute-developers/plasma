import {
    bodyM,
    bodyS,
    bodyXS,
    inverseTextPrimary,
    inverseTextPrimaryActive,
    inverseTextPrimaryHover,
    inverseTextSecondary,
    inverseTextSecondaryHover,
    onDarkTextPrimary,
    onDarkTextPrimaryActive,
    onDarkTextPrimaryHover,
    onDarkTextSecondary,
    onDarkTextSecondaryHover,
    shadowDownHardM,
    surfaceAccent,
    surfaceAccentHover,
    surfaceNegative,
    surfaceNegativeActive,
    surfaceNegativeHover,
    surfacePositive,
    surfacePositiveActive,
    surfacePositiveHover,
    surfaceSolidCard,
    surfaceSolidCardBrightness,
    surfaceSolidDefault,
    surfaceSolidDefaultHover,
    surfaceTransparentNegative,
    surfaceTransparentNegativeActive,
    surfaceTransparentPositive,
    surfaceTransparentPositiveActive,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    surfaceTransparentWarning,
    surfaceTransparentWarningActive,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_os';
import { css, selectTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
        chipView: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textFieldColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentSecondary};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textSecondary};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.buttonColor}: ${inverseTextPrimary};
                ${tokens.buttonColorHover}: ${inverseTextPrimaryHover};
                ${tokens.buttonColorActive}: ${inverseTextPrimaryActive};
                ${tokens.buttonArrowColor}: ${inverseTextSecondary};
                ${tokens.buttonArrowColorHover}: ${inverseTextSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${inverseTextSecondaryHover};
                ${tokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${tokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${tokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultHover};

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};
                ${tokens.textFieldHintIconColor}: ${textSecondary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
            `,
            positive: css`
                ${tokens.textFieldColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentPositive};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentPositiveActive};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textPositive};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.buttonColor}: ${onDarkTextPrimary};
                ${tokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.buttonColorActive}: ${onDarkTextPrimaryActive};
                ${tokens.buttonArrowColor}: ${onDarkTextSecondary};
                ${tokens.buttonArrowColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${onDarkTextSecondaryHover};
                ${tokens.buttonBackgroundColor}:${surfacePositive};
                ${tokens.buttonBackgroundColorHover}:${surfacePositiveHover};
                ${tokens.buttonBackgroundColorActive}:${surfacePositiveActive};

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};
                ${tokens.textFieldHintIconColor}: ${textSecondary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
            `,
            warning: css`
                ${tokens.textFieldColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentWarning};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentWarningActive};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textWarning};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.buttonColor}: ${onDarkTextPrimary};
                ${tokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.buttonColorActive}: ${onDarkTextPrimaryActive};
                ${tokens.buttonArrowColor}: ${onDarkTextSecondary};
                ${tokens.buttonArrowColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${onDarkTextSecondaryHover};
                ${tokens.buttonBackgroundColor}:${surfaceWarning};
                ${tokens.buttonBackgroundColorHover}:${surfaceWarningHover};
                ${tokens.buttonBackgroundColorActive}:${surfaceWarningActive};

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};
                ${tokens.textFieldHintIconColor}: ${textSecondary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
            `,
            negative: css`
                ${tokens.textFieldColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentNegative};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentNegativeActive};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textNegative};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.buttonColor}: ${onDarkTextPrimary};
                ${tokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.buttonColorActive}: ${onDarkTextPrimaryActive};
                ${tokens.buttonArrowColor}: ${onDarkTextSecondary};
                ${tokens.buttonArrowColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${onDarkTextSecondaryHover};
                ${tokens.buttonBackgroundColor}:${surfaceNegative};
                ${tokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${tokens.buttonBackgroundColorActive}:${surfaceNegativeActive};

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};
                ${tokens.textFieldHintIconColor}: ${textSecondary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
            `,
        },
        size: {
            m: css`
                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.125rem -0.438rem -0.125rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.625rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLeftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLeftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLeftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLeftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLeftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.5rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.6875rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;

                ${tokens.textFieldChipGap}: 0.25rem;
                ${tokens.textFieldChipBorderRadius}: 0.375rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 2.25rem;
                ${tokens.textFieldChipPadding}: 0 0.625rem 0 0.875rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.5rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1.25rem;
                ${tokens.textFieldChipFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldChipFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldChipFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldChipFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldChipLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldChipLineHeight}: ${bodyM.lineHeight};

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.375rem;
                ${tokens.targetHeight}: 3rem;
                ${tokens.buttonPadding}: 1.25rem 0 1.25rem;

                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.75rem 0.75rem;
                ${tokens.itemPaddingTight}: 0.5rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemIconMargin}: 0 0.375rem 0 0;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1.5rem;
                ${tokens.itemGap}: 0.375rem;
                ${tokens.itemTreeOffsetWidth}: 2rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: ${bodyM.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyM.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyM.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyM.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyM.lineHeight};

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyM.lineHeight};

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;

                ${tokens.indicatorSize}: 0.375rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.875rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.875rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;
            `,
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.1875rem -0.438rem -0.1875rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.062rem -2.688rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.062rem -2.188rem auto auto;

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLeftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLeftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLeftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLeftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLeftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.375rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -2.238rem auto auto;

                ${tokens.textFieldChipGap}: 0.25rem;
                ${tokens.textFieldChipBorderRadius}: 0.25rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 1.75rem;
                ${tokens.textFieldChipPadding}: 0 0.5rem 0 0.75rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.375rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1rem;
                ${tokens.textFieldChipFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldChipFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldChipFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldChipFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldChipLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldChipLineHeight}: ${bodyS.lineHeight};

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.25rem;
                ${tokens.targetHeight}: 2.5rem;
                ${tokens.buttonPadding}: 1rem 0 1rem;

                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.5rem 0.625rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1rem;
                ${tokens.itemIconMargin}: 0 0.375rem 0 0;
                ${tokens.itemGap}: 0.375rem;
                ${tokens.itemTreeOffsetWidth}: 1.875rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyS.lineHeight};

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyS.lineHeight};

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;

                ${tokens.indicatorSize}: 0.375rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.75rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.75rem;
                ${tokens.dividerMarginTopTight}: 0.25rem;
                ${tokens.dividerMarginBottomTight}: 0.25rem;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldLabelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLabelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLabelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLabelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLabelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLabelInnerLineHeight}: ${bodyXS.lineHeight};
            `,
            outer: css``,
        },
        chipView: {
            default: css`
                ${tokens.textFieldChipColor}: ${inverseTextPrimary};
                ${tokens.textFieldChipColorHover}: ${inverseTextPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceSolidDefault};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceSolidDefaultHover};
                ${tokens.textFieldChipCloseIconColor}: ${inverseTextSecondary};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${inverseTextSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${inverseTextPrimary};

                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceSolidDefault};
                ${tokens.textFieldChipColorReadOnly}: ${inverseTextPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceSolidDefault};
                ${tokens.textFieldChipColorReadOnlyHover}: ${inverseTextPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
            secondary: css`
                ${tokens.textFieldChipColor}: ${textPrimary};
                ${tokens.textFieldChipColorHover}: ${textPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.textFieldChipCloseIconColor}: ${textSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${textSecondaryHover};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${textSecondary};

                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnly}: ${textPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnlyHover}: ${textPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
            accent: css`
                ${tokens.textFieldChipColor}: ${onDarkTextPrimary};
                ${tokens.textFieldChipColorHover}: ${onDarkTextPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceAccent};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceAccentHover};
                ${tokens.textFieldChipCloseIconColor}: ${onDarkTextSecondary};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${onDarkTextSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${onDarkTextPrimary};

                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceAccent};
                ${tokens.textFieldChipColorReadOnly}: ${onDarkTextPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceAccent};
                ${tokens.textFieldChipColorReadOnlyHover}: ${onDarkTextPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
        },
        hintView: {
            default: css`
                ${tokens.textFieldTooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.textFieldTooltipBoxShadow}: ${shadowDownHardM}, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${tokens.textFieldTooltipColor}: ${textPrimary};
                ${tokens.textFieldTooltipArrowBackground}: ${surfaceSolidCard};
            `,
        },
        hintSize: {
            m: css`
                ${tokens.textFieldTooltipPaddingTop}: 0.6875rem;
                ${tokens.textFieldTooltipPaddingRight}: 0.875rem;
                ${tokens.textFieldTooltipPaddingBottom}: 0.6875rem;
                ${tokens.textFieldTooltipPaddingLeft}: 0.875rem;

                ${tokens.textFieldTooltipMinHeight}: 2.5rem;
                ${tokens.textFieldTooltipBorderRadius}: 0.625rem;

                ${tokens.textFieldTooltipTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldTooltipTextFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldTooltipTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldTooltipTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldTooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldTooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldTooltipContentLeftMargin}: 0.375rem;

                ${tokens.textFieldTooltipArrowMaskWidth}: 1.25rem;
                ${tokens.textFieldTooltipArrowMaskHeight}: 1.25rem;
                ${tokens.textFieldTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.textFieldTooltipArrowHeight}: 0.5rem;
                ${tokens.textFieldTooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.textFieldTooltipPaddingTop}: 0.5rem;
                ${tokens.textFieldTooltipPaddingRight}: 0.75rem;
                ${tokens.textFieldTooltipPaddingBottom}: 0.5rem;
                ${tokens.textFieldTooltipPaddingLeft}: 0.75rem;

                ${tokens.textFieldTooltipMinHeight}: 2rem;
                ${tokens.textFieldTooltipBorderRadius}: 0.5rem;

                ${tokens.textFieldTooltipTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldTooltipTextFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldTooltipTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldTooltipTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldTooltipTextFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldTooltipTextFontLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldTooltipContentLeftMargin}: 0.25rem;

                ${tokens.textFieldTooltipArrowMaskWidth}: 1rem;
                ${tokens.textFieldTooltipArrowMaskHeight}: 1rem;
                ${tokens.textFieldTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.textFieldTooltipArrowHeight}: 0.375rem;
                ${tokens.textFieldTooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.textFieldDisabledOpacity}: 0.4;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.disclosureIconOpacityReadOnly}: 0.4;
                ${tokens.textFieldReadOnlyOpacity}: 0.1;
                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLeftHelperColorReadOnly}: ${textSecondary};
                ${tokens.textFieldTitleCaptionColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLabelColorReadOnly}: ${textPrimary};
            `,
        },
    },
};
