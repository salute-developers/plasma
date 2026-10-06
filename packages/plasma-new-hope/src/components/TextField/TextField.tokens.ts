export const classes = {
    hasChips: 'has-chips',
    chipsWrapper: 'chips-wrapper',
    hasValue: 'has-value',
    hasFocus: 'has-focus',
    keepPlaceholder: 'keep-placeholder',
    hasEmptyContentLeft: 'has-empty-content-left',
    hasEmptyContentRight: 'has-empty-content-right',
    innerLabelPlacement: 'label-placement-inner',
    outerLabelPlacement: 'label-placement-outer',
    hideLabel: 'hide-label',
    clear: 'textfield-clear',
    hasDivider: 'textfield-has-divider',
    hasHint: 'textfield-has-hint',
    textFieldGroupItem: 'text-field-group-item',
    requiredAlignRight: 'required-align-right',
    inputWrapper: 'input-wrapper',
    inputScrollableWrapper: 'input-scrollable-wrapper',
    inputTextEllipsis: 'textfield-input-text-ellipsis',
    contentRightCompensationMargin: 'textfield-content-right-compensation-margin',
    readOnlyInput: 'textfield-readonly-input',
};

export const privateTokens = {
    borderColor: '--plasma_private-textfield-border-color',
    backgroundColor: ' --plasma_private-textfield-bg-color',
};

