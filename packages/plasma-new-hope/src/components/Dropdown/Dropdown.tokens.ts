export const classes = {
    dropdownRoot: 'dropdown-root',
    dropdownItemIsFocused: 'dropdown-item-is-focused',
    dropdownItemIsDisabled: 'dropdown-item-is-disabled',
    dropdownItemIsActive: 'dropdown-item-is-active',
    dropdownItemIsSelected: 'dropdown-item-is-selected',
};

export const tokens = {
    /** @styleType color */
    background: '--plasma-dropdown-background',
    /** @styleType shadow */
    boxShadow: '--plasma-dropdown-box-shadow',
    /** @styleType dimension */
    width: '--plasma-dropdown-width',
    /** @styleType dimension */
    borderRadius: '--plasma-dropdown-border-radius',
    /** @styleType dimension */
    listBorderRadius: '--plasma-dropdown-list-border-radius',
    /** @styleType dimension */
    padding: '--plasma-dropdown-padding',
    /** @styleType color */
    disclosureIconColor: '--plasma-dropdown-disclosure-icon-color',
    /** @styleType float */
    disabledOpacity: '--plasma-dropdown-disabled-opacity',
    /** @styleType color */
    borderColor: '--plasma-dropdown-border-color',
    /** @styleType dimension */
    borderWidth: '--plasma-dropdown-border-width',
    /** @styleType color */
    focusColor: '--plasma-dropdown-focus-color', // Old

    /** @styleType color */
    dividerColor: '--plasma-dropdown-divider-color',
    /** @styleType dimension */
    dividerMarginTop: '--plasma-dropdown-divider-margin-top',
    /** @styleType dimension */
    dividerMarginTopTight: '--plasma-dropdown-divider-margin-top-tight',
    /** @styleType dimension */
    dividerMarginRight: '--plasma-dropdown-divider-margin-right',
    /** @styleType dimension */
    dividerMarginBottom: '--plasma-dropdown-divider-margin-bottom',
    /** @styleType dimension */
    dividerMarginBottomTight: '--plasma-dropdown-divider-margin-bottom-tight',
    /** @styleType dimension */
    dividerMarginLeft: '--plasma-dropdown-divider-margin-left',

    /** @styleType color */
    itemBackground: '--plasma-dropdown-item-background',
    /** @styleType color */
    itemBackgroundHover: '--plasma-dropdown-item-background-hover',
    /** @styleType color @styleProp itemBackground @styleState selected */
    itemBackgroundSelected: '--plasma-dropdown-item-background-selected', // Old
    /** @styleType color */
    itemBackgroundSelectedHover: '--plasma-dropdown-item-background-selected-hover', // Old
    /** @styleType color */
    itemColor: '--plasma-dropdown-item-color', // Old
    /** @styleType color @styleProp itemColor @styleState selected */
    itemColorSelected: '--plasma-dropdown-item-color-selected', // Old
    /** @styleType color */
    itemColorSelectedHover: '--plasma-dropdown-item-color-selected-hover', // Old
    /** @styleType dimension */
    itemBorderRadius: '--plasma-dropdown-item-border-radius',
    /** @styleType dimension */
    itemWidth: '--plasma-dropdown-item-width', // Old
    /** @styleType dimension */
    itemHeight: '--plasma-dropdown-item-height', // Old
    /** @styleType dimension */
    itemMarginTop: '--plasma-dropdown-item-margin-top', // Old
    /** @styleType dimension */
    itemMarginRight: '--plasma-dropdown-item-margin-right', // Old
    /** @styleType dimension */
    itemMarginBottom: '--plasma-dropdown-item-margin-bottom', // Old
    /** @styleType dimension */
    itemMarginLeft: '--plasma-dropdown-item-margin-left', // Old
    /** @styleType dimension */
    itemPaddingTop: '--plasma-dropdown-item-padding-top', // Old
    /** @styleType dimension */
    itemPaddingTopTight: '--plasma-dropdown-item-padding-top-tight', // Old
    /** @styleType dimension */
    itemPaddingRight: '--plasma-dropdown-item-padding-right', // Old
    /** @styleType dimension */
    itemPaddingBottom: '--plasma-dropdown-item-padding-bottom', // Old
    /** @styleType dimension */
    itemPaddingBottomTight: '--plasma-dropdown-item-padding-bottom-tight', // Old
    /** @styleType dimension */
    itemPaddingLeft: '--plasma-dropdown-item-padding-left', // Old
    /** @styleType dimension */
    itemContentLeftWidth: '--plasma-dropdown-item-content-left-width', // Old
    /** @styleType color */
    itemContentLeftColor: '--plasma-dropdown-item-content-left-color', // Old
    /** @styleType dimension */
    itemContentRightWidth: '--plasma-dropdown-item-content-right-width', // Old
    /** @styleType color */
    itemContentRightColor: '--plasma-dropdown-item-content-right-color', // Old
    /** @styleType typography @styleProp itemStyle @stylePart fontFamily */
    itemFontFamily: '--plasma-dropdown-item-font-family',
    /** @styleType typography @styleProp itemStyle @stylePart fontSize */
    itemFontSize: '--plasma-dropdown-item-font-size',
    /** @styleType typography @styleProp itemStyle @stylePart fontStyle */
    itemFontStyle: '--plasma-dropdown-item-font-style',
    /** @styleType value */
    itemFontWeightBold: '--plasma-dropdown-item-letter-spacing',
    /** @styleType typography @styleProp itemStyle @stylePart letterSpacing */
    itemFontLetterSpacing: '--plasma-dropdown-item-line-height',
    /** @styleType typography @styleProp itemStyle @stylePart lineHeight */
    itemFontLineHeight: '--plasma-dropdown-item-font-weight',
    /** @styleType dimension */
    itemMargin: '--plasma-dropdown-item-margin',
    /** @styleType value */
    itemPadding: '--plasma-dropdown-item-padding',
    /** @styleType dimension */
    itemPaddingTight: '--plasma-dropdown-item-padding-tight',
    /** @styleType dimension */
    itemGap: '--plasma-dropdown-item-gap',
    /** @styleType dimension */
    itemGapTight: '--plasma-dropdown-item-gap-tight',
    /** @styleType dimension */
    itemDisclosureIconSize: '--plasma-dropdown-item-disclosure-icon-size',

    /** @styleType dimension */
    cellPadding: '--plasma-dropdown-cell-padding',
    /** @styleType dimension */
    cellPaddingLeftContent: '--plasma-dropdown-cell-padding-left-content',
    /** @styleType dimension */
    cellPaddingContent: '--plasma-dropdown-cell-padding-content',
    /** @styleType dimension */
    cellPaddingRightContent: '--plasma-dropdown-cell-padding-right-content',
    /** @styleType dimension */
    cellTextboxGap: '--plasma-dropdown-cell-textbox-gap',
    /** @styleType dimension */
    cellGap: '--plasma-dropdown-cell-gap',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontFamily */
    cellTitleFontFamily: '--plasma-dropdown-cell-title-font-family',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontSize */
    cellTitleFontSize: '--plasma-dropdown-cell-title-font-size',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontStyle */
    cellTitleFontStyle: '--plasma-dropdown-cell-title-font-style',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontWeight */
    cellTitleFontWeight: '--plasma-dropdown-cell-title-font-weight',
    /** @styleType typography @styleProp cellTitleStyle @stylePart letterSpacing */
    cellTitleLetterSpacing: '--plasma-dropdown-cell-title-letter-spacing',
    /** @styleType typography @styleProp cellTitleStyle @stylePart lineHeight */
    cellTitleLineHeight: '--plasma-dropdown-cell-title-line-height',

    // TODO: Remove below tokens as soon as they are no longer needed
    /** @styleType color */
    footerBackground: '--plasma-dropdown-footer-background',
    /** @styleType dimension */
    footerWidth: '--plasma-dropdown-footer-width',
    /** @styleType dimension */
    footerHeight: '--plasma-dropdown-footer-height',
    /** @styleType dimension */
    footerPaddingTop: '--plasma-dropdown-footer-padding-top',
    /** @styleType dimension */
    footerPaddingRight: '--plasma-dropdown-footer-padding-right',
    /** @styleType dimension */
    footerPaddingBottom: '--plasma-dropdown-footer-padding-bottom',
    /** @styleType dimension */
    footerPaddingLeft: '--plasma-dropdown-footer-padding-left',
    /** @styleType dimension */
    footerMarginTop: '--plasma-dropdown-footer-margin-top',
    /** @styleType dimension */
    footerMarginRight: '--plasma-dropdown-footer-margin-right',
    /** @styleType dimension */
    footerMarginBottom: '--plasma-dropdown-footer-margin-bottom',
    /** @styleType dimension */
    footerMarginLeft: '--plasma-dropdown-footer-margin-left',
    /** @styleType typography @styleProp footerTypography @stylePart fontFamily */
    footerFontFamily: '--plasma-dropdown-footer-font-family',
    /** @styleType typography @styleProp footerTypography @stylePart fontSize */
    footerFontSize: '--plasma-dropdown-footer-font-size',
    /** @styleType typography @styleProp footerTypography @stylePart fontStyle */
    footerFontStyle: '--plasma-dropdown-footer-font-style',
    /** @styleType value */
    footerFontWeightBold: '--plasma-dropdown-footer-letter-spacing',
    /** @styleType typography @styleProp footerFontTypography @stylePart letterSpacing */
    footerFontLetterSpacing: '--plasma-dropdown-footer-line-height',
    /** @styleType typography @styleProp footerFontTypography @stylePart lineHeight */
    footerFontLineHeight: '--plasma-dropdown-footer-font-weight',

    /** @styleType color */
    headerBackground: '--plasma-dropdown-header-background',
    /** @styleType dimension */
    headerWidth: '--plasma-dropdown-header-width',
    /** @styleType dimension */
    headerHeight: '--plasma-dropdown-header-height',
    /** @styleType dimension */
    headerPaddingTop: '--plasma-dropdown-header-padding-top',
    /** @styleType dimension */
    headerPaddingRight: '--plasma-dropdown-header-padding-right',
    /** @styleType dimension */
    headerPaddingBottom: '--plasma-dropdown-header-padding-bottom',
    /** @styleType dimension */
    headerPaddingLeft: '--plasma-dropdown-header-padding-left',
    /** @styleType dimension */
    headerMarginTop: '--plasma-dropdown-header-margin-top',
    /** @styleType dimension */
    headerMarginRight: '--plasma-dropdown-header-margin-right',
    /** @styleType dimension */
    headerMarginBottom: '--plasma-dropdown-header-margin-bottom',
    /** @styleType dimension */
    headerMarginLeft: '--plasma-dropdown-header-margin-left',
    /** @styleType typography @styleProp headerTypography @stylePart fontFamily */
    headerFontFamily: '--plasma-dropdown-header-font-family',
    /** @styleType typography @styleProp headerTypography @stylePart fontSize */
    headerFontSize: '--plasma-dropdown-header-font-size',
    /** @styleType typography @styleProp headerTypography @stylePart fontStyle */
    headerFontStyle: '--plasma-dropdown-header-font-style',
    /** @styleType value */
    headerFontWeightBold: '--plasma-dropdown-header-letter-spacing',
    /** @styleType typography @styleProp headerFontTypography @stylePart letterSpacing */
    headerFontLetterSpacing: '--plasma-dropdown-header-line-height',
    /** @styleType typography @styleProp headerFontTypography @stylePart lineHeight */
    headerFontLineHeight: '--plasma-dropdown-header-font-weight',

    /** @styleType dimension */
    dividerWidth: '--plasma-dropdown-divider-width',
    /** @styleType dimension */
    dividerHeight: '--plasma-dropdown-divider-height',

    /** @styleType color */
    groupBackground: '--plasma-dropdown-group-background',
    /** @styleType dimension */
    groupWidth: '--plasma-dropdown-group-width',
    /** @styleType dimension */
    groupHeight: '--plasma-dropdown-group-height',
    /** @styleType dimension */
    groupPaddingTop: '--plasma-dropdown-group-padding-top',
    /** @styleType dimension */
    groupPaddingRight: '--plasma-dropdown-group-padding-right',
    /** @styleType dimension */
    groupPaddingBottom: '--plasma-dropdown-group-padding-bottom',
    /** @styleType dimension */
    groupPaddingLeft: '--plasma-dropdown-group-padding-left',
    /** @styleType dimension */
    groupMarginTop: '--plasma-dropdown-group-margin-top',
    /** @styleType dimension */
    groupMarginRight: '--plasma-dropdown-group-margin-right',
    /** @styleType dimension */
    groupMarginBottom: '--plasma-dropdown-group-margin-bottom',
    /** @styleType dimension */
    groupMarginLeft: '--plasma-dropdown-group-margin-left',
    /** @styleType color */
    groupLabelColor: '--plasma-dropdown-group-label-color',
    /** @styleType typography @styleProp groupLabelTypography @stylePart fontFamily */
    groupLabelFontFamily: '--plasma-dropdown-group-label-font-family',
    /** @styleType typography @styleProp groupLabelTypography @stylePart fontSize */
    groupLabelFontSize: '--plasma-dropdown-group-label-font-size',
    /** @styleType typography @styleProp groupLabelTypography @stylePart fontStyle */
    groupLabelFontStyle: '--plasma-dropdown-group-label-font-style',
    /** @styleType typography @styleProp groupLabelTypography @stylePart fontWeight */
    groupLabelFontWeight: '--plasma-dropdown-group-label-font-weight',
    /** @styleType typography @styleProp groupLabelTypography @stylePart letterSpacing */
    groupLabelLetterSpacing: '--plasma-dropdown-group-label-letter-spacing',
    /** @styleType typography @styleProp groupLabelTypography @stylePart lineHeight */
    groupLabelLineHeight: '--plasma-dropdown-group-label-line-height',
    /** @styleType dimension */
    groupLabelPaddingTop: '--plasma-dropdown-group-label-padding-top',
    /** @styleType dimension */
    groupLabelPaddingRight: '--plasma-dropdown-group-label-padding-right',
    /** @styleType dimension */
    groupLabelPaddingBottom: '--plasma-dropdown-group-label-padding-bottom',
    /** @styleType dimension */
    groupLabelPaddingLeft: '--plasma-dropdown-group-label-padding-left',
    /** @styleType dimension */
    groupLabelMarginTop: '--plasma-dropdown-group-label-margin-top',
    /** @styleType dimension */
    groupLabelMarginRight: '--plasma-dropdown-group-label-margin-right',
    /** @styleType dimension */
    groupLabelMarginBottom: '--plasma-dropdown-group-label-margin-bottom',
    /** @styleType dimension */
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
