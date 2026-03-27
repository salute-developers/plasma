import {
    bodyM,
    bodyS,
    bodyXS,
    bodyXXS,
    inverseTextPrimary,
    inverseTextPrimaryActive,
    inverseTextPrimaryHover,
    inverseTextSecondary,
    inverseTextSecondaryHover,
    onDarkSurfaceSolidDefault,
    onDarkSurfaceSolidDefaultActive,
    onDarkSurfaceSolidDefaultHover,
    onDarkTextPrimary,
    onDarkTextPrimaryActive,
    onDarkTextPrimaryHover,
    onDarkTextSecondary,
    onDarkTextSecondaryActive,
    onDarkTextSecondaryHover,
    onLightSurfaceSolidDefault,
    onLightSurfaceSolidDefaultActive,
    onLightSurfaceSolidDefaultHover,
    onLightSurfaceTransparentDeep,
    onLightSurfaceTransparentDeepActive,
    onLightSurfaceTransparentDeepHover,
    onLightTextPrimary,
    onLightTextPrimaryActive,
    onLightTextPrimaryHover,
    onLightTextSecondary,
    onLightTextSecondaryActive,
    onLightTextSecondaryHover,
    outlineAccent,
    outlineClear,
    outlineNegativeMinor,
    outlineNegativeMinorActive,
    outlineNegativeMinorHover,
    outlinePositiveMinor,
    outlinePositiveMinorActive,
    outlinePositiveMinorHover,
    outlineSolidSecondary,
    outlineTransparentTertiary,
    outlineWarningMinor,
    outlineWarningMinorActive,
    outlineWarningMinorHover,
    shadowDownHardM,
    shadowDownSoftS,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
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
    surfaceSolidSecondary,
    surfaceTransparentCard,
    surfaceTransparentCardActive,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textAccent,
    textAccentHover,
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
} from '@salutejs/sdds-themes/tokens/sdds_insol';
import { css, selectTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
        chipView: 'default',
        _checkboxAppearance: 'outline',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textFieldColor}: ${textPrimary};

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCardActive};
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

                ${tokens.textFieldBorderColor}: ${outlineClear};
                ${tokens.textFieldBorderColorFocus}: ${outlineSolidSecondary};
                ${tokens.textFieldBorderColorHover}: ${outlineClear};

                ${tokens.textFieldBoxShadow}: ${shadowDownSoftS};

                ${tokens.buttonColor}: ${inverseTextPrimary};
                ${tokens.buttonColorHover}: ${inverseTextPrimaryHover};
                ${tokens.buttonColorActive}: ${inverseTextPrimaryActive};
                ${tokens.buttonArrowColor}: ${inverseTextSecondary};
                ${tokens.buttonArrowColorHover}: ${inverseTextSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${inverseTextSecondaryHover};
                ${tokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${tokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${tokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultHover};

                ${tokens.disclosureIconColor}: ${textAccent};
                ${tokens.disclosureIconColorHover}: ${textAccentHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};

                ${tokens.textFieldHintIconColor}: ${textSecondary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
            positive: css`
                ${tokens.textFieldColor}: color-mix(in oklab, ${textPositive} 70%, transparent);

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCardActive};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: color-mix(in oklab, ${textPositive} 70%, transparent);
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldBorderColor}: ${outlinePositiveMinor};
                ${tokens.textFieldBorderColorFocus}: ${outlinePositiveMinorActive};
                ${tokens.textFieldBorderColorHover}: ${outlinePositiveMinorHover};

                ${tokens.textFieldBoxShadow}: ${shadowDownSoftS};

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

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
            warning: css`
                ${tokens.textFieldColor}: color-mix(in oklab, ${textWarning} 70%, transparent);

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCardActive};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: color-mix(in oklab, ${textWarning} 70%, transparent);
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldBorderColor}: ${outlineWarningMinor};
                ${tokens.textFieldBorderColorFocus}: ${outlineWarningMinorActive};
                ${tokens.textFieldBorderColorHover}: ${outlineWarningMinorHover};

                ${tokens.textFieldBoxShadow}: ${shadowDownSoftS};

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

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
            negative: css`
                ${tokens.textFieldColor}: color-mix(in oklab, ${textNegative} 70%, transparent);

                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentCard};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCardActive};
                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};
                ${tokens.textFieldLabelColor}: ${textPrimary};
                ${tokens.textFieldLeftHelperColor}: color-mix(in oklab, ${textNegative} 70%, transparent);
                ${tokens.textFieldFocusColor}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldIndicatorColor}: ${surfaceNegative};
                ${tokens.textFieldOptionalColor}: ${textTertiary};

                ${tokens.textFieldBorderColor}: ${outlineNegativeMinor};
                ${tokens.textFieldBorderColorFocus}: ${outlineNegativeMinorActive};
                ${tokens.textFieldBorderColorHover}: ${outlineNegativeMinorHover};

                ${tokens.textFieldBoxShadow}: ${shadowDownSoftS};

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

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
            accent: css`
                ${tokens.buttonColor}: ${onDarkTextPrimary};
                ${tokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.buttonColorActive}: ${onDarkTextPrimaryActive};
                ${tokens.buttonArrowColor}: ${onDarkTextSecondary};
                ${tokens.buttonArrowColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${onDarkTextSecondaryHover};
                ${tokens.buttonBackgroundColor}: ${surfaceAccent};
                ${tokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${tokens.buttonBackgroundColorActive}: ${surfaceAccentActive};

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
            secondary: css`
                ${tokens.buttonColor}: ${textPrimary};
                ${tokens.buttonColorHover}: ${textPrimaryHover};
                ${tokens.buttonColorActive}: ${textPrimaryActive};
                ${tokens.buttonArrowColor}: ${textSecondary};
                ${tokens.buttonArrowColorHover}: ${textSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${textSecondaryHover};
                ${tokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
            clear: css`
                ${tokens.buttonColor}: ${textPrimary};
                ${tokens.buttonColorHover}: ${textPrimaryHover};
                ${tokens.buttonColorActive}: ${textPrimaryActive};
                ${tokens.buttonArrowColor}: ${textSecondary};
                ${tokens.buttonArrowColorHover}: ${textSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${textSecondaryActive};
                ${tokens.buttonBackgroundColor}: ${surfaceClear};
                ${tokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${tokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
            dark: css`
                ${tokens.buttonColor}: ${onDarkTextPrimary};
                ${tokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.buttonColorActive}: ${onDarkTextPrimaryActive};
                ${tokens.buttonArrowColor}: ${onDarkTextSecondary};
                ${tokens.buttonArrowColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${onDarkTextSecondaryActive};
                ${tokens.buttonBackgroundColor}:${onLightSurfaceTransparentDeep};
                ${tokens.buttonBackgroundColorHover}:${onLightSurfaceTransparentDeepHover};
                ${tokens.buttonBackgroundColorActive}:${onLightSurfaceTransparentDeepActive};

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
            black: css`
                ${tokens.buttonColor}: ${onDarkTextPrimary};
                ${tokens.buttonColorHover}: ${onDarkTextPrimaryHover};
                ${tokens.buttonColorActive}: ${onDarkTextPrimaryActive};
                ${tokens.buttonArrowColor}: ${onDarkTextSecondary};
                ${tokens.buttonArrowColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${onDarkTextSecondaryActive};
                ${tokens.buttonBackgroundColor}:${onLightSurfaceSolidDefault};
                ${tokens.buttonBackgroundColorHover}:${onLightSurfaceSolidDefaultHover};
                ${tokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};

                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
            white: css`
                ${tokens.buttonColor}: ${onLightTextPrimary};
                ${tokens.buttonColorHover}: ${onLightTextPrimaryHover};
                ${tokens.buttonColorActive}: ${onLightTextPrimaryActive};
                ${tokens.buttonArrowColor}: ${onLightTextSecondary};
                ${tokens.buttonArrowColorHover}: ${onLightTextSecondaryHover};
                ${tokens.buttonArrowColorActive}: ${onLightTextSecondaryActive};
                ${tokens.buttonBackgroundColor}:${onDarkSurfaceSolidDefault};
                ${tokens.buttonBackgroundColorHover}:${onDarkSurfaceSolidDefaultHover};
                ${tokens.buttonBackgroundColorActive}:${onDarkSurfaceSolidDefaultActive};

                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.disclosureIconColor}: ${textSecondary};
                ${tokens.disclosureIconColorHover}: ${textSecondaryHover};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemIconColor}: ${textAccent};

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};
            `,
        },
        size: {
            xl: css`
                ${tokens.textFieldHeight}: 4rem;
                ${tokens.textFieldPadding}: 1.375rem 1.25rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 1rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.625rem -0.125rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem 0rem -0.125rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.75rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldLabelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLabelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLabelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLabelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLabelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLabelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLeftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLeftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLeftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLeftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLeftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelInnerPadding}: 0.8125rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.938rem 0 0.813rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.5rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.75rem auto auto -0.875rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.75rem -0.875rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.75rem -2.488rem auto auto;

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.82rem -2.938rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.82rem -2.063rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.75rem -2.488rem auto auto;

                ${tokens.textFieldChipGap}: 0.125rem;
                ${tokens.textFieldChipBorderRadius}: 0.625rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 3.25rem;
                ${tokens.textFieldChipPadding}: 0 0.75rem 0 1rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.625rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1.5rem;
                ${tokens.textFieldChipFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldChipFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldChipFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldChipFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldChipLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldChipLineHeight}: ${bodyM.lineHeight};

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.5rem;
                ${tokens.targetHeight}: 4rem;
                ${tokens.buttonPadding}: 1.5rem 0 1.5rem;

                ${tokens.padding}: 0.125rem;
                ${tokens.margin}: 0.375rem;
                ${tokens.borderRadius}: 1rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 1.25rem 1.125rem;
                ${tokens.itemPaddingTight}: 1rem 1.125rem;
                ${tokens.itemBorderRadius}: 0.875rem;
                ${tokens.itemIconMargin}: 0 0.625rem 0 0;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1.5rem;
                ${tokens.itemGap}: 0.5rem;
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
                ${tokens.checkboxTriggerBorderRadius}: 0.3125rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.3125rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};

                ${tokens.indicatorSize}: 0.375rem;

                ${tokens.disclosureIconSize}: 1.5rem;
                ${tokens.disclosureIconMargin}: 0 0 0 0.625rem;

                ${tokens.dividerMarginTop}: 0.5rem;
                ${tokens.dividerMarginRight}: 1rem;
                ${tokens.dividerMarginBottom}: 0.5rem;
                ${tokens.dividerMarginLeft}: 1rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;
            `,
            l: css`
                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldPadding}: 1rem 1.125rem 1rem 1.125rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.625rem -0.0625rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0rem -0.0625rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.75rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldLabelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLabelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLabelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLabelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLabelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLabelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLeftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLeftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLeftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLeftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLeftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.5rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.5rem -2.25rem auto auto;

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.563rem -2.188rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${tokens.textFieldChipGap}: 0.125rem;
                ${tokens.textFieldChipBorderRadius}: 0.5rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 2.75rem;
                ${tokens.textFieldChipPadding}: 0 0.75rem 0 1rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.625rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1.25rem;
                ${tokens.textFieldChipFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldChipFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldChipFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldChipFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldChipLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldChipLineHeight}: ${bodyS.lineHeight};

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.5rem;
                ${tokens.targetHeight}: 3.5rem;
                ${tokens.buttonPadding}: 1.5rem 0 1.5rem;

                ${tokens.padding}: 0.125rem;
                ${tokens.margin}: 0.375rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 1rem;
                ${tokens.itemPaddingTight}: 0.75rem 1rem;
                ${tokens.itemBorderRadius}: 0.75rem;
                ${tokens.itemIconMargin}: 0 0.625rem 0 0;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1.5rem;
                ${tokens.itemGap}: 0.5rem;
                ${tokens.itemTreeOffsetWidth}: 2rem;

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
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};

                ${tokens.indicatorSize}: 0.375rem;

                ${tokens.disclosureIconSize}: 1.5rem;
                ${tokens.disclosureIconMargin}: 0 0 0 0.625rem;

                ${tokens.dividerMarginTop}: 0.5rem;
                ${tokens.dividerMarginRight}: 1rem;
                ${tokens.dividerMarginBottom}: 0.5rem;
                ${tokens.dividerMarginLeft}: 1rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;
            `,
            m: css`
                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.625rem -0.125rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem 0rem -0.125rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.625rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelInnerFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.textFieldLabelInnerFontSize}: ${bodyXXS.fontSize};
                ${tokens.textFieldLabelInnerFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.textFieldLabelInnerFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.textFieldLabelInnerLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.textFieldLabelInnerLineHeight}: ${bodyXXS.lineHeight};

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
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.25rem -2.25rem auto auto;

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;

                ${tokens.textFieldChipGap}: 0.125rem;
                ${tokens.textFieldChipBorderRadius}: 0.375rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 2.25rem;
                ${tokens.textFieldChipPadding}: 0 0.625rem 0 0.875rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.5rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1rem;
                ${tokens.textFieldChipFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldChipFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldChipFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldChipFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldChipLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldChipLineHeight}: ${bodyXS.lineHeight};

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.375rem;
                ${tokens.targetHeight}: 3rem;
                ${tokens.buttonPadding}: 1.25rem 0 1.25rem;

                ${tokens.padding}: 0.125rem;
                ${tokens.margin}: 0.25rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.875rem;
                ${tokens.itemPaddingTight}: 0.625rem 0.875rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemIconMargin}: 0 0.625rem 0 0;
                ${tokens.itemIconSize}: 1.25rem;
                ${tokens.itemIconSizeTight}: 1.25rem;
                ${tokens.itemGap}: 0.375rem;
                ${tokens.itemTreeOffsetWidth}: 2rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyXS.lineHeight};

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};

                ${tokens.indicatorSize}: 0.375rem;

                ${tokens.disclosureIconSize}: 1.25rem;
                ${tokens.disclosureIconMargin}: 0 0 0 0.625rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.875rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.875rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;
            `,
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.75rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.5rem -0.1875rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem 0rem -0.1875rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelInnerFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.textFieldLabelInnerFontSize}: ${bodyXXS.fontSize};
                ${tokens.textFieldLabelInnerFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.textFieldLabelInnerFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.textFieldLabelInnerLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.textFieldLabelInnerLineHeight}: ${bodyXXS.lineHeight};

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
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -2.125rem auto auto;

                ${tokens.textFieldHintCustomIconTargetSize}:1rem;
                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.062rem -2.1875rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.062rem -1.938rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -1.988rem auto auto;

                ${tokens.textFieldChipGap}: 0.125rem;
                ${tokens.textFieldChipBorderRadius}: 0.25rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 1.75rem;
                ${tokens.textFieldChipPadding}: 0 0.5rem 0 0.75rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.375rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1rem;
                ${tokens.textFieldChipFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldChipFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldChipFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldChipFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldChipLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldChipLineHeight}: ${bodyXS.lineHeight};

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.25rem;
                ${tokens.targetHeight}: 2.5rem;
                ${tokens.buttonPadding}: 1rem 0 1rem;

                ${tokens.padding}: 0.125rem;
                ${tokens.margin}: 0.25rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.itemHeight}: 1rem;
                ${tokens.itemPadding}: 0.75rem 0.625rem;
                ${tokens.itemPaddingTight}: 0.5rem 0.625rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemIconSize}: 1rem;
                ${tokens.itemIconSizeTight}: 1rem;
                ${tokens.itemIconMargin}: 0 0.5rem 0 0;
                ${tokens.itemGap}: 0.375rem;
                ${tokens.itemTreeOffsetWidth}: 1.875rem;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyXS.lineHeight};

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};

                ${tokens.indicatorSize}: 0.375rem;

                ${tokens.disclosureIconSize}: 1rem;
                ${tokens.disclosureIconMargin}: 0 0 0 0.625rem;
                ${tokens.disclosureIconMargin}: 0 0 0 0.5rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.75rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.75rem;
                ${tokens.dividerMarginTopTight}: 0.25rem;
                ${tokens.dividerMarginBottomTight}: 0.25rem;
            `,
            xs: css`
                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldPadding}: 0.5rem 0.625rem 0.5rem 0.625rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.375rem -0.0625rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0rem -0.0625rem 0.625rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.375rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLabelInnerFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.textFieldLabelInnerFontSize}: ${bodyXXS.fontSize};
                ${tokens.textFieldLabelInnerFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.textFieldLabelInnerFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.textFieldLabelInnerLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.textFieldLabelInnerLineHeight}: ${bodyXXS.lineHeight};

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
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.125rem -0.6875rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 0.813rem -1.875rem auto auto;

                ${tokens.textFieldHintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 0.813rem -1.988rem auto auto;

                ${tokens.textFieldChipGap}: 0.125rem;
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

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.25rem;
                ${tokens.targetHeight}: 2rem;
                ${tokens.buttonPadding}: 0.75rem 0 0.75rem;

                ${tokens.padding}: 0.125rem;
                ${tokens.margin}: 0.125rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.itemHeight}: 1rem;
                ${tokens.itemPadding}: 0.5rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.5rem;
                ${tokens.itemBorderRadius}: 0.375rem;
                ${tokens.itemIconSize}: 1rem;
                ${tokens.itemIconSizeTight}: 1rem;
                ${tokens.itemIconMargin}: 0 0.375rem 0 0;
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

                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyXS.lineHeight};

                ${tokens.checkboxTriggerSize}: 0.875rem;
                ${tokens.checkboxTriggerSizeTight}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderCheckedColor}: ${outlineAccent};
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: ${outlineTransparentTertiary};

                ${tokens.indicatorSize}: 0.375rem;

                ${tokens.disclosureIconSize}: 1rem;
                ${tokens.disclosureIconMargin}: 0 0 0 0.375rem;

                ${tokens.dividerMarginTop}: 0.25rem;
                ${tokens.dividerMarginRight}: 0.5rem;
                ${tokens.dividerMarginBottom}: 0.225rem;
                ${tokens.dividerMarginLeft}: 0.5rem;
                ${tokens.dividerMarginTopTight}: 0.125rem;
                ${tokens.dividerMarginBottomTight}: 0.125rem;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
            `,
            outer: css``,
        },
        chipView: {
            default: css`
                ${tokens.textFieldChipColor}: ${inverseTextPrimary};
                ${tokens.textFieldChipColorHover}: ${inverseTextPrimary};
                ${tokens.textFieldChipBackground}: ${surfaceSolidDefault};
                ${tokens.textFieldChipBackgroundHover}: ${surfaceSolidDefaultHover};
                ${tokens.textFieldChipCloseIconColor}: ${onDarkTextSecondary};
                ${tokens.textFieldChipCloseIconColorReadonly}: ${onDarkTextSecondary};
                ${tokens.textFieldChipCloseIconColorHover}: ${onDarkTextPrimary};

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
                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceSolidSecondary};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLeftHelperColorReadOnly}: ${textSecondary};
                ${tokens.textFieldTitleCaptionColorReadOnly}: ${textSecondary};
                ${tokens.textFieldLabelColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBorderColor}: transparent;
                ${tokens.textFieldBorderWidth}: 0;
            `,
        },
    },
};
