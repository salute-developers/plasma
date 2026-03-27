import {
    bodyL,
    bodyM,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    onDarkTextPrimary,
    surfaceTransparentTertiary,
    textAccent,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_web';
import { css, tableTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${tokens.selectCellTitleFontFamily}: ${bodyM.fontFamily};
                ${tokens.selectCellTitleFontSize}: ${bodyM.fontSize};
                ${tokens.selectCellTitleFontStyle}: ${bodyM.fontStyle};
                ${tokens.selectCellTitleFontWeight}: ${bodyM.fontWeight};
                ${tokens.selectCellTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.selectCellTitleLineHeight}: ${bodyM.lineHeight};
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
                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

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
                ${tokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${tokens.buttonFontSize}: ${bodyXS.fontSize};
                ${tokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${tokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.buttonLineHeight}: ${bodyXS.lineHeight};

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

                ${tokens.linkButtonFontFamily}: ${bodyXS.fontFamily};
                ${tokens.linkButtonFontSize}: ${bodyXS.fontSize};
                ${tokens.linkButtonFontStyle}: ${bodyXS.fontStyle};
                ${tokens.linkButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.linkButtonLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.linkButtonLineHeight}: ${bodyXS.lineHeight};
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
                ${tokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${tokens.buttonFontSize}: ${bodyXS.fontSize};
                ${tokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${tokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.buttonLineHeight}: ${bodyXS.lineHeight};

                ${tokens.selectPadding}: 0.125rem;
                ${tokens.selectBorderRadius}: 0.625rem;
                ${tokens.selectItemHeight}: 1rem;
                ${tokens.selectItemPadding}: 0.5rem 0.5rem 0.5rem 0.375rem;
                ${tokens.selectItemBorderRadius}: 0.5rem;
                ${tokens.selectItemIconMargin}: 0 0.25rem 0 0;
                ${tokens.selectItemIconSize}: 1rem;
                ${tokens.selectCellPadding}: 0;
                ${tokens.selectCellTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.selectCellTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.selectCellTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.selectCellTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.selectCellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.selectCellTitleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.selectCheckboxTriggerSize}: 0.875rem;
                ${tokens.selectCheckboxTriggerBorderRadius}: 0.25rem;
                ${tokens.selectCheckboxTriggerBorderWidth}: 0.125rem;
                ${tokens.selectCheckboxTriggerBorderCheckedColor}: transparent;
                ${tokens.selectControlPanelPadding}: 0.25rem 0.5rem;
                ${tokens.selectControlPanelGap}: 0.25rem;

                ${tokens.linkButtonFontFamily}: ${bodyXS.fontFamily};
                ${tokens.linkButtonFontSize}: ${bodyXS.fontSize};
                ${tokens.linkButtonFontStyle}: ${bodyXS.fontStyle};
                ${tokens.linkButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.linkButtonLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.linkButtonLineHeight}: ${bodyXS.lineHeight};
            `,
        },
    },
};
