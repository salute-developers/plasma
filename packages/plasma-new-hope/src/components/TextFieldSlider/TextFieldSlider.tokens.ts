export const classes = {
    errorAnimation: 'error-animation',
};

export const tokens = {
    /** Токены полей ввода */
    /** @styleType color */
    textFieldColor: '--plasma-textfield-slider-color',
    /** @styleType color */
    textFieldPlaceholderColorFocus: '--plasma-textfield-slider__placeholder-color-focus',
    /** @styleType color */
    textFieldFocusColor: '--plasma-textfield-slider-focus-color',
    /** @styleType color */
    textFieldPlaceholderColor: '--plasma-textfield-slider-placeholder-color',
    /** @styleType color */
    textFieldCaretColor: '--plasma-textfield-slider-caret-color',

    /** @styleType color */
    textFieldBackgroundColor: '--plasma-textfield-slider-background-color',
    /** @styleType color @styleProp textFieldBackgroundColor @styleState hovered */
    textFieldBackgroundColorHover: '--plasma-textfield-slider-background-color-hover',
    /** @styleType color */
    textFieldBackgroundColorFocus: '--plasma-textfield-slider-background-color-focus',

    /** @styleType color */
    textFieldBackgroundSuccessColor: '--plasma-textfield-slider-background-color-success',
    /** @styleType color @styleProp textFieldBackgroundSuccessColor @styleState hovered */
    textFieldBackgroundSuccessColorHover: '--plasma-textfield-slider-background-color-success-hover',
    /** @styleType color */
    textFieldBackgroundSuccessColorFocus: '--plasma-textfield-slider-background-color-success-focus',

    /** @styleType color */
    textFieldBorderColor: '--plasma-textfield-slider-border-color',
    /** @styleType color @styleProp textFieldBorderColor @styleState hovered */
    textFieldBorderColorHover: '--plasma-textfield-slider-border-color-hover',
    /** @styleType color */
    textFieldBorderColorFocus: '--plasma-textfield-slider-border-color-focus',
    /** @styleType color */
    textFieldBorderColorError: '--plasma-textfield-slider-border-color-error',
    /** @styleType color @styleProp textFieldBorderColorError @styleState hovered */
    textFieldBorderColorErrorHover: '--plasma-textfield-slider-border-color-error-hover',
    /** @styleType color */
    textFieldBorderColorErrorFocus: '--plasma-textfield-slider-border-color-error-focus',
    /** @styleType color */
    textFieldBorderColorSuccess: '--plasma-textfield-slider-border-color-success',
    /** @styleType color @styleProp textFieldBorderColorSuccess @styleState hovered */
    textFieldBorderColorSuccessHover: '--plasma-textfield-slider-border-color-success-hover',
    /** @styleType color */
    textFieldBorderColorSuccessFocus: '--plasma-textfield-slider-border-color-success-focus',

    /** @styleType color */
    textFieldColorReadOnly: '--plasma-textfield-slider-color-readonly',
    /** @styleType color */
    textFieldBackgroundColorReadOnly: '--plasma-textfield-slider-background-color-readonly',
    /** @styleType color */
    textFieldBorderColorReadOnly: '--plasma-textfield-slider-border-color-readonly',
    /** @styleType color */
    textFieldPlaceholderColorReadOnly: '--plasma-textfield-slider-placeholder-color-readonly',
    /** @styleType float */
    textFieldReadOnlyOpacity: '--plasma-textfield-slider-readonly-opacity',

    /** @styleType color */
    textFieldErrorColor: '--plasma-textfield-slider_error-color',
    /** @styleType color */
    textFieldBackgroundErrorColor: '--plasma-textfield-slider_background_error-color',
    /** @styleType color */
    textFieldBorderErrorColor: '--plasma-textfield-slider_border_error-color',

    /** @styleType dimension */
    textFieldHeight: '--plasma-textfield-slider-height',
    /** @styleType dimension */
    textFieldBorderWidth: '--plasma-textfield-slider-border-width',
    /** @styleType dimension */
    textFieldBorderRadius: '--plasma-textfield-slider-border-radius',
    /** @styleType value */
    textFieldPadding: '--plasma-textfield-slider-padding',
    /** @styleType dimension */
    textFieldLeftContentMargin: '--plasma-textfield-slider__left-content-margin',
    /** @styleType dimension */
    textFieldRightContentMargin: '--plasma-textfield-slider__right-content-margin',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontFamily */
    textFieldFontFamily: '--plasma-textfield-slider-font-family',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontStyle */
    textFieldFontStyle: '--plasma-textfield-slider-font-style',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontSize */
    textFieldFontSize: '--plasma-textfield-slider-font-size',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontWeight */
    textFieldFontWeight: '--plasma-textfield-slider-font-weight',
    /** @styleType typography @styleProp textFieldStyle @stylePart letterSpacing */
    textFieldLetterSpacing: '--plasma-textfield-slider-letter-spacing',
    /** @styleType typography @styleProp textFieldStyle @stylePart lineHeight */
    textFieldLineHeight: '--plasma-textfield-slider-line-height',

    /** @styleType color */
    textFieldTextBeforeColor: '--plasma-textfield-slider__before-text-color',
    /** @styleType color */
    textFieldTextAfterColor: '--plasma-textfield-slider__after-text-color',
    /** @styleType dimension */
    textFieldTextBeforeMargin: '--plasma-textfield-slider__before-text-margin',
    /** @styleType dimension */
    textFieldTextAfterMargin: '--plasma-textfield-slider__after-text-margin',
    /** @styleType color */
    textFieldContentSlotColor: '--plasma-textfield-slider__content-color',
    /** @styleType color @styleProp textFieldContentSlotColor @styleState hovered */
    textFieldContentSlotColorHover: '--plasma-textfield-slider__content-color-hover',
    /** @styleType color @styleProp textFieldContentSlotColor @styleState pressed */
    textFieldContentSlotColorActive: '--plasma-textfield-slider__content-color-active',
    /** @styleType color */
    textFieldContentRightSlotColor: '--plasma-textfield-slider__content-right-color',
    /** @styleType color @styleProp textFieldContentRightSlotColor @styleState hovered */
    textFieldContentRightSlotColorHover: '--plasma-textfield-slider__content-right-color-hover',
    /** @styleType color @styleProp textFieldContentRightSlotColor @styleState pressed */
    textFieldContentRightSlotColorActive: '--plasma-textfield-slider__content-right-color-active',
    /** @styleType float */
    textFieldContentSlotRightOpacityReadOnly: '--plasma-textfield-slider__content-right-opacity-readonly',

    /** Токены лейбла */
    /** @styleType color */
    labelColor: '--plasma-textfield-slider__label-color',
    /** @styleType color */
    labelColorReadOnly: '--plasma-textfield-slider__label-color-readonly',
    /** @styleType dimension */
    labelOffset: '--plasma-textfield-slider__label-offset',

    /** @styleType typography @styleProp labelStyle @stylePart fontFamily */
    labelFontFamily: '--plasma-textfield-slider__label-font-family',
    /** @styleType typography @styleProp labelStyle @stylePart fontStyle */
    labelFontStyle: '--plasma-textfield-slider__label-font-style',
    /** @styleType typography @styleProp labelStyle @stylePart fontSize */
    labelFontSize: '--plasma-textfield-slider__label-font-size',
    /** @styleType typography @styleProp labelStyle @stylePart fontWeight */
    labelFontWeight: '--plasma-textfield-slider__label-font-weight',
    /** @styleType typography @styleProp labelStyle @stylePart letterSpacing */
    labelLetterSpacing: '--plasma-textfield-slider__label-letter-spacing',
    /** @styleType typography @styleProp labelStyle @stylePart lineHeight */
    labelLineHeight: '--plasma-textfield-slider__label-line-height',

    /* label-placement-inner */
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontFamily */
    labelInnerFontFamily: '--plasma-textfield-slider-placement_inner__label-font-family',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontStyle */
    labelInnerFontStyle: '--plasma-textfield-slider-placement_inner__label-font-style',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontSize */
    labelInnerFontSize: '--plasma-textfield-slider-placement_inner__label-font-size',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontWeight */
    labelInnerFontWeight: '--plasma-textfield-slider-placement_inner__label-font-weight',
    /** @styleType typography @styleProp labelInnerStyle @stylePart letterSpacing */
    labelInnerLetterSpacing: '--plasma-textfield-slider-placement_inner__label-letter-spacing',
    /** @styleType typography @styleProp labelInnerStyle @stylePart lineHeight */
    labelInnerLineHeight: '--plasma-textfield-slider-placement_inner__label-line-height',

    /** @styleType dimension */
    labelInnerPadding: '--plasma-textfield-slider-placement_inner__label-padding',
    /** @styleType dimension */
    contentLabelInnerPadding: '--plasma-textfield-slider-placement_inner__content-padding',

    /** @styleType color */
    optionalColor: '--plasma-textfield-slider__optional-color',

    /* Токены для title caption */
    /** @styleType color */
    titleCaptionColor: '--plasma-textfield-slider__title-caption-color',
    /** @styleType color */
    titleCaptionColorReadOnly: '--plasma-textfield-slider__title-caption-color-readonly',
    /** @styleType dimension */
    titleCaptionInnerLabelOffset: '--plasma-textfield-slider__title-caption-label-inner-offset',

    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontFamily */
    titleCaptionFontFamily: '--plasma-textfield-slider__title-caption-font-family',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontStyle */
    titleCaptionFontStyle: '--plasma-textfield-slider__title-caption-font-style',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontSize */
    titleCaptionFontSize: '--plasma-textfield-slider__title-caption-font-size',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontWeight */
    titleCaptionFontWeight: '--plasma-textfield-slider__title-caption-font-weight',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart letterSpacing */
    titleCaptionLetterSpacing: '--plasma-textfield-slider__title-caption-letter-spacing',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart lineHeight */
    titleCaptionLineHeight: '--plasma-textfield-slider__title-caption-line-height',

    /** Токены индикатора */
    /** @styleType color */
    indicatorColor: '--plasma-textfield-slider__indicator-color',

    /** @styleType dimension */
    indicatorSize: '--plasma-textfield-slider__indicator-size',
    /** @styleType dimension */
    indicatorSizeOuter: '--plasma-textfield-slider__indicator-size-outer',
    /** @styleType dimension */
    indicatorPlacement: '--plasma-textfield-slider__indicator-placement',
    /** @styleType dimension */
    indicatorPlacementRight: '--plasma-textfield-slider__indicator-placement-right',
    /** @styleType dimension */
    indicatorOuterPlacement: '--plasma-textfield-slider__indicator-placement-outer',
    /** @styleType dimension */
    indicatorOuterPlacementRight: '--plasma-textfield-slider__indicator-placement-outer-right',

    /* токены для hint */
    /** @styleType value */
    hintMargin: '--plasma-textfield-slider-info-wrapper-hint-margin',
    /** @styleType dimension */
    hintTargetSize: '--plasma-textfield-slider-info-wrapper-hint-target-size',
    /** @styleType dimension */
    hintCustomIconTargetSize: '--plasma-textfield-slider-info-wrapper-hint-custom-icon-target-size',
    /** @styleType color */
    hintIconColor: '--plasma-textfield-slider-info-wrapper-hint-icon-color',
    /** @styleType value */
    hintWithoutLabelPlacementOffset: '--plasma-textfield-slider-info-wrapper-hint-without-label-placement-offset',
    /** @styleType value */
    hintPlacementInnerMargin: '--plasma-textfield-slider-info-wrapper-hint-placement-inner-offset',
    /** @styleType dimension */
    hintInnerLabelPlacementOffset: '--plasma-textfield-slider_old_hint-inner-label-placement-offset',
    /** @styleType value */
    clearHintInnerLabelPlacementOffset: '--plasma-textfield-slider_old_clear-hint-inner-label-placement-offset',

    /** @styleType dimension */
    hintTooltipPaddingTop: '--plasma-textfield-slider-hint-tooltip-padding-top',
    /** @styleType dimension */
    hintTooltipPaddingRight: '--plasma-textfield-slider-hint-tooltip-padding-right',
    /** @styleType dimension */
    hintTooltipPaddingBottom: '--plasma-textfield-slider-hint-tooltip-padding-bottom',
    /** @styleType dimension */
    hintTooltipPaddingLeft: '--plasma-textfield-slider-hint-tooltip-padding-left',
    /** @styleType dimension */
    hintTooltipMinHeight: '--plasma-textfield-slider-hint-tooltip-min-height',
    /** @styleType color */
    hintTooltipBackgroundColor: '--plasma-textfield-slider-hint-tooltip-background-color',
    /** @styleType shadow */
    hintTooltipBoxShadow: '--plasma-textfield-slider-hint-tooltip-box-shadow',
    /** @styleType dimension */
    hintTooltipBorderRadius: '--plasma-textfield-slider-hint-tooltip-border-radius',
    /** @styleType color */
    hintTooltipColor: '--plasma-textfield-slider-hint-tooltip-color',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart fontFamily */
    hintTooltipTextFontFamily: '--plasma-textfield-slider-hint-tooltip-text-font-family',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart fontSize */
    hintTooltipTextFontSize: '--plasma-textfield-slider-hint-tooltip-text-font-size',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart fontStyle */
    hintTooltipTextFontStyle: '--plasma-textfield-slider-hint-tooltip-text-font-style',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart fontWeight */
    hintTooltipTextFontWeight: '--plasma-textfield-slider-hint-tooltip-text-font-weight',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart letterSpacing */
    hintTooltipTextFontLetterSpacing: '--plasma-textfield-slider-hint-tooltip-text-font-letter-spacing',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart lineHeight */
    hintTooltipTextFontLineHeight: '--plasma-textfield-slider-hint-tooltip-text-font-line-height',
    /** @styleType dimension */
    hintTooltipContentLeftMargin: '--plasma-textfield-slider-hint-tooltip-content-left-margin',
    /** @styleType dimension */
    hintTooltipArrowMaskWidth: '--plasma-textfield-slider-hint-tooltip-arrow-mask-width',
    /** @styleType dimension */
    hintTooltipArrowMaskHeight: '--plasma-textfield-slider-hint-tooltip-arrow-mask-height',
    /** @styleType value */
    hintTooltipArrowMaskImage: '--plasma-textfield-slider-hint-tooltip-arrow-mask-image',
    /** @styleType color */
    hintTooltipArrowBackground: '--plasma-textfield-slider-hint-tooltip-arrow-background',
    /** @styleType dimension */
    hintTooltipArrowHeight: '--plasma-textfield-slider-hint-tooltip-arrow-height',
    /** @styleType dimension */
    hintTooltipArrowEdgeMargin: '--plasma-textfield-slider-hint-tooltip-arrow-edge-margin',

    /* токены slider */
    /** @styleType dimension */
    sliderContainerOffset: '--plasma-textfield-slider__slider-container-offset',

    /** @styleType dimension */
    sliderTrackHeight: '--plasma-textfield-slider__slider-track-height',
    /** @styleType color */
    sliderTrackBackground: '--plasma-textfield-slider__slider-track-background',
    /** @styleType shape */
    sliderTrackBorderRadius: '--plasma-textfield-slider__slider-track-border-radius',

    /** @styleType color */
    sliderProgressBackground: '--plasma-textfield-slider__slider-progress-background',

    /** @styleType dimension */
    sliderThumbWidth: '--plasma-textfield-slider__slider-thumb-width',
    /** @styleType dimension */
    sliderThumbHeight: '--plasma-textfield-slider__slider-thumb-height',
    /** @styleType color */
    sliderThumbBackground: '--plasma-textfield-slider__slider-thumb-background',

    /** @styleType value */
    sliderThumbInnerContent: '--plasma-textfield-slider__slider-thumb-inner-content',
    /** @styleType dimension */
    sliderThumbBorderWidth: '--plasma-textfield-slider__slider-thumb-border-width',
    /** @styleType shape */
    sliderThumbBorderRadius: '--plasma-textfield-slider__slider-thumb-border-radius',

    /** @styleType color */
    sliderThumbBorderColor: '--plasma-textfield-slider__slider-thumb-border-color',
    /** @styleType color */
    sliderThumbFocusBorderColor: '--plasma-textfield-slider__slider-thumb-focus-border-color',

    /* токены для scale */
    /** @styleType dimension */
    scaleWrapperOffset: '--plasma-textfield-slider__scale-wrapper-offset',
    /** @styleType dimension */
    scaleWrapperPaddingTop: '--plasma-textfield-slider__scale-wrapper-padding-top',

    /** @styleType color */
    scaleValueColor: '--plasma-textfield-slider__scale-value-color',
    /** @styleType typography @styleProp scaleValueStyle @stylePart fontSize */
    scaleValueFontSize: '--plasma-textfield-slider__scale-value-font-size',
    /** @styleType typography @styleProp scaleValueStyle @stylePart fontFamily */
    scaleValueFontFamily: '--plasma-textfield-slider__scale-value-font-family',
    /** @styleType typography @styleProp scaleValueStyle @stylePart fontStyle */
    scaleValueFontStyle: '--plasma-textfield-slider__scale-value-font-style',
    /** @styleType typography @styleProp scaleValueStyle @stylePart fontWeight */
    scaleValueFontWeight: '--plasma-textfield-slider__scale-value-font-weight',
    /** @styleType typography @styleProp scaleValueStyle @stylePart letterSpacing */
    scaleValueLetterSpacing: '--plasma-textfield-slider__scale-value-letter-spacing',
    /** @styleType typography @styleProp scaleValueStyle @stylePart lineHeight */
    scaleValueLineHeight: '--plasma-textfield-slider__scale-value-line-height',

    /* токены для scaleTicks */
    /** @styleType dimension */
    scaleTickSize: '--plasma-textfield-slider__scale-tick-size',
    /** @styleType color */
    scaleTickDotColor: '--plasma-textfield-slider__scale-tick-dot-color',
    /** @styleType color */
    scaleTickDotFilledColor: '--plasma-textfield-slider__scale-tick-dot-filled-color',

    /** Прозрачность для всего компонента в состоянии disabled */
    /** @styleType float */
    disabledOpacity: '--plasma-textfield-slider-disabled-opacity',
    /** @styleType float */
    disabledBackgroundOpacity: '--plasma-textfield-slider-disabled-background-opacity',
    /** @styleType float */
    disabledInnerContentOpacity: '--plasma-textfield-slider-disabled-inner-content-opacity',
};
