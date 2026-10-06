export const privateTokens = {
    inputActualHeight: '--plasma_private-textarea-input-actual-height',
    wrapperPaddingBottomInnerLabel: '--plasma_private-textarea-inner-label-padding-bottom',
    dividerColor: '--plasma_private-textarea-divider-color',
    scrollbarCompensationPadding: '--plasma_private-textarea-scrollbar-compensation-padding',
};

export const classes = {
    /** Класс отвечающий за поднятие и уменьшение плейсхолдера */
    innerPlaceholderUp: 'inner-placeholder-up',
    /** Класс отвечающий за изменение цвета плейсхолдера при фокусе */
    focusedOuterPlaceholderColor: 'focused-outer-placeholder-color',
    /** Класс отвечающий за скрытие плейсхолдера */
    hidePlaceHolder: 'hide-placeholder',
    /** Класс для компонента `StyledContainer` */
    styledContainer: 'textarea-container',
    /** Класс для компонента `StyledTextArea` */
    styledTextArea: 'textarea',
    /** Класс для компонента `StyledTextAreaWrapper` */
    styledTextAreaWrapper: 'textarea-wrapper',
    /** Класс для компонента `StyledPlaceholder` */
    styledPlaceholder: 'textarea-placeholder',
    /** Класс для компонента `StyledHelpers` */
    styledHelpers: 'textarea-helpers',
    innerLabelPlacement: 'label-placement-inner',
    outerLabelPlacement: 'label-placement-outer',
    /** Класс для view `clear` */
    clear: 'textarea-clear',
    hasHint: 'textarea-has-hint',
    hasRightContent: 'textarea-has-right-content',
    hasDivider: 'textarea-has-divider',
    requiredAlignRight: 'required-align-right',
    hasHeaderSlot: 'textarea-has-header-slot',
    styledContentWrapper: 'textarea-content-wrapper',
    leftHelperFocus: 'textarea-left-helper-focus',
};

