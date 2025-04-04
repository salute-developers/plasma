import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                ${buttonTokens.buttonColor}: var(--plasma-colors-white);
                ${buttonTokens.buttonBackgroundColor}: var(--plasma-colors-button-accent);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(--plasma-colors-button-accent);
            `,
            secondary: css`
                ${buttonTokens.buttonColor}: var(--plasma-colors-text);
                ${buttonTokens.buttonBackgroundColor}: var(--plasma-colors-button-secondary);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(--plasma-colors-button-secondary);
            `,
            warning: css`
                ${buttonTokens.buttonColor}: var(--plasma-colors-white);
                ${buttonTokens.buttonBackgroundColor}: var(--plasma-colors-button-warning);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(--plasma-colors-button-warning);
            `,
            critical: css`
                ${buttonTokens.buttonColor}: var(--plasma-colors-white);
                ${buttonTokens.buttonBackgroundColor}: var(--plasma-colors-button-critical);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(--plasma-colors-button-critical);
            `,
            checked: css`
                ${buttonTokens.buttonColor}: var(--plasma-colors-background);
                ${buttonTokens.buttonBackgroundColor}: var(--plasma-colors-button-checked);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(--plasma-colors-button-checked);
            `,
            overlay: css`
                ${buttonTokens.buttonColor}: var(--plasma-colors-white);
                ${buttonTokens.buttonBackgroundColor}: var(--plasma-colors-black-secondary);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(--plasma-colors-black-secondary);
            `,
            clear: css`
                ${buttonTokens.buttonColor}: var(--plasma-colors-text);
                ${buttonTokens.buttonBackgroundColor}: var(--plasma-colors-transparent);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(--plasma-colors-transparent);
            `,
        },
        size: {
            l: css`
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonWidth}: 100%;
                ${buttonTokens.buttonPadding}: 1.625rem;
                ${buttonTokens.buttonRadius}: 1rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.5rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.5rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
            m: css`
                ${buttonTokens.buttonHeight}: 3rem;
                ${buttonTokens.buttonWidth}: 100%;
                ${buttonTokens.buttonPadding}: 1.5rem;
                ${buttonTokens.buttonRadius}: 0.75rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.375rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.375rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
            s: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 100%;
                ${buttonTokens.buttonPadding}: 1.25rem;
                ${buttonTokens.buttonRadius}: 0.75rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${buttonTokens.buttonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${buttonTokens.buttonFocusColor}: var(--plasma-colors-button-white);
            `,
        },
        stretching: {
            auto: css``,
            filled: css``,
            fixed: css``,
        },
    },
};
