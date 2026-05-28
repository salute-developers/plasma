import { css, selectTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
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
    surfaceTransparentNegative,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, surfaceTransparentNegativeActive
 * surfaceTransparentPositive, surfaceTransparentPositiveActive, surfaceTransparentWarning
 * surfaceTransparentWarningActive
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
        chipView: 'default',
        hintView: 'default',
        hintSize: 'm',
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

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-positive);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-positive-active);
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

                /* NOTE: no token surfaceTransparentWarning in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-warning);
                /* NOTE: no token surfaceTransparentWarningActive in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-warning-active);
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
                /* NOTE: no token surfaceTransparentNegativeActive in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-negative-active);
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

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
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

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
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

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
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

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
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

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
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

                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxIconColor}: ${onDarkTextPrimary};
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
            `,
        },
        size: {
            l: css`
                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.0625rem -0.438rem -0.0625rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyL.lineHeight};

                ${tokens.textFieldLabelOffset}: 0.75rem;
                ${tokens.textFieldLabelFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldLabelFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldLabelFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldLabelFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLabelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLabelLineHeight}: ${bodyL.lineHeight};

                ${tokens.textFieldHintMargin}: -0.688rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: 0.563rem -2.188rem auto auto;

                ${tokens.textFieldLeftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.5rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${tokens.textFieldChipGap}: 0.25rem;
                ${tokens.textFieldChipBorderRadius}: 0.5rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 2.75rem;
                ${tokens.textFieldChipPadding}: 0 0.75rem 0 1rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.625rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1.5rem;
                ${tokens.textFieldChipFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldChipFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldChipFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldChipFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldChipLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldChipLineHeight}: ${bodyL.lineHeight};

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.5rem;
                ${tokens.targetHeight}: 3.5rem;
                ${tokens.buttonPadding}: 1.5rem 0 1.5rem;

                ${tokens.emptyStatePadding}: 1rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 1rem 0.875rem;
                ${tokens.itemPaddingTight}: 0.75rem 0.875rem;
                ${tokens.itemBorderRadius}: 0.75rem;
                ${tokens.itemIconMargin}: 0 0.5rem 0 0;
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
                ${tokens.cellTitleFontFamily}: ${bodyL.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyL.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyL.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyL.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyL.lineHeight};

                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyL.lineHeight};

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;

                ${tokens.indicatorSize}: 0.375rem;

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

                ${tokens.textFieldLeftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.emptyStatePadding}: 0.875rem 1rem 0.875rem 1rem;
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

                ${tokens.textFieldLeftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.emptyStatePadding}: 0.625rem 0.875rem 0.625rem 0.875rem;
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
            xs: css`
                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.0625rem -0.688rem -0.0625rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.688rem -0.688rem -0.688rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelOffset}: 0.375rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldHintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.textFieldHintTargetSize}: 2.375rem;
                ${tokens.textFieldHintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;
                ${tokens.textFieldClearHintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;

                ${tokens.textFieldLeftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.25rem;
                ${tokens.targetHeight}: 2rem;
                ${tokens.buttonPadding}: 0.75rem 0 0.75rem;

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontLineHeight}: var(--plasma-typo-body-xs-line-height);

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
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldTooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

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
