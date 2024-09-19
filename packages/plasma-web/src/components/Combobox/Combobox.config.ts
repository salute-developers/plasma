import { css, comboboxNewTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldBorderColor}: var(--text-tertiary);
                ${tokens.textFieldBorderColorHover}: var(--text-tertiary-hover);
                ${tokens.textFieldBorderColorFocus}: var(--text-accent);

                ${tokens.textFieldCaretColor}: var(--text-accent);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: var(--text-secondary);
                ${tokens.textFieldFocusColor}: var(--text-accent);

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
            `,
            positive: css`
                ${tokens.textFieldColor}: var(--plasma-colors-primary);
                ${tokens.textFieldBorderColor}: var(--surface-positive);
                ${tokens.textFieldBorderColorHover}: var(--surface-positive);
                ${tokens.textFieldBorderColorFocus}: var(--surface-accent);
                ${tokens.textFieldCaretColor}: var(--text-accent);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: var(--text-positive);
                ${tokens.textFieldFocusColor}: var(--text-accent);

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
            `,
            warning: css`
                ${tokens.textFieldColor}: var(--plasma-colors-primary);
                ${tokens.textFieldBorderColor}: var(--surface-warning);
                ${tokens.textFieldBorderColorHover}: var(--surface-warning);
                ${tokens.textFieldBorderColorFocus}: var(--surface-accent);
                ${tokens.textFieldCaretColor}: var(--text-accent);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: var(--text-warning);
                ${tokens.textFieldFocusColor}: var(--text-accent);

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
            `,
            negative: css`
                ${tokens.textFieldColor}: var(--plasma-colors-primary);
                ${tokens.textFieldBorderColor}: var(--surface-negative);
                ${tokens.textFieldBorderColorHover}: var(--surface-negative);
                ${tokens.textFieldBorderColorFocus}: var(--surface-accent);
                ${tokens.textFieldCaretColor}: var(--text-accent);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);
                ${tokens.textFieldLabelColor}: var(--text-primary);
                ${tokens.textFieldLeftHelperColor}: var(--text-negative);
                ${tokens.textFieldFocusColor}: var(--text-accent);

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
            `,
        },
        size: {
            l: css`
                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.textFieldLabelOffset}: 0.75rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.textFieldChipGap}: 0.25rem;
                ${tokens.textFieldChipBorderRadius}: 0.5rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 2.75rem;
                ${tokens.textFieldChipPaddingRight}: 0.75rem;
                ${tokens.textFieldChipPaddingLeft}: 1rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.625rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1.5rem;
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 1rem 1rem 1rem 0.875rem;
                ${tokens.itemPaddingTight}: 0.75rem 1rem 0.75rem 0.875rem;
                ${tokens.itemBorderRadius}: 0.75rem;
                ${tokens.itemIconMargin}: 0 0.5rem 0 0;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1.5rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${tokens.checkboxFillColor}: var(--text-accent);
                ${tokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${tokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${tokens.indicatorSize}: 0.375rem;
            `,
            m: css`
                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLabelOffset}: 0.625rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.textFieldChipGap}: 0.25rem;
                ${tokens.textFieldChipBorderRadius}: 0.375rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 2.25rem;
                ${tokens.textFieldChipPaddingRight}: 0.625rem;
                ${tokens.textFieldChipPaddingLeft}: 0.875rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.5rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1.25rem;
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.75rem 0.75rem 0.75rem 0.75rem;
                ${tokens.itemPaddingTight}: 0.5rem 0.75rem 0.5rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemIconMargin}: 0 0.375rem 0 0;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1.5rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${tokens.checkboxFillColor}: var(--text-accent);
                ${tokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${tokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${tokens.indicatorSize}: 0.375rem;
            `,
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.5rem 0.75rem 0.5rem 0.675rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.75rem 0.25rem 0.675rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1rem;
                ${tokens.itemIconMargin}: 0 0.375rem 0 0;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${tokens.checkboxFillColor}: var(--text-accent);
                ${tokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${tokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${tokens.indicatorSize}: 0.375rem;
            `,
            xs: css`
                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;

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

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.textFieldChipGap}: 0.25rem;
                ${tokens.textFieldChipBorderRadius}: 0.125rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 1.25rem;
                ${tokens.textFieldChipPaddingRight}: 0.375rem;
                ${tokens.textFieldChipPaddingLeft}: 0.625rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.25rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 0.75rem;
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.75rem 0.75rem 0.75rem 0.75rem;
                ${tokens.itemPaddingTight}: 0.5rem 0.75rem 0.5rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemIconMargin}: 0 0.375rem 0 0;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1.5rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.375rem;
                ${tokens.checkboxFillColor}: var(--text-accent);
                ${tokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${tokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${tokens.indicatorSize}: 0.375rem;
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
                ${tokens.textFieldDisabledOpacity}: 0.4;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.textFieldColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-clear);
                ${tokens.textFieldBorderColorReadOnly}: var(--surface-transparent-tertiary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldLeftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldLabelColorReadOnly}: var(--text-secondary);
            `,
        },
    },
};
