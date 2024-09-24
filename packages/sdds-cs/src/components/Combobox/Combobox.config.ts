import { css, comboboxNewTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldBackgroundColor}: var(--surface-solid-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-solid-card);
                ${tokens.textFieldCaretColor}: var(--text-accent);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldTextBeforeColor}: var(--text-secondary);
                ${tokens.textFieldTextAfterColor}: var(--text-secondary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: var(--text-secondary);
                ${tokens.textFieldFocusColor}: var(--text-accent);
                ${tokens.textFieldBorderColor}: var(--outline-solid-primary);
                ${tokens.textFieldBorderColorHover}: var(--outline-solid-primary-hover);
                ${tokens.textFieldBorderColorFocus}: var(--outline-accent);

                ${tokens.textFieldChipCloseIconColor}: var(--text-secondary);
                ${tokens.textFieldChipColor}: var(--text-primary);
                ${tokens.textFieldChipBackground}: var(--surface-transparent-secondary);
                ${tokens.textFieldChipColorHover}: var(--text-primary);
                ${tokens.textFieldChipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${tokens.textFieldChipColorActive}: var(--text-primary);
                ${tokens.textFieldChipBackgroundActive}: var(--surface-transparent-secondary-active);
                ${tokens.textFieldChipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${tokens.textFieldChipColorReadOnly}: var(--text-primary);
                ${tokens.textFieldChipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${tokens.textFieldChipColorReadOnlyHover}: var(--text-primary);
                ${tokens.textFieldChipOpacityReadonly}: 0.72;
                ${tokens.dropdownBorderColor}: var(--surface-solid-primary);
            `,
        },
        size: {
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.textFieldChipGap}: 0.25rem;
                ${tokens.textFieldChipBorderRadius}: 0.25rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 1.75rem;
                ${tokens.textFieldChipPaddingRight}: 0.5rem;
                ${tokens.textFieldChipPaddingLeft}: 0.75rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.375rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1rem;
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemPadding}: 0.5rem 0.75rem 0.5rem 0.675rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.75rem 0.25rem 0.675rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1rem;
                ${tokens.itemIconMargin}: 0 0.375rem 0 0;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${tokens.checkboxFillColor}: var(--text-accent);
                ${tokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${tokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.dropdownBorderWidth}: 0.0625rem;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.textFieldPlaceholderColor}: var(--plasma-input-label-color, var(--plasma-input-placeholder-color, var(--plasma-colors-secondary)));
                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            outer: css``,
        },
        disabled: {
            true: css`
                ${tokens.textFieldColor}: var(--text-secondary);
                ${tokens.textFieldLabelColor}: var(--text-secondary);
                ${tokens.textFieldBackgroundColor}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundColorHover}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColor}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColorHover}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColorFocus}: var(--surface-solid-primary);
            `,
        },
        readOnly: {
            true: css`
                ${tokens.textFieldColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldLeftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldLabelColorReadOnly}: var(--text-secondary);
            `,
        },
    },
};
