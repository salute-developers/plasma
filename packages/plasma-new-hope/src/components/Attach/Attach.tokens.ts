export const classes = {
    auto: 'plasma-attach-auto',
    horizontal: 'plasma-attach-horizontal',
    horizontalHidden: 'plasma-attach-horizontal-hidden',
    vertical: 'plasma-attach-vertical',
    withHelperText: 'plasma-attach-with-helper-text',
    cellHidden: 'plasma-attach-cell-hidden',
};

export const tokens = {
    /** @styleType dimension */
    horizontalGap: '--plasma-attach-horizontal-gap',
    /** @styleType dimension */
    verticalGap: '--plasma-attach-vertical-gap',
    /** @styleType dimension */
    verticalGapWithHelperText: '--plasma-attach-vertical-gap-with-helper-text',
    /** @styleType dimension */
    filenameWrapperHeight: '--plasma-attach-filename-wrapper-height',
    /** @styleType dimension */
    filenameDropdownWrapperHeight: '--plasma-attach-filename-dropdown-wrapper-height',

    /** @styleType color */
    helperTextColor: '--plasma-attach-helper-text-color',

    // Токены для Button
    /** @styleType color */
    buttonColor: '--plasma-attach-button-color',
    /** @styleType color */
    buttonValueColor: '--plasma-attach-button-value-color',
    /** @styleType color */
    buttonBackgroundColor: '--plasma-attach-button-background-color',
    /** @styleType color @styleProp buttonColor @styleState hovered */
    buttonColorHover: '--plasma-attach-button-color-hover',
    /** @styleType color @styleProp buttonBackgroundColor @styleState hovered */
    buttonBackgroundColorHover: '--plasma-attach-button-background-color-hover',
    /** @styleType color @styleProp buttonColor @styleState pressed */
    buttonColorActive: '--plasma-attach-button-color-active',
    /** @styleType color @styleProp buttonBackgroundColor @styleState pressed */
    buttonBackgroundColorActive: '--plasma-attach-button-background-color-active',
    /** @styleType value */
    buttonLoadingBackgroundColor: '--plasma-attach-button-loading-background-color',

    /** @styleType float */
    buttonScaleHover: '--plasma-attach-button-scale-hover',
    /** @styleType float */
    buttonScaleActive: '---plasma-attach-button-scale-active',
    /** @styleType dimension */
    buttonHeight: '--plasma-attach-button-height',
    /** @styleType dimension */
    buttonWidth: '--plasma-attach-button-width',
    /** @styleType dimension */
    buttonPadding: '--plasma-attach-button-padding',
    /** @styleType dimension */
    buttonRadius: '--plasma-attach-button-radius',
    /** @styleType shape */
    buttonRadiusCircle: '--plasma-attach-button-radius-circle',

    /** @styleType typography @styleProp buttonStyle @stylePart fontFamily */
    buttonFontFamily: '--plasma-attach-button-font-family',
    /** @styleType typography @styleProp buttonStyle @stylePart fontSize */
    buttonFontSize: '--plasma-attach-button-font-size',
    /** @styleType typography @styleProp buttonStyle @stylePart fontStyle */
    buttonFontStyle: '--plasma-attach-button-font-style',
    /** @styleType typography @styleProp buttonStyle @stylePart fontWeight */
    buttonFontWeight: '--plasma-attach-button-font-weight',
    /** @styleType typography @styleProp buttonStyle @stylePart letterSpacing */
    buttonLetterSpacing: '--plasma-attach-button-letter-spacing',
    /** @styleType typography @styleProp buttonStyle @stylePart lineHeight */
    buttonLineHeight: '--plasma-attach-button-line-height',

    /** @styleType dimension */
    buttonLeftContentMargin: '--plasma-attach-button-left-content-margin',
    /** @styleType value */
    buttonLeftContentAlignSelf: '--plasma-attach-button-left-content-align-self',
    /** @styleType dimension */
    buttonRightContentMargin: '--plasma-attach-button-right-content-margin',
    /** @styleType value */
    buttonRightContentAlignSelf: '--plasma-attach-button-right-content-align-self',
    /** @styleType dimension */
    buttonValueMargin: '--plasma-attach-button-value-margin',

    /** @styleType float */
    buttonDisabledOpacity: '--plasma-attach-button-disabled-opacity',
    /** @styleType color */
    buttonFocusColor: '--plasma-attach-button-focus-color',

    /** @styleType color */
    buttonSpinnerColor: '--plasma-attach-button-spinner-color',
    /** @styleType dimension */
    buttonSpinnerSize: '--plasma-attach-button-spinner-size',

    // Токены для Cell
    /** @styleType color */
    cellColor: '--plasma-attach-cell-color',
    /** @styleType color */
    cellBackgroundColor: '--plasma-attach-cell-background-color',

    /** @styleType dimension */
    cellPadding: '--plasma-attach-cell-padding',
    /** @styleType dimension */
    cellPaddingLeftContent: '--plasma-attach-cell-padding-left-content',
    /** @styleType dimension */
    cellPaddingContent: '--plasma-attach-cell-padding-content',
    /** @styleType dimension */
    cellPaddingRightContent: '--plasma-attach-cell-padding-right-content',

    /** @styleType dimension */
    cellTextboxGap: '--plasma-attach-cell-textbox-gap',
    /** @styleType dimension */
    cellGap: '--plasma-attach-cell-gap',

    /** @styleType value */
    cellWidth: '--plasma-attach-cell-width',

    /** @styleType color */
    cellLabelColor: '--plasma-attach-cell-label-color',
    /** @styleType typography @styleProp cellLabelStyle @stylePart fontFamily */
    cellLabelFontFamily: '--plasma-attach-cell-label-font-family',
    /** @styleType typography @styleProp cellLabelStyle @stylePart fontSize */
    cellLabelFontSize: '--plasma-attach-cell-label-font-size',
    /** @styleType typography @styleProp cellLabelStyle @stylePart fontStyle */
    cellLabelFontStyle: '--plasma-attach-cell-label-font-style',
    /** @styleType typography @styleProp cellLabelStyle @stylePart fontWeight */
    cellLabelFontWeight: '--plasma-attach-cell-label-font-weight',
    /** @styleType typography @styleProp cellLabelStyle @stylePart letterSpacing */
    cellLabelLetterSpacing: '--plasma-attach-cell-label-letter-spacing',
    /** @styleType typography @styleProp cellLabelStyle @stylePart lineHeight */
    cellLabelLineHeight: '--plasma-attach-cell-label-line-height',

    /** @styleType color */
    cellTitleColor: '--plasma-attach-cell-title-color',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontFamily */
    cellTitleFontFamily: '--plasma-attach-cell-title-font-family',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontSize */
    cellTitleFontSize: '--plasma-attach-cell-title-font-size',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontStyle */
    cellTitleFontStyle: '--plasma-attach-cell-title-font-style',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontWeight */
    cellTitleFontWeight: '--plasma-attach-cell-title-font-weight',
    /** @styleType typography @styleProp cellTitleStyle @stylePart letterSpacing */
    cellTitleLetterSpacing: '--plasma-attach-cell-title-letter-spacing',
    /** @styleType typography @styleProp cellTitleStyle @stylePart lineHeight */
    cellTitleLineHeight: '--plasma-attach-cell-title-line-height',

    /** @styleType color */
    cellSubtitleColor: '--plasma-attach-cell-subtitle-color',
    /** @styleType typography @styleProp cellSubtitleStyle @stylePart fontFamily */
    cellSubtitleFontFamily: '--plasma-attach-cell-subtitle-font-family',
    /** @styleType typography @styleProp cellSubtitleStyle @stylePart fontSize */
    cellSubtitleFontSize: '--plasma-attach-cell-subtitle-font-size',
    /** @styleType typography @styleProp cellSubtitleStyle @stylePart fontStyle */
    cellSubtitleFontStyle: '--plasma-attach-cell-subtitle-font-style',
    /** @styleType typography @styleProp cellSubtitleStyle @stylePart fontWeight */
    cellSubtitleFontWeight: '--plasma-attach-cell-subtitle-font-weight',
    /** @styleType typography @styleProp cellSubtitleStyle @stylePart letterSpacing */
    cellSubtitleLetterSpacing: '--plasma-attach-cell-subtitle-letter-spacing',
    /** @styleType typography @styleProp cellSubtitleStyle @stylePart lineHeight */
    cellSubtitleLineHeight: '--plasma-attach-cell-subtitle-line-height',

    // Токены для IconButton
    /** @styleType color */
    iconButtonColor: '--plasma-attach-icon-button-color',
    /** @styleType color */
    iconButtonBackgroundColor: '--plasma-attach-icon-button-background-color',
    /** @styleType value */
    iconButtonLoadingBackgroundColor: '--plasma-attach-icon-button-loading-background-color',
    /** @styleType color @styleProp iconButtonColor @styleState hovered */
    iconButtonColorHover: '--plasma-attach-icon-button-color-hover',
    /** @styleType color @styleProp iconButtonBackgroundColor @styleState hovered */
    iconButtonBackgroundColorHover: '--plasma-attach-icon-button-background-color-hover',
    /** @styleType color @styleProp iconButtonColor @styleState pressed */
    iconButtonColorActive: '--plasma-attach-icon-button-color-active',
    /** @styleType color @styleProp iconButtonBackgroundColor @styleState pressed */
    iconButtonBackgroundColorActive: '--plasma-attach-icon-button-background-color-active',

    /** @styleType float */
    iconButtonScaleHover: '--plasma-attach-icon-button-scale-hover',
    /** @styleType float */
    iconButtonScaleActive: '---plasma-attach-icon-button-scale-active',
    /** @styleType dimension */
    iconButtonHeight: '--plasma-attach-icon-button-height',
    /** @styleType dimension */
    iconButtonWidth: '--plasma-attach-icon-button-width',
    /** @styleType dimension */
    iconButtonPadding: '--plasma-attach-icon-button-padding',
    /** @styleType dimension */
    iconButtonRadius: '--plasma-attach-icon-button-radius',
    /** @styleType shape */
    iconButtonRadiusCircle: '--plasma-attach-icon-button-radius-circle',

    /** @styleType typography @styleProp iconButtonStyle @stylePart fontFamily */
    iconButtonFontFamily: '--plasma-attach-icon-button-font-family',
    /** @styleType typography @styleProp iconButtonStyle @stylePart fontSize */
    iconButtonFontSize: '--plasma-attach-icon-button-font-size',
    /** @styleType typography @styleProp iconButtonStyle @stylePart fontStyle */
    iconButtonFontStyle: '--plasma-attach-icon-button-font-style',
    /** @styleType typography @styleProp iconButtonStyle @stylePart fontWeight */
    iconButtonFontWeight: '--plasma-attach-icon-button-font-weight',
    /** @styleType typography @styleProp iconButtonStyle @stylePart letterSpacing */
    iconButtonLetterSpacing: '--plasma-attach-icon-button-letter-spacing',
    /** @styleType typography @styleProp iconButtonStyle @stylePart lineHeight */
    iconButtonLineHeight: '--plasma-attach-icon-button-line-height',

    /** @styleType float */
    iconButtonDisabledOpacity: '--plasma-attach-icon-button-disabled-opacity',
    /** @styleType color */
    iconButtonFocusColor: '--plasma-attach-icon-button-focus-color',

    /** @styleType color */
    iconButtonSpinnerColor: '--plasma-attach-icon-button-spinner-color',
    /** @styleType dimension */
    iconButtonSpinnerSize: '--plasma-attach-icon-button-spinner-size',

    // Токены для IconButtonCancel
    /** @styleType color */
    iconButtonCancelColor: '--plasma-attach-icon-button-cancel-color',
    /** @styleType color */
    iconButtonCancelBackgroundColor: '--plasma-attach-icon-button-cancel-background-color',
    /** @styleType value */
    iconButtonCancelLoadingBackgroundColor: '--plasma-attach-icon-button-cancel-loading-background-color',
    /** @styleType color @styleProp iconButtonCancelColor @styleState hovered */
    iconButtonCancelColorHover: '--plasma-attach-icon-button-cancel-color-hover',
    /** @styleType color @styleProp iconButtonCancelBackgroundColor @styleState hovered */
    iconButtonCancelBackgroundColorHover: '--plasma-attach-icon-button-cancel-background-color-hover',
    /** @styleType color @styleProp iconButtonCancelColor @styleState pressed */
    iconButtonCancelColorActive: '--plasma-attach-icon-button-cancel-color-active',
    /** @styleType color @styleProp iconButtonCancelBackgroundColor @styleState pressed */
    iconButtonCancelBackgroundColorActive: '--plasma-attach-icon-button-cancel-background-color-active',

    /** @styleType float */
    iconButtonCancelScaleHover: '--plasma-attach-icon-button-cancel-scale-hover',
    /** @styleType float */
    iconButtonCancelScaleActive: '---plasma-attach-icon-button-cancel-scale-active',
    /** @styleType dimension */
    iconButtonCancelHeight: '--plasma-attach-icon-button-cancel-height',
    /** @styleType dimension */
    iconButtonCancelWidth: '--plasma-attach-icon-button-cancel-width',
    /** @styleType dimension */
    iconButtonCancelPadding: '--plasma-attach-icon-button-cancel-padding',
    /** @styleType shape */
    iconButtonCancelRadius: '--plasma-attach-icon-button-cancel-radius',
    /** @styleType shape */
    iconButtonCancelRadiusCircle: '--plasma-attach-icon-button-cancel-radius-circle',

    /** @styleType typography @styleProp iconButtonCancelStyle @stylePart fontFamily */
    iconButtonCancelFontFamily: '--plasma-attach-icon-button-cancel-font-family',
    /** @styleType typography @styleProp iconButtonCancelStyle @stylePart fontSize */
    iconButtonCancelFontSize: '--plasma-attach-icon-button-cancel-font-size',
    /** @styleType typography @styleProp iconButtonCancelStyle @stylePart fontStyle */
    iconButtonCancelFontStyle: '--plasma-attach-icon-button-cancel-font-style',
    /** @styleType typography @styleProp iconButtonCancelStyle @stylePart fontWeight */
    iconButtonCancelFontWeight: '--plasma-attach-icon-button-cancel-font-weight',
    /** @styleType typography @styleProp iconButtonCancelStyle @stylePart letterSpacing */
    iconButtonCancelLetterSpacing: '--plasma-attach-icon-button-cancel-letter-spacing',
    /** @styleType typography @styleProp iconButtonCancelStyle @stylePart lineHeight */
    iconButtonCancelLineHeight: '--plasma-attach-icon-button-cancel-line-height',

    /** @styleType float */
    iconButtonCancelDisabledOpacity: '--plasma-attach-icon-button-cancel-disabled-opacity',
    /** @styleType color */
    iconButtonCancelFocusColor: '--plasma-attach-icon-button-cancel-focus-color',

    /** @styleType color */
    iconButtonCancelSpinnerColor: '--plasma-attach-icon-button-cancel-spinner-color',
    /** @styleType dimension */
    iconButtonCancelSpinnerSize: '--plasma-attach-icon-button-cancel-spinner-size',

    // Токены для MoreIcon
    /** @styleType dimension */
    moreIconPadding: '--plasma-attach-more-icon-padding',
    /** @styleType color */
    moreIconColor: '--plasma-attach-more-icon-color',
    /** @styleType color @styleProp moreIconColor @styleState hovered */
    moreIconColorHover: '--plasma-attach-more-icon-color-hover',

    // Токены для Dropdown
    /** @styleType color */
    dropdownBackground: '--plasma-attach-dropdown-background',
    /** @styleType shadow */
    dropdownBoxShadow: '--plasma-attach-dropdown-box-shadow',
    /** @styleType dimension */
    dropdownWidth: '--plasma-attach-dropdown-width',
    /** @styleType dimension */
    dropdownBorderRadius: '--plasma-attach-dropdown-border-radius',
    /** @styleType dimension */
    dropdownPadding: '--plasma-attach-dropdown-padding',
    /** @styleType color */
    dropdownBorderColor: '--plasma-attach-dropdown-border-color',
    /** @styleType dimension */
    dropdownBorderWidth: '--plasma-attach-dropdown-border-width',
    /** @styleType value */
    dropdownItemPadding: '--plasma-attach-dropdown-item-padding',
};
