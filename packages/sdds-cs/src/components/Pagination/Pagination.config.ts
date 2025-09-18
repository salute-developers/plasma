import { css, paginationTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        viewCurrentPage: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${paginationTokens.buttonColor}: var(--text-accent);
                ${paginationTokens.buttonColorHover}: var(--text-accent);
                ${paginationTokens.buttonColorActive}: var(--text-accent);
                ${paginationTokens.buttonBackgroundColor}: var(--surface-clear);
                ${paginationTokens.buttonBackgroundColorHover}: var(--surface-clear);
                ${paginationTokens.buttonBackgroundColorActive}: var(--surface-clear);
                ${paginationTokens.buttonHoverColor}: var(--text-accent);
                ${paginationTokens.buttonActiveColor}: var(--text-accent);
                ${paginationTokens.buttonArrowColor}: var(--text-accent);
                ${paginationTokens.buttonArrowColorHover}: var(--text-accent);
                ${paginationTokens.buttonArrowColorActive}: var(--text-accent);

                ${paginationTokens.inputBackgroundColor}: var(--surface-solid-card);
                ${paginationTokens.selectBackgroundColor}: var(--surface-solid-card);
                ${paginationTokens.inputBorderColor}: var(--outline-solid-primary);

                ${paginationTokens.paginationColor}: var(--text-primary);
                ${paginationTokens.paginationHelperTextColor}: var(--text-secondary);
                ${paginationTokens.buttonFocusColor}: var(--surface-accent);
                ${paginationTokens.paginationDisabledButtonColor}: var(--text-secondary);
                ${paginationTokens.paginationDisabledButtonBackgroundColor}: var(--surface-clear);
            `,
        },
        viewCurrentPage: {
            default: css`
                ${paginationTokens.paginationCurrentButtonColor}: var(--text-primary);
                ${paginationTokens.paginationCurrentButtonBackgroundColor}: var(--surface-solid-primary);
                ${paginationTokens.paginationCurrentButtonHoverColor}: var(--text-primary);
                ${paginationTokens.paginationCurrentButtonHoverBackgroundColor}: var(--surface-solid-primary);
                ${paginationTokens.paginationCurrentButtonActiveColor}: var(--text-primary);
                ${paginationTokens.paginationCurrentButtonActiveBackgroundColor}: var(--surface-solid-primary);
            `,
        },
        size: {
            s: css`
                ${paginationTokens.paginationFontFamily}: var(--plasma-typo-body-m-font-family);
                ${paginationTokens.paginationFontSize}: var(--plasma-typo-body-m-font-size);
                ${paginationTokens.paginationFontStyle}: var(--plasma-typo-body-m-font-style);
                ${paginationTokens.paginationFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${paginationTokens.paginationLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${paginationTokens.paginationLineHeight}: var(--plasma-typo-body-m-line-height);

                ${paginationTokens.buttonHeight}: 2.5rem;
                ${paginationTokens.buttonWidth}: 2.5rem;
                ${paginationTokens.buttonWidthShorter}: 1.75rem;
                ${paginationTokens.paginationInputWidth}: 3rem;
                ${paginationTokens.buttonRadius}: 0.75rem;
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
                ${paginationTokens.inputBorderWidth}: 0.125rem;

                ${paginationTokens.paginationHelperTextGap}: 0.5rem 2.5rem;
            `,
        },
        type: {
            compact: css``,
            default: css``,
        },
    },
};
