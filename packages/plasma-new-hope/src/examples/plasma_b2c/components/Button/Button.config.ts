import { css } from '@linaria/core';

import { buttonTokens } from '../../../../components/Button';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${buttonTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${buttonTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 85%
                );
                ${buttonTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 80%
                );
            `,
            primary: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-accent);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(in srgb, var(--text-primary), var(--surface-accent) 85%);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-accent) 80%);
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
            clear: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonTokens.buttonColorHover}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 95%);
                ${buttonTokens.buttonColorActive}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 90%);
            `,
            positive: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-positive);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-positive) 85%
                );
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-positive) 85%);
            `,
            warning: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-warning);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-warning) 85%
                );
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-warning) 85%);
            `,
            negative: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-negative);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-negative) 85%
                );
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: color-mix(in srgb, var(--text-primary), var(--surface-negative) 85%);
            `,
        },
        size: {
            l: css`
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonPadding}: 1.5rem;
                ${buttonTokens.buttonRadius}: 0.875rem;

                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            lr: css`
                ${buttonTokens.buttonHeight}: 3.5rem;

                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${buttonTokens.buttonHeight}: 3rem;
                ${buttonTokens.buttonPadding}: 1.25rem;
                ${buttonTokens.buttonRadius}: 0.75rem;

                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            mr: css`
                ${buttonTokens.buttonHeight}: 3rem;

                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonPadding}: 1rem;
                ${buttonTokens.buttonRadius}: 0.625rem;

                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            sr: css`
                ${buttonTokens.buttonHeight}: 2.5rem;

                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${buttonTokens.buttonHeight}: 2rem;
                ${buttonTokens.buttonPadding}: 0.75rem;
                ${buttonTokens.buttonRadius}: 0.5rem;

                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xsr: css`
                ${buttonTokens.buttonHeight}: 2rem;

                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xss: css`
                --plasma-button-height: 24px;
                --plasma-button-padding: 10px;
                --plasma-button-radius: 6px;
                --plasma-button-font-family: var(--plasma-typo-body-xs-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-xs-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-xs-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-xs-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-xs-line-height);
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
    },
};
