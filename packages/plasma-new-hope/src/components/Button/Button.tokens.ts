export const classes = {
    buttonStretch: 'button-stretch',
    autoStretching: 'button-stretching-auto',
    filledStretching: 'button-stretching-filled',
    fixedStretching: 'button-stretching-fixed',
    contentRelaxed: 'button-content-relaxed',
    buttonSquare: 'button-square',
    buttonItem: 'button-item',
    buttonLoading: 'button-loading',
    buttonHasValue: 'button-has-value',
};

export const tokens = {
    /** @styleType color @styleProp labelColor */
    buttonColor: '--plasma-button-color',
    /** @styleType color */
    buttonTextColor: '--plasma-button-text-color',
    /** @styleType color */
    buttonIconColor: '--plasma-button-icon-color',
    /** @styleType color @styleProp valueColor */
    buttonValueColor: '--plasma-button-value-color',
    /** @styleType color @styleProp backgroundColor */
    buttonBackgroundColor: '--plasma-button-background-color',
    /** @styleType color @styleProp labelColor @styleState hovered */
    buttonColorHover: '--plasma-button-color-hover',
    /** @styleType color @styleProp backgroundColor @styleState hovered */
    buttonBackgroundColorHover: '--plasma-button-background-color-hover',
    /** @styleType color @styleProp labelColor @styleState pressed */
    buttonColorActive: '--plasma-button-color-active',
    /** @styleType color @styleProp backgroundColor @styleState pressed */
    buttonBackgroundColorActive: '--plasma-button-background-color-active',
    /** @styleType color @styleProp loadingBackgroundColor */
    buttonLoadingBackgroundColor: '--plasma-button-loading-background-color',

    /* токены для управления UI рамки через box-shadow */
    /** @styleType dimension */
    buttonBorderWidth: '--plasma-button-border-width',
    /** @styleType color */
    buttonBorderColor: '--plasma-button-border-color',
    /** @styleType color @styleProp buttonBorderColor @styleState pressed */
    buttonBorderColorActive: '--plasma-button-border-color-active',
    /** @styleType color @styleProp buttonBorderColor @styleState hovered */
    buttonBorderColorHover: '--plasma-button-border-color-hover',

    /** @styleType float */
    buttonScaleHover: '--plasma-button-scale-hover',
    /** @styleType float */
    buttonScaleActive: '---plasma-button-scale-active',
    /** @styleType dimension @styleProp height */
    buttonHeight: '--plasma-button-height',
    /** @styleType dimension @styleProp minWidth */
    buttonWidth: '--plasma-button-width',
    /** @styleType dimension @styleProp paddingEnd */
    buttonPadding: '--plasma-button-padding',
    /** @styleType shape @styleProp shape */
    buttonRadius: '--plasma-button-radius',
    /** @styleType shape */
    buttonRadiusCircle: '--plasma-button-radius-circle',

    /** @styleType typography @styleProp labelStyle @stylePart fontFamily */
    buttonFontFamily: '--plasma-button-font-family',
    /** @styleType typography @styleProp labelStyle @stylePart fontSize */
    buttonFontSize: '--plasma-button-font-size',
    /** @styleType typography @styleProp labelStyle @stylePart fontStyle */
    buttonFontStyle: '--plasma-button-font-style',
    /** @styleType typography @styleProp labelStyle @stylePart fontWeight */
    buttonFontWeight: '--plasma-button-font-weight',
    /** @styleType typography @styleProp labelStyle @stylePart letterSpacing */
    buttonLetterSpacing: '--plasma-button-letter-spacing',
    /** @styleType typography @styleProp labelStyle @stylePart lineHeight */
    buttonLineHeight: '--plasma-button-line-height',

    /** @styleType dimension @styleProp iconMargin */
    buttonLeftContentMargin: '--plasma-button-left-content-margin',
    /** @styleType value */
    buttonLeftContentAlignSelf: '--plasma-button-left-content-align-self',
    /** @styleType dimension @styleProp iconMargin */
    buttonRightContentMargin: '--plasma-button-right-content-margin',
    /** @styleType value */
    buttonRightContentAlignSelf: '--plasma-button-right-content-align-self',
    /** @styleType dimension */
    buttonAdditionalContentMargin: '--plasma-button-additional-content-margin',
    /** @styleType dimension */
    buttonAdditionalContentMarginRightWidthValue: '--plasma-button-additional-content-margin-right-width-value',

    /** @styleType dimension @styleProp valueMargin */
    buttonValueMargin: '--plasma-button-value-margin',
    /** @styleType typography @styleProp buttonValueTypography @stylePart fontWeight */
    buttonValueFontWeight: '--plasma-button-value-font-weight',

    /** @styleType float @styleProp disableAlpha */
    buttonDisabledOpacity: '--plasma-button-disabled-opacity',
    /** @styleType color @styleProp focusColor */
    buttonFocusColor: '--plasma-button-focus-color',

    /** @styleType color @styleProp spinnerColor */
    buttonSpinnerColor: '--plasma-button-spinner-color',
    /** @styleType dimension @styleProp spinnerSize */
    buttonSpinnerSize: '--plasma-button-spinner-size',
};
