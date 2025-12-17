import { css, paginationTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'm',
    },
    variations: {
        view: {
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
                ${paginationTokens.paginationHelperTextColor}: var(--text-secondary);
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
            m: css`
                ${paginationTokens.paginationFontFamily}: var(--plasma-typo-body-m-font-family);
                ${paginationTokens.paginationFontSize}: var(--plasma-typo-body-m-font-size);
                ${paginationTokens.paginationFontStyle}: var(--plasma-typo-body-m-font-style);
                ${paginationTokens.paginationFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${paginationTokens.paginationLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${paginationTokens.paginationLineHeight}: var(--plasma-typo-body-m-line-height);

                ${paginationTokens.buttonHeight}: 3rem;
                ${paginationTokens.buttonWidth}: 3rem;
                ${paginationTokens.buttonWidthShorter}: 2rem;
                ${paginationTokens.paginationInputWidth}: 3.5rem;
                ${paginationTokens.buttonRadius}: 0.75rem;
                ${paginationTokens.paginationIconSize}: 1.05rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.3rem;
                ${paginationTokens.buttonArrowMargin}: 0 -0.125rem 0 0.375rem;

                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemHeight}: 1.5rem;
                ${paginationTokens.selectItemPadding}: 0.75rem 0.75rem 0.75rem 0.75rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.75rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 0.875rem;
                ${paginationTokens.selectTargetPadding}: 1.25rem 0 1.25rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.75rem;
                ${paginationTokens.inputWidth}: 3.5rem;
                ${paginationTokens.inputHeight}: 3rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.0625rem;

                ${paginationTokens.paginationHelperTextGap}: 0.5rem 2.5rem;
            `,
        },
        type: {
            compact: css``,
            default: css``,
        },
    },
};
