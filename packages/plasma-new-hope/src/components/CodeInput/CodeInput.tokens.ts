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
    captionGap: '--plasma-codeinput-caption-gap',
    codeItemsGap: '--plasma-codeinput-code-item-gap',

    separatorWidth: '--plasma-codeinput-separator-width',

    largeCodeItemWidth: '--plasma-codeinput-item-large-width',
    largeCodeItemHeight: '--plasma-codeinput-item-large-height',

    mediumCodeItemWidth: '--plasma-codeinput-item-medium-width',
    mediumCodeItemHeight: '--plasma-codeinput-item-medium-height',

    smallCodeItemWidth: '--plasma-codeinput-item-small-width',
    smallCodeItemHeight: '--plasma-codeinput-item-small-height',

    codeItemCircleSize: '--plasma-codeinput-item-circle-size',
    codeItemCircleBorderWidth: '--plasma-codeinput-item-circle-border-width',

    fontStyle: '--plasma-codeinput-font-style',
    fontFamily: '--plasma-codeinput-font-family',
    fontWeight: '--plasma-codeinput-font-weight',
    letterSpacing: '--plasma-codeinput-letter-spacing',

    largeFontSize: '--plasma-codeinput-large-font-size',
    largeLineHeight: '--plasma-codeinput-large-line-height',

    mediumFontSize: '--plasma-codeinput-medium-font-size',
    mediumLineHeight: '--plasma-codeinput-medium-line-height',

    smallFontSize: '--plasma-codeinput-small-font-size',
    smallLineHeight: '--plasma-codeinput-small-line-height',

    captionFontFamily: '--plasma-codeinput-caption-font-family',
    captionFontSize: '--plasma-codeinput-caption-font-style',
    captionFontStyle: '--plasma-codeinput-caption-font-size',
    captionFontWeight: '--plasma-codeinput-caption-font-weight',
    captionLetterSpacing: '--plasma-codeinput-caption-letter-spacing',
    captionLineHeight: '--plasma-codeinput-caption-line-height',

    borderRadius: '--plasma-codeinput-code-item-border-radius',
    borderRadiusSegmented: '--plasma-codeinput-code-item-border-radius-segmented',
    segmentedSideBorderRadius: '--plasma-codeinput-code-item-segmented-side-border-radius',

    captionColor: '--plasma-codeinput-caption-color',
    captionColorError: '--plasma-codeinput-caption-color-error',

    codeColor: '--plasma-codeinput-code-color',
    codeColorError: '--plasma-codeinput-code-color-error',

    backgroundColor: '--plasma-codeinput-background-color',
    backgroundColorHover: '--plasma-codeinput-background-color-hover',
    backgroundColorFocus: '--plasma-codeinput-background-color-focus',
    backgroundErrorColor: '--plasma-codeinput-background-error-color',

    borderWidth: '--plasma-codeinput-border-width',
    borderColor: '--plasma-codeinput-border-color',
    borderColorHover: '--plasma-codeinput-border-color-hover',
    borderColorFocus: '--plasma-codeinput-border-color-focus',
    borderErrorColor: '--plasma-codeinput-border-error-color',

    disabledOpacity: '--plasma-codeinput-disabled-opacity',
};

export type TokensType = keyof typeof tokens;
