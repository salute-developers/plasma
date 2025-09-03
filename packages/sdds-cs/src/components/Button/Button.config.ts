import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-light-text-accent-minor);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-accent);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${buttonTokens.buttonColor}: var(--text-accent);
                ${buttonTokens.buttonColorHover}: #1A9E32;
                ${buttonTokens.buttonColorActive}: var(--text-accent-active);
                ${buttonTokens.buttonTextColor}: var(--text-accent);
                ${buttonTokens.buttonIconColor}: var(--text-accent);
                ${buttonTokens.buttonValueColor}: var(--text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-primary);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-solid-primary-active);
            `,
            clear: css`
                ${buttonTokens.buttonColor}: var(--text-accent);
                ${buttonTokens.buttonTextColor}: var(--text-accent);
                ${buttonTokens.buttonIconColor}: var(--text-accent);
                ${buttonTokens.buttonValueColor}: var(--text-accent-minor);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(--surface-transparent-accent);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-transparent-accent);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-transparent-accent-active);
            `,
        },
        size: {
            s: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1rem;
                ${buttonTokens.buttonRadius}: 0.75rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
            sr: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
        },
        focused: {
            true: css`
                ${buttonTokens.buttonFocusColor}: var(--surface-accent);
            `,
        },
        stretching: {
            auto: css``,
            filled: css``,
            fixed: css``,
        },
    },
};
