import { timePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-solid-card);
                ${tokens.backgroundError}: var(--surface-solid-card);
                ${tokens.backgroundSuccess}: var(--surface-solid-card);

                ${tokens.labelColor}: var(--text-primary);

                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.indicatorColor}: var(--surface-negative);

                ${tokens.timePickerShadow}: var(--shadow-down-soft-s);

                ${tokens.textFieldBackgroundColor}: var(--surface-solid-card);
                ${tokens.textFieldBackgroundColorHover}: var(--surface-solid-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-solid-card);
                ${tokens.textFieldBackgroundErrorColor}: var--surface-solid-card);
                ${tokens.textFieldBackgroundErrorColorFocus}: var--surface-solid-card);
                ${tokens.textFieldBackgroundSuccessColor}: var(--surface-solid-card);
                ${tokens.textFieldBackgroundSuccessColorFocus}: var(--surface-solid-card);

                ${tokens.borderColor}: var(--outline-solid-primary);
                ${tokens.borderColorFocus}: var(--outline-accent);
                ${tokens.borderColorHover}: var(--outline-solid-primary-hover);

                ${tokens.textFieldBorderColorError}: var(--text-negative);
                ${tokens.textFieldBorderColorErrorFocus}: var(--text-negative);
                ${tokens.textFieldBorderColorErrorHover}: var(--text-negative);

                ${tokens.textFieldBorderColorSuccess}: var(--text-negative);
                ${tokens.textFieldBorderColorSuccessFocus}: var(--text-negative);
                ${tokens.textFieldBorderColorSuccessHover}: var(--text-negative);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldContentRightSlotColor}: var(--text-accent);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-accent-minor);
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: var(--text-accent-active);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);

                ${tokens.timePickerBackground}: var(--surface-solid-card);
                ${tokens.itemBackgroundHover}: var(--surface-solid-secondary);
                ${tokens.itemBackgroundActive}: var(--surface-solid-secondary);
                ${tokens.itemFocusColor}: var(--surface-accent);

                ${tokens.scrollbarColor}: var(--surface-solid-tertiary);
                ${tokens.scrollbarTrackColor}: var(--surface-transparent-primary);
            `,
        },
        size: {
            s: css`
                ${tokens.dropdownMarginTop}: 0.125rem;

                ${tokens.labelOffset}: 0.5rem;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.55rem 0.75rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLeftContentMargin}: 0 0.5rem 0 0rem;
                ${tokens.textFieldRightContentMargin}: 0 0rem 0 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.625rem;
                ${tokens.timePickerWidth}: 7.75rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 19rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.itemLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.itemLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 1;

                ${tokens.textFieldColor}: var(--text-secondary);

                ${tokens.textFieldBackgroundColor}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-solid-primary);

                ${tokens.textFieldBorderColor}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColorHover}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColorFocus}: var(--surface-solid-primary);
            `,
        },
        readonly: {
            true: css`
                ${tokens.labelColorReadOnly}: var(--text-secondary);

                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);

                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary);

                ${tokens.textFieldBorderWidth}: 0;
                ${tokens.textFieldBorderColor}: transparent;

                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-clear);
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
            `,
        },
    },
};