export const tokens = {
    /** @styleType color */
    backgroundColor: '--plasma-textarea-background-color',
    /** @styleType color @styleProp backgroundColor @styleState hovered */
    backgroundColorHover: '--plasma-textarea-background-color-hover',
    /** @styleType color @styleProp backgroundColor @styleState pressed */
    backgroundColorActive: '--plasma-textarea-background-color-active',
    /** @styleType color @styleProp backgroundColor @styleState focused */
    backgroundColorFocus: '--plasma-textarea-background-color-focus',

    /** @styleType color */
    inputBackgroundColor: '--plasma-textarea-input-background-color',
    /** @styleType color */
    inputBackgroundColorHover: '--plasma-textarea-input-background-color-hover',
    /** @styleType color */
    inputBackgroundColorActive: '--plasma-textarea-input-background-color-active',
    /** @styleType color */
    inputBackgroundColorFocus: '--plasma-textarea-input-background-color-focus',

    /** @styleType shadow */
    boxShadowSecondary: '--plasma-textarea-box-shadow-secondary',

    /** @styleType color */
    inputBorderColor: '--plasma-textarea-input-border-color',
    /** @styleType color @styleProp inputBorderColor @styleState hovered */
    inputBorderColorHover: '--plasma-textarea-input-border-color-hover',
    /** @styleType color @styleProp inputBorderColor @styleState pressed */
    inputBorderColorActive: '--plasma-textarea-input-border-color-active',
    /** @styleType color @styleProp inputBorderColor @styleState focused */
    inputBorderColorFocus: '--plasma-textarea-input-border-color-focus',

    /** @styleType color */
    helpersBackgroundColor: '--plasma-textarea-helpers-background-color',
    /** @styleType color */
    helpersBackgroundColorHover: '--plasma-textarea-helpers-background-color-hover',
    /** @styleType color */
    helpersBackgroundColorActive: '--plasma-textarea-helpers-background-color-active',
    /** @styleType color */
    helpersBackgroundColorFocus: '--plasma-textarea-helpers-background-color-focus',

    /** @styleType color */
    inputColor: '--plasma-textarea-input-color',
    /** @styleType color */
    inputColorFocus: '--plasma-textarea-input-color-focus',

    /** Цвет каретки */
    /** @styleType color */
    inputCaretColor: '--plasma-textarea-input-caret-color',
    /** @styleType color */
    placeholderColor: '--plasma-textarea-placeholder-color',
    /** @styleType color */
    placeholderColorFocus: '--plasma-textarea-placeholder-color-focus',
    /** @styleType color */
    optionalColor: '--plasma-textarea__optional-color',

    /** @styleType color */
    leftHelperColor: '--plasma-textarea-left-helper-color',
    /** @styleType color @styleProp leftHelperColor @styleState focused */
    leftHelperColorFocus: '--plasma-textarea-left-helper-color-focus',
    /** @styleType color */
    rightHelperColor: '--plasma-textarea-right-helper-color',

    /** @styleType value */
    leftHelperOverflow: '--plasma-textarea-left-helper-overflow',
    /** @styleType value */
    leftHelperWhiteSpace: '--plasma-textarea-left-helper-white-space',
    /** @styleType value */
    leftHelperTextOverflow: '--plasma-textarea-left-helper-text-overflow',

    /** Цвета для read-only состояния */
    /** @styleType color */
    inputColorReadOnly: '--plasma-textarea-input-color-read-only',
    /** @styleType color */
    backgroundColorReadOnly: '--plasma-textarea-background-color-read-only',
    /** @styleType color */
    borderColorReadOnly: '--plasma-textarea-border-color-readonly',
    /** @styleType color */
    containerBorderColorReadOnly: '--plasma-textarea-container-border-color-readonly',
    /** @styleType float */
    readOnlyOpacity: '--plasma-textarea-read-only-opacity',

    /** @styleType color */
    borderColor: '--plasma-textarea-border-color',
    /** @styleType color @styleProp borderColor @styleState hovered */
    borderColorHover: '--plasma-textarea-border-color-hover',
    /** @styleType color @styleProp borderColor @styleState focused */
    borderColorFocus: '--plasma-textarea-border-color-focus',

    /** @styleType color */
    dividerColor: '--plasma-textarea-divider-color',
    /** @styleType color */
    dividerColorHover: '--plasma-textarea-divider-color-hover',
    /** @styleType color */
    dividerColorFocus: '--plasma-textarea-divider-color-focus',
    /** @styleType color */
    dividerColorReadOnly: '--plasma-textarea-divider-color-readonly',

    /** @styleType shadow */
    boxShadow: '--plasma-textarea-box-shadow',

    /** @styleType value */
    inputWidth: '--plasma-textarea-input-width',
    /** @styleType dimension */
    inputHeight: '--plasma-textarea-input-height',
    /** @styleType dimension */
    inputMinHeight: '--plasma-textarea-input-min-height',
    /** @styleType dimension */
    borderSize: '--plasma-textarea-border-size',
    /** @styleType dimension */
    borderRadius: '--plasma-textarea-border-radius',
    /** @styleType dimension */
    borderRadiusWithHelpers: '--plasma-textarea-border-radius-with-helpers',

    /** Отступы для элемента textarea */
    /** @styleType dimension */
    inputPaddingTop: '--plasma-textarea-input-padding-top',
    /** @styleType dimension */
    inputPaddingRight: '--plasma-textarea-input-padding-right',
    /** @styleType dimension */
    inputPaddingRightWithRightContent: '--plasma-textarea-input-padding-right-with-right-content',
    /** @styleType dimension */
    inputPaddingBottom: '--plasma-textarea-input-padding-bottom',
    /** @styleType dimension */
    inputPaddingBottomWithHelpers: '--plasma-textarea-input-padding-bottom-with-helpers',
    /** @styleType dimension */
    inputPaddingBottomInnerLabel: '--plasma-textarea-input-padding-bottom-inner-label',
    /** @styleType dimension */
    inputPaddingLeft: '--plasma-textarea-input-padding-left',

    /** Отступы для блока подписей */
    /** @styleType dimension */
    helpersPaddingTop: '--plasma-textarea-helpers-padding-top',
    /** @styleType dimension */
    helpersPaddingRight: '--plasma-textarea-helpers-padding-right',
    /** @styleType dimension */
    helpersPaddingBottom: '--plasma-textarea-helpers-padding-bottom',
    /** @styleType dimension */
    helpersPaddingLeft: '--plasma-textarea-helpers-padding-left',
    /** @styleType dimension */
    outsideHelpersPaddingTop: '--plasma-textarea-outside-helpers-padding-top',
    /** @styleType dimension */
    outsideHelpersPaddingBottom: '--plasma-textarea-outside-helpers-padding-bottom',
    /** @styleType dimension */
    outsideHelpersPaddingLeft: '--plasma-textarea-outside-helpers-padding-left',
    /** @styleType dimension */
    outsideHelpersPaddingRight: '--plasma-textarea-outside-helpers-padding-right',
    /** @styleType dimension */
    helpersOffset: '--plasma-textarea-helpers-offset',

    /** Позиционирование контента справа */
    /** @styleType dimension */
    rightContentTop: '--plasma-textarea-right-content-top',
    /** @styleType dimension */
    rightContentRight: '--plasma-textarea-right-content-right',
    /** @styleType dimension */
    rightContentHeight: '--plasma-textarea-right-content-height',
    /** @styleType dimension */
    rightContentWidth: '--plasma-textarea-right-content-width',

    /* Tokens for right content slot */
    /** @styleType color */
    rightContentColor: '--plasma-textarea-right-content-color',
    /** @styleType color */
    rightContentColorHover: '--plasma-textarea-right-content-color-hover',
    /** @styleType color */
    rightContentColorActive: '--plasma-textarea-right-content-color-active',
    /** @styleType float */
    contentSlotRightOpacityReadOnly: '--plasma-textarea-right-content-opacity-readonly',

    /** Токены лейбла */
    /** @styleType color */
    labelOuterColor: '--plasma-textarea-label-outer-color',
    /** @styleType color */
    labelInnerColor: '--plasma-textarea-label-inner-color',

    /** @styleType typography @styleProp labelOuterTypography @stylePart fontFamily */
    labelOuterFontFamily: '--plasma-textarea-label-outer-font-family',
    /** @styleType typography @styleProp labelOuterTypography @stylePart fontStyle */
    labelOuterFontStyle: '--plasma-textarea-label-outer-font-style',
    /** @styleType typography @styleProp labelOuterTypography @stylePart fontSize */
    labelOuterFontSize: '--plasma-textarea-label-outer-font-size',
    /** @styleType typography @styleProp labelOuterTypography @stylePart fontWeight */
    labelOuterFontWeight: '--plasma-textarea-label-outer-font-weight',
    /** @styleType typography @styleProp labelOuterTypography @stylePart letterSpacing */
    labelOuterLetterSpacing: '--plasma-textarea-label-outer-letter-spacing',
    /** @styleType typography @styleProp labelOuterTypography @stylePart lineHeight */
    labelOuterLineHeight: '--plasma-textarea-label-outer-line-height',

    /** @styleType dimension */
    labelMarginBottom: '--plasma-textarea-label-margin-bottom',

    /* label-placement-inner */
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontFamily */
    labelInnerFontFamily: '--plasma-textarea-label-inner-font-family',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontStyle */
    labelInnerFontStyle: '--plasma-textarea-label-inner-font-style',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontSize */
    labelInnerFontSize: '--plasma-textarea-label-inner-font-size',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontWeight */
    labelInnerFontWeight: '--plasma-textarea-label-inner-font-weight',
    /** @styleType typography @styleProp labelInnerStyle @stylePart letterSpacing */
    labelInnerLetterSpacing: '--plasma-textarea-label-inner-letter-spacing',
    /** @styleType typography @styleProp labelInnerStyle @stylePart lineHeight */
    labelInnerLineHeight: '--plasma-textarea-label-inner-line-height',

    /** @styleType dimension */
    labelInnerTop: '--plasma-textarea-label-inner-top',
    /** @styleType dimension */
    labelInnerTopHelper: '--plasma-textarea-label-inner-top-helper',
    /** @styleType dimension */
    labelInnerMarginBottom: '--plasma-textarea-label-inner-margin-bottom',

    /* Типографика для input */
    /** @styleType typography @styleProp inputStyle @stylePart fontFamily */
    inputFontFamily: '--plasma-textarea-input-font-family',
    /** @styleType typography @styleProp inputStyle @stylePart fontStyle */
    inputFontStyle: '--plasma-textarea-input-font-style',
    /** @styleType typography @styleProp inputStyle @stylePart fontSize */
    inputFontSize: '--plasma-textarea-input-font-size',
    /** @styleType typography @styleProp inputStyle @stylePart fontWeight */
    inputFontWeight: '--plasma-textarea-input-font-weight',
    /** @styleType typography @styleProp inputStyle @stylePart letterSpacing */
    inputLetterSpacing: '--plasma-textarea-input-letter-spacing',
    /** @styleType typography @styleProp inputStyle @stylePart lineHeight */
    inputLineHeight: '--plasma-textarea-input-line-height',

    /* Типографика для блока подписей */
    /** @styleType typography @styleProp helpersStyle @stylePart fontFamily */
    helpersFontFamily: '--plasma-textarea-helpers-font-family',
    /** @styleType typography @styleProp helpersStyle @stylePart fontStyle */
    helpersFontStyle: '--plasma-textarea-helpers-font-style',
    /** @styleType typography @styleProp helpersStyle @stylePart fontSize */
    helpersFontSize: '--plasma-textarea-helpers-font-size',
    /** @styleType typography @styleProp helpersStyle @stylePart fontWeight */
    helpersFontWeight: '--plasma-textarea-helpers-font-weight',
    /** @styleType typography @styleProp helpersStyle @stylePart letterSpacing */
    helpersLetterSpacing: '--plasma-textarea-helpers-letter-spacing',
    /** @styleType typography @styleProp helpersStyle @stylePart lineHeight */
    helpersLineHeight: '--plasma-textarea-helpers-line-height',

    /** @styleType color */
    titleCaptionColor: '--plasma-textarea__title-caption-color',
    /** @styleType color */
    titleCaptionColorReadOnly: '--plasma-textarea__title-caption-color-readonly',
    /** @styleType dimension */
    titleCaptionInnerLabelOffset: '--plasma-textarea__title-caption-label-inner-offset',

    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontFamily */
    titleCaptionFontFamily: '--plasma-textarea__title-caption-font-family',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontStyle */
    titleCaptionFontStyle: '--plasma-textarea__title-caption-font-style',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontSize */
    titleCaptionFontSize: '--plasma-textarea__title-caption-font-size',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontWeight */
    titleCaptionFontWeight: '--plasma-textarea__title-caption-font-weight',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart letterSpacing */
    titleCaptionLetterSpacing: '--plasma-textarea__title-caption-letter-spacing',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart lineHeight */
    titleCaptionLineHeight: '--plasma-textarea__title-caption-line-height',

    /** Прозрачность для всего компонента в состоянии disabled */
    /** @styleType float */
    disabledOpacity: '--plasma-textarea-disabled-opacity',
    /** @styleType float */
    disabledBackgroundOpacity: '--plasma-textarea-disabled-background-opacity',
    /** @styleType float */
    disabledInnerContentOpacity: '--plasma-textarea-disabled-inner-content-opacity',
    /** @styleType color */
    inputColorDisabled: '--plasma-textarea-input-color-disabled',

    /** Токены для tooltip */
    /** @styleType value */
    hintMargin: '--plasma-textarea__hint-margin',
    /** @styleType dimension */
    hintTargetSize: '--plasma-textarea__hint-target-size',
    /** @styleType dimension */
    hintCustomIconTargetSize: '--plasma-textarea__hint-custom-icon-target-size',
    /** @styleType color */
    hintIconColor: '--plasma-textarea__hint-icon-color',
    /** @styleType dimension */
    hintInnerLabelPlacementOffset: '--plasma-textarea__hint-inner-label-placement-offset',

    /** @styleType color */
    tooltipBackgroundColor: '--plasma-textarea__tooltip-background-color',
    /** @styleType shadow */
    tooltipBoxShadow: '--plasma-textarea__tooltip-box-shadow',
    /** @styleType color */
    tooltipColor: '--plasma-textarea__tooltip-color',

    /** @styleType dimension */
    tooltipPaddingTop: '--plasma-textarea__tooltip-padding-top',
    /** @styleType dimension */
    tooltipPaddingRight: '--plasma-textarea__tooltip-padding-right',
    /** @styleType dimension */
    tooltipPaddingBottom: '--plasma-textarea__tooltip-padding-bottom',
    /** @styleType dimension */
    tooltipPaddingLeft: '--plasma-textarea__tooltip-padding-left',
    /** @styleType dimension */
    tooltipMinHeight: '--plasma-textarea__tooltip-min-height',
    /** @styleType dimension */
    tooltipBorderRadius: '--plasma-textarea__tooltip-border-radius',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontFamily */
    tooltipTextFontFamily: '--plasma-textarea__tooltip-text-font-family',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontSize */
    tooltipTextFontSize: '--plasma-textarea__tooltip-text-font-size',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontStyle */
    tooltipTextFontStyle: '--plasma-textarea__tooltip-text-font-style',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontWeight */
    tooltipTextFontWeight: '--plasma-textarea__tooltip-text-font-weight',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart letterSpacing */
    tooltipTextFontLetterSpacing: '--plasma-textarea__tooltip-text-font-letter-spacing',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart lineHeight */
    tooltipTextFontLineHeight: '--plasma-textarea__tooltip-text-font-line-height',
    /** @styleType dimension */
    tooltipContentLeftMargin: '--plasma-textarea__tooltip-content-left-margin',
    /** @styleType dimension */
    tooltipArrowMaskWidth: '--plasma-textarea__tooltip-arrow-mask-width',
    /** @styleType dimension */
    tooltipArrowMaskHeight: '--plasma-textarea__tooltip-arrow-mask-height',
    /** @styleType value */
    tooltipArrowMaskImage: '--plasma-textarea__tooltip-arrow-mask-image',
    /** @styleType dimension */
    tooltipArrowHeight: '--plasma-textarea__tooltip-arrow-height',
    /** @styleType dimension */
    tooltipArrowEdgeMargin: '--plasma-textarea__tooltip-arrow-edge-margin',
    /** @styleType color */
    tooltipArrowBackground: '--plasma-textarea__tooltip-arrow-background',

    /** Токены скроллбара */
    /** @styleType dimension */
    scrollbarWidth: '--plasma-textarea-scrollbar-width',
    /** @styleType dimension */
    scrollbarBorderWidth: '--plasma-textarea-scrollbar-border-width',
    /** @styleType dimension */
    scrollbarMarginRight: '--plasma-textarea-scrollbar-margin-right',
    /** @styleType shape */
    scrollbarBorderRadius: '--plasma-textarea-scrollbar-thumb-border-radius',
    /** @styleType color */
    scrollbarThumbBackgroundColor: '--plasma-textarea-scrollbar-thumb-background-color',
    /** @styleType color */
    scrollbarThumbBackgroundColorHover: '--plasma-textarea-scrollbar-thumb-background-color-hover',
    /** @styleType color */
    scrollbarThumbBackgroundColorActive: '--plasma-textarea-scrollbar-thumb-background-color-active',
    /** @styleType color */
    scrollbarTrackBackgroundColor: '--plasma-textarea-scrollbar-track-background-color',
    /** @styleType color */
    scrollbarTrackBackgroundColorHover: '--plasma-textarea-scrollbar-track-background-color-hover',
    /** @styleType color */
    scrollbarTrackBackgroundColorActive: '--plasma-textarea-scrollbar-track-background-color-active',

    /** @styleType color */
    indicatorColor: '--plasma-textarea-indicator-color',
    /** @styleType dimension */
    indicatorSizeInner: '--plasma-textarea-indicator-size-inner',
    /** @styleType dimension */
    indicatorSizeOuter: '--plasma-textarea-indicator-size-outer',
    /** @styleType dimension */
    indicatorLabelPlacementInner: '--plasma-textarea-indicator-placement-inner',
    /** @styleType dimension */
    indicatorLabelPlacementOuter: '--plasma-textarea-indicator-placement-outer',
    /** @styleType dimension */
    indicatorLabelPlacementInnerRight: '--plasma-textarea-indicator-placement-inner-right',
    /** @styleType dimension */
    indicatorLabelPlacementOuterRight: '--plasma-textarea-indicator-placement-outer-right',
    /** @styleType dimension */
    indicatorLabelPlacementHintOuterRight: '--plasma-textfield__indicator-hint-placement-outer-right',
    /** @styleType dimension */
    clearIndicatorHintInnerRight: '--plasma-textarea__clear-indicator-hint-placement-inner-right',
};
