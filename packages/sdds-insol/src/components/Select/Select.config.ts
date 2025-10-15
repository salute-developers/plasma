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
                ${tokens.textFieldColor}: var(--text-primary);

                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: var(--text-secondary);
                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${tokens.textFieldBorderColor}: var(--outline-clear);
                ${tokens.textFieldBorderColorFocus}: var(--outline-solid-secondary);
                ${tokens.textFieldBorderColorHover}: var(--outline-clear);

                ${tokens.textFieldBoxShadow}: var(--shadow-down-soft-s);

                ${tokens.buttonColor}: var(--inverse-text-primary);
                ${tokens.buttonColorHover}: var(--inverse-text-primary-hover);
                ${tokens.buttonColorActive}: var(--inverse-text-primary-active);
                ${tokens.buttonArrowColor}: var(--inverse-text-secondary);
                ${tokens.buttonArrowColorHover}: var(--inverse-text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--inverse-text-secondary-hover);
                ${tokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${tokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${tokens.buttonBackgroundColorActive}: var(--surface-solid-default-hover);

                ${tokens.disclosureIconColor}: var(--text-accent);
                ${tokens.disclosureIconColorHover}: var(--text-accent-hover);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.textFieldHintIconColor}: var(--text-secondary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
            `,
            positive: css`
                ${tokens.textFieldColor}: color-mix(in oklab, var(--text-positive) 70%, transparent);

                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: color-mix(in oklab, var(--text-positive) 70%, transparent);
                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${tokens.textFieldBorderColor}: var(--outline-positive-minor);
                ${tokens.textFieldBorderColorFocus}: var(--outline-positive-minor-active);
                ${tokens.textFieldBorderColorHover}: var(--outline-positive-minor-hover);

                ${tokens.textFieldBoxShadow}: var(--shadow-down-soft-s);

                ${tokens.buttonColor}: var(--on-dark-text-primary);
                ${tokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.buttonColorActive}: var(--on-dark-text-primary-active);
                ${tokens.buttonArrowColor}: var(--on-dark-text-secondary);
                ${tokens.buttonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonBackgroundColor}:var(--surface-positive);
                ${tokens.buttonBackgroundColorHover}:var(--surface-positive-hover);
                ${tokens.buttonBackgroundColorActive}:var(--surface-positive-active);

                ${tokens.disclosureIconColor}: var(--text-secondary);
                ${tokens.disclosureIconColorHover}: var(--text-secondary-hover);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.textFieldHintIconColor}: var(--text-secondary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
            `,
            warning: css`
                ${tokens.textFieldColor}: color-mix(in oklab, var(--text-warning) 70%, transparent);

                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: color-mix(in oklab, var(--text-warning) 70%, transparent);
                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${tokens.textFieldBorderColor}: var(--outline-warning-minor);
                ${tokens.textFieldBorderColorFocus}: var(--outline-warning-minor-active);
                ${tokens.textFieldBorderColorHover}: var(--outline-warning-minor-hover);

                ${tokens.textFieldBoxShadow}: var(--shadow-down-soft-s);

                ${tokens.buttonColor}: var(--on-dark-text-primary);
                ${tokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.buttonColorActive}: var(--on-dark-text-primary-active);
                ${tokens.buttonArrowColor}: var(--on-dark-text-secondary);
                ${tokens.buttonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonBackgroundColor}:var(--surface-warning);
                ${tokens.buttonBackgroundColorHover}:var(--surface-warning-hover);
                ${tokens.buttonBackgroundColorActive}:var(--surface-warning-active);

                ${tokens.disclosureIconColor}: var(--text-secondary);
                ${tokens.disclosureIconColorHover}: var(--text-secondary-hover);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.textFieldHintIconColor}: var(--text-secondary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
            `,
            negative: css`
                ${tokens.textFieldColor}: color-mix(in oklab, var(--text-negative) 70%, transparent);

                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: color-mix(in oklab, var(--text-negative) 70%, transparent);
                ${tokens.textFieldFocusColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${tokens.textFieldBorderColor}: var(--outline-negative-minor);
                ${tokens.textFieldBorderColorFocus}: var(--outline-negative-minor-active);
                ${tokens.textFieldBorderColorHover}: var(--outline-negative-minor-hover);

                ${tokens.textFieldBoxShadow}: var(--shadow-down-soft-s);

                ${tokens.buttonColor}: var(--on-dark-text-primary);
                ${tokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.buttonColorActive}: var(--on-dark-text-primary-active);
                ${tokens.buttonArrowColor}: var(--on-dark-text-secondary);
                ${tokens.buttonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonBackgroundColor}:var(--surface-negative);
                ${tokens.buttonBackgroundColorHover}: var(--surface-negative-hover);
                ${tokens.buttonBackgroundColorActive}:var(--surface-negative-active);

                ${tokens.disclosureIconColor}: var(--text-secondary);
                ${tokens.disclosureIconColorHover}: var(--text-secondary-hover);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.textFieldHintIconColor}: var(--text-secondary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
            `,
            accent: css`
                ${tokens.buttonColor}: var(--on-dark-text-primary);
                ${tokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.buttonColorActive}: var(--on-dark-text-primary-active);
                ${tokens.buttonArrowColor}: var(--on-dark-text-secondary);
                ${tokens.buttonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonBackgroundColor}: var(--surface-accent);
                ${tokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${tokens.buttonBackgroundColorActive}: var(--surface-accent-active);

                ${tokens.disclosureIconColor}: var(--text-secondary);
                ${tokens.disclosureIconColorHover}: var(--text-secondary-hover);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
            `,
            secondary: css`
                ${tokens.buttonColor}: var(--text-primary);
                ${tokens.buttonColorHover}: var(--text-primary-hover);
                ${tokens.buttonColorActive}: var(--text-primary-active);
                ${tokens.buttonArrowColor}: var(--text-secondary);
                ${tokens.buttonArrowColorHover}: var(--text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--text-secondary-hover);
                ${tokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${tokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);

                ${tokens.disclosureIconColor}: var(--text-secondary);
                ${tokens.disclosureIconColorHover}: var(--text-secondary-hover);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
            `,
            clear: css`
                ${tokens.buttonColor}: var(--text-primary);
                ${tokens.buttonColorHover}: var(--text-primary-hover);
                ${tokens.buttonColorActive}: var(--text-primary-active);
                ${tokens.buttonArrowColor}: var(--text-secondary);
                ${tokens.buttonArrowColorHover}: var(--text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--text-secondary-active);
                ${tokens.buttonBackgroundColor}: var(--surface-clear);
                ${tokens.buttonBackgroundColorHover}: var(--surface-clear);
                ${tokens.buttonBackgroundColorActive}: var(--surface-clear);

                ${tokens.disclosureIconColor}: var(--text-secondary);
                ${tokens.disclosureIconColorHover}: var(--text-secondary-hover);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
            `,
            dark: css`
                ${tokens.buttonColor}: var(--on-dark-text-primary);
                ${tokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.buttonColorActive}: var(--on-dark-text-primary-active);
                ${tokens.buttonArrowColor}: var(--on-dark-text-secondary);
                ${tokens.buttonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--on-dark-text-secondary-active);
                ${tokens.buttonBackgroundColor}:var(--on-light-surface-transparent-deep);
                ${tokens.buttonBackgroundColorHover}:var(--on-light-surface-transparent-deep-hover);
                ${tokens.buttonBackgroundColorActive}:var(--on-light-surface-transparent-deep-active);

                ${tokens.disclosureIconColor}: var(--text-secondary);
                ${tokens.disclosureIconColorHover}: var(--text-secondary-hover);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
            `,
            black: css`
                ${tokens.buttonColor}: var(--on-dark-text-primary);
                ${tokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.buttonColorActive}: var(--on-dark-text-primary-active);
                ${tokens.buttonArrowColor}: var(--on-dark-text-secondary);
                ${tokens.buttonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--on-dark-text-secondary-active);
                ${tokens.buttonBackgroundColor}:var(--on-light-surface-solid-default);
                ${tokens.buttonBackgroundColorHover}:var(--on-light-surface-solid-default-hover);
                ${tokens.buttonBackgroundColorActive}: var(--on-light-surface-solid-default-active);

                ${tokens.disclosureIconColor}: var(--text-secondary);
                ${tokens.disclosureIconColorHover}: var(--text-secondary-hover);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
            `,
            white: css`
                ${tokens.buttonColor}: var(--on-light-text-primary);
                ${tokens.buttonColorHover}: var(--on-light-text-primary-hover);
                ${tokens.buttonColorActive}: var(--on-light-text-primary-active);
                ${tokens.buttonArrowColor}: var(--on-light-text-secondary);
                ${tokens.buttonArrowColorHover}: var(--on-light-text-secondary-hover);
                ${tokens.buttonArrowColorActive}: var(--on-light-text-secondary-active);
                ${tokens.buttonBackgroundColor}:var(--on-dark-surface-solid-default);
                ${tokens.buttonBackgroundColorHover}:var(--on-dark-surface-solid-default-hover);
                ${tokens.buttonBackgroundColorActive}:var(--on-dark-surface-solid-default-active);

                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.disclosureIconColor}: var(--text-secondary);
                ${tokens.disclosureIconColorHover}: var(--text-secondary-hover);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledColor}: var(--text-primary);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemIconColor}: var(--text-accent);

                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);
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

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLabelOffset}: 0.75rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-m-line-height);

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
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.3125rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.3125rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);

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

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLabelOffset}: 0.75rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-s-line-height);

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
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);

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

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelOffset}: 0.625rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);

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

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);

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

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelOffset}: 0.375rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.checkboxTriggerSize}: 0.875rem;
                ${tokens.checkboxTriggerSizeTight}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${tokens.checkboxFillColor}: transparent;
                ${tokens.checkboxIconColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderCheckedColor}: var(--outline-accent);
                ${tokens.checkboxTriggerBorderWidth}: 0.063rem;
                ${tokens.checkboxTriggerBorderColor}: var(--outline-transparent-tertiary);

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
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
            `,
            outer: css``,
        },
        chipView: {
            default: css`
                ${tokens.textFieldChipColor}: var(--inverse-text-primary);
                ${tokens.textFieldChipBackground}: var(--surface-solid-default);
                ${tokens.textFieldChipBackgroundHover}: var(--surface-solid-default-hover);
                ${tokens.textFieldChipCloseIconColor}: var(--on-dark-text-secondary);
                ${tokens.textFieldChipCloseIconColorReadonly}: var(--on-dark-text-secondary);
                ${tokens.textFieldChipCloseIconColorHover}: var(--on-dark-text-primary);

                ${tokens.textFieldChipBackgroundReadOnly}: var(--surface-solid-default);
                ${tokens.textFieldChipColorReadOnly}: var(--inverse-text-primary);
                ${tokens.textFieldChipBackgroundReadOnlyHover}: var(--surface-solid-default);
                ${tokens.textFieldChipColorReadOnlyHover}: var(--inverse-text-primary);
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
            secondary: css`
                ${tokens.textFieldChipColor}: var(--text-primary);
                ${tokens.textFieldChipBackground}: var(--surface-transparent-secondary);
                ${tokens.textFieldChipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${tokens.textFieldChipCloseIconColor}: var(--text-secondary);
                ${tokens.textFieldChipCloseIconColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldChipCloseIconColorReadonly}: var(--text-secondary);

                ${tokens.textFieldChipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${tokens.textFieldChipColorReadOnly}: var(--text-primary);
                ${tokens.textFieldChipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${tokens.textFieldChipColorReadOnlyHover}: var(--text-primary);
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
            accent: css`
                ${tokens.textFieldChipColor}: var(--on-dark-text-primary);
                ${tokens.textFieldChipBackground}: var(--surface-accent);
                ${tokens.textFieldChipBackgroundHover}: var(--surface-accent-hover);
                ${tokens.textFieldChipCloseIconColor}: var(--on-dark-text-secondary);
                ${tokens.textFieldChipCloseIconColorReadonly}: var(--on-dark-text-secondary);
                ${tokens.textFieldChipCloseIconColorHover}: var(--on-dark-text-primary);

                ${tokens.textFieldChipBackgroundReadOnly}: var(--surface-accent);
                ${tokens.textFieldChipColorReadOnly}: var(--on-dark-text-primary);
                ${tokens.textFieldChipBackgroundReadOnlyHover}: var(--surface-accent);
                ${tokens.textFieldChipColorReadOnlyHover}: var(--on-dark-text-primary);
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
        },
        hintView: {
            default: css`
                ${tokens.textFieldTooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${tokens.textFieldTooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${tokens.textFieldTooltipColor}: var(--text-primary);
                ${tokens.textFieldTooltipArrowBackground}: var(--surface-solid-card);
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

                ${tokens.textFieldTooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldTooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldTooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldTooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldTooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldTooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

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

                ${tokens.textFieldTooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldTooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldTooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldTooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldTooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-solid-secondary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldLeftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldTitleCaptionColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldLabelColorReadOnly}: var(--text-primary);
                ${tokens.textFieldDividerColorReadOnly}: var(--surface-transparent-primary);
            `,
        },
    },
};
