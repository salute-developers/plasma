import { css, paginationTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
    },
    variations: {
        view: {
            default: css`
                ${paginationTokens.buttonColor}: var(--inverse-text-primary);
                ${paginationTokens.buttonColorHover}: var(--inverse-text-primary-hover);
                ${paginationTokens.buttonColorActive}: var(--inverse-text-primary-active);
                ${paginationTokens.buttonHoverColor}: var(--inverse-text-primary);
                ${paginationTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${paginationTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${paginationTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);
                ${paginationTokens.buttonActiveColor}: var(--inverse-text-primary);
                ${paginationTokens.buttonArrowColor}: var(--inverse-text-secondary);
                ${paginationTokens.buttonArrowColorHover}: var(--inverse-text-secondary-hover);
                ${paginationTokens.buttonArrowColorActive}: var(--inverse-text-secondary-hover);

                ${paginationTokens.buttonDisabledOpacity}: 0.4;

                ${paginationTokens.inputBackgroundColor}: var(--surface-transparent-secondary);
                ${paginationTokens.inputBorderColor}:transparent;
                ${paginationTokens.selectBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 85%
                );

                ${paginationTokens.paginationColor}: var(--text-primary);
                ${paginationTokens.buttonFocusColor}: var(--surface-accent);
            `,
            secondary: css`
                ${paginationTokens.buttonColor}: var(--text-primary);
                ${paginationTokens.buttonColorHover}: var(--text-primary-hover);
                ${paginationTokens.buttonColorActive}: var(--text-primary-active);
                ${paginationTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${paginationTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${paginationTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);
                ${paginationTokens.buttonHoverColor}: var(--text-primary);
                ${paginationTokens.buttonActiveColor}: var(--text-primary);
                ${paginationTokens.buttonArrowColor}: var(--text-secondary);
                ${paginationTokens.buttonArrowColorHover}: var(--text-secondary-hover);
                ${paginationTokens.buttonArrowColorActive}: var(--text-secondary-hover);

                ${paginationTokens.buttonDisabledOpacity}: 0.4;

                ${paginationTokens.inputBackgroundColor}: var(--surface-transparent-secondary);
                ${paginationTokens.selectBackgroundColor}: var(--surface-solid-secondary);
                ${paginationTokens.inputBorderColor}: transparent;

                ${paginationTokens.paginationColor}: var(--text-primary);
                ${paginationTokens.buttonFocusColor}: var(--surface-accent);
            `,
            clear: css`
                ${paginationTokens.buttonColor}: var(--text-primary);
                ${paginationTokens.buttonColorHover}: var(--text-primary-hover);
                ${paginationTokens.buttonColorActive}: var(--text-primary-active);
                ${paginationTokens.buttonBackgroundColor}: var(--surface-clear);
                ${paginationTokens.buttonBackgroundColorHover}: var(--surface-clear);
                ${paginationTokens.buttonBackgroundColorActive}: var(--surface-clear);
                ${paginationTokens.buttonHoverColor}: var(--text-primary);
                ${paginationTokens.buttonActiveColor}: var(--text-primary);
                ${paginationTokens.buttonArrowColor}: var(--text-secondary);
                ${paginationTokens.buttonArrowColorHover}: var(--text-secondary-hover);
                ${paginationTokens.buttonArrowColorActive}: var(--text-secondary-hover);

                ${paginationTokens.buttonDisabledOpacity}: 0.4;

                ${paginationTokens.inputBackgroundColor}: var(--surface-transparent-secondary);
                ${paginationTokens.selectBackgroundColor}: var(--surface-solid-card);
                ${paginationTokens.inputBorderColor}: transparent;

                ${paginationTokens.paginationColor}: var(--text-primary);
                ${paginationTokens.buttonFocusColor}: var(--surface-accent);
            `,
        },
        viewCurrentPage: {
            default: css`
                ${paginationTokens.paginationCurrentButtonColor}: var(--inverse-text-primary);
                ${paginationTokens.paginationCurrentButtonBackgroundColor}: var(--surface-solid-default);
                ${paginationTokens.paginationCurrentButtonHoverColor}: var(--inverse-text-primary);
                ${paginationTokens.paginationCurrentButtonHoverBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 85%
                );
                ${paginationTokens.paginationCurrentButtonActiveColor}: var(--inverse-text-primary);
                ${paginationTokens.paginationCurrentButtonActiveBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 80%
                );
            `,
            secondary: css`
                ${paginationTokens.paginationCurrentButtonColor}: var(--text-primary);
                ${paginationTokens.paginationCurrentButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${paginationTokens.paginationCurrentButtonHoverColor}: var(--text-primary);
                ${paginationTokens.paginationCurrentButtonHoverBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 85%
                );
                ${paginationTokens.paginationCurrentButtonActiveColor}: var(--text-primary);
                ${paginationTokens.paginationCurrentButtonActiveBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 80%
                );
            `,
            clear: css`
                ${paginationTokens.paginationCurrentButtonColor}: var(--text-primary);
                ${paginationTokens.paginationCurrentButtonBackgroundColor}: var(--surface-clear);
                ${paginationTokens.paginationCurrentButtonHoverColor}: var(--text-primary);
                ${paginationTokens.paginationCurrentButtonHoverBackgroundColor}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 95%);
                ${paginationTokens.paginationCurrentButtonActiveColor}: var(--text-primary);
                ${paginationTokens.paginationCurrentButtonActiveBackgroundColor}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 90%);
            `,
        },
        size: {
            s: css`
                ${paginationTokens.paginationFontFamily}: var(--plasma-typo-body-s-font-family);
                ${paginationTokens.paginationFontSize}: var(--plasma-typo-body-s-font-size);
                ${paginationTokens.paginationFontStyle}: var(--plasma-typo-body-s-font-style);
                ${paginationTokens.paginationFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${paginationTokens.paginationLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${paginationTokens.paginationLineHeight}: var(--plasma-typo-body-s-line-height);

                ${paginationTokens.buttonHeight}: 2.5rem;
                ${paginationTokens.buttonWidth}: 2.5rem;
                ${paginationTokens.buttonWidthShorter}: 1.75rem;
                ${paginationTokens.paginationInputWidth}: 3rem;
                ${paginationTokens.buttonRadius}: 0.625rem;
                ${paginationTokens.paginationIconSize}: 0.9rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.15rem;
                ${paginationTokens.buttonArrowMargin}: 0 -0.125rem 0 0.25rem;

                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemHeight}: 1.5rem;
                ${paginationTokens.selectItemPadding}: 0.5rem 0.75rem 0.5rem 0.75rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.75rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 0.75rem;
                ${paginationTokens.selectTargetPadding}: 1rem 0 1rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.625rem;
                ${paginationTokens.inputWidth}: 3rem;
                ${paginationTokens.inputHeight}: 2.5rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.0625rem;
            `,
        },
        type: {
            compact: css``,
            default: css``,
        },
    },
};
