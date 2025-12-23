import { css } from '@linaria/core';

import { timePickerGridTokens as tokens } from '../../../components/TimePickerGrid';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemBackgroundActive}: var(--surface-transparent-secondary);
                ${tokens.itemFocusColor}: var(--surface-accent);

                ${tokens.scrollbarColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarTrackColor}: var(--surface-transparent-primary);

                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        size: {
            l: css`
                ${tokens.timePickerGridWidth}: 15rem;
                ${tokens.columnHeight}: 36.25rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.itemLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.itemLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.itemHeight}: 3.5rem;
                ${tokens.itemBorderRadius}: 0.75rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.5rem;
            `,
            m: css`
                ${tokens.timePickerGridWidth}: 15rem;
                ${tokens.columnHeight}: 31.25rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.itemLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.itemLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.itemHeight}: 3rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.375rem;
            `,
            s: css`
                ${tokens.timePickerGridWidth}: 15rem;
                ${tokens.columnHeight}: 26.25rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.itemLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.itemLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
            xs: css`
                ${tokens.timePickerGridWidth}: 15rem;
                ${tokens.columnHeight}: 21.25rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.itemLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.itemLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.itemHeight}: 2rem;
                ${tokens.itemBorderRadius}: 0.375rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;

                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
