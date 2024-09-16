import { css, selectTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        chipView: 'default',
        size: 'm',
    },
    variations: {
        size: {
            xs: css`
                ${selectTokens.padding}: 0.125rem;
                ${selectTokens.borderRadius}: 0.5rem;
                ${selectTokens.focusOffset}: 0.125rem;

                ${selectTokens.itemHeight}: 1rem;
                ${selectTokens.itemPadding}: 0.5rem 0.5rem 0.5rem 0.375rem;
                ${selectTokens.itemPaddingTight}: 0.25rem 0.5rem 0.25rem 0.375rem;
                ${selectTokens.itemBorderRadius}: 0.375rem;
                ${selectTokens.itemIconSize}: 1rem;
                ${selectTokens.itemIconSizeTight}: 1rem;
                ${selectTokens.itemIconMargin}: 0 0.25rem 0 0;

                ${selectTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectTokens.fontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectTokens.fontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectTokens.checkboxTriggerSize}: 0.875rem;
                ${selectTokens.checkboxTriggerSizeTight}: 0.875rem;
                ${selectTokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${selectTokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${selectTokens.checkboxFillColor}: var(--text-accent);
                ${selectTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectTokens.indicatorSize}: 0.375rem;

                ${selectTokens.chipGap}: 0.25rem;
                ${selectTokens.chipBorderRadius}: 0.125rem;
                ${selectTokens.chipHeight}: 1.25rem;
                ${selectTokens.chipPaddingRight}: 0.375rem;
                ${selectTokens.chipPaddingLeft}: 0.625rem;
                ${selectTokens.chipClearContentMarginLeft}: 0.25rem;
                ${selectTokens.chipClearContentMarginRight}: 0rem;
                ${selectTokens.chipCloseIconSize}: 0.75rem;

                ${selectTokens.targetButtonArrowMargin}: 0 -0.125rem 0 0.25rem;
                ${selectTokens.targetTextfieldArrowMargin}: 0 0 0 0.375rem;
                ${selectTokens.targetHeight}: 2rem;
                ${selectTokens.targetButtonPadding}: 0.75rem 0 0.75rem;
                ${selectTokens.targetTextfieldPadding}: 0.5rem 0 0.625rem;
                ${selectTokens.targetTextfieldChipPadding}: 0.5rem 0 0.25rem;

                ${selectTokens.labelOffset}: 0.375rem;

                ${selectTokens.innerLabelGap}: 0;

                ${selectTokens.helperTextOffset}: 0.25rem;

                ${selectTokens.spinnerSize}: 1rem;
                ${selectTokens.spinnerSizeTight}: 1rem;

                ${selectTokens.targetTextfieldBorderSize}: 0.0625rem;
                ${selectTokens.popoverBorderWidth}: 0.0625rem;
            `,
            s: css`
                ${selectTokens.padding}: 0.125rem;
                ${selectTokens.borderRadius}: 0.625rem;
                ${selectTokens.focusOffset}: 0.125rem;

                ${selectTokens.itemHeight}: 1.5rem;
                ${selectTokens.itemPadding}: 0.5rem 0.75rem 0.5rem 0.675rem;
                ${selectTokens.itemPaddingTight}: 0.25rem 0.75rem 0.25rem 0.675rem;
                ${selectTokens.itemBorderRadius}: 0.5rem;
                ${selectTokens.itemIconSize}: 1.5rem;
                ${selectTokens.itemIconSizeTight}: 1rem;
                ${selectTokens.itemIconMargin}: 0 0.375rem 0 0;

                ${selectTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${selectTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectTokens.fontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectTokens.fontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectTokens.checkboxTriggerSize}: 1.25rem;
                ${selectTokens.checkboxTriggerSizeTight}: 0.875rem;
                ${selectTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectTokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${selectTokens.checkboxFillColor}: var(--text-accent);
                ${selectTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectTokens.indicatorSize}: 0.375rem;

                ${selectTokens.chipGap}: 0.25rem;
                ${selectTokens.chipBorderRadius}: 0.25rem;
                ${selectTokens.chipHeight}: 1.75rem;
                ${selectTokens.chipPaddingRight}: 0.5rem;
                ${selectTokens.chipPaddingLeft}: 0.75rem;
                ${selectTokens.chipClearContentMarginLeft}: 0.375rem;
                ${selectTokens.chipClearContentMarginRight}: 0rem;
                ${selectTokens.chipCloseIconSize}: 0.75rem;

                ${selectTokens.targetButtonArrowMargin}: 0 -0.125rem 0 0.25rem;
                ${selectTokens.targetTextfieldArrowMargin}: 0 0 0 0.375rem;
                ${selectTokens.targetHeight}: 2.5rem;
                ${selectTokens.targetButtonPadding}: 1rem 0 1rem;
                ${selectTokens.targetTextfieldPadding}: 0.75rem 0 0.875rem;
                ${selectTokens.targetTextfieldChipPadding}: 0.75rem 0 0.25rem;

                ${selectTokens.labelOffset}: 0.5rem;

                ${selectTokens.innerLabelGap}: 0;

                ${selectTokens.helperTextOffset}: 0.25rem;

                ${selectTokens.spinnerSize}: 1.5rem;
                ${selectTokens.spinnerSizeTight}: 1rem;

                ${selectTokens.targetTextfieldBorderSize}: 0.0625rem;
            `,
            m: css`
                ${selectTokens.padding}: 0.125rem;
                ${selectTokens.borderRadius}: 0.75rem;
                ${selectTokens.focusOffset}: 0.125rem;

                ${selectTokens.itemHeight}: 1.5rem;
                ${selectTokens.itemPadding}: 0.75rem 0.75rem 0.75rem 0.75rem;
                ${selectTokens.itemPaddingTight}: 0.5rem 0.75rem 0.5rem 0.75rem;
                ${selectTokens.itemBorderRadius}: 0.625rem;
                ${selectTokens.itemIconMargin}: 0 0.375rem 0 0;
                ${selectTokens.itemIconSize}: 1.5rem;
                ${selectTokens.itemIconSizeTight}: 1.5rem;

                ${selectTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${selectTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectTokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectTokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectTokens.checkboxTriggerSize}: 1.25rem;
                ${selectTokens.checkboxTriggerSizeTight}: 1.25rem;
                ${selectTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectTokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${selectTokens.checkboxFillColor}: var(--text-accent);
                ${selectTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectTokens.indicatorSize}: 0.375rem;

                ${selectTokens.chipGap}: 0.25rem;
                ${selectTokens.chipBorderRadius}: 0.375rem;
                ${selectTokens.chipHeight}: 2.25rem;
                ${selectTokens.chipPaddingRight}: 0.875rem;
                ${selectTokens.chipPaddingLeft}: 0.625rem;
                ${selectTokens.chipClearContentMarginLeft}: 0.5rem;
                ${selectTokens.chipClearContentMarginRight}: 0rem;
                ${selectTokens.chipCloseIconSize}: 1rem;

                ${selectTokens.targetButtonArrowMargin}: 0 -0.125rem 0 0.375rem;
                ${selectTokens.targetTextfieldArrowMargin}: 0 0 0 0.625rem;
                ${selectTokens.targetHeight}: 3rem;
                ${selectTokens.targetButtonPadding}: 1.25rem 0 1.25rem;
                ${selectTokens.targetTextfieldPadding}: 0.875rem 0 1rem;
                ${selectTokens.targetTextfieldChipPadding}: 0.875rem 0 0.25rem;

                ${selectTokens.labelOffset}: 0.625rem;

                ${selectTokens.innerLabelGap}: 0.125rem;

                ${selectTokens.helperTextOffset}: 0.25rem;

                ${selectTokens.spinnerSize}: 1.5rem;
                ${selectTokens.spinnerSizeTight}: 1.5rem;

                ${selectTokens.targetTextfieldBorderSize}: 0.0625rem;
            `,
            l: css`
                ${selectTokens.padding}: 0.125rem;
                ${selectTokens.borderRadius}: 0.875rem;
                ${selectTokens.focusOffset}: 0.125rem;

                ${selectTokens.itemHeight}: 1.5rem;
                ${selectTokens.itemPadding}: 1rem 1rem 1rem 0.875rem;
                ${selectTokens.itemPaddingTight}: 0.75rem 1rem 0.75rem 0.875rem;
                ${selectTokens.itemBorderRadius}: 0.75rem;
                ${selectTokens.itemIconMargin}: 0 0.5rem 0 0;
                ${selectTokens.itemIconSize}: 1.5rem;
                ${selectTokens.itemIconSizeTight}: 1.5rem;

                ${selectTokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectTokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${selectTokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectTokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${selectTokens.fontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectTokens.fontLineHeight}: var(--plasma-typo-body-l-line-height);

                ${selectTokens.checkboxTriggerSize}: 1.25rem;
                ${selectTokens.checkboxTriggerSizeTight}: 1.25rem;
                ${selectTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectTokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${selectTokens.checkboxFillColor}: var(--text-accent);
                ${selectTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectTokens.indicatorSize}: 0.375rem;

                ${selectTokens.chipGap}: 0.25rem;
                ${selectTokens.chipBorderRadius}: 0.5rem;
                ${selectTokens.chipHeight}: 2.75rem;
                ${selectTokens.chipPaddingRight}: 0.75rem;
                ${selectTokens.chipPaddingLeft}: 1rem;
                ${selectTokens.chipClearContentMarginLeft}: 0.625rem;
                ${selectTokens.chipClearContentMarginRight}: 0rem;
                ${selectTokens.chipCloseIconSize}: 1rem;

                ${selectTokens.targetButtonArrowMargin}: 0 -0.125rem 0 0.5rem;
                ${selectTokens.targetTextfieldArrowMargin}: 0 0 0 0.75rem;
                ${selectTokens.targetHeight}: 3.5rem;
                ${selectTokens.targetButtonPadding}: 1.5rem 0 1.5rem;
                ${selectTokens.targetTextfieldPadding}: 1rem 0 1.125rem;
                ${selectTokens.targetTextfieldChipPadding}: 1rem 0 0.25rem;

                ${selectTokens.labelOffset}: 0.75rem;

                ${selectTokens.innerLabelGap}: 0.125rem;

                ${selectTokens.helperTextOffset}: 0.25rem;

                ${selectTokens.spinnerSize}: 1.5rem;
                ${selectTokens.spinnerSizeTight}: 1.5rem;

                ${selectTokens.targetTextfieldBorderSize}: 0.0625rem;
            `,
        },
        view: {
            default: css`
                ${selectTokens.helperTextColor}: var(--text-secondary);
                ${selectTokens.targetButtonColor}: var(--inverse-text-primary);
                ${selectTokens.targetButtonColorHover}: var(--inverse-text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--inverse-text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--inverse-text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--inverse-text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--inverse-text-secondary-hover);
                ${selectTokens.targetTextfieldArrowColor}: var(--text-secondary);
                ${selectTokens.targetTextfieldArrowColorHover}: var(--text-secondary-hover);
                ${selectTokens.targetTextfieldArrowColorActive}: var(--text-secondary-hover);
                ${selectTokens.targetButtonBackgroundColor}: var(--surface-solid-default);
                ${selectTokens.targetButtonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${selectTokens.targetButtonBackgroundColorActive}: var(--surface-solid-default-hover);
                ${selectTokens.targetTextfieldBackgroundColor}: var(--surface-clear);
                ${selectTokens.targetTextfieldBackgroundColorOpened}: var(--surface-clear);
                ${selectTokens.targetTextfieldBorderColor}: var(--surface-transparent-tertiary);
                ${selectTokens.targetTextfieldBorderOpenedColor}: var(--surface-transparent-tertiary);
                ${selectTokens.targetTextfieldBorderColorHover}: var(--surface-transparent-tertiary);
            `,
            positive: css`
                ${selectTokens.helperTextColor}: var(--text-positive);
                ${selectTokens.targetButtonColor}: var(--on-dark-text-primary);
                ${selectTokens.targetButtonColorHover}: var(--on-dark-text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--on-dark-text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetTextfieldArrowColor}: var(--text-secondary);
                ${selectTokens.targetTextfieldArrowColorHover}: var(--text-secondary-hover);
                ${selectTokens.targetTextfieldArrowColorActive}: var(--text-secondary-hover);
                ${selectTokens.targetButtonBackgroundColor}:var(--surface-positive);
                ${selectTokens.targetButtonBackgroundColorHover}:var(--surface-positive-hover);
                ${selectTokens.targetButtonBackgroundColorActive}:var(--surface-positive-active);
                ${selectTokens.targetTextfieldBackgroundColor}: var(--surface-clear);
                ${selectTokens.targetTextfieldBackgroundColorOpened}: var(--surface-clear);
                ${selectTokens.targetTextfieldBorderColor}: var(--surface-positive);
                ${selectTokens.targetTextfieldBorderOpenedColor}: var(--surface-positive);
                ${selectTokens.targetTextfieldBorderColorHover}: var(--surface-positive);
            `,
            warning: css`
                ${selectTokens.helperTextColor}: var(--text-warning);
                ${selectTokens.targetButtonColor}: var(--on-dark-text-primary);
                ${selectTokens.targetButtonColorHover}: var(--on-dark-text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--on-dark-text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetTextfieldArrowColor}: var(--text-secondary);
                ${selectTokens.targetTextfieldArrowColorHover}: var(--text-secondary-hover);
                ${selectTokens.targetTextfieldArrowColorActive}: var(--text-secondary-hover);
                ${selectTokens.targetButtonBackgroundColor}:var(--surface-warning);
                ${selectTokens.targetButtonBackgroundColorHover}:var(--surface-warning-hover);
                ${selectTokens.targetButtonBackgroundColorActive}:var(--surface-warning-active);
                ${selectTokens.targetTextfieldBackgroundColor}: var(--surface-clear);
                ${selectTokens.targetTextfieldBackgroundColorOpened}: var(--surface-clear);
                ${selectTokens.targetTextfieldBorderColor}: var(--surface-warning);
                ${selectTokens.targetTextfieldBorderOpenedColor}: var(--surface-warning);
                ${selectTokens.targetTextfieldBorderColorHover}: var(--surface-warning);
            `,
            negative: css`
                ${selectTokens.helperTextColor}: var(--text-negative);
                ${selectTokens.targetButtonColor}: var(--on-dark-text-primary);
                ${selectTokens.targetButtonColorHover}: var(--on-dark-text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--on-dark-text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetTextfieldArrowColor}: var(--text-secondary);
                ${selectTokens.targetTextfieldArrowColorHover}: var(--text-secondary-hover);
                ${selectTokens.targetTextfieldArrowColorActive}: var(--text-secondary-hover);
                ${selectTokens.targetButtonBackgroundColor}:var(--surface-negative);
                ${selectTokens.targetButtonBackgroundColorHover}: var(--surface-negative-hover);
                ${selectTokens.targetButtonBackgroundColorActive}:var(--surface-negative-active);
                ${selectTokens.targetTextfieldBackgroundColor}: var(--surface-clear);
                ${selectTokens.targetTextfieldBackgroundColorOpened}: var(--surface-clear);
                ${selectTokens.targetTextfieldBorderColor}: var(--surface-negative);
                ${selectTokens.targetTextfieldBorderOpenedColor}: var(--surface-negative);
                ${selectTokens.targetTextfieldBorderColorHover}: var(--surface-negative);
            `,
            accent: css`
                ${selectTokens.targetButtonColor}: var(--on-dark-text-primary);
                ${selectTokens.targetButtonColorHover}: var(--on-dark-text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--on-dark-text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetButtonBackgroundColor}: var(--surface-accent);
                ${selectTokens.targetButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${selectTokens.targetButtonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${selectTokens.targetButtonColor}: var(--text-primary);
                ${selectTokens.targetButtonColorHover}: var(--text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--text-secondary-hover);
                ${selectTokens.targetButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${selectTokens.targetButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${selectTokens.targetButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            clear: css`
                ${selectTokens.targetButtonColor}: var(--text-primary);
                ${selectTokens.targetButtonColorHover}: var(--text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--text-secondary-active);
                ${selectTokens.targetButtonBackgroundColor}: var(--surface-clear);
                ${selectTokens.targetButtonBackgroundColorHover}: var(--surface-clear);
                ${selectTokens.targetButtonBackgroundColorActive}: var(--surface-clear);
            `,
            dark: css`
                ${selectTokens.targetButtonColor}: var(--on-dark-text-primary);
                ${selectTokens.targetButtonColorHover}: var(--on-dark-text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--on-dark-text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-active);
                ${selectTokens.targetButtonBackgroundColor}:var(--on-light-surface-transparent-deep);
                ${selectTokens.targetButtonBackgroundColorHover}:var(--on-light-surface-transparent-deep-hover);
                ${selectTokens.targetButtonBackgroundColorActive}:var(--on-light-surface-transparent-deep-active);
            `,
            black: css`
                ${selectTokens.targetButtonColor}: var(--on-dark-text-primary);
                ${selectTokens.targetButtonColorHover}: var(--on-dark-text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--on-dark-text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-active);
                ${selectTokens.targetButtonBackgroundColor}:var(--on-light-surface-solid-default);
                ${selectTokens.targetButtonBackgroundColorHover}:var(--on-light-surface-solid-default-hover);
                ${selectTokens.targetButtonBackgroundColorActive}: var(--on-light-surface-solid-default-active);
            `,
            white: css`
                ${selectTokens.targetButtonColor}: var(--on-light-text-primary);
                ${selectTokens.targetButtonColorHover}: var(--on-light-text-primary-hover);
                ${selectTokens.targetButtonColorActive}: var(--on-light-text-primary-active);
                ${selectTokens.targetButtonArrowColor}: var(--on-light-text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--on-light-text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--on-light-text-secondary-active);
                ${selectTokens.targetButtonBackgroundColor}:var(--on-dark-surface-solid-default);
                ${selectTokens.targetButtonBackgroundColorHover}:var(--on-dark-surface-solid-default-hover);
                ${selectTokens.targetButtonBackgroundColorActive}:var(--on-dark-surface-solid-default-active);
            `,
        },
        chipView: {
            default: css`
                ${selectTokens.chipColor}: var(--inverse-text-primary);
                ${selectTokens.chipBackground}: var(--surface-solid-default);
                ${selectTokens.chipBackgroundHover}: var(--surface-solid-default-hover);
                ${selectTokens.chipBackgroundActive}: var(--surface-solid-default-active);
            `,
            secondary: css`
                ${selectTokens.chipColor}: var(--text-primary);
                ${selectTokens.chipBackground}: var(--surface-transparent-secondary);
                ${selectTokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${selectTokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
            `,
            accent: css`
                ${selectTokens.chipColor}: var(--on-dark-text-primary);
                ${selectTokens.chipBackground}: var(--surface-accent);
                ${selectTokens.chipBackgroundHover}: var(--surface-accent-hover);
                ${selectTokens.chipBackgroundActive}: var(--surface-accent-active);
            `,
        },
    },
};
