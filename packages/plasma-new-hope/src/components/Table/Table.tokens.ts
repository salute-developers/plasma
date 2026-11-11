export const classes = {
    editIcon: 'edit-icon',
    sortingDefaultIcon: 'sorting-default-icon',
    sortingAscIcon: 'sorting-asc-icon',
    sortingDescIcon: 'sorting-desc-icon',
    filterIcon: 'filter-icon',
    resizeDivider: 'resize-divider',
    scrollableContainer: 'table-scrollable-container',

    root: 'table__root-element',
    table: 'table__table-element',
    headerWrapper: 'table__header-wrapper-element',
    headerRow: 'table__header-row-element',
    headerCell: 'table__header-cell-element',
    bodyWrapper: 'table__body-wrapper-element',
    bodyRow: 'table__body-row-element',
    bodyCell: 'table__body-cell-element',
};

export const tableTokens = {
    /** @styleType typography @styleProp textStyle @stylePart fontFamily */
    fontFamily: '--plasma-table-font-family',
    /** @styleType typography @styleProp textStyle @stylePart fontSize */
    fontSize: '--plasma-table-font-size',
    /** @styleType typography @styleProp textStyle @stylePart fontStyle */
    fontStyle: '--plasma-table-font-style',
    /** @styleType typography @styleProp textStyle @stylePart fontWeight */
    fontWeight: '--plasma-table-font-weight',
    /** @styleType typography @styleProp textStyle @stylePart letterSpacing */
    letterSpacing: '--plasma-table-letter-spacing',
    /** @styleType typography @styleProp textStyle @stylePart lineHeight */
    lineHeight: '--plasma-table-line-height',

    /** @styleType color */
    borderColor: '--plasma-table-border-color',
    /** @styleType dimension */
    headerRowHeight: '--plasma-table-header-row-height',
    /** @styleType dimension */
    rowHeight: '--plasma-table-row-height',
    /** @styleType dimension */
    cellPadding: '--plasma-cell-padding',
    /** @styleType dimension */
    checkboxCellPadding: '--plasma-checkbox-cell-padding',

    /** @styleType dimension */
    checkboxTriggerSize: '--plasma-table-checkbox-trigger-size',
    /** @styleType color */
    checkboxTriggerBorderCheckedColor: '--plasma-table-checkbox-trigger-border-checked-color',
    /** @styleType shape */
    checkboxTriggerBorderRadius: '--plasma-table-checkbox-trigger-border-radius',
    /** @styleType dimension */
    checkboxTriggerBorderWidth: '--plasma-table-checkbox-trigger-border-width',
    /** @styleType color */
    checkboxTriggerBorderColor: '--plasma-table-checkbox-trigger-border-color',
    /** @styleType color */
    checkboxFillColor: '--plasma-table-checkbox-fill-color',
    /** @styleType color */
    checkboxTriggerIconColor: '--plasma-table-checkbox-trigger-icon-color',

    /** @styleType dimension */
    editableCellIconGap: '--plasma-table-editable-cell-icon-gap',
    /** @styleType dimension */
    editableCellIconButtonWidth: '--plasma-table-editable-cell-icon-button-width',
    /** @styleType value */
    editableCellIconButtonHeight: '--plasma-table-editable-cell-icon-button-height',
    /** @styleType dimension */
    editableCellPadding: '--plasma-table-editable-cell-padding',
    /** @styleType dimension */
    editableCellInputBorderRadius: '--plasma-table-editable-cell-input-border-radius',
    /** @styleType dimension */
    editableCellInputPadding: '--plasma-table-editable-cell-input-padding',
    /** @styleType color */
    editableCellInputBackground: '--plasma-table-editable-cell-input-background',
    /** @styleType color */
    editableCellInputBorderColor: '--plasma-table-editable-cell-input-border-color',

    /** @styleType dimension */
    filterCheckboxPadding: '--plasma-table-filter-checkbox-padding',
    /** @styleType dimension */
    filterDividerMargin: '--plasma-table-filter-divider-margin',

    /** @styleType dimension */
    buttonHeight: '--plasma-table-button-height',
    /** @styleType typography @styleProp buttonStyle @stylePart fontFamily */
    buttonFontFamily: '--plasma-table-button-font-family',
    /** @styleType typography @styleProp buttonStyle @stylePart fontSize */
    buttonFontSize: '--plasma-table-button-font-size',
    /** @styleType typography @styleProp buttonStyle @stylePart fontStyle */
    buttonFontStyle: '--plasma-table-button-font-style',
    /** @styleType typography @styleProp buttonStyle @stylePart fontWeight */
    buttonFontWeight: '--plasma-table-button-font-weight',
    /** @styleType typography @styleProp buttonStyle @stylePart letterSpacing */
    buttonLetterSpacing: '--plasma-table-button-letter-spacing',
    /** @styleType typography @styleProp buttonStyle @stylePart lineHeight */
    buttonLineHeight: '--plasma-table-button-line-height',

    /** @styleType dimension */
    selectPadding: '--plasma-table-select-padding',
    /** @styleType dimension */
    selectBorderRadius: '--plasma-table-select-border-radius',
    /** @styleType dimension */
    selectItemHeight: '--plasma-table-select-item-height',
    /** @styleType dimension */
    selectItemPadding: '--plasma-table-select-item-padding',
    /** @styleType dimension */
    selectItemBorderRadius: '--plasma-table-select-item-border-radius',
    /** @styleType dimension */
    selectItemIconMargin: '--plasma-table-select-item-icon-margin',
    /** @styleType dimension */
    selectItemIconSize: '--plasma-table-select-item-icon-size',
    /** @styleType dimension */
    selectCellPadding: '--plasma-table-select-cell-padding',
    /** @styleType typography @styleProp selectCellTitleStyle @stylePart fontFamily */
    selectCellTitleFontFamily: '--plasma-table-select-cell-title-font-family',
    /** @styleType typography @styleProp selectCellTitleStyle @stylePart fontSize */
    selectCellTitleFontSize: '--plasma-table-select-cell-title-font-size',
    /** @styleType typography @styleProp selectCellTitleStyle @stylePart fontStyle */
    selectCellTitleFontStyle: '--plasma-table-select-cell-title-font-style',
    /** @styleType typography @styleProp selectCellTitleStyle @stylePart fontWeight */
    selectCellTitleFontWeight: '--plasma-table-select-cell-title-font-weight',
    /** @styleType typography @styleProp selectCellTitleStyle @stylePart letterSpacing */
    selectCellTitleLetterSpacing: '--plasma-table-select-cell-title-letter-spacing',
    /** @styleType typography @styleProp selectCellTitleStyle @stylePart lineHeight */
    selectCellTitleLineHeight: '--plasma-table-select-cell-title-line-height',
    /** @styleType dimension */
    selectCheckboxTriggerSize: '--plasma-table-select-checkbox-trigger-size',
    /** @styleType shape */
    selectCheckboxTriggerBorderRadius: '--plasma-table-select-checkbox-trigger-border-radius',
    /** @styleType dimension */
    selectCheckboxTriggerBorderWidth: '--plasma-table-select-checkbox-trigger-border-width',
    /** @styleType color */
    selectCheckboxTriggerBorderCheckedColor: '--plasma-table-select-checkbox-trigger-border-color-checked',
    /** @styleType dimension */
    selectControlPanelPadding: '--plasma-table-select-control-panel-padding',
    /** @styleType dimension */
    selectControlPanelGap: '--plasma-table-select-control-panel-gap',

    /** @styleType typography @styleProp linkButtonStyle @stylePart fontFamily */
    linkButtonFontFamily: '--plasma-table-link-button-font-family',
    /** @styleType typography @styleProp linkButtonStyle @stylePart fontSize */
    linkButtonFontSize: '--plasma-table-link-button-font-size',
    /** @styleType typography @styleProp linkButtonStyle @stylePart fontStyle */
    linkButtonFontStyle: '--plasma-table-link-button-font-style',
    /** @styleType typography @styleProp linkButtonStyle @stylePart fontWeight */
    linkButtonFontWeight: '--plasma-table-link-button-font-weight',
    /** @styleType typography @styleProp linkButtonStyle @stylePart letterSpacing */
    linkButtonLetterSpacing: '--plasma-table-link-button-letter-spacing',
    /** @styleType typography @styleProp linkButtonStyle @stylePart lineHeight */
    linkButtonLineHeight: '--plasma-table-link-button-line-height',
};
