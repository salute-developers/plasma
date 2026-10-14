export const classes = {
    actionButtonDecrement: 'action-button-decrement',
    actionButtonDecrementDisabled: 'action-button-decrement-disabled',
    actionButtonIncrement: 'action-button-increment',
    actionButtonIncrementDisabled: 'action-button-increment-disabled',
    textBefore: 'text-before',
    textAfter: 'text-after',
    solidView: 'solid-view',
    segmentedView: 'segmented-view',
    clearView: 'clear-view',
    errorAnimation: 'error-animation',
    disabled: 'number-input-disabled',
    loading: 'number-input-loading',
    focused: 'number-input-focused',
    manualInput: 'manual-input-number-input',
    decrementHidden: 'number-input-decrement-hidden',
    incrementHidden: 'number-input-increment-hidden',
    onlyIncrementShown: 'number-input-only-increment-shown',
    onlyDecrementShown: 'number-input-only-decrement-shown',
};

export const privateTokens = {
    inputWidth: '--plasma_private-number-input_width',
    segmentationBorderRadius: '--plasma_private-segmentation-border-radius',
    segmentationInputBorderRadius: '--plasma_private-segmentation_input_border-radius',
    topBoxShadow: '--plasma_private-number-input_top-box-shadow',
    bottomBoxShadow: '--plasma_private-number-input_bottom-box-shadow',
    leftBoxShadow: '--plasma_private-number-input_left-box-shadow',
    rightBoxShadow: '--plasma_private-number-input_right-box-shadow',
};

