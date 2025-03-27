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

                ${tokens.headerRowHeight}: 3.5rem;
                ${tokens.rowHeight}: 3.5rem;
                ${tokens.cellPadding}: 0 1rem;
                ${tokens.checkboxCellPadding}: 0 1rem;

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxLabelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.checkboxLabelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.checkboxLabelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.checkboxLabelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.checkboxLabelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.checkboxLabelLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.checkboxContentLeftOffset}: 0.375rem;
                ${tokens.checkboxContentTopOffset}: 0.125rem;

                ${tokens.editableCellIconGap}: 0.5rem;
                ${tokens.editableCellIconButtonWidth}: 3rem;
                ${tokens.editableCellIconButtonHeight}: 100%;
                ${tokens.editableCellPadding}: 0.25rem;
                ${tokens.editableCellInputBorderRadius}: 0.875rem;
                ${tokens.editableCellInputPadding}: 0 0.75rem;

                ${tokens.editableCellInputBackground}: var(--surface-transparent-tertiary);

                ${tokens.filterPopoverWidth}: 12.25rem;
                ${tokens.filterPopoverPadding}: 0.125rem 0.875rem;
                ${tokens.filterPopoverBorderRadius}: 0.75rem;
                ${tokens.filterCheckboxPadding}: 0.75rem 0;
                ${tokens.filterDividerMargin}: 0.375rem 0;

                ${tokens.buttonHeight}: 2.5rem;
            `,
            m: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.headerRowHeight}: 3rem;
                ${tokens.rowHeight}: 3rem;
                ${tokens.cellPadding}: 0 0.875rem;
                ${tokens.checkboxCellPadding}: 0 0.75rem;

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.checkboxLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.checkboxLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.checkboxLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.checkboxLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.checkboxLabelLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.checkboxContentLeftOffset}: 0.375rem;
                ${tokens.checkboxContentTopOffset}: 0.125rem;

                ${tokens.editableCellIconGap}: 0.375rem;
                ${tokens.editableCellIconButtonWidth}: 2.5rem;
                ${tokens.editableCellIconButtonHeight}: 100%;
                ${tokens.editableCellPadding}: 0.25rem;
                ${tokens.editableCellInputBorderRadius}: 0.625rem;
                ${tokens.editableCellInputPadding}: 0 0.625rem;

                ${tokens.editableCellInputBackground}: var(--surface-transparent-tertiary);

                ${tokens.filterPopoverWidth}: 9.75rem;
                ${tokens.filterPopoverPadding}: 0.125rem 0.75rem;
                ${tokens.filterPopoverBorderRadius}: 0.625rem;
                ${tokens.filterCheckboxPadding}: 0.5rem 0;
                ${tokens.filterDividerMargin}: 0.375rem 0;

                ${tokens.buttonHeight}: 2rem;
            `,
            s: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.headerRowHeight}: 2.25rem;
                ${tokens.rowHeight}: 2.25rem;
                ${tokens.cellPadding}: 0 0.5rem;
                ${tokens.checkboxCellPadding}: 0 0.625rem;

                ${tokens.checkboxTriggerSize}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${tokens.checkboxLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.checkboxLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.checkboxLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.checkboxLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.checkboxLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.checkboxLabelLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.checkboxContentLeftOffset}: 0.25rem;
                ${tokens.checkboxContentTopOffset}: 0;

                ${tokens.editableCellIconGap}: 0.25rem;
                ${tokens.editableCellIconButtonWidth}: 2rem;
                ${tokens.editableCellIconButtonHeight}: 100%;
                ${tokens.editableCellPadding}: 0.125rem;
                ${tokens.editableCellInputBorderRadius}: 0.5rem;
                ${tokens.editableCellInputPadding}: 0 0.375rem;

                ${tokens.editableCellInputBackground}: var(--surface-transparent-tertiary);

                ${tokens.filterPopoverWidth}: 9.75rem;
                ${tokens.filterPopoverPadding}: 0.125rem 0.5rem;
                ${tokens.filterPopoverBorderRadius}: 0.5rem;
                ${tokens.filterCheckboxPadding}: 0.5rem 0;
                ${tokens.filterDividerMargin}: 0.25rem 0;

                ${tokens.buttonHeight}: 1.5rem;
            `,
        },
    },
};
