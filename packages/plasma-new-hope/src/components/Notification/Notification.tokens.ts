export const classes = {
    textbox: 'notification-textbox',
    contentBox: 'notification-content-box',
    title: 'notification-title',
    text: 'notification-text',
    wrapper: 'notification-wrapper',
    icon: 'notification-icon',
    image: 'notification-image',
    withImage: 'notification-with-image',
    fullWidthImage: 'notification-full-width-image',
    closeIcon: 'notification-close-icon',
    buttonsWrapper: 'notification-buttons-wrapper',

    horizontal: 'notification-layout-horizontal',
    vertical: 'notification-layout-vertical',
    oneLine: 'notification-one-line-textbox',
    withoutIcon: 'notification-without-icon',
    withoutCloseIcon: 'notification-without-close-icon',

    notificationItemOpened: 'notification-item-opened',
    notificationItemHidden: 'notification-item-hidden',
    notificationLeftToRightAnimation: 'notification-left-to-right-animation',
    notificationTopToCenterAnimation: 'notification-top-to-center-animation',
    notificationBottomToCenterAnimation: 'notification-bottom-to-center-animation',
};

export const tokens = {
    /** @styleType color */
    background: '--plasma-notification-background',
    /** @styleType value */
    padding: '--plasma-notification-padding',
    /** @styleType dimension */
    horizontalLayoutPadding: '--plasma-notification-horizontal-layout-padding',
    /** @styleType dimension */
    width: '--plasma-notification-width',
    /** @styleType shape */
    borderRadius: '--plasma-notification-border-radius',
    /** @styleType dimension */
    borderWidth: '--plasma-notification-border-width',
    /** @styleType color */
    borderColor: '--plasma-notification-border-color',
    /** @styleType shadow */
    boxShadow: '--plasma-notification-box-shadow',

    /** @styleType dimension */
    paddingOneLineTextbox: '--plasma-notification-padding-one-line-textbox',
    /** @styleType dimension */
    horizontalLayoutGap: '--plasma-notification-horizontal-layout-gap',
    /** @styleType dimension */
    horizontalLayoutLeftIconMargin: '--plasma-notification-horizontal-layout-left-icon-margin',
    /** @styleType dimension */
    horizontalLayoutRightPaddingWithoutCloseIcon:
        '--plasma-notification-horizontal-layout-right-padding-without-close-icon',
    /** @styleType value */
    horisontalIconLeftAlignSelf: '--plasma-notification-horizontal-icon-left-align-self',
    /** @styleType value */
    horisontalActionsAlignSelf: '--plasma-notification-horizontal-actions-align-self',
    /** @styleType value */
    horisontalIconCloseAlignSelf: '--plasma-notification-horizontal-icon-close-align-self',

    /** @styleType dimension */
    contentPaddingTop: '--plasma-notification-content-padding-top',
    /** @styleType dimension */
    contentPaddingRight: '--plasma-notification-content-padding-right',
    /** @styleType dimension */
    contentPaddingBottom: '--plasma-notification-content-padding-bottom',
    /** @styleType dimension */
    contentPaddingLeft: '--plasma-notification-content-padding-left',

    /** @styleType dimension */
    contentPaddingTopWithoutIcon: '--plasma-notification-content-padding-top-without-icon',

    /** @styleType dimension */
    textboxPaddingTop: '--plasma-notification-textbox-padding-top',
    /** @styleType dimension */
    textboxPaddingRight: '--plasma-notification-textbox-padding-right',
    /** @styleType dimension */
    textboxPaddingBottom: '--plasma-notification-textbox-padding-bottom',
    /** @styleType dimension */
    textboxPaddingLeft: '--plasma-notification-textbox-padding-left',

    /** @styleType dimension */
    textboxPaddingTopWithTopIcon: '--plasma-notification-textbox-padding-top-with-top-icon',
    /** @styleType dimension */
    textboxPaddingRightWithCloseIcon: '--plasma-notification-textbox-padding-right-with-close-icon',
    /** @styleType dimension */
    textboxGap: '--plasma-notification-textbox-gap',

    /** @styleType dimension */
    buttonsMarginTop: '--plasma-notification-buttons-margin-top',
    /** @styleType dimension */
    buttonsMarginLeft: '--plasma-notification-buttons-margin-left',

    /** @styleType color */
    contentLeftIconColor: '--plasma-notification-content-left-icon-color',
    /** @styleType dimension */
    contentLeftIconSize: '--plasma-notification-content-left-icon-size',
    /** @styleType dimension */
    contentLeftIconMargin: '--plasma-notification-content-left-icon-margin',
    /** @styleType dimension */
    contentTopIconMargin: '--plasma-notification-content-top-icon-margin',

    /** @styleType dimension */
    imageWidth: '--plasma-notification-image-width',
    /** @styleType dimension */
    imageHeight: '--plasma-notification-image-height',
    /** @styleType dimension */
    imageFullWidthHeight: '--plasma-notification-image-full-width-height',
    /** @styleType dimension */
    imageMarginBottom: '--plasma-notification-image-margin-bottom',
    /** @styleType dimension */
    imageContentPadding: '--plasma-notification-image-content-padding',

    /** @styleType color */
    contentColor: '--plasma-notification-content-color',
    /** @styleType typography @styleProp contentStyle @stylePart fontFamily */
    contentFontFamily: '--plasma-notification-content-font-family',
    /** @styleType typography @styleProp contentStyle @stylePart fontSize */
    contentFontSize: '--plasma-notification-content-font-size',
    /** @styleType typography @styleProp contentStyle @stylePart fontStyle */
    contentFontStyle: '--plasma-notification-content-font-style',
    /** @styleType typography @styleProp contentStyle @stylePart fontWeight */
    contentFontWeight: '--plasma-notification-content-font-weight',
    /** @styleType value */
    contentFontWeightBold: '--plasma-notification-content-font-weight-bold',
    /** @styleType typography @styleProp contentStyle @stylePart letterSpacing */
    contentFontLetterSpacing: '--plasma-notification-content-font-letter-spacing',
    /** @styleType typography @styleProp contentStyle @stylePart lineHeight */
    contentFontLineHeight: '--plasma-notification-content-font-line-height',

    /** @styleType color */
    titleColor: '--plasma-notification-title-color',
    /** @styleType typography @styleProp titleStyle @stylePart fontFamily */
    titleFontFamily: '--plasma-notification-title-font-family',
    /** @styleType typography @styleProp titleStyle @stylePart fontSize */
    titleFontSize: '--plasma-notification-title-font-size',
    /** @styleType typography @styleProp titleStyle @stylePart fontStyle */
    titleFontStyle: '--plasma-notification-title-font-style',
    /** @styleType typography @styleProp titleStyle @stylePart fontWeight */
    titleFontWeight: '--plasma-notification-title-font-weight',
    /** @styleType value */
    titleFontWeightBold: '--plasma-notification-title-font-weight-bold',
    /** @styleType typography @styleProp titleStyle @stylePart letterSpacing */
    titleFontLetterSpacing: '--plasma-notification-title-font-letter-spacing',
    /** @styleType typography @styleProp titleStyle @stylePart lineHeight */
    titleFontLineHeight: '--plasma-notification-title-font-line-height',

    /** @styleType dimension */
    closeIconTop: '--plasma-notification-close-icon-top',
    /** @styleType dimension */
    closeIconRight: '--plasma-notification-close-icon-right',
    /** @styleType color */
    closeIconColor: '--plasma-notification-close-icon-color',
    /** @styleType color */
    closeIconColorOnHover: '--plasma-notification-close-icon-color-on-hover',
    /** @styleType dimension */
    closeIconSize: '--plasma-notification-close-icon-size',
    /** @styleType dimension */
    closeIconButtonSize: '--plasma-notification-close-icon-button-size',
};
