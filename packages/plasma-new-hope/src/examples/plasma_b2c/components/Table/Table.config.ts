import { css } from '@linaria/core';

import { tableTokens as tokens } from '../../../../components/Table/Table.tokens';

export const config = {
    defaults: {
        size: 'm',
    },
    variations: {
        size: {
            l: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.headerRowHeight}: 4rem;
                ${tokens.rowHeight}: 4rem;
                ${tokens.cellPadding}: 0 1rem;
                ${tokens.checkboxCellPadding}: 0 1rem;

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
            `,
            m: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.headerRowHeight}: 3.5rem;
                ${tokens.rowHeight}: 3.5rem;
                ${tokens.cellPadding}: 0 0.875rem;
                ${tokens.checkboxCellPadding}: 0 0.75rem;

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
            `,
            s: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.headerRowHeight}: 3rem;
                ${tokens.rowHeight}: 3rem;
                ${tokens.cellPadding}: 0 0.5rem;
                ${tokens.checkboxCellPadding}: 0 0.625rem;

                ${tokens.checkboxTriggerSize}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.25rem;
            `,
        },
    },
};