export const tokens = {
    // Root size tokens
    /** @styleType dimension */
    rootMinWidth: '--plasma-number-input_min-width',
    /** @styleType float */
    disabledOpacity: '--plasma-number-input_disabled-opacity',
    /** @styleType dimension */
    rootBorderWidth: '--plasma-number-input_input-border-width',
    /** @styleType color */
    wrapperBorderColor: '--plasma-number-input_wrapper_border-color',
    /** @styleType color @styleProp wrapperBorderColor @styleState focused */
    wrapperBorderColorFocus: '--plasma-number-input_wrapper_border-color_focus',

    // Action button view tokens
    /** @styleType color */
    iconButtonColor: '--plasma-number-input_icon-button_color',
    /** @styleType color */
    iconButtonBackgroundColor: '--plasma-number-input_icon-button_background-color',
    /** @styleType color */
    iconButtonColorHover: '--plasma-number-input_icon-button_color-hover',
    /** @styleType color */
    iconButtonColorSolidHover: '--plasma-number-input_icon-button_color_solid-hover',
    /** @styleType color */
    iconButtonBackgroundColorHover: '--plasma-number-input_icon-button_background-color-hover',
    /** @styleType color */
    iconButtonColorActive: '--plasma-number-input_icon-button_color-active',
    /** @styleType color */
    iconButtonColorSolidActive: '--plasma-number-input_icon-button_color_solid-active',
    /** @styleType color */
    iconButtonBackgroundColorActive: '--plasma-number-input_icon-button_background-color-active',

    /** @styleType float */
    actionButtonDisabledOpacity: '--plasma-number-input_action-button_disabled-opacity',
    /** @styleType value */
    actionButtonDisabledCursor: '--plasma-number-input_action-button_disabled-cursor',

    // Action button size tokens
    /** @styleType dimension */
    iconButtonHeight: '--plasma-number-input_icon-button_height',
    /** @styleType dimension */
    iconButtonWidth: '--plasma-number-input_icon-button_width',
    /** @styleType dimension */
    iconButtonPadding: '--plasma-number-input_icon-button_padding',
    /** @styleType value */
    iconButtonRadius: '--plasma-number-input_icon-button_radius',
    /** @styleType dimension */
    iconButtonSegmentationRadius: '--plasma-number-input_icon-button_segmentation_radius',
    /** @styleType typography @styleProp iconButtonStyle @stylePart fontFamily */
    iconButtonFontFamily: '--plasma-number-input_icon-button_font-family',
    /** @styleType typography @styleProp iconButtonStyle @stylePart fontSize */
    iconButtonFontSize: '--plasma-number-input_icon-button_font-size',
    /** @styleType typography @styleProp iconButtonStyle @stylePart fontStyle */
    iconButtonFontStyle: '--plasma-number-input_icon-button_font-style',
    /** @styleType typography @styleProp iconButtonStyle @stylePart fontWeight */
    iconButtonFontWeight: '--plasma-number-input_icon-button_font-weight',
    /** @styleType typography @styleProp iconButtonStyle @stylePart letterSpacing */
    iconButtonLetterSpacing: '--plasma-number-input_icon-button_letter-spacing',
    /** @styleType typography @styleProp iconButtonStyle @stylePart lineHeight */
    iconButtonLineHeight: '--plasma-number-input_icon-button_line-height',

    // Input size tokens
    /** @styleType dimension */
    inputWrapperBorderWidth: '--plasma-number-input_input-wrapper_border-width',
    /** @styleType dimension */
    inputWrapperMargin: '--plasma-number-input_input-wrapper_margin',
    /** @styleType dimension */
    inputWrapperBorderRadius: '--plasma-number-input_input-wrapper_border-radius',
    /** @styleType dimension */
    textWrapperHeight: '--plasma-number-input_text-wrapper_height',
    /** @styleType dimension */
    textWrapperPadding: '--plasma-number-input_text-wrapper_padding',

    /** @styleType typography @styleProp textStyle @stylePart fontFamily */
    fontFamily: '--plasma-number-input_font-family',
    /** @styleType typography @styleProp textStyle @stylePart fontStyle */
    fontStyle: '--plasma-number-input_font-style',
    /** @styleType typography @styleProp textStyle @stylePart fontSize */
    fontSize: '--plasma-number-input_font-size',
    /** @styleType typography @styleProp textStyle @stylePart fontWeight */
    fontWeight: '--plasma-number-input_font-weight',
    /** @styleType typography @styleProp textStyle @stylePart letterSpacing */
    letterSpacing: '--plasma-number-input_letter-spacing',
    /** @styleType typography @styleProp textStyle @stylePart lineHeight */
    lineHeight: '--plasma-number-input_line-height',

    /** @styleType typography @styleProp additionalTextTypography @stylePart fontFamily */
    additionalTextFontFamily: '--plasma-number-input_additional-text_font-family',
    /** @styleType typography @styleProp additionalTextTypography @stylePart fontStyle */
    additionalTextFontStyle: '--plasma-number-input_additional-text_font-style',
    /** @styleType typography @styleProp additionalTextTypography @stylePart fontSize */
    additionalTextFontSize: '--plasma-number-input_additional-text_font-size',
    /** @styleType typography @styleProp additionalTextTypography @stylePart fontWeight */
    additionalTextFontWeight: '--plasma-number-input_additional-text_font-weight',
    /** @styleType typography @styleProp additionalTextTypography @stylePart letterSpacing */
    additionalTextLetterSpacing: '--plasma-number-input_additional-text_letter-spacing',
    /** @styleType typography @styleProp additionalTextTypography @stylePart lineHeight */
    additionalTextLineHeight: '--plasma-number-input_additional-text_line-height',

    /** @styleType dimension */
    textBeforeMarginRight: '--plasma-number-input_text-before_margin-right',
    /** @styleType dimension */
    textAfterMarginLeft: '--plasma-number-input_text-after_margin-left',

    // Input view tokens
    /** @styleType color */
    caretColor: '--plasma-number-input_caret_color',
    /** @styleType color */
    caretColorSolid: '--plasma-number-input_caret_color-solid',
    /** @styleType color */
    color: '--plasma-number-input_color',
    /** @styleType color */
    colorSolid: '--plasma-number-input_color-solid',
    /** @styleType color */
    backgroundColor: '--plasma-number-input_background-color',
    /** @styleType color */
    backgroundColorHover: '--plasma-number-input_background-color-hover',
    /** @styleType color */
    backgroundColorFocus: '--plasma-number-input_background-color-focus',
    /** @styleType color */
    backgroundColorSolidFocus: '--plasma-number-input_background-color-solid-focus',
    /** @styleType color */
    backgroundColorSolid: '--plasma-number-input_background-color-solid',
    /** @styleType color */
    borderColor: '--plasma-number-input_border-color',
    /** @styleType color @styleProp borderColor @styleState hovered */
    borderColorHover: '--plasma-number-input_border-color-hover',
    /** @styleType color @styleProp borderColor @styleState focused */
    borderColorFocus: '--plasma-number-input_border-color-focus',
    /** @styleType color @styleProp borderColorSolid @styleState focused */
    borderColorSolidFocus: '--plasma-number-input_border-color-solid-focus',
    /** @styleType color */
    borderColorSolid: '--plasma-number-input_border-color-solid',
    /** @styleType color */
    additionalTextColor: '--plasma-number-input_additional-text_color',
    /** @styleType color */
    additionalTextColorSolid: '--plasma-number-input_additional-text_color-solid',

    /** @styleType color */
    errorColor: '--plasma-number-input_error-color',
    /** @styleType color */
    backgroundErrorColor: '--plasma-number-input_background_error-color',
    /** @styleType color */
    borderErrorColor: '--plasma-number-input_border_error-color',

    // Loader tokens
    /** @styleType dimension */
    loaderSpinnerSize: '--plasma-number-input_loader-spinner_size',
    /** @styleType color */
    loaderSpinnerColor: '--plasma-number-input_loader-spinner_color',
    /** @styleType color */
    loaderSpinnerColorSolid: '--plasma-number-input_loader-spinner_color-solid',
};
