import { css, rangeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-solid-card);
                ${tokens.borderColor}: var(--outline-solid-primary);
                ${tokens.borderColorError}: var(--outline-negative);
                ${tokens.borderColorSuccess}: var(--outline-accent);

                ${tokens.dividerColor}: var(--text-primary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-secondary);

                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.textFieldBorderColorFocus}: var(--outline-accent);
                ${tokens.textFieldBorderColorError}: var(--outline-negative);
                ${tokens.textFieldBorderColorErrorFocus}: var(--outline-negative);
                ${tokens.textFieldBorderColorSuccess}: var(--outline-accent);
                ${tokens.textFieldBorderColorSuccessFocus}: var(--outline-accent);

                ${tokens.focusColor}: var(--text-accent);
                ${tokens.textFieldTextAfterColor}: var(--text-secondary);
                ${tokens.textFieldTextBeforeColor}: var(--text-secondary);
            `,
        },
        size: {
            s: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.leftContentMargin}: 0 0.375rem 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0 0 0.5rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 1;
                ${tokens.background}: var(--surface-solid-primary);
                ${tokens.borderColor}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColorFocus}: var(--surface-solid-primary);
                ${tokens.textFieldColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: var(--surface-solid-card);
                ${tokens.labelColorReadOnly}: var(--text-secondary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.dividerColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColorReadOnly}: transparent;
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
            `,
        },
    },
};
