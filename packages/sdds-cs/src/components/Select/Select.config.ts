import { css, selectTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${selectTokens.textFieldColor}: var(--text-primary);
                ${selectTokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${selectTokens.textFieldBackgroundColor}: var(--surface-solid-card);
                ${selectTokens.textFieldBackgroundColorFocus}: var(--surface-solid-card);
                ${selectTokens.textFieldLabelColor}: var(--text-primary);
                ${selectTokens.textFieldLeftHelperColor}: var(--text-secondary);
                ${selectTokens.textFieldContentSlotColor}: var(--text-secondary);
                ${selectTokens.textFieldBorderColor}: var(--outline-solid-primary);
                ${selectTokens.textFieldBorderColorHover}: var(--outline-solid-primary-hover);
                ${selectTokens.textFieldBorderColorFocus}: var(--outline-accent);

                ${selectTokens.textFieldIndicatorColor}: var(--surface-negative);
                ${selectTokens.textFieldOptionalColor}: var(--text-tertiary);

                ${selectTokens.buttonColor}: var(--text-accent);
                ${selectTokens.buttonColorHover}: #1A9E32;
                ${selectTokens.buttonColorActive}: var(--text-accent-active);
                ${selectTokens.buttonArrowColor}: var(--text-primary);
                ${selectTokens.buttonArrowColorHover}: var(--text-primary-hover);
                ${selectTokens.buttonArrowColorActive}: var(--text-primary-hover);
                ${selectTokens.buttonBackgroundColor}: var(--surface-solid-primary);
                ${selectTokens.buttonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${selectTokens.buttonBackgroundColorActive}: var(--surface-solid-primary-active);

                ${selectTokens.disclosureIconColor}: var(--text-accent);
                ${selectTokens.disclosureIconColorHover}: #1A9E32;
                ${selectTokens.itemBackgroundHover}: var(--surface-transparent-accent);
                ${selectTokens.itemDisabledOpacity}: 1;
                ${selectTokens.itemDisabledColor}: var(--text-secondary);

                ${selectTokens.dropdownBorderColor}: var(--outline-solid-primary);
                ${selectTokens.checkboxIconColor}: var(--text-primary);

                ${selectTokens.dividerColor}: var(--surface-solid-primary);

                ${selectTokens.itemIconColor}: var(--text-accent);

                ${selectTokens.checkboxFillColor}: var(--text-accent);
                ${selectTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectTokens.checkboxTriggerBorderCheckedColor}: none;
                ${selectTokens.checkboxTriggerBorderColor}: var(--outline-accent);
            `,
            negative: css`
                ${selectTokens.textFieldColor}: var(--text-primary);
                ${selectTokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${selectTokens.textFieldBackgroundColor}: var(--surface-solid-card);
                ${selectTokens.textFieldBackgroundColorFocus}: var(--surface-solid-card);
                ${selectTokens.textFieldLabelColor}: var(--text-primary);
                ${selectTokens.textFieldLeftHelperColor}: var(--text-negative);
                ${selectTokens.textFieldContentSlotColor}: var(--text-secondary);
                ${selectTokens.textFieldBorderColor}: var(--outline-negative);
                ${selectTokens.textFieldBorderColorHover}: var(--outline-negative-hover);
                ${selectTokens.textFieldBorderColorFocus}: var(--outline-accent);

                ${selectTokens.textFieldIndicatorColor}: var(--surface-negative);
                ${selectTokens.textFieldOptionalColor}: var(--text-tertiary);

                ${selectTokens.buttonColor}: var(--text-accent);
                ${selectTokens.buttonColorHover}: #1A9E32;
                ${selectTokens.buttonColorActive}: var(--text-accent-active);
                ${selectTokens.buttonArrowColor}: var(--text-primary);
                ${selectTokens.buttonArrowColorHover}: var(--text-primary-hover);
                ${selectTokens.buttonArrowColorActive}: var(--text-primary-hover);
                ${selectTokens.buttonBackgroundColor}: var(--surface-solid-primary);
                ${selectTokens.buttonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${selectTokens.buttonBackgroundColorActive}: var(--surface-solid-primary-active);

                ${selectTokens.disclosureIconColor}: var(--text-accent);
                ${selectTokens.disclosureIconColorHover}: #1A9E32;
                ${selectTokens.itemBackgroundHover}: var(--surface-transparent-accent);
                ${selectTokens.itemDisabledOpacity}: 1;
                ${selectTokens.itemDisabledColor}: var(--text-secondary);

                ${selectTokens.dropdownBorderColor}: var(--outline-solid-primary);
                ${selectTokens.checkboxIconColor}: var(--text-accent);

                ${selectTokens.dividerColor}: var(--surface-solid-primary);

                ${selectTokens.itemIconColor}: var(--text-accent);

                ${selectTokens.checkboxFillColor}: var(--text-accent);
                ${selectTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectTokens.checkboxTriggerBorderCheckedColor}: none;
                ${selectTokens.checkboxTriggerBorderColor}: var(--outline-accent);
            `,
        },
        size: {
            s: css`
                ${selectTokens.textFieldHeight}: 2.5rem;
                ${selectTokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${selectTokens.textFieldPaddingWithChips}: 0.375rem;
                ${selectTokens.textFieldBorderRadius}: 0.75rem;
                ${selectTokens.textFieldBorderWidth}: 0.125rem;

                ${selectTokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${selectTokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${selectTokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${selectTokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${selectTokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectTokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectTokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectTokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectTokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectTokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectTokens.textFieldLabelOffset}: 0.5rem;
                ${selectTokens.textFieldLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectTokens.textFieldLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectTokens.textFieldLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectTokens.textFieldLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectTokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectTokens.textFieldLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectTokens.textFieldLeftHelperOffset}: 0.25rem;
                ${selectTokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectTokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectTokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectTokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectTokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectTokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectTokens.textFieldLabelInnerPadding}: 0.3125rem 0 0 0;
                ${selectTokens.textFieldContentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${selectTokens.textFieldIndicatorSizeInner}: 0.375rem;
                ${selectTokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${selectTokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${selectTokens.textFieldIndicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${selectTokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${selectTokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${selectTokens.textFieldClearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${selectTokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${selectTokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -2.125rem auto auto;

                ${selectTokens.textFieldChipGap}: 0.25rem;
                ${selectTokens.textFieldChipBorderRadius}: 0.25rem;
                ${selectTokens.textFieldChipWidth}: auto;
                ${selectTokens.textFieldChipHeight}: 1.75rem;
                ${selectTokens.textFieldChipPadding}: 0 0.5rem 0 0.75rem;
                ${selectTokens.textFieldChipClearContentMarginLeft}: 0.375rem;
                ${selectTokens.textFieldChipClearContentMarginRight}: 0rem;
                ${selectTokens.textFieldChipCloseIconSize}: 1rem;
                ${selectTokens.textFieldChipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectTokens.textFieldChipFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectTokens.textFieldChipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectTokens.textFieldChipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectTokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectTokens.textFieldChipLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectTokens.buttonArrowMargin}: 0 -0.125rem 0 0.25rem;
                ${selectTokens.targetHeight}: 2.5rem;
                ${selectTokens.buttonPadding}: 1rem 0 1rem;

                ${selectTokens.padding}: 0.125rem;
                ${selectTokens.borderRadius}: 0.75rem;

                ${selectTokens.dropdownBorderWidth}: 0.125rem;

                ${selectTokens.itemHeight}: 1.5rem;
                ${selectTokens.itemPadding}: 0.5rem 0.5rem;
                ${selectTokens.itemPaddingTight}: 0.25rem 0.5rem;
                ${selectTokens.itemBorderRadius}: 0.5rem;
                ${selectTokens.itemIconSize}: 1.5rem;
                ${selectTokens.itemIconSizeTight}: 1rem;
                ${selectTokens.itemIconMargin}: 0 0.5rem 0 0;

                ${selectTokens.cellPadding}: 0rem;
                ${selectTokens.cellPaddingLeftContent}: 0rem;
                ${selectTokens.cellPaddingContent}: 0rem;
                ${selectTokens.cellPaddingRightContent}: 0rem;
                ${selectTokens.cellTextboxGap}: 0.125rem;
                ${selectTokens.cellGap}: 0.375rem;
                ${selectTokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectTokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectTokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectTokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectTokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${selectTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectTokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectTokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectTokens.checkboxTriggerSize}: 1.25rem;
                ${selectTokens.checkboxTriggerSizeTight}: 0.875rem;
                ${selectTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectTokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${selectTokens.checkboxTriggerBorderWidth}: 0.125rem;

                ${selectTokens.indicatorSize}: 0.375rem;

                ${selectTokens.dividerMarginTop}: 0.375rem;
                ${selectTokens.dividerMarginRight}: 0.75rem;
                ${selectTokens.dividerMarginBottom}: 0.375rem;
                ${selectTokens.dividerMarginLeft}: 0.75rem;
                ${selectTokens.dividerMarginTopTight}: 0.25rem;
                ${selectTokens.dividerMarginBottomTight}: 0.25rem;
            `,
        },
        labelPlacement: {
            inner: css`
                ${selectTokens.textFieldPlaceholderColor}: var(--plasma-input-label-color, var(--plasma-input-placeholder-color, var(--plasma-colors-secondary)));
                ${selectTokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectTokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectTokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectTokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectTokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectTokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            outer: css``,
        },
        chipView: {
            default: css`
                ${selectTokens.textFieldChipColor}: var(--inverse-text-primary);
                ${selectTokens.textFieldChipBackground}: var(--surface-solid-default);
                ${selectTokens.textFieldChipBackgroundHover}: var(--surface-solid-default-hover);
                ${selectTokens.textFieldChipCloseIconColor}: var(--inverse-text-primary);
                ${selectTokens.textFieldChipOpacityReadonly}: 1;
            `,
        },
        disabled: {
            true: css`
                ${selectTokens.textFieldDisabledOpacity}: 1;
                ${selectTokens.textFieldBackgroundColor}: var(--surface-solid-primary);
                ${selectTokens.textFieldBackgroundColorFocus}: var(--surface-solid-primary);
                ${selectTokens.textFieldBorderColor}: var(--surface-solid-primary);
                ${selectTokens.textFieldBorderColorHover}: var(--surface-solid-primary);
                ${selectTokens.textFieldBorderColorFocus}: var(--surface-solid-primary);
                ${selectTokens.textFieldColor}: var(--text-secondary);
            `,
        },
        readOnly: {
            true: css`
                ${selectTokens.disclosureIconOpacityReadOnly}: 0.4;
                ${selectTokens.textFieldColorReadOnly}: var(--text-primary);
                ${selectTokens.textFieldBackgroundColorReadOnly}: var(--surface-transparent-primary);
                ${selectTokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
                ${selectTokens.textFieldLeftHelperColorReadOnly}: var(--text-secondary);
                ${selectTokens.textFieldTitleCaptionColorReadOnly}: var(--text-secondary);
                ${selectTokens.textFieldLabelColorReadOnly}: var(--text-secondary);
                ${selectTokens.textFieldDividerColorReadOnly}: var(--surface-transparent-primary);
            `,
        },
    },
};
