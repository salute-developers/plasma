import { TOUR_BORDER_RADIUS_TOKEN } from '../Tour/utils';

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
    backgroundColor: '--plasma-textarea-background-color',
    backgroundColorHover: '--plasma-textarea-background-color-hover',
    backgroundColorActive: '--plasma-textarea-background-color-active',
    backgroundColorFocus: '--plasma-textarea-background-color-focus',

    inputBackgroundColor: '--plasma-textarea-input-background-color',
    inputBackgroundColorHover: '--plasma-textarea-input-background-color-hover',
    inputBackgroundColorActive: '--plasma-textarea-input-background-color-active',
    inputBackgroundColorFocus: '--plasma-textarea-input-background-color-focus',

    boxShadowSecondary: '--plasma-textarea-box-shadow-secondary',

    inputBorderColor: '--plasma-textarea-input-border-color',
    inputBorderColorHover: '--plasma-textarea-input-border-color-hover',
    inputBorderColorActive: '--plasma-textarea-input-border-color-active',
    inputBorderColorFocus: '--plasma-textarea-input-border-color-focus',

    helpersBackgroundColor: '--plasma-textarea-helpers-background-color',
    helpersBackgroundColorHover: '--plasma-textarea-helpers-background-color-hover',
    helpersBackgroundColorActive: '--plasma-textarea-helpers-background-color-active',
    helpersBackgroundColorFocus: '--plasma-textarea-helpers-background-color-focus',

    inputColor: '--plasma-textarea-input-color',
    inputColorFocus: '--plasma-textarea-input-color-focus',

    /** Цвет каретки */
    inputCaretColor: '--plasma-textarea-input-caret-color',
    placeholderColor: '--plasma-textarea-placeholder-color',
    placeholderColorFocus: '--plasma-textarea-placeholder-color-focus',
    optionalColor: '--plasma-textarea__optional-color',

    leftHelperColor: '--plasma-textarea-left-helper-color',
    leftHelperColorFocus: '--plasma-textarea-left-helper-color-focus',
    rightHelperColor: '--plasma-textarea-right-helper-color',

    /** Цвета для read-only состояния */
    inputColorReadOnly: '--plasma-textarea-input-color-read-only',
    backgroundColorReadOnly: '--plasma-textarea-background-color-read-only',
    borderColorReadOnly: '--plasma-textarea-border-color-readonly',
    readOnlyOpacity: '--plasma-textarea-read-only-opacity',

    borderColor: '--plasma-textarea-border-color',
    borderColorHover: '--plasma-textarea-border-color-hover',
    borderColorFocus: '--plasma-textarea-border-color-focus',

    dividerColor: '--plasma-textarea-divider-color',
    dividerColorHover: '--plasma-textarea-divider-color-hover',
    dividerColorFocus: '--plasma-textarea-divider-color-focus',
    dividerColorReadOnly: '--plasma-textarea-divider-color-readonly',

    boxShadow: '--plasma-textarea-box-shadow',

    inputWidth: '--plasma-textarea-input-width',
    inputHeight: '--plasma-textarea-input-height',
    inputMinHeight: '--plasma-textarea-input-min-height',
    borderSize: '--plasma-textarea-border-size',
    borderRadius: '--plasma-textarea-border-radius',
    borderRadiusWithHelpers: '--plasma-textarea-border-radius-with-helpers',

    /** Отступы для элемента textarea */
    inputPaddingTop: '--plasma-textarea-input-padding-top',
    inputPaddingRight: '--plasma-textarea-input-padding-right',
    inputPaddingRightWithRightContent: '--plasma-textarea-input-padding-right-with-right-content',
    inputPaddingBottom: '--plasma-textarea-input-padding-bottom',
    inputPaddingBottomWithHelpers: '--plasma-textarea-input-padding-bottom-with-helpers',
    inputPaddingLeft: '--plasma-textarea-input-padding-left',

    /** Отступы для блока подписей */
    helpersPaddingTop: '--plasma-textarea-helpers-padding-top',
    clearHelpersPaddingTop: '--plasma-textarea-clear-helpers-padding-top',
    helpersPaddingRight: '--plasma-textarea-helpers-padding-right',
    helpersPaddingBottom: '--plasma-textarea-helpers-padding-bottom',
    helpersPaddingLeft: '--plasma-textarea-helpers-padding-left',
    helpersOffset: '--plasma-textarea-helpers-offset',

    /** Позиционирование контента справа */
    rightContentTop: '--plasma-textarea-right-content-top',
    rightContentRight: '--plasma-textarea-right-content-right',
    rightContentHeight: '--plasma-textarea-right-content-height',

    /* Tokens for right content slot */
    rightContentColor: '--plasma-textarea-right-content-color',
    rightContentColorHover: '--plasma-textarea-right-content-color-hover',
    rightContentColorActive: '--plasma-textarea-right-content-color-active',
    contentSlotRightOpacityReadOnly: '--plasma-textarea-right-content-opacity-readonly',

    /** Токены лейбла */
    labelOuterColor: '--plasma-textarea-label-outer-color',

    labelOuterFontFamily: '--plasma-textarea-label-outer-font-family',
    labelOuterFontStyle: '--plasma-textarea-label-outer-font-style',
    labelOuterFontSize: '--plasma-textarea-label-outer-font-size',
    labelOuterFontWeight: '--plasma-textarea-label-outer-font-weight',
    labelOuterLetterSpacing: '--plasma-textarea-label-outer-letter-spacing',
    labelOuterLineHeight: '--plasma-textarea-label-outer-line-height',

    labelMarginBottom: '--plasma-textarea-label-margin-bottom',

    /* label-placement-inner */
    labelInnerFontFamily: '--plasma-textarea-label-inner-font-family',
    labelInnerFontStyle: '--plasma-textarea-label-inner-font-style',
    labelInnerFontSize: '--plasma-textarea-label-inner-font-size',
    labelInnerFontWeight: '--plasma-textarea-label-inner-font-weight',
    labelInnerLetterSpacing: '--plasma-textarea-label-inner-letter-spacing',
    labelInnerLineHeight: '--plasma-textarea-label-inner-line-height',

    labelInnerTop: '--plasma-textarea-label-inner-top',
    labelInnerTopHelper: '--plasma-textarea-label-inner-top-helper',
    labelInnerMarginBottom: '--plasma-textarea-label-inner-margin-bottom',

    /* Типографика для input */
    inputFontFamily: '--plasma-textarea-input-font-family',
    inputFontStyle: '--plasma-textarea-input-font-style',
    inputFontSize: '--plasma-textarea-input-font-size',
    inputFontWeight: '--plasma-textarea-input-font-weight',
    inputLetterSpacing: '--plasma-textarea-input-letter-spacing',
    inputLineHeight: '--plasma-textarea-input-line-height',

    /* Типографика для блока подписей */
    helpersFontFamily: '--plasma-textarea-helpers-font-family',
    helpersFontStyle: '--plasma-textarea-helpers-font-style',
    helpersFontSize: '--plasma-textarea-helpers-font-size',
    helpersFontWeight: '--plasma-textarea-helpers-font-weight',
    helpersLetterSpacing: '--plasma-textarea-helpers-letter-spacing',
    helpersLineHeight: '--plasma-textarea-helpers-line-height',

    titleCaptionColor: '--plasma-textarea__title-caption-color',
    titleCaptionColorReadOnly: '--plasma-textarea__title-caption-color-readonly',
    titleCaptionInnerLabelOffset: '--plasma-textarea__title-caption-label-inner-offset',

    titleCaptionFontFamily: '--plasma-textarea__title-caption-font-family',
    titleCaptionFontStyle: '--plasma-textarea__title-caption-font-style',
    titleCaptionFontSize: '--plasma-textarea__title-caption-font-size',
    titleCaptionFontWeight: '--plasma-textarea__title-caption-font-weight',
    titleCaptionLetterSpacing: '--plasma-textarea__title-caption-letter-spacing',
    titleCaptionLineHeight: '--plasma-textarea__title-caption-line-height',

    /** Прозрачность для всего компонента в состоянии disabled */
    disabledOpacity: '--plasma-textarea-disabled-opacity',
    inputColorDisabled: '--plasma-textarea-input-color-disabled',

    /** Токены для tooltip */
    hintMargin: '--plasma-textarea__hint-margin',
    hintTargetSize: '--plasma-textarea__hint-target-size',
    hintCustomIconTargetSize: '--plasma-textarea__hint-custom-icon-target-size',
    hintIconColor: '--plasma-textarea__hint-icon-color',
    hintInnerLabelPlacementOffset: '--plasma-textarea__hint-inner-label-placement-offset',

    tooltipBackgroundColor: '--plasma-textarea__tooltip-background-color',
    tooltipBoxShadow: '--plasma-textarea__tooltip-box-shadow',
    tooltipColor: '--plasma-textarea__tooltip-color',

    tooltipPaddingTop: '--plasma-textarea__tooltip-padding-top',
    tooltipPaddingRight: '--plasma-textarea__tooltip-padding-right',
    tooltipPaddingBottom: '--plasma-textarea__tooltip-padding-bottom',
    tooltipPaddingLeft: '--plasma-textarea__tooltip-padding-left',
    tooltipMinHeight: '--plasma-textarea__tooltip-min-height',
    tooltipBorderRadius: '--plasma-textarea__tooltip-border-radius',
    tooltipTextFontFamily: '--plasma-textarea__tooltip-text-font-family',
    tooltipTextFontSize: '--plasma-textarea__tooltip-text-font-size',
    tooltipTextFontStyle: '--plasma-textarea__tooltip-text-font-style',
    tooltipTextFontWeight: '--plasma-textarea__tooltip-text-font-weight',
    tooltipTextFontLetterSpacing: '--plasma-textarea__tooltip-text-font-letter-spacing',
    tooltipTextFontLineHeight: '--plasma-textarea__tooltip-text-font-line-height',
    tooltipContentLeftMargin: '--plasma-textarea__tooltip-content-left-margin',
    tooltipArrowMaskWidth: '--plasma-textarea__tooltip-arrow-mask-width',
    tooltipArrowMaskHeight: '--plasma-textarea__tooltip-arrow-mask-height',
    tooltipArrowMaskImage: '--plasma-textarea__tooltip-arrow-mask-image',
    tooltipArrowHeight: '--plasma-textarea__tooltip-arrow-height',
    tooltipArrowEdgeMargin: '--plasma-textarea__tooltip-arrow-edge-margin',
    tooltipArrowBackground: '--plasma-textarea__tooltip-arrow-background',

    /** Токены скроллбара */
    scrollbarWidth: '--plasma-textarea-scrollbar-width',
    scrollbarBorderWidth: '--plasma-textarea-scrollbar-border-width',
    scrollbarThumbBackgroundColor: '--plasma-textarea-scrollbar-thumb-background-color',
    scrollbarThumbBackgroundColorHover: '--plasma-textarea-scrollbar-thumb-background-color-hover',
    scrollbarThumbBackgroundColorActive: '--plasma-textarea-scrollbar-thumb-background-color-active',
    scrollbarTrackBackgroundColor: '--plasma-textarea-scrollbar-track-background-color',
    scrollbarTrackBackgroundColorHover: '--plasma-textarea-scrollbar-track-background-color-hover',
    scrollbarTrackBackgroundColorActive: '--plasma-textarea-scrollbar-track-background-color-active',

    indicatorColor: '--plasma-textarea-indicator-color',
    indicatorSizeInner: '--plasma-textarea-indicator-size-inner',
    indicatorSizeOuter: '--plasma-textarea-indicator-size-outer',
    indicatorLabelPlacementInner: '--plasma-textarea-indicator-placement-inner',
    indicatorLabelPlacementOuter: '--plasma-textarea-indicator-placement-outer',
    indicatorLabelPlacementInnerRight: '--plasma-textarea-indicator-placement-inner-right',
    indicatorLabelPlacementOuterRight: '--plasma-textarea-indicator-placement-outer-right',
    indicatorLabelPlacementHintOuterRight: '--plasma-textfield__indicator-hint-placement-outer-right',
    clearIndicatorHintInnerRight: '--plasma-textarea__clear-indicator-hint-placement-inner-right',

    tourBorderRadius: TOUR_BORDER_RADIUS_TOKEN,
};