export const tokens = {
    /** @styleType color */
    color: '--plasma-textfield-color',
    /** @styleType color @styleProp color @styleState focused */
    colorFocus: '--plasma-textfield-color-focus',
    /** @styleType color */
    clearColor: '--plasma-textfield-clear-color',
    /** @styleType shadow */
    boxShadow: '--plasma-textfield-box-shadow',

    /** @styleType color */
    backgroundColor: '--plasma-textfield-bg-color',
    /** @styleType color */
    backgroundColorHover: '--plasma-textfield-bg-color-hover',
    /** @styleType color */
    backgroundColorFocus: '--plasma-textfield-bg-color-focus',

    /** @styleType shadow */
    boxShadowSecondary: '--plasma-textfield-box-shadow-secondary',

    /** @styleType color */
    borderColor: '--plasma-textfield-border-color',
    /** @styleType color @styleProp borderColor @styleState hovered */
    borderColorHover: '--plasma-textfield-border-color-hover',
    /** @styleType color @styleProp borderColor @styleState focused */
    borderColorFocus: '--plasma-textfield-border-color-focus',

    /** @styleType color */
    dividerColor: '--plasma-textfield-divider-color',
    /** @styleType color */
    dividerColorHover: '--plasma-textfield-divider-color-hover',
    /** @styleType color */
    dividerColorFocus: '--plasma-textfield-divider-color-focus',

    /** @styleType dimension */
    dividerWidth: '--plasma-textfield-divider-width',

    /** Цвета для read-only состояния */
    /** @styleType color */
    colorReadOnly: '--plasma-textfield-color-readonly',
    /** @styleType color */
    backgroundColorReadOnly: '--plasma-textfield-bg-color-readonly',
    /** @styleType color */
    borderColorReadOnly: '--plasma-textfield-border-color-readonly',
    /** @styleType color */
    placeholderColorReadOnly: '--plasma-textfield__placeholder-color-readonly',
    /** @styleType color */
    dividerColorReadOnly: '--plasma-textfield-divider-color-readonly',

    /** Цвет каретки */
    /** @styleType color */
    caretColor: '--plasma-textfield__caret-color',
    /** @styleType color */
    placeholderColor: '--plasma-textfield__placeholder-color',
    /** @styleType color */
    placeholderColorFocus: '--plasma-textfield__placeholder-color-focus',
    /** @styleType color */
    clearPlaceholderColor: '--plasma-textfield__clear-placeholder-color',
    /** @styleType color @styleProp clearPlaceholderColor @styleState focused */
    clearPlaceholderColorFocus: '--plasma-textfield__clear-placeholder-color-focus',
    /** @styleType color */
    optionalColor: '--plasma-textfield__optional-color',

    /** @styleType dimension */
    height: '--plasma-textfield-height',
    /** @styleType value */
    fieldSizing: '--plasma-textfield-sizing',
    /** @styleType dimension */
    borderWidth: '--plasma-textfield-border-width',
    /** @styleType dimension */
    borderRadius: '--plasma-textfield-border-radius',

    /** Отступ от границы ТextField */
    /** @styleType value */
    padding: '--plasma-textfield-padding',
    /** @styleType dimension */
    paddingWithChips: '--plasma-textfield-padding-with-chips',

    /* Токены для input */
    /** @styleType dimension */
    leftContentMargin: '--plasma-textfield__left-content-margin',
    /** @styleType dimension */
    rightContentMargin: '--plasma-textfield__right-content-margin',
    /** @styleType dimension */
    rightContentWithHintMargin: '--plasma-textfield__right-content-with-hint-margin',

    /** @styleType typography @styleProp textStyle @stylePart fontFamily */
    fontFamily: '--plasma-textfield-font-family',
    /** @styleType typography @styleProp textStyle @stylePart fontStyle */
    fontStyle: '--plasma-textfield-font-style',
    /** @styleType typography @styleProp textStyle @stylePart fontSize */
    fontSize: '--plasma-textfield-font-size',
    /** @styleType typography @styleProp textStyle @stylePart fontWeight */
    fontWeight: '--plasma-textfield-font-weight',
    /** @styleType typography @styleProp textStyle @stylePart letterSpacing */
    letterSpacing: '--plasma-textfield-letter-spacing',
    /** @styleType typography @styleProp textStyle @stylePart lineHeight */
    lineHeight: '--plasma-textfield-line-height',

    /* Tokens for content slot */
    /** @styleType color */
    contentSlotColor: '--plasma-textfield-content-slot-color',
    /** @styleType color */
    contentSlotColorHover: '--plasma-textfield-content-slot-color-hover',
    /** @styleType color */
    contentSlotColorActive: '--plasma-textfield-content-slot-color-active',
    /** @styleType color @styleProp contentSlotColor @styleState focused */
    contentSlotColorFocus: '--plasma-textfield-content-slot-color-focus',

    /** @styleType color */
    contentSlotRightColor: '--plasma-textfield-content-right-slot-color',
    /** @styleType color @styleProp contentSlotRightColor @styleState hovered */
    contentSlotRightColorHover: '--plasma-textfield-content-right-slot-color-hover',
    /** @styleType color @styleProp contentSlotRightColor @styleState pressed */
    contentSlotRightColorActive: '--plasma-textfield-content-right-slot-color-active',
    /** @styleType float */
    contentSlotRightOpacityReadOnly: '--plasma-textfield-right-content-opacity-readonly',

    /** @styleType dimension */
    contentRightWrapperGap: '--plasma-textfield-content-right-wrapper-gap',
    /** @styleType dimension */
    contentRightWrapperMargin: '--plasma-textfield-content-right-wrapper-margin',

    /** Токены лейбла */
    /** @styleType dimension */
    labelPadding: '--sdds-core-textfield__label-padding',

    /** @styleType color */
    labelColor: '--plasma-textfield__label-color',
    /** @styleType color */
    labelColorReadOnly: '--plasma-textfield__label-color-readonly',
    /** @styleType color */
    labelInnerColor: '--plasma-textfield__label-inner-color',
    /** @styleType dimension */
    labelOffset: '--plasma-textfield__label-offset',
    /** @styleType dimension */
    clearLabelOffset: '--plasma-textfield__clear-label-offset',

    /** @styleType typography @styleProp labelStyle @stylePart fontFamily */
    labelFontFamily: '--plasma-textfield__label-font-family',
    /** @styleType typography @styleProp labelStyle @stylePart fontStyle */
    labelFontStyle: '--plasma-textfield__label-font-style',
    /** @styleType typography @styleProp labelStyle @stylePart fontSize */
    labelFontSize: '--plasma-textfield__label-font-size',
    /** @styleType typography @styleProp labelStyle @stylePart fontWeight */
    labelFontWeight: '--plasma-textfield__label-font-weight',
    /** @styleType typography @styleProp labelStyle @stylePart letterSpacing */
    labelLetterSpacing: '--plasma-textfield__label-letter-spacing',
    /** @styleType typography @styleProp labelStyle @stylePart lineHeight */
    labelLineHeight: '--plasma-textfield__label-line-height',

    /* label-placement-inner */
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontFamily */
    labelInnerFontFamily: '--plasma-textfield-placement_inner__label-font-family',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontStyle */
    labelInnerFontStyle: '--plasma-textfield-placement_inner__label-font-style',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontSize */
    labelInnerFontSize: '--plasma-textfield-placement_inner__label-font-size',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontWeight */
    labelInnerFontWeight: '--plasma-textfield-placement_inner__label-font-weight',
    /** @styleType typography @styleProp labelInnerStyle @stylePart letterSpacing */
    labelInnerLetterSpacing: '--plasma-textfield-placement_inner__label-letter-spacing',
    /** @styleType typography @styleProp labelInnerStyle @stylePart lineHeight */
    labelInnerLineHeight: '--plasma-textfield-placement_inner__label-line-height',

    /** @styleType dimension */
    labelInnerPadding: '--plasma-textfield-placement_inner__label-padding',
    /** @styleType dimension */
    contentLabelInnerPadding: '--plasma-textfield-placement_inner__content-padding',

    /** @styleType color */
    titleCaptionColor: '--plasma-textfield__title-caption-color',
    /** @styleType color */
    titleCaptionColorReadOnly: '--plasma-textfield__title-caption-color-readonly',
    /** @styleType dimension */
    titleCaptionInnerLabelOffset: '--plasma-textfield__title-caption-label-inner-offset',
    /** @styleType dimension */
    titleCaptionOffset: '--plasma-textfield__title-caption-offset',

    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontFamily */
    titleCaptionFontFamily: '--plasma-textfield__title-caption-font-family',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontStyle */
    titleCaptionFontStyle: '--plasma-textfield__title-caption-font-style',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontSize */
    titleCaptionFontSize: '--plasma-textfield__title-caption-font-size',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontWeight */
    titleCaptionFontWeight: '--plasma-textfield__title-caption-font-weight',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart letterSpacing */
    titleCaptionLetterSpacing: '--plasma-textfield__title-caption-letter-spacing',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart lineHeight */
    titleCaptionLineHeight: '--plasma-textfield__title-caption-line-height',

    /** @styleType color */
    leftHelperColor: '--plasma-textfield__left-helper-color',
    /** @styleType color @styleProp leftHelperColor @styleState focused */
    leftHelperColorFocus: '--plasma-textfield__left-helper-color-focus',
    /** @styleType color */
    leftHelperColorReadOnly: '--plasma-textfield__left-helper-color-readonly',
    /** @styleType dimension */
    leftHelperOffset: '--plasma-textfield__left-helper-offset',

    /** @styleType typography @styleProp leftHelperStyle @stylePart fontFamily */
    leftHelperFontFamily: '--plasma-textfield__left-helper-font-family',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontStyle */
    leftHelperFontStyle: '--plasma-textfield__left-helper-font-style',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontSize */
    leftHelperFontSize: '--plasma-textfield__left-helper-font-size',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontWeight */
    leftHelperFontWeight: '--plasma-textfield__left-helper-font-weight',
    /** @styleType typography @styleProp leftHelperStyle @stylePart letterSpacing */
    leftHelperLetterSpacing: '--plasma-textfield__left-helper-letter-spacing',
    /** @styleType typography @styleProp leftHelperStyle @stylePart lineHeight */
    leftHelperLineHeight: '--plasma-textfield__left-helper-line-height',

    /** @styleType color */
    rightHelperColor: '--plasma-textfield__right-helper-color',
    /** @styleType color @styleProp rightHelperColor @styleState focused */
    rightHelperColorFocus: '--plasma-textfield__right-helper-color-focus',
    /** @styleType color */
    rightHelperColorReadOnly: '--plasma-textfield__right-helper-color-readonly',
    /** @styleType dimension */
    rightHelperOffset: '--plasma-textfield__right-helper-offset',

    /** @styleType typography @styleProp rightHelperStyle @stylePart fontFamily */
    rightHelperFontFamily: '--plasma-textfield__right-helper-font-family',
    /** @styleType typography @styleProp rightHelperStyle @stylePart fontStyle */
    rightHelperFontStyle: '--plasma-textfield__right-helper-font-style',
    /** @styleType typography @styleProp rightHelperStyle @stylePart fontSize */
    rightHelperFontSize: '--plasma-textfield__right-helper-font-size',
    /** @styleType typography @styleProp rightHelperStyle @stylePart fontWeight */
    rightHelperFontWeight: '--plasma-textfield__right-helper-font-weight',
    /** @styleType typography @styleProp rightHelperStyle @stylePart letterSpacing */
    rightHelperLetterSpacing: '--plasma-textfield__right-helper-letter-spacing',
    /** @styleType typography @styleProp rightHelperStyle @stylePart lineHeight */
    rightHelperLineHeight: '--plasma-textfield__right-helper-line-height',

    /** Токены вспомогательного текста */
    /** @styleType color */
    textBeforeColor: '--plasma-textfield__before-text-color',
    /** @styleType color */
    textAfterColor: '--plasma-textfield__after-text-color',
    /** @styleType dimension */
    textBeforeMargin: '--plasma-textfield__before-text-margin',
    /** @styleType dimension */
    textAfterMargin: '--plasma-textfield__after-text-margin',

    /** Прозрачность для всего компонента в состоянии disabled */
    /** @styleType float */
    disabledOpacity: '--plasma-textfield-disabled-opacity',
    /** @styleType float */
    disabledBackgroundOpacity: '--plasma-textfield-disabled-background-opacity',
    /** @styleType float */
    disabledInnerContentOpacity: '--plasma-textfield-disabled-inner-content-opacity',
    /** @styleType float */
    readOnlyOpacity: '--plasma-textfield-readonly-opacity',

    /** Токены для tooltip */
    /** @styleType value */
    hintMargin: '--plasma-textfield__hint-margin',
    /** @styleType dimension */
    hintTargetSize: '--plasma-textfield__hint-target-size',
    /** @styleType dimension */
    hintCustomIconTargetSize: '--plasma-textfield__hint-custom-icon-target-size',
    /** @styleType color */
    hintIconColor: '--plasma-textfield__hint-icon-color',
    /** @styleType dimension */
    hintInnerLabelPlacementOffset: '--plasma-textfield__hint-inner-label-placement-offset',
    /** @styleType dimension */
    clearHintInnerLabelPlacementOffset: '--plasma-textfield__clear-hint-inner-label-placement-offset',

    /** @styleType color */
    tooltipBackgroundColor: '--plasma-textfield__tooltip-background-color',
    /** @styleType shadow */
    tooltipBoxShadow: '--plasma-textfield__tooltip-box-shadow',
    /** @styleType color */
    tooltipColor: '--plasma-textfield__tooltip-color',

    /** @styleType dimension */
    tooltipPaddingTop: '--plasma-textfield__tooltip-padding-top',
    /** @styleType dimension */
    tooltipPaddingRight: '--plasma-textfield__tooltip-padding-right',
    /** @styleType dimension */
    tooltipPaddingBottom: '--plasma-textfield__tooltip-padding-bottom',
    /** @styleType dimension */
    tooltipPaddingLeft: '--plasma-textfield__tooltip-padding-left',
    /** @styleType dimension */
    tooltipMinHeight: '--plasma-textfield__tooltip-min-height',
    /** @styleType dimension */
    tooltipBorderRadius: '--plasma-textfield__tooltip-border-radius',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontFamily */
    tooltipTextFontFamily: '--plasma-textfield__tooltip-text-font-family',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontSize */
    tooltipTextFontSize: '--plasma-textfield__tooltip-text-font-size',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontStyle */
    tooltipTextFontStyle: '--plasma-textfield__tooltip-text-font-style',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontWeight */
    tooltipTextFontWeight: '--plasma-textfield__tooltip-text-font-weight',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart letterSpacing */
    tooltipTextFontLetterSpacing: '--plasma-textfield__tooltip-text-font-letter-spacing',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart lineHeight */
    tooltipTextFontLineHeight: '--plasma-textfield__tooltip-text-font-line-height',
    /** @styleType dimension */
    tooltipContentLeftMargin: '--plasma-textfield__tooltip-content-left-margin',
    /** @styleType dimension */
    tooltipArrowMaskWidth: '--plasma-textfield__tooltip-arrow-mask-width',
    /** @styleType dimension */
    tooltipArrowMaskHeight: '--plasma-textfield__tooltip-arrow-mask-height',
    /** @styleType value */
    tooltipArrowMaskImage: '--plasma-textfield__tooltip-arrow-mask-image',
    /** @styleType dimension */
    tooltipArrowHeight: '--plasma-textfield__tooltip-arrow-height',
    /** @styleType dimension */
    tooltipArrowEdgeMargin: '--plasma-textfield__tooltip-arrow-edge-margin',
    /** @styleType color */
    tooltipArrowBackground: '--plasma-textfield__tooltip-arrow-background',

    /** Токены чипа */
    /** @styleType dimension */
    chipHeight: '--plasma-textfield__chip-height',
    /** @styleType dimension */
    chipBorderRadius: '--plasma-textfield__chip-border-radius',
    /** @styleType dimension */
    chipGap: '--plasma-textfield__chip-gap',
    /** @styleType dimension */
    chipMarginRight: '--plasma-textfield__chip-margin-right',
    /** @styleType color */
    chipBackground: '--plasma-textfield__chip-background',
    /** @styleType color */
    chipColor: '--plasma-textfield__chip-color',
    /** @styleType color */
    chipBackgroundHover: '--plasma-textfield__chip-background-hover',
    /** @styleType color */
    chipColorHover: '--plasma-textfield__chip-color-hover',
    /** @styleType color */
    chipBackgroundReadOnly: '--plasma-textfield__chip-background-readonly',
    /** @styleType color */
    chipColorReadOnly: '--plasma-textfield__chip-color-readonly',
    /** @styleType color */
    chipBackgroundReadOnlyHover: '--plasma-textfield__chip-background-readonly-hover',
    /** @styleType color */
    chipColorReadOnlyHover: '--plasma-textfield__chip-color-readonly-hover',
    /** @styleType color */
    chipBackgroundActive: '--plasma-textfield__chip-background-active',
    /** @styleType color */
    chipColorActive: '--plasma-textfield__chip-color-active',
    /** @styleType color */
    chipFocusColor: '--plasma-textfield__chip-focus-color',
    /** @styleType color */
    chipCloseIconColor: '--plasma-textfield__chip-close-icon-color',
    /** @styleType color */
    chipCloseIconColorHover: '--plasma-textfield__chip-close-icon-color-hover',
    /** @styleType color */
    chipCloseIconColorReadonly: '--plasma-textfield__chip-close-icon-color-readonly',
    /** @styleType dimension */
    chipOutlineSize: '--plasma-textfield__chip-outline-size',
    /** @styleType value */
    chipWidth: '--plasma-textfield__chip-width',
    /** @styleType dimension */
    chipPadding: '--plasma-textfield__chip-padding',
    /** @styleType dimension */
    chipCloseIconSize: '--plasma-textfield__chip-close-icon-size',
    /** @styleType value */
    chipCloseIconDisplay: '--plasma-textfield__chip-close-icon-display',
    /** @styleType typography @styleProp chipStyle @stylePart fontFamily */
    chipFontFamily: '--plasma-textfield__chip-font-family',
    /** @styleType typography @styleProp chipStyle @stylePart fontSize */
    chipFontSize: '--plasma-textfield__chip-font-size',
    /** @styleType typography @styleProp chipStyle @stylePart fontStyle */
    chipFontStyle: '--plasma-textfield__chip-font-style',
    /** @styleType typography @styleProp chipStyle @stylePart fontWeight */
    chipFontWeight: '--plasma-textfield__chip-font-weight',
    /** @styleType typography @styleProp chipStyle @stylePart letterSpacing */
    chipLetterSpacing: '--plasma-textfield__chip-letter-spacing',
    /** @styleType typography @styleProp chipStyle @stylePart lineHeight */
    chipLineHeight: '--plasma-textfield__chip-line-height',
    /** @styleType dimension */
    chipClearContentMarginLeft: '--plasma-textfield__chip-clear-content-margin-left',
    /** @styleType dimension */
    chipClearContentMarginRight: '--plasma-textfield__chip-clear-content-margin-right',
    /** @styleType float */
    chipOpacityReadonly: '--plasma-textfield__chip-opacity-readonly',
    /** @styleType value */
    chipsFlexWrap: '--plasma-textfield__chips-flex-wrap',

    /** @styleType value */
    scrollableWrapperOverflow: '--plasma-textfield__scrollable-wrapper-overflow',
    /** @styleType dimension */
    scrollableWrapperHeight: '--plasma-textfield__scrollable-wrapper-height',

    /** @styleType value */
    inputContainerDisplay: '--plasma-textfield__input-container-display',

    /** @styleType color */
    focusColor: '--plasma-textfield-focus-color',

    /** @styleType color */
    indicatorColor: '--plasma-textfield__indicator-color',
    /** @styleType dimension */
    indicatorSizeInner: '--plasma-textfield__indicator-size-inner',
    /** @styleType dimension */
    indicatorSizeOuter: '--plasma-textfield__indicator-size-outer',
    /** @styleType dimension */
    indicatorLabelPlacementInner: '--plasma-textfield__indicator-placement-inner',
    /** @styleType dimension */
    indicatorLabelPlacementOuter: '--plasma-textfield__indicator-placement-outer',
    /** @styleType dimension */
    indicatorLabelPlacementInnerRight: '--plasma-textfield__indicator-placement-inner-right',
    /** @styleType dimension */
    indicatorLabelPlacementOuterRight: '--plasma-textfield__indicator-placement-outer-right',
    /** @styleType dimension */
    indicatorLabelPlacementHintOuterRight: '--plasma-textfield__indicator-hint-placement-outer-right',

    /** @styleType value */
    clearIndicatorLabelPlacementInner: '--plasma-textfield__clear-indicator-placement-inner',
    /** @styleType dimension */
    clearIndicatorLabelPlacementInnerRight: '--plasma-textfield__clear-indicator-placement-inner-right',
    /** @styleType dimension */
    clearIndicatorHintInnerRight: '--plasma-textfield__clear-indicator-hint-placement-inner-right',
};
