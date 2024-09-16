import { css, autocompleteTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
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
                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.background}: var(--surface-solid-card);
                ${tokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04);
                ${tokens.itemBackground}: var(--plasma-colors-transparent);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-accent);
                ${tokens.itemColor}: var(--text-primary);
                ${tokens.focusColor}: var(--surface-accent);

                ${tokens.infiniteLoaderSpinnerColor}: var(--text-primary);
                ${tokens.dropdownBorderColor}: var(--surface-solid-primary);
            `,
        },
        size: {
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;
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

                ${tokens.borderRadius}: 0.625rem;
                ${tokens.padding}: 0.125rem;
                ${tokens.itemPadding}: 0.6875rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.5rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.emptyStatePadding}: 1.375rem 0.625rem 0.625rem 0.625rem;
                ${tokens.emptyStateGap}: 0.25rem;

                ${tokens.infiniteLoaderSpinnerSize}: 1.5rem;
                ${tokens.infiniteLoaderGap}: 0.25rem;
                ${tokens.dropdownBorderWidth}: 0.125rem;
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
                ${tokens.itemColor}: var(--text-secondary);
                ${tokens.background}: var(--surface-solid-primary);
                ${tokens.textFieldColor}: var(--text-secondary);
                ${tokens.textFieldLabelColor}: var(--text-secondary);
                ${tokens.textFieldBackgroundColor}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundColorHover}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColor}: var(--secondary-solid-primary);
                ${tokens.textFieldBorderColorHover}: var(--secondary-solid-primary);
                ${tokens.textFieldBorderColorFocus}: var(--secondary-solid-primary);
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
