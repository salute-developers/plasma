export const classes = {
    dropdownRoot: 'dropdown-root',
    dropdownItemIsFocused: 'dropdown-item-is-focused',
    dropdownItemIsDisabled: 'dropdown-item-is-disabled',
    dropdownItemIsActive: 'dropdown-item-is-active',
    dropdownItemIsSelected: 'dropdown-item-is-selected',
};

export const tokens = {
    background: '--plasma-dropdown-background',
    boxShadow: '--plasma-dropdown-box-shadow',
    width: '--plasma-dropdown-width',
    borderRadius: '--plasma-dropdown-border-radius',
    padding: '--plasma-dropdown-padding',
    disclosureIconColor: '--plasma-dropdown-disclosure-icon-color',
    disabledOpacity: '--plasma-dropdown-disabled-opacity',
    borderColor: '--plasma-dropdown-border-color',
    borderWidth: '--plasma-dropdown-border-width',
    focusColor: '--plasma-dropdown-focus-color', // Old

    dividerColor: '--plasma-dropdown-divider-color',
    dividerMarginTop: '--plasma-dropdown-divider-margin-top',
    dividerMarginTopTight: '--plasma-dropdown-divider-margin-top-tight',
    dividerMarginRight: '--plasma-dropdown-divider-margin-right',
    dividerMarginBottom: '--plasma-dropdown-divider-margin-bottom',
    dividerMarginBottomTight: '--plasma-dropdown-divider-margin-bottom-tight',
    dividerMarginLeft: '--plasma-dropdown-divider-margin-left',

    itemBackground: '--plasma-dropdown-item-background',
    itemBackgroundHover: '--plasma-dropdown-item-background-hover',
    itemBackgroundSelected: '--plasma-dropdown-item-background-selected', // Old
    itemBackgroundSelectedHover: '--plasma-dropdown-item-background-selected-hover', // Old
    itemColor: '--plasma-dropdown-item-color', // Old
    itemColorSelected: '--plasma-dropdown-item-color-selected', // Old
    itemColorSelectedHover: '--plasma-dropdown-item-color-selected-hover', // Old
    itemBorderRadius: '--plasma-dropdown-item-border-radius',
    itemWidth: '--plasma-dropdown-item-width', // Old
    itemHeight: '--plasma-dropdown-item-height', // Old
    itemMarginTop: '--plasma-dropdown-item-margin-top', // Old
    itemMarginRight: '--plasma-dropdown-item-margin-right', // Old
    itemMarginBottom: '--plasma-dropdown-item-margin-bottom', // Old
    itemMarginLeft: '--plasma-dropdown-item-margin-left', // Old
    itemPaddingTop: '--plasma-dropdown-item-padding-top', // Old
    itemPaddingTopTight: '--plasma-dropdown-item-padding-top-tight', // Old
    itemPaddingRight: '--plasma-dropdown-item-padding-right', // Old
    itemPaddingBottom: '--plasma-dropdown-item-padding-bottom', // Old
    itemPaddingBottomTight: '--plasma-dropdown-item-padding-bottom-tight', // Old
    itemPaddingLeft: '--plasma-dropdown-item-padding-left', // Old
    itemContentLeftWidth: '--plasma-dropdown-item-content-left-width', // Old
    itemContentLeftColor: '--plasma-dropdown-item-content-left-color', // Old
    itemContentRightWidth: '--plasma-dropdown-item-content-right-width', // Old
    itemContentRightColor: '--plasma-dropdown-item-content-right-color', // Old
    itemFontFamily: '--plasma-dropdown-item-font-family',
    itemFontSize: '--plasma-dropdown-item-font-size',
    itemFontStyle: '--plasma-dropdown-item-font-style',
    itemFontWeightBold: '--plasma-dropdown-item-letter-spacing',
    itemFontLetterSpacing: '--plasma-dropdown-item-line-height',
    itemFontLineHeight: '--plasma-dropdown-item-font-weight',
    itemMargin: '--plasma-dropdown-item-margin',
    itemPadding: '--plasma-dropdown-item-padding',
    itemPaddingTight: '--plasma-dropdown-item-padding-tight',
    itemGap: '--plasma-dropdown-item-gap',
    itemGapTight: '--plasma-dropdown-item-gap-tight',
    itemDisclosureIconSize: '--plasma-dropdown-item-disclosure-icon-size',

    cellPadding: '--plasma-dropdown-cell-padding',
    cellPaddingLeftContent: '--plasma-dropdown-cell-padding-left-content',
    cellPaddingContent: '--plasma-dropdown-cell-padding-content',
    cellPaddingRightContent: '--plasma-dropdown-cell-padding-right-content',
    cellTextboxGap: '--plasma-dropdown-cell-textbox-gap',
    cellGap: '--plasma-dropdown-cell-gap',
    cellTitleFontFamily: '--plasma-dropdown-cell-title-font-family',
    cellTitleFontSize: '--plasma-dropdown-cell-title-font-size',
    cellTitleFontStyle: '--plasma-dropdown-cell-title-font-style',
    cellTitleFontWeight: '--plasma-dropdown-cell-title-font-weight',
    cellTitleLetterSpacing: '--plasma-dropdown-cell-title-letter-spacing',
    cellTitleLineHeight: '--plasma-dropdown-cell-title-line-height',

    // TODO: Remove below tokens as soon as they are no longer needed
    footerBackground: '--plasma-dropdown-footer-background',
    footerWidth: '--plasma-dropdown-footer-width',
    footerHeight: '--plasma-dropdown-footer-height',
    footerPaddingTop: '--plasma-dropdown-footer-padding-top',
    footerPaddingRight: '--plasma-dropdown-footer-padding-right',
    footerPaddingBottom: '--plasma-dropdown-footer-padding-bottom',
    footerPaddingLeft: '--plasma-dropdown-footer-padding-left',
    footerMarginTop: '--plasma-dropdown-footer-margin-top',
    footerMarginRight: '--plasma-dropdown-footer-margin-right',
    footerMarginBottom: '--plasma-dropdown-footer-margin-bottom',
    footerMarginLeft: '--plasma-dropdown-footer-margin-left',
    footerFontFamily: '--plasma-dropdown-footer-font-family',
    footerFontSize: '--plasma-dropdown-footer-font-size',
    footerFontStyle: '--plasma-dropdown-footer-font-style',
    footerFontWeightBold: '--plasma-dropdown-footer-letter-spacing',
    footerFontLetterSpacing: '--plasma-dropdown-footer-line-height',
    footerFontLineHeight: '--plasma-dropdown-footer-font-weight',

    headerBackground: '--plasma-dropdown-header-background',
    headerWidth: '--plasma-dropdown-header-width',
    headerHeight: '--plasma-dropdown-header-height',
    headerPaddingTop: '--plasma-dropdown-header-padding-top',
    headerPaddingRight: '--plasma-dropdown-header-padding-right',
    headerPaddingBottom: '--plasma-dropdown-header-padding-bottom',
    headerPaddingLeft: '--plasma-dropdown-header-padding-left',
    headerMarginTop: '--plasma-dropdown-header-margin-top',
    headerMarginRight: '--plasma-dropdown-header-margin-right',
    headerMarginBottom: '--plasma-dropdown-header-margin-bottom',
    headerMarginLeft: '--plasma-dropdown-header-margin-left',
    headerFontFamily: '--plasma-dropdown-header-font-family',
    headerFontSize: '--plasma-dropdown-header-font-size',
    headerFontStyle: '--plasma-dropdown-header-font-style',
    headerFontWeightBold: '--plasma-dropdown-header-letter-spacing',
    headerFontLetterSpacing: '--plasma-dropdown-header-line-height',
    headerFontLineHeight: '--plasma-dropdown-header-font-weight',

    dividerWidth: '--plasma-dropdown-divider-width',
    dividerHeight: '--plasma-dropdown-divider-height',

    groupBackground: '--plasma-dropdown-group-background',
    groupWidth: '--plasma-dropdown-group-width',
    groupHeight: '--plasma-dropdown-group-height',
    groupPaddingTop: '--plasma-dropdown-group-padding-top',
    groupPaddingRight: '--plasma-dropdown-group-padding-right',
    groupPaddingBottom: '--plasma-dropdown-group-padding-bottom',
    groupPaddingLeft: '--plasma-dropdown-group-padding-left',
    groupMarginTop: '--plasma-dropdown-group-margin-top',
    groupMarginRight: '--plasma-dropdown-group-margin-right',
    groupMarginBottom: '--plasma-dropdown-group-margin-bottom',
    groupMarginLeft: '--plasma-dropdown-group-margin-left',
    groupLabelColor: '--plasma-dropdown-group-label-color',
    groupLabelFontFamily: '--plasma-dropdown-group-label-font-family',
    groupLabelFontSize: '--plasma-dropdown-group-label-font-size',
    groupLabelFontStyle: '--plasma-dropdown-group-label-font-style',
    groupLabelFontWeight: '--plasma-dropdown-group-label-font-weight',
    groupLabelLetterSpacing: '--plasma-dropdown-group-label-letter-spacing',
    groupLabelLineHeight: '--plasma-dropdown-group-label-line-height',
    groupLabelPaddingTop: '--plasma-dropdown-group-label-padding-top',
    groupLabelPaddingRight: '--plasma-dropdown-group-label-padding-right',
    groupLabelPaddingBottom: '--plasma-dropdown-group-label-padding-bottom',
    groupLabelPaddingLeft: '--plasma-dropdown-group-label-padding-left',
    groupLabelMarginTop: '--plasma-dropdown-group-label-margin-top',
    groupLabelMarginRight: '--plasma-dropdown-group-label-margin-right',
    groupLabelMarginBottom: '--plasma-dropdown-group-label-margin-bottom',
    groupLabelMarginLeft: '--plasma-dropdown-group-label-margin-left',
};

export const constants = {
    focusColor: '--surface-accent',
    background: '--surface-solid-card-brightness',
    boxShadow: '0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04)',
    disclosureIconColor: '--text-secondary',
    itemBackground: '--surface-clear',
    opacity: '0.4',
    cellTitleColor: '--text-primary',
    cellBackgroundColor: '--surface-clear',
};
