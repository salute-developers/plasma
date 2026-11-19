export const classes = {
    itemError: 'codeinput-item-error',
    itemErrorAnimation: 'codeinput-item-error-animation',
    itemErrorFade: 'codeinput-item-error-fade',
    itemCircle: 'codeinput-item-circle',
    itemCirlceFilled: 'codeinput-item-circle-filled',
    itemCircleError: 'codeinput-item-circle-error',
    itemCircleErrorAnimation: 'codeinput-item-circle-error-animation',
    captionError: 'codeinput-caption-error',
    codeError: 'codeinput-code-error',
    codeErrorAnimation: 'codeinput-code-error-animation',
    codeErrorFade: 'codeinput-code-error-fade',

    captionAlignLeft: 'codeinput-caption-align-left',

    hoverEnabled: 'codeinput-item-hover-enabled',

    segmented: 'codeinput-shape-segmented',
    default: 'codeinput-shape-default',

    disabled: 'codeinput-disabled',
};

export const privateTokens = {
    itemWidth: '--private-codeinput-item-width',
    itemHeight: '--private-codeinput-item-hieght',
    fontSize: '--private-codeinput-font-size',
    lineHeight: '--private-codeinput-line-height',
};

export const tokens = {
    /** @styleType dimension */
    captionGap: '--plasma-codeinput-caption-gap',
    /** @styleType dimension */
    codeItemsGap: '--plasma-codeinput-code-item-gap',

    /** @styleType dimension */
    separatorWidth: '--plasma-codeinput-separator-width',

    /** @styleType dimension */
    largeCodeItemWidth: '--plasma-codeinput-item-large-width',
    /** @styleType dimension */
    largeCodeItemHeight: '--plasma-codeinput-item-large-height',

    /** @styleType dimension */
    mediumCodeItemWidth: '--plasma-codeinput-item-medium-width',
    /** @styleType dimension */
    mediumCodeItemHeight: '--plasma-codeinput-item-medium-height',

    /** @styleType dimension */
    smallCodeItemWidth: '--plasma-codeinput-item-small-width',
    /** @styleType dimension */
    smallCodeItemHeight: '--plasma-codeinput-item-small-height',

    /** @styleType dimension */
    codeItemCircleSize: '--plasma-codeinput-item-circle-size',
    /** @styleType dimension */
    codeItemCircleBorderWidth: '--plasma-codeinput-item-circle-border-width',

    /** @styleType value */
    fontStyle: '--plasma-codeinput-font-style',
    /** @styleType value */
    fontFamily: '--plasma-codeinput-font-family',
    /** @styleType value */
    fontWeight: '--plasma-codeinput-font-weight',
    /** @styleType value */
    letterSpacing: '--plasma-codeinput-letter-spacing',

    /** @styleType dimension */
    largeFontSize: '--plasma-codeinput-large-font-size',
    /** @styleType dimension */
    largeLineHeight: '--plasma-codeinput-large-line-height',

    /** @styleType dimension */
    mediumFontSize: '--plasma-codeinput-medium-font-size',
    /** @styleType dimension */
    mediumLineHeight: '--plasma-codeinput-medium-line-height',

    /** @styleType dimension */
    smallFontSize: '--plasma-codeinput-small-font-size',
    /** @styleType dimension */
    smallLineHeight: '--plasma-codeinput-small-line-height',

    /** @styleType typography @styleProp captionStyle @stylePart fontFamily */
    captionFontFamily: '--plasma-codeinput-caption-font-family',
    /** @styleType typography @styleProp captionStyle @stylePart fontSize */
    captionFontSize: '--plasma-codeinput-caption-font-style',
    /** @styleType typography @styleProp captionStyle @stylePart fontStyle */
    captionFontStyle: '--plasma-codeinput-caption-font-size',
    /** @styleType typography @styleProp captionStyle @stylePart fontWeight */
    captionFontWeight: '--plasma-codeinput-caption-font-weight',
    /** @styleType typography @styleProp captionStyle @stylePart letterSpacing */
    captionLetterSpacing: '--plasma-codeinput-caption-letter-spacing',
    /** @styleType typography @styleProp captionStyle @stylePart lineHeight */
    captionLineHeight: '--plasma-codeinput-caption-line-height',

    /** @styleType shape */
    borderRadius: '--plasma-codeinput-code-item-border-radius',
    /** @styleType shape */
    borderRadiusSegmented: '--plasma-codeinput-code-item-border-radius-segmented',
    /** @styleType shape */
    segmentedSideBorderRadius: '--plasma-codeinput-code-item-segmented-side-border-radius',

    /** @styleType color */
    captionColor: '--plasma-codeinput-caption-color',
    /** @styleType color */
    captionColorError: '--plasma-codeinput-caption-color-error',

    /** @styleType color */
    codeColor: '--plasma-codeinput-code-color',
    /** @styleType color */
    codeColorError: '--plasma-codeinput-code-color-error',

    /** @styleType color */
    backgroundColor: '--plasma-codeinput-background-color',
    /** @styleType color @styleProp backgroundColor @styleState hovered */
    backgroundColorHover: '--plasma-codeinput-background-color-hover',
    /** @styleType color */
    backgroundColorFocus: '--plasma-codeinput-background-color-focus',
    /** @styleType color */
    backgroundErrorColor: '--plasma-codeinput-background-error-color',

    /** @styleType dimension */
    borderWidth: '--plasma-codeinput-border-width',
    /** @styleType color */
    borderColor: '--plasma-codeinput-border-color',
    /** @styleType color @styleProp borderColor @styleState hovered */
    borderColorHover: '--plasma-codeinput-border-color-hover',
    /** @styleType color */
    borderColorFocus: '--plasma-codeinput-border-color-focus',
    /** @styleType color */
    borderErrorColor: '--plasma-codeinput-border-error-color',

    /** @styleType float */
    disabledOpacity: '--plasma-codeinput-disabled-opacity',
};

export type TokensType = keyof typeof tokens;
