import { css, tableTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, bodyXsBold
     */
    bodyL,
    bodyS,
    bodySBold,
    onDarkTextPrimary,
    surfaceTransparentTertiary,
    textAccent,
    textSecondary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.headerRowHeight}: 3.125rem;
                ${tokens.rowHeight}: 3.125rem;
                ${tokens.cellPadding}: 0.375rem 1rem;
                ${tokens.checkboxCellPadding}: 0.375rem 1rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxTriggerIconColor}: ${onDarkTextPrimary};

                ${tokens.editableCellIconGap}: 0.5rem;
                ${tokens.editableCellIconButtonWidth}: 3rem;
                ${tokens.editableCellIconButtonHeight}: 100%;
                ${tokens.editableCellPadding}: 0.25rem;
                ${tokens.editableCellInputBorderRadius}: 0.875rem;
                ${tokens.editableCellInputPadding}: 0 0.75rem;

                ${tokens.editableCellInputBackground}: ${surfaceTransparentTertiary};

                ${tokens.filterCheckboxPadding}: 0.75rem 0;
                ${tokens.filterDividerMargin}: 0.375rem 0.75rem;

                ${tokens.buttonHeight}: 2.5rem;
                ${tokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${tokens.buttonFontSize}: ${bodyS.fontSize};
                ${tokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${tokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${tokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.buttonLineHeight}: ${bodyS.lineHeight};

                ${tokens.selectPadding}: 0.125rem;
                ${tokens.selectBorderRadius}: 0.875rem;
                ${tokens.selectItemHeight}: 1.5rem;
                ${tokens.selectItemPadding}: 0.75rem 0.75rem 0.75rem 0.875rem;
                ${tokens.selectItemBorderRadius}: 0.75rem;
                ${tokens.selectItemIconMargin}: 0 0.375rem 0 0;
                ${tokens.selectItemIconSize}: 1.5rem;
                ${tokens.selectCellPadding}: 0;
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.selectCheckboxTriggerSize}: 1.25rem;
                ${tokens.selectCheckboxTriggerBorderRadius}: 0.375rem;
                ${tokens.selectCheckboxTriggerBorderWidth}: 0.125rem;
                ${tokens.selectCheckboxTriggerBorderCheckedColor}: transparent;
                ${tokens.selectControlPanelPadding}: 0.5rem 0.875rem;
                ${tokens.selectControlPanelGap}: 0.5rem;

                ${tokens.linkButtonFontFamily}: ${bodyS.fontFamily};
                ${tokens.linkButtonFontSize}: ${bodyS.fontSize};
                ${tokens.linkButtonFontStyle}: ${bodyS.fontStyle};
                ${tokens.linkButtonFontWeight}: ${bodySBold.fontWeight};
                ${tokens.linkButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.linkButtonLineHeight}: ${bodyS.lineHeight};
            `,
            m: css`
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.headerRowHeight}: 2.75rem;
                ${tokens.rowHeight}: 2.75rem;
                ${tokens.cellPadding}: 0.25rem 0.875rem;
                ${tokens.checkboxCellPadding}: 0.25rem 0.75rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxTriggerIconColor}: ${onDarkTextPrimary};

                ${tokens.editableCellIconGap}: 0.375rem;
                ${tokens.editableCellIconButtonWidth}: 2.5rem;
                ${tokens.editableCellIconButtonHeight}: 100%;
                ${tokens.editableCellPadding}: 0.25rem;
                ${tokens.editableCellInputBorderRadius}: 0.625rem;
                ${tokens.editableCellInputPadding}: 0 0.625rem;

                ${tokens.editableCellInputBackground}: ${surfaceTransparentTertiary};

                ${tokens.filterCheckboxPadding}: 0.5rem 0;
                ${tokens.filterDividerMargin}: 0.375rem 0.75rem;

                ${tokens.buttonHeight}: 2rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${tokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.selectPadding}: 0.125rem;
                ${tokens.selectBorderRadius}: 0.75rem;
                ${tokens.selectItemHeight}: 1.5rem;
                ${tokens.selectItemPadding}: 0.5rem 0.75rem 0.5rem 0.625rem;
                ${tokens.selectItemBorderRadius}: 0.625rem;
                ${tokens.selectItemIconMargin}: 0 0.375rem 0 0;
                ${tokens.selectItemIconSize}: 1.5rem;
                ${tokens.selectCellPadding}: 0;
                ${tokens.selectCellTitleFontFamily}: ${bodyS.fontFamily};
                ${tokens.selectCellTitleFontSize}: ${bodyS.fontSize};
                ${tokens.selectCellTitleFontStyle}: ${bodyS.fontStyle};
                ${tokens.selectCellTitleFontWeight}: ${bodyS.fontWeight};
                ${tokens.selectCellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.selectCellTitleLineHeight}: ${bodyS.lineHeight};
                ${tokens.selectCheckboxTriggerSize}: 1.25rem;
                ${tokens.selectCheckboxTriggerBorderRadius}: 0.375rem;
                ${tokens.selectCheckboxTriggerBorderWidth}: 0.125rem;
                ${tokens.selectCheckboxTriggerBorderCheckedColor}: transparent;
                ${tokens.selectControlPanelPadding}: 0.25rem 0.75rem;
                ${tokens.selectControlPanelGap}: 0.625rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

                ${tokens.headerRowHeight}: 2.125rem;
                ${tokens.rowHeight}: 2.125rem;
                ${tokens.cellPadding}: 0.125rem 0.5rem;
                ${tokens.checkboxCellPadding}: 0.125rem 0.625rem;
                ${tokens.checkboxTriggerBorderWidth}: 0.125rem;
                ${tokens.checkboxTriggerBorderCheckedColor}: transparent;
                ${tokens.checkboxTriggerSize}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${tokens.checkboxTriggerBorderColor}: ${textSecondary};
                ${tokens.checkboxFillColor}: ${textAccent};
                ${tokens.checkboxTriggerIconColor}: ${onDarkTextPrimary};

                ${tokens.editableCellIconGap}: 0.25rem;
                ${tokens.editableCellIconButtonWidth}: 2rem;
                ${tokens.editableCellIconButtonHeight}: 100%;
                ${tokens.editableCellPadding}: 0.125rem;
                ${tokens.editableCellInputBorderRadius}: 0.5rem;
                ${tokens.editableCellInputPadding}: 0 0.375rem;

                ${tokens.editableCellInputBackground}: ${surfaceTransparentTertiary};

                ${tokens.filterCheckboxPadding}: 0.5rem 0;
                ${tokens.filterDividerMargin}: 0.25rem 0.5rem;

                ${tokens.buttonHeight}: 1.5rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${tokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.selectPadding}: 0.125rem;
                ${tokens.selectBorderRadius}: 0.625rem;
                ${tokens.selectItemHeight}: 1rem;
                ${tokens.selectItemPadding}: 0.5rem 0.5rem 0.5rem 0.375rem;
                ${tokens.selectItemBorderRadius}: 0.5rem;
                ${tokens.selectItemIconMargin}: 0 0.25rem 0 0;
                ${tokens.selectItemIconSize}: 1rem;
                ${tokens.selectCellPadding}: 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.selectCellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.selectCheckboxTriggerSize}: 0.875rem;
                ${tokens.selectCheckboxTriggerBorderRadius}: 0.25rem;
                ${tokens.selectCheckboxTriggerBorderWidth}: 0.125rem;
                ${tokens.selectCheckboxTriggerBorderCheckedColor}: transparent;
                ${tokens.selectControlPanelPadding}: 0.25rem 0.5rem;
                ${tokens.selectControlPanelGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.linkButtonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
