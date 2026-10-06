export const classes = {
    rangeInformationWrapper: 'range-information-wrapper',
    rangeError: 'range-error',
    rangeValueError: 'range-value-error',
    rangeSuccess: 'range-success',
    rangeValueSuccess: 'range-value-success',
    rangeEdited: 'range-edited',
    rangeValueEdited: 'range-value-edited',
    requiredAlignRight: 'required-align-right',
    requiredOuterPlacement: 'required-placement-outer',
    noCaptionAndLabel: 'range-no-caption-label',
    clear: 'range-clear',
    clearDivider: 'range-clear-divider',
    clearHasOuterHint: 'range-clear-has-outer-hint',
};

export const tokens = {
    /** @styleType color */
    background: '--plasma-range-background',
    /** @styleType color */
    backgroundError: '--plasma-range-background-error',
    /** @styleType color */
    backgroundSuccess: '--plasma-range-background-success',
    /** @styleType color */
    backgroundEdited: '--plasma-range-background-edited',
    /** @styleType color */
    backgroundReadOnly: '--plasma-range-background-readonly',
    /** @styleType dimension */
    borderRadius: '--plasma-range-border-radius',
    /** @styleType dimension */
    borderWidth: '--plasma-range-border-width',
    /** @styleType color */
    borderColor: '--plasma-range-border-color',
    /** @styleType color */
    borderColorError: '--plasma-range-border-color-error',
    /** @styleType color */
    borderColorSuccess: '--plasma-range-border-color-success',
    /** @styleType color */
    borderColorEdited: '--plasma-range-border-color-edited',
    /** @styleType color */
    borderColorReadOnly: '--plasma-range-border-color-readonly',
    /** @styleType shadow */
    shadow: '--plasma-range-shadow',

    /** Токены разделителя */
    /** @styleType color */
    clearDividerColor: '--plasma-range-clear__divider-color',

    /** @styleType color */
    dividerColor: '--plasma-range__divider-color',
    /** @styleType color */
    dividerColorReadOnly: '--plasma-range__divider-color-readonly',
    /** @styleType float */
    dividerOpacityReadOnly: '--plasma-range__divider-opacity-readonly',
    /** @styleType dimension */
    dividerPadding: '--plasma-range__divider-padding',
    /** @styleType typography @styleProp dividerStyle @stylePart fontFamily */
    dividerFontFamily: '--plasma-range__divider-font-family',
    /** @styleType typography @styleProp dividerStyle @stylePart fontStyle */
    dividerFontStyle: '--plasma-range__divider-font-style',
    /** @styleType typography @styleProp dividerStyle @stylePart fontSize */
    dividerFontSize: '--plasma-range__divider-font-size',
    /** @styleType typography @styleProp dividerStyle @stylePart fontWeight */
    dividerFontWeight: '--plasma-range__divider-font-weight',
    /** @styleType typography @styleProp dividerStyle @stylePart letterSpacing */
    dividerLetterSpacing: '--plasma-range__divider-letter-spacing',
    /** @styleType typography @styleProp dividerStyle @stylePart lineHeight */
    dividerLineHeight: '--plasma-range__divider-line-height',

    /** Токены слотов для контента */
    /** @styleType dimension */
    leftContentMargin: '--plasma-range__left-content-margin',
    /** @styleType float */
    rightContentMargin: '--plasma-range__right-content-margin',
    /** @styleType float */
    rightContentOpacityReadOnly: '--plasma-range__right-content-opacity-readonly',

    /** @styleType color */
    contentSlotColor: '--plasma-range-content-slot-color',
    /** @styleType color */
    contentSlotColorHover: '--plasma-range-content-slot-color-hover',
    /** @styleType color */
    contentSlotColorActive: '--plasma-range-content-slot-color-active',

    /** @styleType color */
    contentSlotColorSuccess: '--plasma-range-content-slot-color-success',
    /** @styleType color @styleProp contentSlotColorSuccess @styleState hovered */
    contentSlotColorSuccessHover: '--plasma-range-content-slot-color-success-hover',
    /** @styleType color @styleProp contentSlotColorSuccess @styleState pressed */
    contentSlotColorSuccessActive: '--plasma-range-content-slot-color-success-active',

    /** @styleType color */
    contentSlotColorError: '--plasma-range-content-slot-color-error',
    /** @styleType color @styleProp contentSlotColorError @styleState hovered */
    contentSlotColorErrorHover: '--plasma-range-content-slot-color-error-hover',
    /** @styleType color @styleProp contentSlotColorError @styleState pressed */
    contentSlotColorErrorActive: '--plasma-range-content-slot-color-error-active',

    /** @styleType color */
    textFieldContentSlotColor: '--plasma-textfield-content-slot-color',
    /** @styleType color */
    textFieldContentSlotColorHover: '--plasma-textfield-content-slot-color-hover',
    /** @styleType color */
    textFieldContentSlotColorActive: '--plasma-textfield-content-slot-color-active',

    /** @styleType color */
    textFieldContentSlotColorSuccess: '--plasma-textfield-content-slot-color-success',
    /** @styleType color @styleProp textFieldContentSlotColorSuccess @styleState hovered */
    textFieldContentSlotColorSuccessHover: '--plasma-textfield-content-slot-color-success-hover',
    /** @styleType color @styleProp textFieldContentSlotColorSuccess @styleState pressed */
    textFieldContentSlotColorSuccessActive: '--plasma-textfield-content-slot-color-success-active',

    /** @styleType color */
    textFieldContentSlotColorError: '--plasma-textfield-content-slot-color-error',
    /** @styleType color @styleProp textFieldContentSlotColorError @styleState hovered */
    textFieldContentSlotColorErrorHover: '--plasma-textfield-content-slot-color-error-hover',
    /** @styleType color @styleProp textFieldContentSlotColorError @styleState pressed */
    textFieldContentSlotColorErrorActive: '--plasma-textfield-content-slot-color-error-active',

    /** @styleType color */
    contentSlotRightColor: '--plasma-range-content-right-slot-color',
    /** @styleType color */
    contentSlotRightColorHover: '--plasma-range-content-right-slot-color-hover',
    /** @styleType color */
    contentSlotRightColorActive: '--plasma-range-content-right-slot-color-active',

    /** @styleType dimension */
    embedIconButtonHeight: '--plasma-range-embed-icon-button-height',
    /** @styleType dimension */
    embedIconButtonWidth: '--plasma-range-embed-icon-button-width',
    /** @styleType dimension */
    embedIconButtonPadding: '--plasma-range-embed-icon-button-padding',
    /** @styleType dimension */
    embedIconButtonRadius: '--plasma-range-embed-icon-button-radius',
    /** @styleType color */
    embedIconButtonFocusColor: '--plasma-range-embed-icon-button-focus-color',

    /** @styleType color */
    textFieldContentSlotRightColor: '--plasma-textfield-content-right-slot-color',
    /** @styleType color */
    textFieldContentSlotRightColorHover: '--plasma-textfield-content-right-slot-color-hover',
    /** @styleType color */
    textFieldContentSlotRightColorActive: '--plasma-textfield-content-right-slot-color-active',

    /** @styleType dimension */
    indicatorWrapperGap: '--plasma-range-info-wrapper-indicator-wrapper-gap',
    /** @styleType dimension */
    labelWrapperOffset: '--plasma-range-info-wrapper-label-wrapper-offset',
    /** @styleType dimension */
    labelWrapperTitleCaptionOffset: '--plasma-range-info-wrapper-label-wrapper-title-caption-offset',
    /** @styleType typography @styleProp labelStyle @stylePart fontFamily */
    labelFontFamily: '--plasma-range-info-wrapper-label-font-family',
    /** @styleType typography @styleProp labelStyle @stylePart fontStyle */
    labelFontStyle: '--plasma-range-info-wrapper-label-font-style',
    /** @styleType typography @styleProp labelStyle @stylePart fontSize */
    labelFontSize: '--plasma-range-info-wrapper-label-font-size',
    /** @styleType typography @styleProp labelStyle @stylePart fontWeight */
    labelFontWeight: '--plasma-range-info-wrapper-label-font-weight',
    /** @styleType typography @styleProp labelStyle @stylePart letterSpacing */
    labelLetterSpacing: '--plasma-range-info-wrapper-label-letter-spacing',
    /** @styleType typography @styleProp labelStyle @stylePart lineHeight */
    labelLineHeight: '--plasma-range-info-wrapper-label-line-height',
    /** @styleType color */
    labelColor: '--plasma-range-info-wrapper-label-color',

    /** @styleType dimension */
    contentGap: '--plasma-range-info-wrapper-content-gap',

    /** @styleType dimension */
    titleCaptionOffset: '--plasma-range-info-wrapper-title-caption-offset',
    /** @styleType color */
    titleCaptionColor: '--plasma-range-info-wrapper-title-caption-color',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontFamily */
    titleCaptionFontFamily: '--plasma-range-info-wrapper-title-caption-font-family',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontStyle */
    titleCaptionFontStyle: '--plasma-range-info-wrapper-title-caption-font-style',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontSize */
    titleCaptionFontSize: '--plasma-range-info-wrapper-title-caption-font-size',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontWeight */
    titleCaptionFontWeight: '--plasma-range-info-wrapper-title-caption-font-weight',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart letterSpacing */
    titleCaptionLetterSpacing: '--plasma-range-info-wrapper-title-caption-letter-spacing',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart lineHeight */
    titleCaptionLineHeight: '--plasma-range-info-wrapper-title-caption-line-height',

    /** Токены для tooltip */
    /** @styleType value */
    hintMargin: '--plasma-range-info-wrapper-hint-margin',
    /** @styleType dimension */
    hintTargetSize: '--plasma-range-info-wrapper-hint-target-size',
    /** @styleType dimension */
    hintCustomIconTargetSize: '--plasma-range-info-wrapper-hint-custom-icon-target-size',
    /** @styleType color */
    hintIconColor: '--plasma-range-info-wrapper-hint-icon-color',
    /** @styleType dimension */
    hintWithoutLabelPlacementOffset: '--plasma-range-info-wrapper-hint-without-label-placement-offset',
    /** @styleType dimension */
    hintPlacementInnerMargin: '--plasma-range-info-wrapper-hint-placement-inner-offset',

    /** @styleType color */
    tooltipBackgroundColor: '--plasma-range-info-wrapper-tooltip-background-color',
    /** @styleType shadow */
    tooltipBoxShadow: '--plasma-range-info-wrapper-tooltip-box-shadow',
    /** @styleType color */
    tooltipColor: '--plasma-range-info-wrapper-tooltip-color',

    /** @styleType dimension */
    tooltipPaddingTop: '--plasma-range-info-wrapper-tooltip-padding-top',
    /** @styleType dimension */
    tooltipPaddingRight: '--plasma-range-info-wrapper-tooltip-padding-right',
    /** @styleType dimension */
    tooltipPaddingBottom: '--plasma-range-info-wrapper-tooltip-padding-bottom',
    /** @styleType dimension */
    tooltipPaddingLeft: '--plasma-range-info-wrapper-tooltip-padding-left',
    /** @styleType dimension */
    tooltipMinHeight: '--plasma-range-info-wrapper-tooltip-min-height',
    /** @styleType dimension */
    tooltipBorderRadius: '--plasma-range-info-wrapper-tooltip-border-radius',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontFamily */
    tooltipTextFontFamily: '--plasma-range-info-wrapper-tooltip-text-font-family',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontSize */
    tooltipTextFontSize: '--plasma-range-info-wrapper-tooltip-text-font-size',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontStyle */
    tooltipTextFontStyle: '--plasma-range-info-wrapper-tooltip-text-font-style',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontWeight */
    tooltipTextFontWeight: '--plasma-range-info-wrapper-tooltip-text-font-weight',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart letterSpacing */
    tooltipTextFontLetterSpacing: '--plasma-range-info-wrapper-tooltip-text-font-letter-spacing',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart lineHeight */
    tooltipTextFontLineHeight: '--plasma-range-info-wrapper-tooltip-text-font-line-height',
    /** @styleType dimension */
    tooltipContentLeftMargin: '--plasma-range-info-wrapper-tooltip-content-left-margin',
    /** @styleType dimension */
    tooltipArrowMaskWidth: '--plasma-range-info-wrapper-tooltip-arrow-mask-width',
    /** @styleType dimension */
    tooltipArrowMaskHeight: '--plasma-range-info-wrapper-tooltip-arrow-mask-height',
    /** @styleType value */
    tooltipArrowMaskImage: '--plasma-range-info-wrapper-tooltip-arrow-mask-image',
    /** @styleType dimension */
    tooltipArrowHeight: '--plasma-range-info-wrapper-tooltip-arrow-height',
    /** @styleType dimension */
    tooltipArrowEdgeMargin: '--plasma-range-info-wrapper-tooltip-arrow-edge-margin',
    /** @styleType color */
    tooltipArrowBackground: '--plasma-range-info-wrapper-tooltip-arrow-background',

    /** Токены для required indicator */
    /** @styleType color */
    indicatorColor: '--plasma-range-info-wrapper-indicator-color',
    /** @styleType dimension */
    indicatorSizeInner: '--plasma-range-info-wrapper-indicator-size-inner',
    /** @styleType dimension */
    indicatorSizeOuter: '--plasma-range-info-wrapper-indicator-size-outer',
    /** @styleType dimension */
    indicatorMarginTop: '--plasma-range-info-wrapper-indicator-margin-top',
    /** @styleType dimension */
    indicatorOuterLeft: '--plasma-range-info-wrapper-indicator-outer-left',
    /** @styleType dimension */
    indicatorWithoutLabelInner: '--plasma-range-info-wrapper-indicator-without-label-inner',
    /** @styleType dimension */
    indicatorWithoutLabelInnerLeft: '--plasma-range-info-wrapper-indicator-without-label-inner-left',
    /** @styleType value */
    indicatorWithoutLabelOuterHint: '--plasma-range-info-wrapper-indicator-without-label-outer-hint',

    /** Токены для подписей снизу */
    /** @styleType color */
    leftHelperColor: '--plasma-range-info-wrapper-left-helper-color',
    /** @styleType color */
    leftHelperColorError: '--plasma-range-info-wrapper-left-helper--error',
    /** @styleType color */
    leftHelperColorSuccess: '--plasma-range-info-wrapper-left-helper--success',
    /** @styleType color */
    leftHelperColorEdited: '--plasma-range-info-wrapper-left-helper--edited',

    /** @styleType dimension */
    helpersPadding: '--plasma-range-info-wrapper-helpers-padding-top',
    /** @styleType dimension */
    helpersGap: '--plasma-range-info-wrapper-helpers-gap',

    /** @styleType typography @styleProp leftHelperStyle @stylePart fontFamily */
    leftHelperFontFamily: '--plasma-range-info-wrapper-left-helper-font-family',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontStyle */
    leftHelperFontStyle: '--plasma-range-info-wrapper-left-helper-font-style',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontSize */
    leftHelperFontSize: '--plasma-range-info-wrapper-left-helper-font-size',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontWeight */
    leftHelperFontWeight: '--plasma-range-info-wrapper-left-helper-font-weight',
    /** @styleType typography @styleProp leftHelperStyle @stylePart letterSpacing */
    leftHelperLetterSpacing: '--plasma-range-info-wrapper-left-helper-letter-spacing',
    /** @styleType typography @styleProp leftHelperStyle @stylePart lineHeight */
    leftHelperLineHeight: '--plasma-range-info-wrapper-left-helper-line-height',

    /** Прозрачность для всего компонента в состоянии disabled */
    /** @styleType float */
    disabledOpacity: '--plasma-range-disabled-opacity',
    /** @styleType float */
    disabledBackgroundOpacity: '--plasma-range-disabled-background-opacity',
    /** @styleType float */
    disabledInnerContentOpacity: '--plasma-range-disabled-inner-content-opacity',
    /** @styleType float */
    readOnlyOpacity: '--plasma-range-readonly-opacity',
    /** @styleType color */
    labelColorReadOnly: '--plasma-range-info-wrapper-label-color-readonly',
    /** @styleType color */
    titleCaptionColorReadOnly: '--plasma-range-info-wrapper-title-caption-color-readonly',
    /** @styleType color */
    leftHelperColorReadOnly: '--plasma-range-info-wrapper-left-helper-color-readonly',
    /** @styleType color */
    rightHelperColorReadOnly: '--plasma-range-info-wrapper-right-helper-color-readonly',

    /** Цвет обводки поля ввода при фокусе */
    /** @styleType color */
    focusColor: '--plasma-range-focus-color',

    /** Токены полей ввода */
    /** @styleType color */
    textFieldColor: '--plasma-range-textfield-color',
    /** @styleType color */
    textFieldColorError: '--plasma-range-textfield-color-error',
    /** @styleType color */
    textFieldColorSuccess: '--plasma-range-textfield-color-success',
    /** @styleType color */
    textFieldColorEdited: '--plasma-range-textfield-color-edited',
    /** @styleType color */
    textFieldFocusColor: '--plasma-range-textfield-focus-color',
    /** @styleType color */
    textFieldPlaceholderColor: '--plasma-range-textfield-placeholder-color',
    /** @styleType color */
    textFieldClearPlaceholderColorFocus: '--plasma-range-textfield-clear-placeholder-color-focus',
    /** @styleType color */
    textFieldCaretColor: '--plasma-range-textfield-caret-color',

    /** @styleType color */
    textFieldBackgroundColor: '--plasma-range-textfield-background-color',
    /** @styleType color */
    textFieldBackgroundColorHover: '--plasma-range-textfield-background-color-hover',
    /** @styleType color */
    textFieldBackgroundColorFocus: '--plasma-range-textfield-background-color-focus',
    /** @styleType color */
    textFieldBackgroundErrorColor: '--plasma-range-textfield-background-color-error',
    /** @styleType color */
    textFieldBackgroundErrorColorHover: '--plasma-range-textfield-background-color-error-hover',
    /** @styleType color */
    textFieldBackgroundErrorColorFocus: '--plasma-range-textfield-background-color-error-focus',
    /** @styleType color */
    textFieldBackgroundSuccessColor: '--plasma-range-textfield-background-color-success',
    /** @styleType color */
    textFieldBackgroundSuccessColorHover: '--plasma-range-textfield-background-color-success-hover',
    /** @styleType color */
    textFieldBackgroundSuccessColorFocus: '--plasma-range-textfield-background-color-success-focus',
    /** @styleType color */
    textFieldBackgroundEditedColor: '--plasma-range-textfield-background-color-edited',
    /** @styleType color @styleProp textFieldBackgroundEditedColor @styleState hovered */
    textFieldBackgroundEditedColorHover: '--plasma-range-textfield-background-color-edited-hover',
    /** @styleType color @styleProp textFieldBackgroundEditedColor @styleState focused */
    textFieldBackgroundEditedColorFocus: '--plasma-range-textfield-background-color-edited-focus',

    /** @styleType color */
    textFieldBorderColor: '--plasma-range-textfield-border-color',
    /** @styleType color */
    textFieldPlaceholderColorFocus: '--plasma-range-textfield__placeholder-color-focus',
    /** @styleType color @styleProp textFieldBorderColor @styleState hovered */
    textFieldBorderColorHover: '--plasma-range-textfield-border-color-hover',
    /** @styleType color @styleProp textFieldBorderColor @styleState focused */
    textFieldBorderColorFocus: '--plasma-range-textfield-border-color-focus',
    /** @styleType color */
    textFieldBorderColorError: '--plasma-range-textfield-border-color-error',
    /** @styleType color @styleProp textFieldBorderColorError @styleState hovered */
    textFieldBorderColorErrorHover: '--plasma-range-textfield-border-color-error-hover',
    /** @styleType color @styleProp textFieldBorderColorError @styleState focused */
    textFieldBorderColorErrorFocus: '--plasma-range-textfield-border-color-error-focus',
    /** @styleType color */
    textFieldBorderColorSuccess: '--plasma-range-textfield-border-color-success',
    /** @styleType color @styleProp textFieldBorderColorSuccess @styleState hovered */
    textFieldBorderColorSuccessHover: '--plasma-range-textfield-border-color-success-hover',
    /** @styleType color @styleProp textFieldBorderColorSuccess @styleState focused */
    textFieldBorderColorSuccessFocus: '--plasma-range-textfield-border-color-success-focus',
    /** @styleType color */
    textFieldBorderColorEdited: '--plasma-range-textfield-border-color-edited',
    /** @styleType color @styleProp textFieldBorderColorEdited @styleState hovered */
    textFieldBorderColorEditedHover: '--plasma-range-textfield-border-color-edited-hover',
    /** @styleType color @styleProp textFieldBorderColorEdited @styleState focused */
    textFieldBorderColorEditedFocus: '--plasma-range-textfield-border-color-edited-focus',

    /** @styleType color */
    textFieldColorReadOnly: '--plasma-range-textfield-color-readonly',
    /** @styleType color */
    textFieldBackgroundColorReadOnly: '--plasma-range-textfield-background-color-readonly',
    /** @styleType color */
    textFieldBorderColorReadOnly: '--plasma-range-textfield-border-color-readonly',
    /** @styleType color */
    textFieldPlaceholderColorReadOnly: '--plasma-range-textfield-placeholder-color-readonly',

    /** @styleType value */
    textFieldSizing: '--plasma-range-textfield-sizing',
    /** @styleType dimension */
    textFieldHeight: '--plasma-range-textfield-height',
    /** @styleType dimension */
    textFieldBorderWidth: '--plasma-range-textfield-border-width',
    /** @styleType dimension */
    textFieldBorderRadius: '--plasma-range-textfield-border-radius',
    /** @styleType value */
    textFieldPadding: '--plasma-range-textfield-padding',
    /** @styleType dimension */
    textFieldLeftContentMargin: '--plasma-range-textfield__left-content-margin',
    /** @styleType dimension */
    textFieldRightContentMargin: '--plasma-range-textfield__right-content-margin',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontFamily */
    textFieldFontFamily: '--plasma-range-textfield-font-family',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontStyle */
    textFieldFontStyle: '--plasma-range-textfield-font-style',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontSize */
    textFieldFontSize: '--plasma-range-textfield-font-size',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontWeight */
    textFieldFontWeight: '--plasma-range-textfield-font-weight',
    /** @styleType typography @styleProp textFieldStyle @stylePart letterSpacing */
    textFieldLetterSpacing: '--plasma-range-textfield-letter-spacing',
    /** @styleType typography @styleProp textFieldStyle @stylePart lineHeight */
    textFieldLineHeight: '--plasma-range-textfield-line-height',

    /** @styleType color */
    textFieldTextBeforeColor: '--plasma-range-textfield__before-text-color',
    /** @styleType color */
    textFieldTextAfterColor: '--plasma-range-textfield__after-text-color',
    /** @styleType dimension */
    textFieldTextBeforeMargin: '--plasma-range-textfield__before-text-margin',
    /** @styleType dimension */
    textFieldTextAfterMargin: '--plasma-range-textfield__after-text-margin',

    /** @styleType color */
    textFieldDividerColorSuccess: '--plasma-range-textfield__divider-color-success',
    /** @styleType color */
    textFieldDividerColorError: '--plasma-range-textfield__divider-color-error',
    /** @styleType color */
    textFieldDividerColorHover: '--plasma-range-textfield__divider-color-hover',
    /** @styleType color */
    textFieldDividerColorFocus: '--plasma-range-textfield__divider-color-focus',
};
