import { css } from '@linaria/core';

import { selectNewTokens } from '../../../../components/SelectNew';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            xs: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.borderRadius}: 0.5rem;
                ${selectNewTokens.focusOffset}: 0.125rem;

                ${selectNewTokens.itemHeight}: 1rem;
                ${selectNewTokens.itemPadding}: 0.5rem 0.5rem 0.5rem 0.375rem;
                ${selectNewTokens.itemPaddingTight}: 0.25rem 0.5rem 0.25rem 0.375rem;
                ${selectNewTokens.itemBorderRadius}: 0.375rem;
                ${selectNewTokens.itemIconSize}: 1rem;
                ${selectNewTokens.itemIconSizeTight}: 1rem;
                ${selectNewTokens.itemIconMargin}: 0 0.25rem 0 0;

                ${selectNewTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.fontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.fontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.checkboxTriggerSize}: 0.875rem;
                ${selectNewTokens.checkboxTriggerSizeTight}: 0.875rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectNewTokens.indicatorSize}: 0.375rem;

                ${selectNewTokens.chipGap}: 0.25rem;
                ${selectNewTokens.chipBorderRadius}: 0.125rem;
                ${selectNewTokens.chipHeight}: 1.25rem;
                ${selectNewTokens.chipPaddingRight}: 0.375rem;
                ${selectNewTokens.chipPaddingLeft}: 0.625rem;
                ${selectNewTokens.chipClearContentMarginLeft}: 0.25rem;
                ${selectNewTokens.chipClearContentMarginRight}: 0rem;
                ${selectNewTokens.chipCloseIconSize}: 0.75rem;

                ${selectNewTokens.targetArrowMarginLeft}: 0.375rem;
                ${selectNewTokens.targetHeight}: 2rem;
                ${selectNewTokens.targetButtonPadding}: 0.625rem 0 0.75rem;
                ${selectNewTokens.targetTextfieldPadding}: 0.5rem 0 0.625rem;
                ${selectNewTokens.targetTextfieldChipPadding}: 0.5rem 0 0.25rem;

                ${selectNewTokens.labelOffset}: 0.375rem;

                ${selectNewTokens.innerLabelGap}: 0;

                ${selectNewTokens.helperTextOffset}: 0.25rem;

                ${selectNewTokens.spinnerSize}: 1rem;
                ${selectNewTokens.spinnerSizeTight}: 1rem;

                ${selectNewTokens.notFoundContentPadding}: 0.875rem 0.5rem 0.5rem 0.5rem;
                ${selectNewTokens.notFoundContentGap}: 0.25rem;
            `,
            s: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.borderRadius}: 0.625rem;
                ${selectNewTokens.focusOffset}: 0.125rem;

                ${selectNewTokens.itemHeight}: 1.5rem;
                ${selectNewTokens.itemPadding}: 0.5rem 0.75rem 0.5rem 0.675rem;
                ${selectNewTokens.itemPaddingTight}: 0.25rem 0.75rem 0.25rem 0.675rem;
                ${selectNewTokens.itemBorderRadius}: 0.5rem;
                ${selectNewTokens.itemIconSize}: 1.5rem;
                ${selectNewTokens.itemIconSizeTight}: 1rem;
                ${selectNewTokens.itemIconMargin}: 0 0.375rem 0 0;

                ${selectNewTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectNewTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${selectNewTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectNewTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${selectNewTokens.fontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectNewTokens.fontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerSizeTight}: 0.875rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectNewTokens.indicatorSize}: 0.375rem;

                ${selectNewTokens.chipGap}: 0.25rem;
                ${selectNewTokens.chipBorderRadius}: 0.25rem;
                ${selectNewTokens.chipHeight}: 1.75rem;
                ${selectNewTokens.chipPaddingRight}: 0.5rem;
                ${selectNewTokens.chipPaddingLeft}: 0.75rem;
                ${selectNewTokens.chipClearContentMarginLeft}: 0.375rem;
                ${selectNewTokens.chipClearContentMarginRight}: 0rem;
                ${selectNewTokens.chipCloseIconSize}: 0.75rem;

                ${selectNewTokens.targetArrowMarginLeft}: 0.375rem;
                ${selectNewTokens.targetHeight}: 2.5rem;
                ${selectNewTokens.targetButtonPadding}: 0.875rem 0 1rem;
                ${selectNewTokens.targetTextfieldPadding}: 0.75rem 0 0.875rem;
                ${selectNewTokens.targetTextfieldChipPadding}: 0.75rem 0 0.25rem;

                ${selectNewTokens.labelOffset}: 0.5rem;

                ${selectNewTokens.innerLabelGap}: 0;

                ${selectNewTokens.helperTextOffset}: 0.25rem;

                ${selectNewTokens.spinnerSize}: 1.5rem;
                ${selectNewTokens.spinnerSizeTight}: 1rem;

                ${selectNewTokens.notFoundContentPadding}: 1.25rem 0.625rem 0.625rem 0.625rem;
                ${selectNewTokens.notFoundContentGap}: 0.25rem;
            `,
            m: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.borderRadius}: 0.75rem;
                ${selectNewTokens.focusOffset}: 0.125rem;

                ${selectNewTokens.itemHeight}: 1.5rem;
                ${selectNewTokens.itemPadding}: 0.75rem 0.75rem 0.75rem 0.75rem;
                ${selectNewTokens.itemPaddingTight}: 0.5rem 0.75rem 0.5rem 0.75rem;
                ${selectNewTokens.itemBorderRadius}: 0.625rem;
                ${selectNewTokens.itemIconMargin}: 0 0.375rem 0 0;
                ${selectNewTokens.itemIconSize}: 1.5rem;
                ${selectNewTokens.itemIconSizeTight}: 1.5rem;

                ${selectNewTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerSizeTight}: 1.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectNewTokens.indicatorSize}: 0.375rem;

                ${selectNewTokens.chipGap}: 0.25rem;
                ${selectNewTokens.chipBorderRadius}: 0.375rem;
                ${selectNewTokens.chipHeight}: 2.25rem;
                ${selectNewTokens.chipPaddingRight}: 0.875rem;
                ${selectNewTokens.chipPaddingLeft}: 0.625rem;
                ${selectNewTokens.chipClearContentMarginLeft}: 0.5rem;
                ${selectNewTokens.chipClearContentMarginRight}: 0rem;
                ${selectNewTokens.chipCloseIconSize}: 1rem;

                ${selectNewTokens.targetArrowMarginLeft}: 0.625rem;
                ${selectNewTokens.targetHeight}: 3rem;
                ${selectNewTokens.targetButtonPadding}: 1.125rem 0 1.25rem;
                ${selectNewTokens.targetTextfieldPadding}: 0.875rem 0 1rem;
                ${selectNewTokens.targetTextfieldChipPadding}: 0.875rem 0 0.25rem;

                ${selectNewTokens.labelOffset}: 0.625rem;

                ${selectNewTokens.innerLabelGap}: 0.125rem;

                ${selectNewTokens.helperTextOffset}: 0.25rem;

                ${selectNewTokens.spinnerSize}: 1.5rem;
                ${selectNewTokens.spinnerSizeTight}: 1.5rem;

                ${selectNewTokens.notFoundContentPadding}: 1.5rem 0.875rem 0.75rem 0.875rem;
                ${selectNewTokens.notFoundContentGap}: 0.375rem;
            `,
            l: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.borderRadius}: 0.875rem;
                ${selectNewTokens.focusOffset}: 0.125rem;

                ${selectNewTokens.itemHeight}: 1.5rem;
                ${selectNewTokens.itemPadding}: 1rem 1rem 1rem 0.875rem;
                ${selectNewTokens.itemPaddingTight}: 0.75rem 1rem 0.75rem 0.875rem;
                ${selectNewTokens.itemBorderRadius}: 0.75rem;
                ${selectNewTokens.itemIconMargin}: 0 0.5rem 0 0;
                ${selectNewTokens.itemIconSize}: 1.5rem;
                ${selectNewTokens.itemIconSizeTight}: 1.5rem;

                ${selectNewTokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectNewTokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${selectNewTokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectNewTokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${selectNewTokens.fontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectNewTokens.fontLineHeight}: var(--plasma-typo-body-l-line-height);

                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerSizeTight}: 1.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectNewTokens.indicatorSize}: 0.375rem;

                ${selectNewTokens.chipGap}: 0.25rem;
                ${selectNewTokens.chipBorderRadius}: 0.5rem;
                ${selectNewTokens.chipHeight}: 2.75rem;
                ${selectNewTokens.chipPaddingRight}: 0.75rem;
                ${selectNewTokens.chipPaddingLeft}: 1rem;
                ${selectNewTokens.chipClearContentMarginLeft}: 0.625rem;
                ${selectNewTokens.chipClearContentMarginRight}: 0rem;
                ${selectNewTokens.chipCloseIconSize}: 1rem;

                ${selectNewTokens.targetArrowMarginLeft}: 0.75rem;
                ${selectNewTokens.targetHeight}: 3.5rem;
                ${selectNewTokens.targetButtonPadding}: 1.38rem 0 1.5rem;
                ${selectNewTokens.targetTextfieldPadding}: 1rem 0 1.125rem;
                ${selectNewTokens.targetTextfieldChipPadding}: 1rem 0 0.25rem;

                ${selectNewTokens.labelOffset}: 0.75rem;

                ${selectNewTokens.innerLabelGap}: 0.125rem;

                ${selectNewTokens.helperTextOffset}: 0.25rem;

                ${selectNewTokens.spinnerSize}: 1.5rem;
                ${selectNewTokens.spinnerSizeTight}: 1.5rem;

                ${selectNewTokens.notFoundContentPadding}: 1.875rem 1rem 1rem 1rem;
                ${selectNewTokens.notFoundContentGap}: 0.5rem;
            `,
        },
        view: {
            default: css`
                ${selectNewTokens.helperTextColor}: var(--text-secondary);
                ${selectNewTokens.buttonTargetColor}: var(--inverse-text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--inverse-text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--inverse-text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--inverse-text-secondary-hover);
                ${selectNewTokens.targetTextfieldArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetTextfieldArrowColorHover}: var(--text-secondary-hover);
                ${selectNewTokens.targetTextfieldArrowColorActive}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}: var(--surface-solid-default);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--surface-solid-default-hover);
                ${selectNewTokens.targetTextfieldBackgroundColor}: var(--surface-transparent-primary);
                ${selectNewTokens.targetTextfieldBackgroundColorOpened}: var(--surface-transparent-secondary);
            `,
            positive: css`
                ${selectNewTokens.helperTextColor}: var(--text-positive);
                ${selectNewTokens.buttonTargetColor}: var(--on-dark-text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetTextfieldArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetTextfieldArrowColorHover}: var(--text-secondary-hover);
                ${selectNewTokens.targetTextfieldArrowColorActive}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--surface-positive);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--surface-positive-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--surface-positive-active);
                ${selectNewTokens.targetTextfieldBackgroundColor}: var(--surface-transparent-positive);
                ${selectNewTokens.targetTextfieldBackgroundColorOpened}: var(--surface-transparent-positive-active);
            `,
            warning: css`
                ${selectNewTokens.helperTextColor}: var(--text-warning);
                ${selectNewTokens.buttonTargetColor}: var(--on-dark-text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetTextfieldArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetTextfieldArrowColorHover}: var(--text-secondary-hover);
                ${selectNewTokens.targetTextfieldArrowColorActive}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--surface-warning);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--surface-warning-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--surface-warning-active);
                ${selectNewTokens.targetTextfieldBackgroundColor}: var(--surface-transparent-warning);
                ${selectNewTokens.targetTextfieldBackgroundColorOpened}: var(--surface-transparent-warning-active);
            `,
            negative: css`
                ${selectNewTokens.helperTextColor}: var(--text-negative);
                ${selectNewTokens.buttonTargetColor}: var(--on-dark-text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetTextfieldArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetTextfieldArrowColorHover}: var(--text-secondary-hover);
                ${selectNewTokens.targetTextfieldArrowColorActive}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--surface-negative);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-negative-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--surface-negative-active);
                ${selectNewTokens.targetTextfieldBackgroundColor}: var(--surface-transparent-negative);
                ${selectNewTokens.targetTextfieldBackgroundColorOpened}: var(--surface-transparent-negative-active);
            `,
            accent: css`
                ${selectNewTokens.buttonTargetColor}: var(--on-dark-text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}: var(--surface-accent);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${selectNewTokens.buttonTargetColor}: var(--text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            clear: css`
                ${selectNewTokens.buttonTargetColor}: var(--text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--text-secondary-active);
                ${selectNewTokens.targetButtonBackgroundColor}: var(--surface-clear);
                ${selectNewTokens.targetButtonBackgroundColorHover}: var(--surface-clear);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--surface-clear);
            `,
            dark: css`
                ${selectNewTokens.buttonTargetColor}: var(--on-dark-text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-active);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--on-light-surface-transparent-deep);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--on-light-surface-transparent-deep-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--on-light-surface-transparent-deep-active);
            `,
            black: css`
                ${selectNewTokens.buttonTargetColor}: var(--on-dark-text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--on-dark-text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--on-dark-text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--on-dark-text-secondary-active);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--on-light-surface-solid-default);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--on-light-surface-solid-default-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}: var(--on-light-surface-solid-default-active);
            `,
            white: css`
                ${selectNewTokens.buttonTargetColor}: var(--on-light-text-primary);
                ${selectNewTokens.targetButtonArrowColor}: var(--on-light-text-secondary);
                ${selectNewTokens.targetButtonArrowColorHover}: var(--on-light-text-secondary-hover);
                ${selectNewTokens.targetButtonArrowColorActive}: var(--on-light-text-secondary-active);
                ${selectNewTokens.targetButtonBackgroundColor}:var(--on-dark-surface-solid-default);
                ${selectNewTokens.targetButtonBackgroundColorHover}:var(--on-dark-surface-solid-default-hover);
                ${selectNewTokens.targetButtonBackgroundColorActive}:var(--on-dark-surface-solid-default-active);
            `,
        },
        chipView: {
            default: css`
                ${selectNewTokens.chipColor}: var(--inverse-text-primary);
                ${selectNewTokens.chipBackground}: var(--surface-solid-default);
                ${selectNewTokens.chipBackgroundHover}: var(--surface-solid-default-hover);
                ${selectNewTokens.chipBackgroundActive}: var(--surface-solid-default-active);
            `,
            secondary: css`
                ${selectNewTokens.chipColor}: var(--text-primary);
                ${selectNewTokens.chipBackground}: var(--surface-transparent-secondary);
                ${selectNewTokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${selectNewTokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
            `,
            accent: css`
                ${selectNewTokens.chipColor}: var(--on-dark-text-primary);
                ${selectNewTokens.chipBackground}: var(--surface-accent);
                ${selectNewTokens.chipBackgroundHover}: var(--surface-accent-hover);
                ${selectNewTokens.chipBackgroundActive}: var(--surface-accent-active);
            `,
        },
    },
};
