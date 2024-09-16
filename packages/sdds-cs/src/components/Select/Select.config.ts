import { css, selectTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        chipView: 'default',
        size: 's',
    },
    variations: {
        size: {
            s: css`
                ${selectTokens.targetTextfieldBorderSize}: 0.125rem;
                ${selectTokens.padding}: 0.125rem;
                ${selectTokens.borderRadius}: 0.625rem;
                ${selectTokens.focusOffset}: 0.125rem;

                ${selectTokens.itemHeight}: 2.5rem;
                ${selectTokens.itemPadding}: 0.5rem 0.75rem 0.5rem 0.675rem;
                ${selectTokens.itemPaddingTight}: 0.25rem 0.75rem 0.25rem 0.675rem;
                ${selectTokens.itemBorderRadius}: 0.5rem;
                ${selectTokens.itemIconSize}: 1.5rem;
                ${selectTokens.itemIconSizeTight}: 1rem;
                ${selectTokens.itemIconMargin}: 0 0.375rem 0 0;

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
                ${selectTokens.checkboxFillColor}: var(--text-accent);
                ${selectTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectTokens.checkboxTriggerBorderColor}: var(--outline-accent);

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
                ${selectTokens.popoverBorderWidth}: 0.125rem;
            `,
        },
        view: {
            default: css`
                ${selectTokens.helperTextColor}: var(--text-secondary);
                ${selectTokens.targetButtonColor}: var(--text-primary);
                ${selectTokens.targetButtonColorHover}: var(--text-primary);
                ${selectTokens.targetButtonColorActive}: var(--text-primary);
                ${selectTokens.targetButtonArrowColor}: var(--text-secondary);
                ${selectTokens.targetButtonArrowColorHover}: var(--text-secondary-hover);
                ${selectTokens.targetButtonArrowColorActive}: var(--text-secondary-hover);
                ${selectTokens.targetTextfieldArrowColor}: var(--text-accent);
                ${selectTokens.targetTextfieldArrowColorHover}: var(--text-accent-hover);
                ${selectTokens.targetTextfieldArrowColorActive}: var(--text-accent-hover);
                ${selectTokens.targetButtonBackgroundColor}: var(--surface-solid-primary);
                ${selectTokens.targetButtonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${selectTokens.targetButtonBackgroundColorActive}: var(--surface-solid-primary-active);
                ${selectTokens.targetTextfieldBackgroundColor}: var(--surface-solid-card);
                ${selectTokens.targetTextfieldBackgroundColorOpened}: var(--surface-solid-card);
                ${selectTokens.targetTextfieldBorderColor}: var(--outline-solid-primary);
                ${selectTokens.targetTextfieldBorderColorHover}: var(--outline-solid-primary-hover);
                ${selectTokens.targetTextfieldBorderOpenedColor}: var(--outline-accent);
                ${selectTokens.popoverBorderColor}: var(--outline-solid-primary);
                ${selectTokens.checkboxIconColor}: var(--text-accent);
            `,
        },
        chipView: {
            default: css`
                ${selectTokens.chipColor}: var(--inverse-text-primary);
                ${selectTokens.chipBackground}: var(--surface-solid-default);
                ${selectTokens.chipBackgroundHover}: var(--surface-solid-default-hover);
                ${selectTokens.chipBackgroundActive}: var(--surface-solid-default-active);
            `,
        },
        disabled: {
            true: css`
                ${selectTokens.helperTextColor}: var(--text-secondary);
                ${selectTokens.targetButtonColor}: var(--text-secondary);
                ${selectTokens.targetTextfieldBackgroundColor}: var(--surface-solid-primary);
                ${selectTokens.targetTextfieldBackgroundColorOpened}: var(--surface-solid-primary);
                ${selectTokens.targetTextfieldBorderColor}: var(--surface-solid-primary);
                ${selectTokens.targetTextfieldBorderColorHover}: var(--surface-solid-primary);
                ${selectTokens.targetTextfieldBorderOpenedColor}: var(--surface-solid-primary);
            `,
        },
    },
};
