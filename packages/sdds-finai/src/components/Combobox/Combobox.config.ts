import { css, comboboxTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyM,
    bodyS,
    bodyXS,
    dataBlueLight,
    dataBlueLightActive,
    inverseTextPrimary,
    inverseTextSecondary,
    inverseTextSecondaryHover,
    onDarkTextPrimary,
    onDarkTextSecondary,
    onDarkTextSecondaryHover,
    outlineAccent,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    outlineTransparentInfo,
    outlineTransparentInfoActive,
    outlineTransparentInfoHover,
    outlineTransparentNegative,
    outlineTransparentNegativeHover,
    outlineTransparentPositive,
    outlineTransparentPositiveHover,
    outlineTransparentWarning,
    outlineTransparentWarningHover,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidCardBrightness,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceTransparentCard,
    surfaceTransparentNegative,
    surfaceTransparentPositive,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    surfaceTransparentWarning,
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
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_finai';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        labelPlacement: 'outer',
        chipView: 'secondary',
        hintView: 'default',
        hintSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldClearColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCard};
                ${tokens.textFieldBorderColor}: ${outlineSolidPrimary};
                ${tokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textSecondary};
                ${tokens.textFieldLeftHelperColor}: ${textSecondary};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldChipCloseIconColor}: ${textSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${textSecondaryHover};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${textSecondary};
                ${tokens.textFieldChipColor}: ${textPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorHover}: ${textPrimary};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.textFieldChipColorActive}: ${textPrimary};
                ${tokens.textFieldChipBackgroundActive}: ${surfaceTransparentSecondaryActive};
                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnly}: ${textPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnlyHover}: ${textPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 0.72;

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
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
                ${tokens.textFieldClearColor}: ${textPositive};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textPositive};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textPositive};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentPositive};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCard};
                ${tokens.textFieldBorderColor}: ${outlineTransparentPositive};
                ${tokens.textFieldBorderColorHover}: ${outlineTransparentPositiveHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textSecondary};
                ${tokens.textFieldLeftHelperColor}: ${textPositive};
                ${tokens.textFieldLeftHelperColorFocus}: ${textSecondary};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldChipCloseIconColor}: ${textSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${textSecondaryHover};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${textSecondary};
                ${tokens.textFieldChipColor}: ${textPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorHover}: ${textPrimary};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.textFieldChipColorActive}: ${textPrimary};
                ${tokens.textFieldChipBackgroundActive}: ${surfaceTransparentSecondaryActive};
                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnly}: ${textPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnlyHover}: ${textPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 0.72;

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
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
                ${tokens.textFieldClearColor}: ${textWarning};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textWarning};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textWarning};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentWarning};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCard};
                ${tokens.textFieldBorderColor}: ${outlineTransparentWarning};
                ${tokens.textFieldBorderColorHover}: ${outlineTransparentWarningHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textSecondary};
                ${tokens.textFieldLeftHelperColor}: ${textWarning};
                ${tokens.textFieldLeftHelperColorFocus}: ${textSecondary};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldChipCloseIconColor}: ${textSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${textSecondaryHover};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${textSecondary};
                ${tokens.textFieldChipColor}: ${textPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorHover}: ${textPrimary};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.textFieldChipColorActive}: ${textPrimary};
                ${tokens.textFieldChipBackgroundActive}: ${surfaceTransparentSecondaryActive};
                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnly}: ${textPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnlyHover}: ${textPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 0.72;

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
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
                ${tokens.textFieldClearColor}: ${textNegative};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textNegative};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textNegative};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentNegative};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCard};
                ${tokens.textFieldBorderColor}: ${outlineTransparentNegative};
                ${tokens.textFieldBorderColorHover}: ${outlineTransparentNegativeHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};

                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textSecondary};
                ${tokens.textFieldLeftHelperColor}: ${textNegative};
                ${tokens.textFieldLeftHelperColorFocus}: ${textSecondary};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldChipCloseIconColor}: ${textSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${textSecondaryHover};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${textSecondary};
                ${tokens.textFieldChipColor}: ${textPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorHover}: ${textPrimary};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.textFieldChipColorActive}: ${textPrimary};
                ${tokens.textFieldChipBackgroundActive}: ${surfaceTransparentSecondaryActive};
                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnly}: ${textPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnlyHover}: ${textPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 0.72;

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.textFieldHintIconColor}: ${textSecondary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
            `,
            edited: css`
                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldClearColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${dataBlueLight};
                ${tokens.textFieldBackgroundColorFocus}: ${dataBlueLightActive};
                ${tokens.textFieldBorderColor}: ${outlineTransparentInfo};
                ${tokens.textFieldBorderColorHover}: ${outlineTransparentInfoHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineTransparentInfoActive};

                ${tokens.textFieldCaretColor}: ${textAccent};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textSecondary};
                ${tokens.textFieldLeftHelperColor}: ${textSecondary};
                ${tokens.textFieldLeftHelperColorFocus}: ${textSecondary};
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldChipCloseIconColor}: ${textSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${textSecondaryHover};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${textSecondary};
                ${tokens.textFieldChipColor}: ${textPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorHover}: ${textPrimary};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.textFieldChipColorActive}: ${textPrimary};
                ${tokens.textFieldChipBackgroundActive}: ${surfaceTransparentSecondaryActive};
                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnly}: ${textPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnlyHover}: ${textPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 0.72;

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
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
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.25rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.375rem -0.1875rem 0.75rem;
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

                ${tokens.textFieldBorderWidth}: 0.125rem;
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

                ${tokens.textFieldLeftHelperOffset}: 0.25rem 0 0 0;
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

                ${tokens.emptyStatePadding}: 0.625rem 0.875rem 0.625rem 0.875rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.5rem 0.625rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.625rem;
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

                ${tokens.disclosureIconMargin}: 0 -0.375rem 0 0;
            `,
            xs: css`
                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.1875rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.25rem -0.0625rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.0625rem -0.688rem -0.0625rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.688rem -0.688rem -0.688rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldBorderWidth}: 0.125rem;
                ${tokens.textFieldLabelOffset}: 0.375rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldHintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;

                ${tokens.textFieldLeftHelperOffset}: 0.25rem 0 0 0;
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
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.125rem -0.6875rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 0.813rem -1.988rem auto auto;

                ${tokens.textFieldChipGap}: 0.25rem;
                ${tokens.textFieldChipBorderRadius}: 0.125rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 1.25rem;
                ${tokens.textFieldChipPadding}: 0 0.375rem 0 0.625rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.25rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 0.75rem;
                ${tokens.textFieldChipFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldChipFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldChipFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldChipFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldChipLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldChipLineHeight}: ${bodyXS.lineHeight};

                ${tokens.emptyStatePadding}: 0.5rem 0.625rem 0.5rem 0.625rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.itemHeight}: 1rem;
                ${tokens.itemPadding}: 0.5rem 0.375rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.375rem;
                ${tokens.itemBorderRadius}: 0.375rem;
                ${tokens.itemIconSize}: 1rem;
                ${tokens.itemIconSizeTight}: 1rem;
                ${tokens.itemIconMargin}: 0 0.25rem 0 0;
                ${tokens.itemGap}: 0.25rem;
                ${tokens.itemTreeOffsetWidth}: 1.25rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.25rem;
                ${tokens.cellTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyM.lineHeight};

                ${tokens.checkboxTriggerSize}: 0.875rem;
                ${tokens.checkboxTriggerSizeTight}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;

                ${tokens.indicatorSize}: 0.375rem;

                ${tokens.dividerMarginTop}: 0.25rem;
                ${tokens.dividerMarginRight}: 0.5rem;
                ${tokens.dividerMarginBottom}: 0.225rem;
                ${tokens.dividerMarginLeft}: 0.5rem;
                ${tokens.dividerMarginTopTight}: 0.125rem;
                ${tokens.dividerMarginBottomTight}: 0.125rem;

                ${tokens.disclosureIconMargin}: 0 -0.25rem 0 0;
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
                ${tokens.textFieldChipColorActive}: ${inverseTextPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceSolidDefault};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceSolidDefaultHover};
                ${tokens.textFieldChipBackgroundActive}: ${surfaceSolidDefaultActive};
                ${tokens.textFieldChipCloseIconColor}: ${inverseTextSecondary};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${inverseTextSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${inverseTextSecondaryHover};

                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceSolidDefault};
                ${tokens.textFieldChipColorReadOnly}: ${inverseTextPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceSolidDefault};
                ${tokens.textFieldChipColorReadOnlyHover}: ${inverseTextPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
            secondary: css`
                ${tokens.textFieldChipColor}: ${textPrimary};
                ${tokens.textFieldChipColorHover}: ${textPrimaryHover};
                ${tokens.textFieldChipColorActive}: ${textPrimaryActive};
                ${tokens.textFieldChipBackground}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.textFieldChipBackgroundActive}: ${surfaceTransparentSecondaryActive};
                ${tokens.textFieldChipCloseIconColor}: ${textTertiary};
                ${tokens.textFieldChipCloseIconColorHover}: ${textTertiary};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${textTertiary};

                ${tokens.textFieldChipBackgroundReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnly}: ${textPrimary};
                ${tokens.textFieldChipBackgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${tokens.textFieldChipColorReadOnlyHover}: ${textPrimary};
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
            accent: css`
                ${tokens.textFieldChipColor}: ${onDarkTextPrimary};
                ${tokens.textFieldChipColorHover}: ${onDarkTextPrimary};
                ${tokens.textFieldChipColorActive}: ${onDarkTextPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceAccent};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceAccentHover};
                ${tokens.textFieldChipBackgroundActive}: ${surfaceAccentActive};
                ${tokens.textFieldChipCloseIconColor}: ${onDarkTextSecondary};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${onDarkTextSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${onDarkTextSecondaryHover};

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
                ${tokens.textFieldTooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
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
                ${tokens.textFieldColor}: ${textSecondary};
                ${tokens.textFieldDisabledOpacity}: 1;
                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.textFieldBorderColor}: transparent;
                ${tokens.textFieldContentSlotRightColor}: ${textSecondary};
                ${tokens.textFieldContentSlotRightColorHover}: ${textSecondary};
                ${tokens.textFieldContentSlotRightColorActive}: ${textSecondary};
            `,
        },
        readOnly: {
            true: css`
                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 1;
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentCard};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLeftHelperColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLabelColorReadOnly}: ${textSecondary};
                ${tokens.textFieldContentSlotRightColor}: ${textSecondary};
                ${tokens.textFieldContentSlotRightColorHover}: ${textSecondary};
                ${tokens.textFieldContentSlotRightColorActive}: ${textSecondary};
                ${tokens.textFieldBorderColorReadOnly}: transparent;
                ${tokens.textFieldBorderWidth}: 0.125rem;
            `,
        },
    },
};
