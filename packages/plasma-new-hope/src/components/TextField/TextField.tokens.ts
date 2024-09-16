export const classes = {
    hasChips: 'has-chips',
    hasValue: 'has-value',
    hasEmptyContentLeft: 'has-empty-content-left',
    hasEmptyContentRight: 'has-empty-content-right',
    innerLabelPlacement: 'label-placement-inner',
    outerLabelPlacement: 'label-placement-outer',
    hideLabel: 'hide-label',
    textFieldGroupItem: 'text-field-group-item',
};

export const tokens = {
    color: '--plasma-textfield-color',

    backgroundColor: '--plasma-textfield-bg-color',
    backgroundColorHover: '--plasma-textfield-bg-color-hover',
    backgroundColorFocus: '--plasma-textfield-bg-color-focus',

    borderColor: '--plasma-textfield-border-color',
    borderColorHover: '--plasma-textfield-border-color-hover',
    borderColorFocus: '--plasma-textfield-border-color-focus',

    /** Цвета для read-only состояния */
    colorReadOnly: '--plasma-textfield-color-readonly',
    backgroundColorReadOnly: '--plasma-textfield-bg-color-readonly',
    borderColorReadOnly: '--plasma-textfield-border-color-readonly',
    placeholderColorReadOnly: '--plasma-textfield__placeholder-color-readonly',

    /** Цвет каретки */
    caretColor: '--plasma-textfield__caret-color',
    placeholderColor: '--plasma-textfield__placeholder-color',
    optionalColor: '--plasma-textfield__optional-color',

    height: '--plasma-textfield-height',
    borderWidth: '--plasma-textfield-border-width',
    borderRadius: '--plasma-textfield-border-radius',

    /** Отступ от границы ТextField */
    padding: '--plasma-textfield-padding',
    paddingWithChips: '--plasma-textfield-padding-with-chips',

    /* Токены для input */
    leftContentMargin: '--plasma-textfield__left-content-margin',
    rightContentMargin: '--plasma-textfield__right-content-margin',

    fontFamily: '--plasma-textfield-font-family',
    fontStyle: '--plasma-textfield-font-style',
    fontSize: '--plasma-textfield-font-size',
    fontWeight: '--plasma-textfield-font-weight',
    letterSpacing: '--plasma-textfield-letter-spacing',
    lineHeight: '--plasma-textfield-line-height',

    /* Tokens for content slot */
    contentSlotColor: '--plasma-textfield-content-slot-color',
    contentSlotColorHover: '--plasma-textfield-content-slot-color-hover',
    contentSlotColorActive: '--plasma-textfield-content-slot-color-active',

    contentSlotRightColor: '--plasma-textfield-content-right-slot-color',
    contentSlotRightColorHover: '--plasma-textfield-content-right-slot-color-hover',
    contentSlotRightColorActive: '--plasma-textfield-content-right-slot-color-active',

    /** Токены лейбла */
    labelColor: '--plasma-textfield__label-color',
    labelColorReadOnly: '--plasma-textfield__label-color-readonly',
    labelOffset: '--plasma-textfield__label-offset',

    labelFontFamily: '--plasma-textfield__label-font-family',
    labelFontStyle: '--plasma-textfield__label-font-style',
    labelFontSize: '--plasma-textfield__label-font-size',
    labelFontWeight: '--plasma-textfield__label-font-weight',
    labelLetterSpacing: '--plasma-textfield__label-letter-spacing',
    labelLineHeight: '--plasma-textfield__label-line-height',

    /* label-placement-inner */
    labelInnerFontFamily: '--plasma-textfield-placement_inner__label-font-family',
    labelInnerFontStyle: '--plasma-textfield-placement_inner__label-font-style',
    labelInnerFontSize: '--plasma-textfield-placement_inner__label-font-size',
    labelInnerFontWeight: '--plasma-textfield-placement_inner__label-font-weight',
    labelInnerLetterSpacing: '--plasma-textfield-placement_inner__label-letter-spacing',
    labelInnerLineHeight: '--plasma-textfield-placement_inner__label-line-height',

    labelInnerPadding: '--plasma-textfield-placement_inner__label-padding',
    contentLabelInnerPadding: '--plasma-textfield-placement_inner__content-padding',

    leftHelperColor: '--plasma-textfield__left-helper-color',
    leftHelperColorReadOnly: '--plasma-textfield__left-helper-color-readonly',
    leftHelperOffset: '--plasma-textfield__left-helper-offset',

    leftHelperFontFamily: '--plasma-textfield__left-helper-font-family',
    leftHelperFontStyle: '--plasma-textfield__left-helper-font-style',
    leftHelperFontSize: '--plasma-textfield__left-helper-font-size',
    leftHelperFontWeight: '--plasma-textfield__left-helper-font-weight',
    leftHelperLetterSpacing: '--plasma-textfield__left-helper-letter-spacing',
    leftHelperLineHeight: '--plasma-textfield__left-helper-line-height',

    /** Токены вспомогательного текста */
    textBeforeColor: '--plasma-textfield__before-text-color',
    textAfterColor: '--plasma-textfield__after-text-color',
    textBeforeMargin: '--plasma-textfield__before-text-margin',
    textAfterMargin: '--plasma-textfield__after-text-margin',

    /** Прозрачность для всего компонента в состоянии disabled */
    disabledOpacity: '--plasma-textfield-disabled-opacity',

    /** Токены чипа */
    chipHeight: '--plasma-textfield__chip-height',
    chipBorderRadius: '--plasma-textfield__chip-border-radius',
    chipGap: '--plasma-textfield__chip-gap',
    chipBackground: '--plasma-textfield__chip-background',
    chipColor: '--plasma-textfield__chip-color',
    chipBackgroundHover: '--plasma-textfield__chip-background-hover',
    chipColorHover: '--plasma-textfield__chip-color-hover',
    chipScaleHover: '--plasma-textfield__chip-scale-hover',
    chipBackgroundReadOnly: '--plasma-textfield__chip-background-readonly',
    chipColorReadOnly: '--plasma-textfield__chip-color-readonly',
    chipBackgroundReadOnlyHover: '--plasma-textfield__chip-background-readonly-hover',
    chipColorReadOnlyHover: '--plasma-textfield__chip-color-readonly-hover',
    chipBackgroundActive: '--plasma-textfield__chip-background-active',
    chipColorActive: '--plasma-textfield__chip-color-active',
    chipScaleActive: '--plasma-textfield__chip-scale-active',
    chipFocusColor: '--plasma-textfield__chip-focus-color',
    chipCloseIconColor: '--plasma-textfield__chip-close-icon-color',
    chipOutlineSize: '--plasma-textfield__chip-outline-size',
    chipWidth: '--plasma-textfield__chip-width',
    chipPaddingTop: '--plasma-textfield__chip-padding-top',
    chipPaddingRight: '--plasma-textfield__chip-padding-right',
    chipPaddingBottom: '--plasma-textfield__chip-padding-bottom',
    chipPaddingLeft: '--plasma-textfield__chip-padding-left',
    chipCloseIconSize: '--plasma-textfield__chip-close-icon-size',
    chipFontFamily: '--plasma-textfield__chip-font-family',
    chipFontSize: '--plasma-textfield__chip-font-size',
    chipFontStyle: '--plasma-textfield__chip-font-style',
    chipFontWeight: '--plasma-textfield__chip-font-weight',
    chipLetterSpacing: '--plasma-textfield__chip-letter-spacing',
    chipLineHeight: '--plasma-textfield__chip-line-height',
    chipClearContentMarginLeft: '--plasma-textfield__chip-clear-content-margin-left',
    chipClearContentMarginRight: '--plasma-textfield__chip-clear-content-margin-right',
    chipOpacityReadonly: '--plasma-textfield__chip-opacity-readonly',

    focusColor: '--plasma-textfield-focus-color',

    indicatorColor: '--plasma-textfield__indicator-color',
    indicatorSizeInner: '--plasma-textfield__indicator-size-inner',
    indicatorSizeOuter: '--plasma-textfield__indicator-size-outer',
    indicatorLabelPlacementInner: '--plasma-textfield__indicator-placement-inner',
    indicatorLabelPlacementOuter: '--plasma-textfield__indicator-placement-outer',
    indicatorLabelPlacementInnerRight: '--plasma-textfield__indicator-placement-inner-right',
    indicatorLabelPlacementOuterRight: '--plasma-textfield__indicator-placement-outer-right',
};
