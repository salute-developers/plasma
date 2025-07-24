import { css } from '@linaria/core';

import { tableTokens as tokens } from '../../../components/Table/Table.tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.borderColor}: #ddd;
            `,
            clear: css`
                ${tokens.borderColor}: transparent;
            `,
        },
        size: {
            l: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.headerRowHeight}: 3.125rem;
                ${tokens.rowHeight}: 3.125rem;
                ${tokens.cellPadding}: 0.375rem 1rem;
                ${tokens.checkboxCellPadding}: 0.375rem 1rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderColor}: var(--text-secondary);
                ${tokens.checkboxFillColor}: var(--text-accent);
                ${tokens.checkboxTriggerIconColor}: var(--on-dark-text-primary);

                ${tokens.editableCellIconGap}: 0.5rem;
                ${tokens.editableCellIconButtonWidth}: 3rem;
                ${tokens.editableCellIconButtonHeight}: 100%;
                ${tokens.editableCellPadding}: 0.25rem;
                ${tokens.editableCellInputBorderRadius}: 0.875rem;
                ${tokens.editableCellInputPadding}: 0 0.75rem;

                ${tokens.editableCellInputBackground}: var(--surface-transparent-tertiary);

                ${tokens.filterCheckboxPadding}: 0.75rem 0;
                ${tokens.filterDividerMargin}: 0.375rem 0.75rem;

                ${tokens.buttonHeight}: 2.5rem;
                ${tokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.selectPadding}: 0.125rem;
                ${tokens.selectBorderRadius}: 0.875rem;
                ${tokens.selectItemHeight}: 1.5rem;
                ${tokens.selectItemPadding}: 0.75rem 0.75rem 0.75rem 0.875rem;
                ${tokens.selectItemBorderRadius}: 0.75rem;
                ${tokens.selectItemIconMargin}: 0 0.375rem 0 0;
                ${tokens.selectItemIconSize}: 1.5rem;
                ${tokens.selectCellPadding}: 0;
                ${tokens.selectCellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.selectCellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.selectCellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.selectCellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.selectCellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.selectCellTitleLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.selectCheckboxTriggerSize}: 1.25rem;
                ${tokens.selectCheckboxTriggerBorderRadius}: 0.375rem;
                ${tokens.selectCheckboxTriggerBorderWidth}: 0.125rem;
                ${tokens.selectCheckboxTriggerBorderCheckedColor}: transparent;
                ${tokens.selectControlPanelPadding}: 0.5rem 0.875rem;
                ${tokens.selectControlPanelGap}: 0.5rem;

                ${tokens.linkButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.linkButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.linkButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.linkButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.linkButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.linkButtonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            m: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.headerRowHeight}: 2.75rem;
                ${tokens.rowHeight}: 2.75rem;
                ${tokens.cellPadding}: 0.25rem 0.875rem;
                ${tokens.checkboxCellPadding}: 0.25rem 0.75rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderColor}: var(--text-secondary);
                ${tokens.checkboxFillColor}: var(--text-accent);
                ${tokens.checkboxTriggerIconColor}: var(--on-dark-text-primary);

                ${tokens.editableCellIconGap}: 0.375rem;
                ${tokens.editableCellIconButtonWidth}: 2.5rem;
                ${tokens.editableCellIconButtonHeight}: 100%;
                ${tokens.editableCellPadding}: 0.25rem;
                ${tokens.editableCellInputBorderRadius}: 0.625rem;
                ${tokens.editableCellInputPadding}: 0 0.625rem;

                ${tokens.editableCellInputBackground}: var(--surface-transparent-tertiary);

                ${tokens.filterCheckboxPadding}: 0.5rem 0;
                ${tokens.filterDividerMargin}: 0.375rem 0.75rem;

                ${tokens.buttonHeight}: 2rem;
                ${tokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.selectPadding}: 0.125rem;
                ${tokens.selectBorderRadius}: 0.75rem;
                ${tokens.selectItemHeight}: 1.5rem;
                ${tokens.selectItemPadding}: 0.5rem 0.75rem 0.5rem 0.625rem;
                ${tokens.selectItemBorderRadius}: 0.625rem;
                ${tokens.selectItemIconMargin}: 0 0.375rem 0 0;
                ${tokens.selectItemIconSize}: 1.5rem;
                ${tokens.selectCellPadding}: 0;
                ${tokens.selectCellTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.selectCellTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.selectCellTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.selectCellTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.selectCellTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.selectCellTitleLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.selectCheckboxTriggerSize}: 1.25rem;
                ${tokens.selectCheckboxTriggerBorderRadius}: 0.375rem;
                ${tokens.selectCheckboxTriggerBorderWidth}: 0.125rem;
                ${tokens.selectCheckboxTriggerBorderCheckedColor}: transparent;
                ${tokens.selectControlPanelPadding}: 0.25rem 0.75rem;
                ${tokens.selectControlPanelGap}: 0.625rem;

                ${tokens.linkButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.linkButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.linkButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.linkButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.linkButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.linkButtonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.headerRowHeight}: 2.125rem;
                ${tokens.rowHeight}: 2.125rem;
                ${tokens.cellPadding}: 0.125rem 0.5rem;
                ${tokens.checkboxCellPadding}: 0.125rem 0.625rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerSize}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${tokens.checkboxTriggerBorderColor}: var(--text-secondary);
                ${tokens.checkboxFillColor}: var(--text-accent);
                ${tokens.checkboxTriggerIconColor}: var(--on-dark-text-primary);

                ${tokens.editableCellIconGap}: 0.25rem;
                ${tokens.editableCellIconButtonWidth}: 2rem;
                ${tokens.editableCellIconButtonHeight}: 100%;
                ${tokens.editableCellPadding}: 0.125rem;
                ${tokens.editableCellInputBorderRadius}: 0.5rem;
                ${tokens.editableCellInputPadding}: 0 0.375rem;

                ${tokens.editableCellInputBackground}: var(--surface-transparent-tertiary);

                ${tokens.filterCheckboxPadding}: 0.5rem 0;
                ${tokens.filterDividerMargin}: 0.25rem 0.5rem;

                ${tokens.buttonHeight}: 1.5rem;
                ${tokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.selectPadding}: 0.125rem;
                ${tokens.selectBorderRadius}: 0.625rem;
                ${tokens.selectItemHeight}: 1rem;
                ${tokens.selectItemPadding}: 0.5rem 0.5rem 0.5rem 0.375rem;
                ${tokens.selectItemBorderRadius}: 0.5rem;
                ${tokens.selectItemIconMargin}: 0 0.25rem 0 0;
                ${tokens.selectItemIconSize}: 1rem;
                ${tokens.selectCellPadding}: 0;
                ${tokens.selectCellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.selectCellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.selectCellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.selectCellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.selectCellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.selectCellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.selectCheckboxTriggerSize}: 0.875rem;
                ${tokens.selectCheckboxTriggerBorderRadius}: 0.25rem;
                ${tokens.selectCheckboxTriggerBorderWidth}: 0.125rem;
                ${tokens.selectCheckboxTriggerBorderCheckedColor}: transparent;
                ${tokens.selectControlPanelPadding}: 0.25rem 0.5rem;
                ${tokens.selectControlPanelGap}: 0.25rem;

                ${tokens.linkButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.linkButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.linkButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.linkButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.linkButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.linkButtonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
