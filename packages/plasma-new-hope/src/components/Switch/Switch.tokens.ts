export const tokens = {
    /** @styleType typography @styleProp textStyle @stylePart fontFamily */
    fontFamily: '--plasma-switch-font-family',
    /** @styleType typography @styleProp textStyle @stylePart fontStyle */
    fontStyle: '--plasma-switch-font-style',
    /** @styleType typography @styleProp textStyle @stylePart fontSize */
    fontSize: '--plasma-switch-font-size',
    /** @styleType typography @styleProp textStyle @stylePart fontWeight */
    fontWeight: '--plasma-switch-font-weight',
    /** @styleType typography @styleProp textStyle @stylePart letterSpacing */
    letterSpacing: '--plasma-switch-letter-spacing',
    /** @styleType typography @styleProp textStyle @stylePart lineHeight */
    lineHeight: '--plasma-switch-line-height',

    /* Токены description */
    /** @styleType typography @styleProp descriptionStyle @stylePart fontFamily */
    descriptionFontFamily: '--plasma-switch-description-font-family',
    /** @styleType typography @styleProp descriptionStyle @stylePart fontStyle */
    descriptionFontStyle: '--plasma-switch-description-font-style',
    /** @styleType typography @styleProp descriptionStyle @stylePart fontSize */
    descriptionFontSize: '--plasma-switch-description-font-size',
    /** @styleType typography @styleProp descriptionStyle @stylePart fontWeight */
    descriptionFontWeight: '--plasma-switch-description-font-weight',
    /** @styleType typography @styleProp descriptionStyle @stylePart letterSpacing */
    descriptionLetterSpacing: '--plasma-switch-description-letter-spacing',
    /** @styleType typography @styleProp descriptionStyle @stylePart lineHeight */
    descriptionLineHeight: '--plasma-switch-description-line-height',

    /* Цвет подписи */
    /** @styleType color */
    labelColor: '--plasma-switch-label-color',
    /** @styleType dimension */
    labelOffset: '--plasma-switch-label-offset',

    /* Цвет описания */
    /** @styleType color */
    descriptionColor: '--plasma-switch-description-color',
    /** @styleType dimension */
    descriptionOffset: '--plasma-switch-description-offset',
    /** @styleType dimension */
    descriptionMaxLines: '--plasma-switch-description-max-lines',

    /** Прозрачность для всего компонента в состоянии disabled */
    /** @styleType float @styleProp disableAlpha */
    disabledOpacity: '--plasma-switch-disabled-opacity',

    /** @styleType dimension */
    verticalGap: '--plasma-switch-vertical-gap',
    /** @styleType dimension */
    trackWidth: '--plasma-switch-track-width',
    /** @styleType dimension */
    trackHeight: '--plasma-switch-track-height',
    /** @styleType dimension */
    trackBorderWidthOn: '--plasma-switch-track-border-width-on',
    /** @styleType dimension */
    trackBorderWidthOff: '--plasma-switch-track-border-width-off',
    /** @styleType color */
    trackBorderColorOn: '--plasma-switch-track-border-color-on',
    /** @styleType color @styleProp trackBorderColorOn @styleState hovered */
    trackBorderColorOnHover: '--plasma-switch-track-border-color-on-hover',
    /** @styleType color */
    trackBorderColorOff: '--plasma-switch-track-border-color-off',
    /** @styleType color @styleProp trackBorderColorOff @styleState hovered */
    trackBorderColorOffHover: '--plasma-switch-track-border-color-off-hover',

    /** @styleType shape */
    trackBorderRadius: '--plasma-switch-track-border-radius',
    // NOTE: could be intersection with checked
    /** @styleType color */
    trackBackgroundColorOn: '--plasma-switch-track-background-color-on',
    /** @styleType color @styleProp trackBackgroundColorOn @styleState hovered */
    trackBackgroundColorOnHover: '--plasma-switch-track-background-color-on-hover',
    /** @styleType color */
    trackBackgroundColorOff: '--plasma-switch-track-background-color-off',
    /** @styleType color @styleProp trackBackgroundColorOff @styleState hovered */
    trackBackgroundColorOffHover: '--plasma-switch-track-background-color-off-hover',

    /** @styleType color */
    trackFocusColor: '--plasma-switch-track-focus-color',

    /** @styleType dimension */
    thumbSize: '--plasma-switch-thumb-size',
    /** @styleType dimension */
    thumbOffsetOn: '--plasma-switch-thumb-offset-on',
    /** @styleType dimension */
    thumbOffsetOff: '--plasma-switch-thumb-offset-off',
    /** @styleType shape */
    thumbBorderRadius: '--plasma-switch-thumb-border-radius',
    /** @styleType color */
    thumbBorderColorOff: '--plasma-switch-thumb-border-color-off',
    /** @styleType color */
    thumbBorderColorOn: '--plasma-switch-thumb-border-color-on',
    /** @styleType dimension */
    thumbBorderWidth: '--plasma-switch-thumb-border-width',

    /** @styleType float */
    thumbPressScale: '--plasma-switch-thumb-press-scale',

    /** @styleType color */
    thumbBackgroundColorOn: '--plasma-switch-thumb-background-color-on',
    /** @styleType color */
    thumbBackgroundColorOff: '--plasma-switch-thumb-background-color-off',
    /** @styleType shadow */
    thumbBoxShadow: '--plasma-switch-thumb-box-shadow',
    /** @styleType shadow */
    thumbBoxShadowOn: '--plasma-switch-thumb-box-shadow-on',

    /** @styleType dimension */
    labelOffsetPrivate: '--plasma_private-switch__label-offset',
};

export const classes = {
    beforeSwitchLabelPosition: 'switch-label-position-before',
    afterSwitchLabelPosition: 'switch-label-position-after',
    singleLine: 'switch-single-line',
};
