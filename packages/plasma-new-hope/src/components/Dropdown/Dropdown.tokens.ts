export const classes = {
    dropdownRoot: 'dropdown-root',
    dropdownItemIsFocused: 'dropdown-item-is-focused',
    dropdownItemIsDisabled: 'dropdown-item-is-disabled',
    dropdownItemIsActive: 'dropdown-item-is-active',
    dropdownItemIsSelected: 'dropdownItemIsSelected',
};

export const tokens = {
    background: '--plasma-dropdown-background',
    boxShadow: '--plasma-dropdown-box-shadow',
    width: '--plasma-dropdown-width',
    borderRadius: '--plasma-dropdown-border-radius',
    padding: '--plasma-dropdown-padding',
    disclosureIconColor: '--plasma-dropdown-disclosure-icon-color',
    disabledOpacity: '--plasma-dropdown-disabled-opacity',
    focusColor: '--plasma-dropdown-focus-color',

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
    itemColor: '--plasma-dropdown-item-color',
    itemColorSelected: '--plasma-dropdown-item-color-selected', // Old
    itemColorSelectedHover: '--plasma-dropdown-item-color-selected-hover', // Old
    itemBorderRadius: '--plasma-dropdown-item-border-radius',
    itemWidth: '--plasma-dropdown-item-width', // Old
    itemHeight: '--plasma-dropdown-item-height', // Old
    itemMarginTop: '--plasma-dropdown-item-margin-top', // Old
    itemMarginRight: '--plasma-dropdown-item-margin-right', // Old
    itemMarginBottom: '--plasma-dropdown-item-margin-bottom', // Old
    itemMarginLeft: '--plasma-dropdown-item-margin-left', // Old
    itemPaddingTop: '--plasma-dropdown-item-padding-top',
    itemPaddingTopTight: '--plasma-dropdown-item-padding-top-tight',
    itemPaddingRight: '--plasma-dropdown-item-padding-right',
    itemPaddingBottom: '--plasma-dropdown-item-padding-bottom',
    itemPaddingBottomTight: '--plasma-dropdown-item-padding-bottom-tight',
    itemPaddingLeft: '--plasma-dropdown-item-padding-left',
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
