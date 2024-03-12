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
                ${paginationTokens.paginationButtonColor}: var(--text-primary);
                ${paginationTokens.paginationButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${paginationTokens.paginationButtonHoverColor}: var(--text-primary);
                ${paginationTokens.paginationButtonHoverBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 85%
                );
                ${paginationTokens.paginationButtonActiveColor}: var(--text-primary);
                ${paginationTokens.paginationButtonActiveBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-transparent-secondary) 80%
                );

                ${paginationTokens.paginationButtonDisabledOpacity}: 0.4;
            `,
            clear: css`
                ${paginationTokens.paginationButtonColor}: var(--text-primary);
                ${paginationTokens.paginationButtonBackgroundColor}: var(--surface-clear);
                ${paginationTokens.paginationButtonHoverColor}: var(--text-primary);
                ${paginationTokens.paginationButtonHoverBackgroundColor}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 95%);
                ${paginationTokens.paginationButtonActiveColor}: var(--text-primary);
                ${paginationTokens.paginationButtonActiveBackgroundColor}: color-mix(in srgb, var(--text-primary), var(--surface-clear) 90%);

                ${paginationTokens.paginationButtonDisabledOpacity}: 0.4;
            `,
            primary: css`
                ${paginationTokens.paginationButtonColor}: var(--inverse-text-primary);
                ${paginationTokens.paginationButtonBackgroundColor}: var(--surface-solid-default);
                ${paginationTokens.paginationButtonHoverColor}: var(--inverse-text-primary);
                ${paginationTokens.paginationButtonHoverBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 85%
                );
                ${paginationTokens.paginationButtonActiveColor}: var(--inverse-text-primary);
                ${paginationTokens.paginationButtonActiveBackgroundColor}: color-mix(
                    in srgb,
                    var(--inverse-text-primary),
                    var(--surface-solid-default) 80%
                );

                ${paginationTokens.paginationButtonDisabledOpacity}: 0.4;
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
                ${paginationTokens.paginationButtonHeight}: 3.5rem;
                ${paginationTokens.paginationButtonWidth}: 3.5rem;
                ${paginationTokens.paginationInputWidth}: 4rem;
                ${paginationTokens.paginationButtonRadius}: 0.875rem;
                ${paginationTokens.paginationIconSize}: 1.2rem;
                ${paginationTokens.paginationIconDoubleSize}: 1.45rem;

                ${paginationTokens.paginationSelectWidth}: 100%;
                ${paginationTokens.paginationSelectHeight}: auto;
                ${paginationTokens.paginationSelectPaddingTop}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingRight}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingBottom}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingLeft}: 0.125rem;

                ${paginationTokens.paginationSelectItemWidth}: auto;
                ${paginationTokens.paginationSelectItemHeight}: 1.5rem;
                ${paginationTokens.paginationSelectItemPaddingTop}: 1rem;
                ${paginationTokens.paginationSelectItemPaddingRight}: 1rem;
                ${paginationTokens.paginationSelectItemPaddingBottom}: 1rem;
                ${paginationTokens.paginationSelectItemPaddingLeft}: 1rem;
                ${paginationTokens.paginationSelectItemContentLeftWidth}: 1.875rem;
                ${paginationTokens.paginationSelectItemBackground}: transparent;

                ${paginationTokens.paginationSelectTargetArrowRight}: 1rem;
                ${paginationTokens.paginationSelectTargetWidth}: 100%;
                ${paginationTokens.paginationSelectTargetPadding}: 0 3.5rem 0 1.5rem;
                ${paginationTokens.paginationSelectTargetPaddingHasChips}: 0 3.625rem 0 0.375rem;
                ${paginationTokens.paginationSelectTargetPaddingWithInput}: 0 3.625rem 0 0.625rem;
                ${paginationTokens.paginationSelectTargetInnerTop}: 0.5rem;
                ${paginationTokens.paginationSelectTargetLabelInnerTop}: 0.375rem;
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

                ${paginationTokens.paginationSelectWidth}: 100%;
                ${paginationTokens.paginationSelectHeight}: auto;
                ${paginationTokens.paginationSelectPaddingTop}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingRight}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingBottom}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingLeft}: 0.125rem;

                ${paginationTokens.paginationSelectItemWidth}: auto;
                ${paginationTokens.paginationSelectItemHeight}: 1.5rem;
                ${paginationTokens.paginationSelectItemPaddingTop}: 0.75rem;
                ${paginationTokens.paginationSelectItemPaddingRight}: 0.75rem;
                ${paginationTokens.paginationSelectItemPaddingBottom}: 0.75rem;
                ${paginationTokens.paginationSelectItemPaddingLeft}: 0.75rem;
                ${paginationTokens.paginationSelectItemContentLeftWidth}: 1.75rem;
                ${paginationTokens.paginationSelectItemBackground}: transparent;

                ${paginationTokens.paginationSelectTargetArrowRight}: 0.875rem;
                ${paginationTokens.paginationSelectTargetWidth}: 100%;
                ${paginationTokens.paginationSelectTargetPadding}: 0 3.25rem 0 1.25rem;
                ${paginationTokens.paginationSelectTargetPaddingHasChips}: 0 3.375rem 0 0.375rem;
                ${paginationTokens.paginationSelectTargetPaddingWithInput}: 0 3.375rem 0 0.625rem;
                ${paginationTokens.paginationSelectTargetInnerTop}: 0.5rem;
                ${paginationTokens.paginationSelectTargetLabelInnerTop}: 0.375rem;
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

                ${paginationTokens.paginationSelectWidth}: 100%;
                ${paginationTokens.paginationSelectHeight}: auto;
                ${paginationTokens.paginationSelectPaddingTop}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingRight}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingBottom}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingLeft}: 0.125rem;

                ${paginationTokens.paginationSelectItemWidth}: auto;
                ${paginationTokens.paginationSelectItemHeight}: 1.5rem;
                ${paginationTokens.paginationSelectItemPaddingTop}: 0.5rem;
                ${paginationTokens.paginationSelectItemPaddingRight}: 0.75rem;
                ${paginationTokens.paginationSelectItemPaddingBottom}: 0.5rem;
                ${paginationTokens.paginationSelectItemPaddingLeft}: 0.75rem;
                ${paginationTokens.paginationSelectItemContentLeftWidth}: 1.75rem;
                ${paginationTokens.paginationSelectItemBackground}: transparent;

                ${paginationTokens.paginationSelectTargetArrowRight}: 0.75rem;
                ${paginationTokens.paginationSelectTargetWidth}: 100%;
                ${paginationTokens.paginationSelectTargetPadding}: 0 3rem 0 1rem;
                ${paginationTokens.paginationSelectTargetPaddingHasChips}: 0 3.125rem 0 0.375rem;
                ${paginationTokens.paginationSelectTargetPaddingWithInput}: 0 3.125rem 0 0.625rem;
                ${paginationTokens.paginationSelectTargetInnerTop}: 0.5rem;
                ${paginationTokens.paginationSelectTargetLabelInnerTop}: 0.375rem;
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

                ${paginationTokens.paginationSelectWidth}: 100%;
                ${paginationTokens.paginationSelectHeight}: auto;
                ${paginationTokens.paginationSelectPaddingTop}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingRight}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingBottom}: 0.125rem;
                ${paginationTokens.paginationSelectPaddingLeft}: 0.125rem;

                ${paginationTokens.paginationSelectItemWidth}: auto;
                ${paginationTokens.paginationSelectItemHeight}: 1rem;
                ${paginationTokens.paginationSelectItemPaddingTop}: 0.5rem;
                ${paginationTokens.paginationSelectItemPaddingRight}: 0.5rem;
                ${paginationTokens.paginationSelectItemPaddingBottom}: 0.5rem;
                ${paginationTokens.paginationSelectItemPaddingLeft}: 0.5rem;
                ${paginationTokens.paginationSelectItemContentLeftWidth}: 1.25rem;
                ${paginationTokens.paginationSelectItemBackground}: transparent;

                ${paginationTokens.paginationSelectTargetArrowRight}: 0.5rem;
                ${paginationTokens.paginationSelectTargetWidth}: 100%;
                ${paginationTokens.paginationSelectTargetPadding}: 0 2.5rem 0 0.75rem;
                ${paginationTokens.paginationSelectTargetPaddingHasChips}: 0 2.625rem 0 0.375rem;
                ${paginationTokens.paginationSelectTargetPaddingWithInput}: 0 2.625rem 0 0.625rem;
                ${paginationTokens.paginationSelectTargetInnerTop}: 0.5rem;
                ${paginationTokens.paginationSelectTargetLabelInnerTop}: 0.375rem;
            `,
        },
        type: {
            compact: css``,
            default: css``,
        },
    },
};
