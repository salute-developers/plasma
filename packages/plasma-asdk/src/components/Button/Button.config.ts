import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                ${buttonTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-accent-main);
                ${buttonTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(in srgb, var(--text-primary), var(--surface-accent-main) 85%);
                ${buttonTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-accent-main) 80%
                );
            `,
            secondary: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${buttonTokens.buttonColorHover}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 85%
                );
                ${buttonTokens.buttonColorActive}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 80%
                );
            `,
            success: css`
                ${buttonTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-positive);
                ${buttonTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-positive) 85%
                );
                ${buttonTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-positive) 85%
                );
            `,
            warning: css`
                ${buttonTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-warning);
                ${buttonTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-warning) 85%
                );
                ${buttonTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-warning) 85%
                );
            `,
            critical: css`
                ${buttonTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-negative);
                ${buttonTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-negative) 85%
                );
                ${buttonTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-negative) 85%
                );
            `,
            clear: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonTokens.buttonColorHover}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 95%);
                ${buttonTokens.buttonColorActive}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 90%);
            `,
        },
        size: {
            l: css`
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.5rem;
                ${buttonTokens.buttonRadius}: 0.875rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${buttonTokens.buttonSpinnerSize}: 22px;
                ${buttonTokens.buttonSpinnerColor}: inherit;
            `,
            lr: css`
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${buttonTokens.buttonSpinnerSize}: 22px;
                ${buttonTokens.buttonSpinnerColor}: inherit;
            `,
            m: css`
                ${buttonTokens.buttonHeight}: 3rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1.25rem;
                ${buttonTokens.buttonRadius}: 0.75rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${buttonTokens.buttonSpinnerSize}: 22px;
                ${buttonTokens.buttonSpinnerColor}: inherit;
            `,
            mr: css`
                ${buttonTokens.buttonHeight}: 3rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${buttonTokens.buttonSpinnerSize}: 22px;
                ${buttonTokens.buttonSpinnerColor}: inherit;
            `,
            s: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1rem;
                ${buttonTokens.buttonRadius}: 0.625rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${buttonTokens.buttonSpinnerSize}: 22px;
                ${buttonTokens.buttonSpinnerColor}: inherit;
            `,
            sr: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${buttonTokens.buttonSpinnerSize}: 22px;
                ${buttonTokens.buttonSpinnerColor}: inherit;
            `,
            xs: css`
                ${buttonTokens.buttonHeight}: 2rem;
                ${buttonTokens.buttonWidth}: 10rem;
                ${buttonTokens.buttonPadding}: 0.75rem;
                ${buttonTokens.buttonRadius}: 0.5rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${buttonTokens.buttonSpinnerSize}: 16px;
                ${buttonTokens.buttonSpinnerColor}: inherit;
            `,
            xsr: css`
                ${buttonTokens.buttonHeight}: 2rem;
                ${buttonTokens.buttonWidth}: 10rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${buttonTokens.buttonSpinnerSize}: 16px;
                ${buttonTokens.buttonSpinnerColor}: inherit;
            `,
            xxs: css`
                ${buttonTokens.buttonHeight}: 1.5rem;
                ${buttonTokens.buttonWidth}: 8.75rem;
                ${buttonTokens.buttonPadding}: 0.625rem;
                ${buttonTokens.buttonRadius}: 0.375rem;
                ${buttonTokens.buttonScaleActive}: 0.98;
                ${buttonTokens.buttonScaleHover}: 1.02;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${buttonTokens.buttonSpinnerSize}: 12px;
                ${buttonTokens.buttonSpinnerColor}: inherit;
            `,
        },
        disabled: {
            true: css`
                ${buttonTokens.buttonDisabledOpacity}: 0.4;
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
