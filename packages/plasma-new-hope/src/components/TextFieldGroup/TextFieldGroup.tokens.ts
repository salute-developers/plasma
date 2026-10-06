export const classes = {
    autoStretching: 'text-field-group-stretching-auto',
    filledStretching: 'text-field-group-stretching-filled',

    textFieldGroupOverrideStyles: 'text-field-group-override-styles',
    textFieldGroupItem: 'text-field-group-item',

    horizontal: 'text-field-group-orientation-horizontal',
    vertical: 'text-field-group-orientation-vertical',

    none: 'text-field-group-gap-none',
    dense: 'text-field-group-gap-dense',
    wide: 'text-field-group-gap-wide',

    segmented: 'text-field-group-shape-segmented',
    default: 'text-field-group-shape-default',
};

export const tokens = {
    /** @styleType value */
    textFieldGroupOrientation: '--plasma-text-field-group-orientation',

    /** @styleType dimension */
    textFieldGroupWebMarginLeft: '--plasma-text-field-group-web-margin-left',
    /** @styleType value */
    textFieldGroupWebClipPath: '--plasma-text-field-group-web-clip-path',
    /** @styleType dimension */
    textFieldGroupWebMarginTop: '--plasma-text-field-group-web-margin-top',
    /** @styleType value */
    textFieldGroupWebVerticalClipPath: '--plasma-text-field-group-web-vertical-clip-path',

    /** @styleType dimension */
    textFieldSegmentedRadius: '--plasma-text-field-group-item-segmented-radius',
    /** @styleType dimension */
    textFieldDefaultRadius: '--plasma-text-field-group-item-default-radius',
    /** @styleType dimension */
    textFieldSideRadius: '--plasma-text-field-group-side-item-radius',

    /** @styleType dimension */
    textFieldGroupItemsGap: '--plasma-text-field-group-items-gap',
    /** @styleType dimension */
    height: '--plasma-text-field-group-item-height',
    /** @styleType dimension */
    borderWidth: '--plasma-text-field-group-item-border-width',

    /** Отступ от границы ТextField */
    /** @styleType dimension */
    padding: '--plasma-text-field-group-item-padding',
    /** @styleType dimension */
    paddingWithChips: '--plasma-text-field-group-item-padding-with-chips',

    /* Токены для инпута */
    /** @styleType dimension */
    leftContentMargin: '--plasma-text-field-group-item__left-content-margin',
    /** @styleType dimension */
    rightContentMargin: '--plasma-text-field-group-item__right-content-margin',

    /** @styleType typography @styleProp textStyle @stylePart fontFamily */
    fontFamily: '--plasma-text-field-group-item-font-family',
    /** @styleType typography @styleProp textStyle @stylePart fontStyle */
    fontStyle: '--plasma-text-field-group-item-font-style',
    /** @styleType typography @styleProp textStyle @stylePart fontSize */
    fontSize: '--plasma-text-field-group-item-font-size',
    /** @styleType typography @styleProp textStyle @stylePart fontWeight */
    fontWeight: '--plasma-text-field-group-item-font-weight',
    /** @styleType typography @styleProp textStyle @stylePart letterSpacing */
    letterSpacing: '--plasma-text-field-group-item-letter-spacing',
    /** @styleType typography @styleProp textStyle @stylePart lineHeight */
    lineHeight: '--plasma-text-field-group-item-line-height',

    /** Токены лейбла */
    /** @styleType dimension */
    labelOffset: '--plasma-text-field-group-item__label-offset',

    /** @styleType typography @styleProp labelStyle @stylePart fontFamily */
    labelFontFamily: '--plasma-text-field-group-item__label-font-family',
    /** @styleType typography @styleProp labelStyle @stylePart fontStyle */
    labelFontStyle: '--plasma-text-field-group-item__label-font-style',
    /** @styleType typography @styleProp labelStyle @stylePart fontSize */
    labelFontSize: '--plasma-text-field-group-item__label-font-size',
    /** @styleType typography @styleProp labelStyle @stylePart fontWeight */
    labelFontWeight: '--plasma-text-field-group-item__label-font-weight',
    /** @styleType typography @styleProp labelStyle @stylePart letterSpacing */
    labelLetterSpacing: '--plasma-text-field-group-item__label-letter-spacing',
    /** @styleType typography @styleProp labelStyle @stylePart lineHeight */
    labelLineHeight: '--plasma-text-field-group-item__label-line-height',

    /* label-placement-inner */
    /** @styleType typography @styleProp labelInnerTypography @stylePart fontFamily */
    labelInnerFontFamily: '--plasma-text-field-group-item-placement_inner__label-font-family',
    /** @styleType typography @styleProp labelInnerTypography @stylePart fontStyle */
    labelInnerFontStyle: '--plasma-text-field-group-item-placement_inner__label-font-style',
    /** @styleType typography @styleProp labelInnerTypography @stylePart fontSize */
    labelInnerFontSize: '--plasma-text-field-group-item-placement_inner__label-font-size',
    /** @styleType typography @styleProp labelInnerTypography @stylePart fontWeight */
    labelInnerFontWeight: '--plasma-text-field-group-item-placement_inner__label-font-weight',
    /** @styleType typography @styleProp labelInnerTypography @stylePart letterSpacing */
    labelInnerLetterSpacing: '--plasma-text-field-group-item-placement_inner__label-letter-spacing',
    /** @styleType typography @styleProp labelInnerTypography @stylePart lineHeight */
    labelInnerLineHeight: '--plasma-text-field-group-item-placement_inner__label-line-height',

    /** @styleType dimension */
    labelInnerPadding: '--plasma-text-field-group-item-placement_inner__label-padding',
    /** @styleType dimension */
    contentLabelInnerPadding: '--plasma-text-field-group-item-placement_inner__content-padding',

    /** @styleType dimension */
    leftHelperOffset: '--plasma-text-field-group-item__left-helper-offset',

    /** @styleType typography @styleProp leftHelperStyle @stylePart fontFamily */
    leftHelperFontFamily: '--plasma-text-field-group-item__left-helper-font-family',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontStyle */
    leftHelperFontStyle: '--plasma-text-field-group-item__left-helper-font-style',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontSize */
    leftHelperFontSize: '--plasma-text-field-group-item__left-helper-font-size',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontWeight */
    leftHelperFontWeight: '--plasma-text-field-group-item__left-helper-font-weight',
    /** @styleType typography @styleProp leftHelperStyle @stylePart letterSpacing */
    leftHelperLetterSpacing: '--plasma-text-field-group-item__left-helper-letter-spacing',
    /** @styleType typography @styleProp leftHelperStyle @stylePart lineHeight */
    leftHelperLineHeight: '--plasma-text-field-group-item__left-helper-line-height',

    /** Токены вспомогательного текста */
    /** @styleType dimension */
    textBeforeMargin: '--plasma-text-field-group-item__before-text-margin',
    /** @styleType dimension */
    textAfterMargin: '--plasma-text-field-group-item__after-text-margin',

    /** Токены чипа */
    /** @styleType dimension */
    chipHeight: '--plasma-text-field-group-item__chip-height',
    /** @styleType dimension */
    chipBorderRadius: '--plasma-text-field-group-item__chip-border-radius',
    /** @styleType dimension */
    chipGap: '--plasma-text-field-group-item__chip-gap',
    /** @styleType dimension */
    chipOutlineSize: '--plasma-text-field-group-item__chip-outline-size',
    /** @styleType value */
    chipWidth: '--plasma-text-field-group-item__chip-width',
    /** @styleType dimension */
    chipPadding: '--plasma-text-field-group-item__chip-padding',
    /** @styleType dimension */
    chipCloseIconSize: '--plasma-text-field-group-item__chip-close-icon-size',
    /** @styleType typography @styleProp chipStyle @stylePart fontFamily */
    chipFontFamily: '--plasma-text-field-group-item__chip-font-family',
    /** @styleType typography @styleProp chipStyle @stylePart fontSize */
    chipFontSize: '--plasma-text-field-group-item__chip-font-size',
    /** @styleType typography @styleProp chipStyle @stylePart fontStyle */
    chipFontStyle: '--plasma-text-field-group-item__chip-font-style',
    /** @styleType typography @styleProp chipStyle @stylePart fontWeight */
    chipFontWeight: '--plasma-text-field-group-item__chip-font-weight',
    /** @styleType typography @styleProp chipStyle @stylePart letterSpacing */
    chipLetterSpacing: '--plasma-text-field-group-item__chip-letter-spacing',
    /** @styleType typography @styleProp chipStyle @stylePart lineHeight */
    chipLineHeight: '--plasma-text-field-group-item__chip-line-height',
    /** @styleType dimension */
    chipClearContentMarginLeft: '--plasma-text-field-group-item__chip-clear-content-margin-left',
    /** @styleType dimension */
    chipClearContentMarginRight: '--plasma-text-field-group-item__chip-clear-content-margin-right',
};
