import { css } from '@linaria/core';

import { paginationTokens } from '../../../../components/Pagination';

export const config = {
    defaults: {
        view: 'clear',
        viewCurrentPage: 'secondary',
        size: 'xs',
    },
    variations: {
        view: {
            secondary: css`
                ${paginationTokens.buttonColor}: var(--text-primary);
                ${paginationTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${paginationTokens.buttonHoverColor}: var(--text-primary);
                ${paginationTokens.buttonHoverBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 85%
                );
                ${paginationTokens.buttonActiveColor}: var(--text-primary);
                ${paginationTokens.buttonActiveBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 80%
                );

                ${paginationTokens.buttonDisabledOpacity}: 0.4;

                ${paginationTokens.inputBackgroundColor}: var(--surface-clear);
                ${paginationTokens.selectBackgroundColor}: var(--surface-solid-secondary);
                ${paginationTokens.inputBorderColor}: var(--surface-transparent-secondary);

                ${paginationTokens.paginationColor}: var(--text-primary);
                ${paginationTokens.buttonFocusColor}: var(--surface-accent);
            `,
            clear: css`
                ${paginationTokens.buttonColor}: var(--text-primary);
                ${paginationTokens.buttonBackgroundColor}: var(--surface-clear);
                ${paginationTokens.buttonHoverColor}: var(--text-primary);
                ${paginationTokens.buttonHoverBackgroundColor}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 95%);
                ${paginationTokens.buttonActiveColor}: var(--text-primary);
                ${paginationTokens.buttonActiveBackgroundColor}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 90%);

                ${paginationTokens.buttonDisabledOpacity}: 0.4;

                ${paginationTokens.inputBackgroundColor}: var(--surface-clear);
                ${paginationTokens.selectBackgroundColor}: var(--surface-solid-card);
                ${paginationTokens.inputBorderColor}: var(--surface-transparent-secondary);

                ${paginationTokens.paginationColor}: var(--text-primary);
                ${paginationTokens.buttonFocusColor}: var(--surface-accent);
            `,
            primary: css`
                ${paginationTokens.buttonColor}: var(--inverse-text-primary);
                ${paginationTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${paginationTokens.buttonHoverColor}: var(--inverse-text-primary);
                ${paginationTokens.buttonHoverBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 85%
                );
                ${paginationTokens.buttonActiveColor}: var(--inverse-text-primary);
                ${paginationTokens.buttonActiveBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 80%
                );

                ${paginationTokens.buttonDisabledOpacity}: 0.4;

                ${paginationTokens.inputBackgroundColor}: var(--surface-clear);
                ${paginationTokens.inputBorderColor}: var(--surface-transparent-secondary);
                ${paginationTokens.selectBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 85%
                );

                ${paginationTokens.paginationColor}: var(--text-primary);
                ${paginationTokens.buttonFocusColor}: var(--surface-accent);
            `,
        },
        viewCurrentPage: {
            primary: css`
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
            l: css`
                ${paginationTokens.paginationFontFamily}: var(--plasma-typo-body-l-font-family);
                ${paginationTokens.paginationFontSize}: var(--plasma-typo-body-l-font-size);
                ${paginationTokens.paginationFontStyle}: var(--plasma-typo-body-l-font-style);
                ${paginationTokens.paginationFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${paginationTokens.paginationLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${paginationTokens.paginationLineHeight}: var(--plasma-typo-body-l-line-height);

                ${paginationTokens.buttonHeight}: 3.5rem;
                ${paginationTokens.buttonWidth}: 3rem;
                ${paginationTokens.buttonWidthShorter}: 2.25rem;
                ${paginationTokens.buttonRadius}: 0.875rem;
                ${paginationTokens.paginationIconSize}: 1.2rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.45rem;

                ${paginationTokens.selectWidth}: 6.375rem;
                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemWidth}: 6.375rem;
                ${paginationTokens.selectItemHeight}: 1.5rem;
                ${paginationTokens.selectItemPaddingTop}: 1rem;
                ${paginationTokens.selectItemPaddingRight}: 1rem;
                ${paginationTokens.selectItemPaddingBottom}: 1rem;
                ${paginationTokens.selectItemPaddingLeft}: 1rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.875rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 1rem;
                ${paginationTokens.selectTargetWidth}: 6.375rem;
                ${paginationTokens.selectTargetPadding}: 0 3.5rem 0 1.5rem;
                ${paginationTokens.selectTargetPaddingHasChips}: 0 3.625rem 0 0.375rem;
                ${paginationTokens.selectTargetPaddingWithInput}: 0 3.625rem 0 0.625rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.875rem;
                ${paginationTokens.inputWidth}: 4rem;
                ${paginationTokens.inputHeight}: 3.5rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.125rem;
            `,
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
                ${paginationTokens.buttonRadius}: 0.75rem;
                ${paginationTokens.paginationIconSize}: 1.05rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.3rem;

                ${paginationTokens.selectWidth}: 5.875rem;
                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemWidth}: 5.875rem;
                ${paginationTokens.selectItemHeight}: 1.5rem;
                ${paginationTokens.selectItemPaddingTop}: 0.75rem;
                ${paginationTokens.selectItemPaddingRight}: 0.75rem;
                ${paginationTokens.selectItemPaddingBottom}: 0.75rem;
                ${paginationTokens.selectItemPaddingLeft}: 0.75rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.75rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 0.875rem;
                ${paginationTokens.selectTargetWidth}: 5.875rem;
                ${paginationTokens.selectTargetPadding}: 0 3.25rem 0 1.25rem;
                ${paginationTokens.selectTargetPaddingHasChips}: 0 3.375rem 0 0.375rem;
                ${paginationTokens.selectTargetPaddingWithInput}: 0 3.375rem 0 0.625rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.75rem;
                ${paginationTokens.inputWidth}: 3.5rem;
                ${paginationTokens.inputHeight}: 3rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.125rem;
            `,
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

                ${paginationTokens.selectWidth}: 5.375rem;
                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemWidth}: 5.375rem;
                ${paginationTokens.selectItemHeight}: 1.5rem;
                ${paginationTokens.selectItemPaddingTop}: 0.5rem;
                ${paginationTokens.selectItemPaddingRight}: 0.75rem;
                ${paginationTokens.selectItemPaddingBottom}: 0.5rem;
                ${paginationTokens.selectItemPaddingLeft}: 0.75rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.75rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 0.75rem;
                ${paginationTokens.selectTargetWidth}: 5.375rem;
                ${paginationTokens.selectTargetPadding}: 0 3rem 0 1rem;
                ${paginationTokens.selectTargetPaddingHasChips}: 0 3.125rem 0 0.375rem;
                ${paginationTokens.selectTargetPaddingWithInput}: 0 3.125rem 0 0.625rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.625rem;
                ${paginationTokens.inputWidth}: 3rem;
                ${paginationTokens.inputHeight}: 2.5rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.125rem;
            `,
            xs: css`
                ${paginationTokens.paginationFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${paginationTokens.paginationFontSize}: var(--plasma-typo-body-xs-font-size);
                ${paginationTokens.paginationFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${paginationTokens.paginationFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${paginationTokens.paginationLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${paginationTokens.paginationLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${paginationTokens.buttonHeight}: 2rem;
                ${paginationTokens.paginationInputWidth}: 2.5rem;
                ${paginationTokens.buttonRadius}: 0.5rem;
                ${paginationTokens.buttonWidth}: 2rem;
                ${paginationTokens.buttonWidthShorter}: 1.5rem;
                ${paginationTokens.paginationIconSize}: 0.75rem;
                ${paginationTokens.paginationIconDoubleSize}: 1rem;

                ${paginationTokens.selectWidth}: 4.625rem;
                ${paginationTokens.selectHeight}: auto;
                ${paginationTokens.selectPaddingTop}: 0.125rem;
                ${paginationTokens.selectPaddingRight}: 0.125rem;
                ${paginationTokens.selectPaddingBottom}: 0.125rem;
                ${paginationTokens.selectPaddingLeft}: 0.125rem;

                ${paginationTokens.selectItemWidth}: 4.625rem;
                ${paginationTokens.selectItemHeight}: 1rem;
                ${paginationTokens.selectItemPaddingTop}: 0.5rem;
                ${paginationTokens.selectItemPaddingRight}: 0.5rem;
                ${paginationTokens.selectItemPaddingBottom}: 0.5rem;
                ${paginationTokens.selectItemPaddingLeft}: 0.5rem;
                ${paginationTokens.selectItemContentLeftWidth}: 1.25rem;
                ${paginationTokens.selectItemBackground}: transparent;

                ${paginationTokens.selectTargetArrowRight}: 0.5rem;
                ${paginationTokens.selectTargetWidth}: 4.625rem;
                ${paginationTokens.selectTargetPadding}: 0 2.5rem 0 0.75rem;
                ${paginationTokens.selectTargetPaddingHasChips}: 0 2.625rem 0 0.375rem;
                ${paginationTokens.selectTargetPaddingWithInput}: 0 2.625rem 0 0.625rem;
                ${paginationTokens.selectTargetInnerTop}: 0.5rem;
                ${paginationTokens.selectTargetLabelInnerTop}: 0.375rem;

                ${paginationTokens.inputBorderRadius}: 0.5rem;
                ${paginationTokens.inputWidth}: 2.5rem;
                ${paginationTokens.inputHeight}: 2rem;
                ${paginationTokens.inputPadding}: 0 0.625rem;
                ${paginationTokens.inputBorderWidth}: 0.125rem;
            `,
        },
        type: {
            compact: css``,
            default: css``,
        },
    },
};
