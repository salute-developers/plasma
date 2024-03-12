import { css } from '@linaria/core';

import { paginationTokens } from '../../../../components/Pagination';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${paginationTokens.paginationButtonColor}: var(--text-primary);
                ${paginationTokens.paginationButtonBackgroundColor}: var(--surface-clear);
                ${paginationTokens.paginationButtonHoverColor}: var(--text-primary);
                ${paginationTokens.paginationButtonHoverBackgroundColor}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 95%);
                ${paginationTokens.paginationButtonActiveColor}: var(--text-primary);
                ${paginationTokens.paginationButtonActiveBackgroundColor}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 90%);
            `,
        },
        size: {
            l: css`
                ${paginationTokens.paginationFontFamily}: var(--plasma-typo-body-l-font-family);
                ${paginationTokens.paginationFontSize}: var(--plasma-typo-body-l-font-size);
                ${paginationTokens.paginationFontStyle}: var(--plasma-typo-body-l-font-style);
                ${paginationTokens.paginationFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${paginationTokens.paginationButtonHeight}: 3.5rem;
                ${paginationTokens.paginationButtonWidth}: 3.5rem;
                ${paginationTokens.paginationInputWidth}: 4rem;
                ${paginationTokens.paginationButtonRadius}: 0.875rem;
                ${paginationTokens.paginationIconSize}: 1.2rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.45rem;
            `,
            m: css`
                ${paginationTokens.paginationFontFamily}: var(--plasma-typo-body-m-font-family);
                ${paginationTokens.paginationFontSize}: var(--plasma-typo-body-m-font-size);
                ${paginationTokens.paginationFontStyle}: var(--plasma-typo-body-m-font-style);
                ${paginationTokens.paginationFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${paginationTokens.paginationButtonHeight}: 3rem;
                ${paginationTokens.paginationButtonWidth}: 3rem;
                ${paginationTokens.paginationInputWidth}: 3.5rem;
                ${paginationTokens.paginationButtonRadius}: 0.75rem;
                ${paginationTokens.paginationIconSize}: 1.05rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.3rem;
            `,
            s: css`
                ${paginationTokens.paginationFontFamily}: var(--plasma-typo-body-s-font-family);
                ${paginationTokens.paginationFontSize}: var(--plasma-typo-body-s-font-size);
                ${paginationTokens.paginationFontStyle}: var(--plasma-typo-body-s-font-style);
                ${paginationTokens.paginationFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${paginationTokens.paginationButtonHeight}: 2.5rem;
                ${paginationTokens.paginationButtonWidth}: 2.5rem;
                ${paginationTokens.paginationInputWidth}: 3rem;
                ${paginationTokens.paginationButtonRadius}: 0.625rem;
                ${paginationTokens.paginationIconSize}: 0.9rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.15rem;
            `,
            xs: css`
                ${paginationTokens.paginationFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${paginationTokens.paginationFontSize}: var(--plasma-typo-body-xs-font-size);
                ${paginationTokens.paginationFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${paginationTokens.paginationFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${paginationTokens.paginationButtonHeight}: 2rem;
                ${paginationTokens.paginationInputWidth}: 2.5rem;
                ${paginationTokens.paginationButtonRadius}: 0.5rem;
                ${paginationTokens.paginationButtonWidth}: 2rem;
                ${paginationTokens.paginationIconSize}: 0.75rem;
                ${paginationTokens.paginationIconDoubleSize}: 1rem;
            `,
        },
        stretching: {
            auto: css``,
            filled: css``,
            fixed: css``,
        },
        type: {
            compact: css``,
            default: css``,
        },
    },
};
