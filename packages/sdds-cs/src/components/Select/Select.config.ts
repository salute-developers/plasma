import {
    bodyM,
    bodyS,
    bodyXS,
    inverseTextPrimary,
    inverseTextSecondary,
    onDarkTextPrimary,
    outlineAccent,
    outlineNegative,
    outlineNegativeHover,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    surfaceClear,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidDefault,
    surfaceSolidDefaultHover,
    surfaceSolidPrimary,
    surfaceSolidPrimaryActive,
    surfaceSolidPrimaryHover,
    surfaceTransparentAccent,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textNegative,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, selectTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        labelPlacement: 'outer',
        chipView: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldBackgroundColor}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidCard};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldBorderColor}: ${outlineSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.buttonColor}: ${textAccent};
                ${tokens.buttonColorHover}: ${textAccentMinor};
                ${tokens.buttonColorActive}: ${textAccentActive};
                ${tokens.buttonArrowColor}: ${textPrimary};
                ${tokens.buttonArrowColorHover}: ${textPrimaryHover};
                ${tokens.buttonArrowColorActive}: ${textPrimaryHover};
                ${tokens.buttonBackgroundColor}: ${surfaceSolidPrimary};
                ${tokens.buttonBackgroundColorHover}: ${surfaceSolidPrimaryHover};
                ${tokens.buttonBackgroundColorActive}: ${surfaceSolidPrimaryActive};

                ${tokens.disclosureIconColor}: ${textAccent};
                ${tokens.disclosureIconColorHover}: ${textAccentMinor};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentAccent};
                ${tokens.itemDisabledOpacity}: 1;
                ${tokens.itemDisabledColor}: ${textSecondary};

                ${tokens.dropdownBorderColor}: ${outlineSolidPrimary};
                ${tokens.checkboxIconColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceSolidPrimary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: none;
                ${tokens.checkboxTriggerBorderColor}: ${outlineAccent};
            `,
            negative: css`
                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldBackgroundColor}: ${surfaceSolidCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidCard};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: ${textNegative};
                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldBorderColor}: ${outlineNegative};
                ${tokens.textFieldBorderColorHover}: ${outlineNegativeHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.buttonColor}: ${textAccent};
                ${tokens.buttonColorHover}: ${textAccentMinor};
                ${tokens.buttonColorActive}: ${textAccentActive};
                ${tokens.buttonArrowColor}: ${textPrimary};
                ${tokens.buttonArrowColorHover}: ${textPrimaryHover};
                ${tokens.buttonArrowColorActive}: ${textPrimaryHover};
                ${tokens.buttonBackgroundColor}: ${surfaceSolidPrimary};
                ${tokens.buttonBackgroundColorHover}: ${surfaceSolidPrimaryHover};
                ${tokens.buttonBackgroundColorActive}: ${surfaceSolidPrimaryActive};

                ${tokens.disclosureIconColor}: ${textAccent};
                ${tokens.disclosureIconColorHover}: ${textAccentMinor};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentAccent};
                ${tokens.itemDisabledOpacity}: 1;
                ${tokens.itemDisabledColor}: ${textSecondary};

                ${tokens.dropdownBorderColor}: ${outlineSolidPrimary};
                ${tokens.checkboxIconColor}: ${textAccent};

                ${tokens.dividerColor}: ${surfaceSolidPrimary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: none;
                ${tokens.checkboxTriggerBorderColor}: ${outlineAccent};
            `,
        },
        size: {
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldLeftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.textFieldLeftHelperFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldLeftHelperFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldLeftHelperFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldLeftHelperFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLeftHelperLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLeftHelperLineHeight}: ${bodyS.lineHeight};

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
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -2.125rem auto auto;

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

                ${tokens.emptyStatePadding}: 0.625rem 0.875rem 0.625rem 0.875rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.dropdownBorderWidth}: 0.125rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.5rem 0.5rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1rem;
                ${tokens.itemIconMargin}: 0 0.5rem 0 0;

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
                ${tokens.textFieldPlaceholderColor}: var(--plasma-input-label-color, var(--plasma-input-placeholder-color, var(--plasma-colors-secondary)));
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
                ${tokens.textFieldChipCloseIconColorHover}: ${inverseTextPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
        },
        disabled: {
            true: css`
                ${tokens.textFieldDisabledOpacity}: 1;
                ${tokens.textFieldBackgroundColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColor}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${surfaceSolidPrimary};
                ${tokens.textFieldBorderColorFocus}: ${surfaceSolidPrimary};
                ${tokens.textFieldColor}: ${textSecondary};
            `,
        },
        readOnly: {
            true: css`
                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceClear};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLeftHelperColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLabelColorReadOnly}: ${textSecondary};
                ${tokens.disclosureIconOpacityReadOnly}: 0.4;
                ${tokens.textFieldTitleCaptionColorReadOnly}: ${textSecondary};
                ${tokens.textFieldBorderColor}: transparent;
                ${tokens.textFieldBorderWidth}: 0;
            `,
        },
    },
};
