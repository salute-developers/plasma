export const classes = {
    simple: 'simple',
    stepItem: 'step-item',
    stepItemTitle: 'step-item-title',
    centered: 'item-centered',
    active: 'item-active',
    nextActive: 'next-item-active',
    prevCompleted: 'prev-item-completed',
    inactive: 'item-inactive',
    clickable: 'item-clickable',
    hovered: 'item-hovered',
    disabled: 'item-disabled',
    verticalOrientation: 'vertical-orientation',
    hasIndicator: 'item-has-indicator',
    activeItem: 'item-active',
    transparentDivider: 'transparent-divider',
    verticalLastItem: 'vertical-last-item',
    firstItem: 'first-item',
    noTitle: 'no-title',
};

export const tokens = {
    /** @styleType dimension */
    indicatorSize: '--plasma-step-item-indicator-size',
    /** @styleType dimension */
    activeIndicatorSize: '--plasma-step-item-active-indicator-size',
    /** @styleType dimension */
    bulletSize: '--plasma-step-item-bullet-size',
    /** @styleType dimension */
    activeBulletSize: '--plasma-step-item-active-bullet-size',

    /** @styleType dimension */
    titlePaddingTop: '--plasma-step-item-title-padding-top',
    /** @styleType dimension */
    contentPaddingTop: '--plasma-step-item-content-padding-top',
    /** @styleType dimension */
    contentPaddingRight: '--plasma-step-item-content-padding-right',
    /** @styleType dimension */
    contentSidePadding: '--plasma-step-item-content-side-padding',
    /** @styleType dimension */
    contentVerticalPadding: '--plasma-step-item-content-vertical-padding',
    /** @styleType dimension */
    verticalContentPaddingLeft: '--plasma-step-item-vertical-content-padding-left',

    /** @styleType typography @styleProp titleStyle @stylePart fontFamily */
    titleFontFamily: '--plasma-step-item-title-font-family',
    /** @styleType typography @styleProp titleStyle @stylePart fontSize */
    titleFontSize: '--plasma-step-item-title-font-size',
    /** @styleType typography @styleProp titleStyle @stylePart fontStyle */
    titleFontStyle: '--plasma-step-item-title-font-style',
    /** @styleType typography @styleProp titleStyle @stylePart fontWeight */
    titleFontWeight: '--plasma-step-item-title-font-weight',
    /** @styleType typography @styleProp titleStyle @stylePart letterSpacing */
    titleLetterSpacing: '--plasma-step-item-title-letter-spacing',
    /** @styleType typography @styleProp titleStyle @stylePart lineHeight */
    titleLineHeight: '--plasma-step-item-title-line-height',

    /** @styleType typography @styleProp contentStyle @stylePart fontFamily */
    contentFontFamily: '--plasma-step-item-content-font-family',
    /** @styleType typography @styleProp contentStyle @stylePart fontSize */
    contentFontSize: '--plasma-step-item-content-font-size',
    /** @styleType typography @styleProp contentStyle @stylePart fontStyle */
    contentFontStyle: '--plasma-step-item-content-font-style',
    /** @styleType typography @styleProp contentStyle @stylePart fontWeight */
    contentFontWeight: '--plasma-step-item-content-font-weight',
    /** @styleType typography @styleProp contentStyle @stylePart letterSpacing */
    contentLetterSpacing: '--plasma-step-item-content-letter-spacing',
    /** @styleType typography @styleProp contentStyle @stylePart lineHeight */
    contentLineHeight: '--plasma-step-item-content-line-height',

    /** @styleType typography @styleProp indicatorStyle @stylePart fontFamily */
    indicatorFontFamily: '--plasma-step-item-indicator-font-family',
    /** @styleType typography @styleProp indicatorStyle @stylePart fontSize */
    indicatorFontSize: '--plasma-step-item-indicator-font-size',
    /** @styleType typography @styleProp indicatorStyle @stylePart fontStyle */
    indicatorFontStyle: '--plasma-step-item-indicator-font-style',
    /** @styleType typography @styleProp indicatorStyle @stylePart fontWeight */
    indicatorFontWeight: '--plasma-step-item-indicator-font-weight',
    /** @styleType typography @styleProp indicatorStyle @stylePart letterSpacing */
    indicatorLetterSpacing: '--plasma-step-item-indicator-letter-spacing',
    /** @styleType typography @styleProp indicatorStyle @stylePart lineHeight */
    indicatorLineHeight: '--plasma-step-item-indicator-line-height',

    /** @styleType typography @styleProp activeIndicatorStyle @stylePart fontFamily */
    activeIndicatorFontFamily: '--plasma-step-item-active-indicator-font-family',
    /** @styleType typography @styleProp activeIndicatorStyle @stylePart fontSize */
    activeIndicatorFontSize: '--plasma-step-item-active-indicator-font-size',
    /** @styleType typography @styleProp activeIndicatorStyle @stylePart fontStyle */
    activeIndicatorFontStyle: '--plasma-step-item-active-indicator-font-style',
    /** @styleType typography @styleProp activeIndicatorStyle @stylePart fontWeight */
    activeIndicatorFontWeight: '--plasma-step-item-active-indicator-font-weight',
    /** @styleType typography @styleProp activeIndicatorStyle @stylePart letterSpacing */
    activeIndicatorLetterSpacing: '--plasma-step-item-active-indicator-letter-spacing',
    /** @styleType typography @styleProp activeIndicatorStyle @stylePart lineHeight */
    activeIndicatorLineHeight: '--plasma-step-item-active-indicator-line-height',

    /** @styleType color */
    activeTitleColor: '--plasma-step-item-active-title-color',
    /** @styleType color */
    activeTitleColorHover: '--plasma-step-item-active-title-color-hover',
    /** @styleType color */
    inactiveTitleColor: '--plasma-step-item-inactive-title-color',
    /** @styleType color */
    inactiveTitleColorHover: '--plasma-step-item-inactive-title-color-hover',

    /** @styleType color */
    contentColor: '--plasma-step-item-content-color',
    /** @styleType color */
    focusColor: '--plasma-step-item-focus-color',

    /** @styleType value */
    activeIndicatorBorder: '--plasma-step-item-active-indicator-border',
    /** @styleType value @styleProp activeIndicatorBorder @styleState hovered */
    activeIndicatorBorderHover: '--plasma-step-item-active-indicator-border-hover',

    /** @styleType value */
    bulletActiveIndicatorBorder: '--plasma-step-item-bullet-active-indicator-border',
    /** @styleType value @styleProp bulletActiveIndicatorBorder @styleState hovered */
    bulletActiveIndicatorBorderHover: '--plasma-step-item-bullet-active-indicator-border-hover',

    /** @styleType color */
    loaderSpinnerColor: '--plasma-step-item-lodare-spinner-color',

    /** @styleType color */
    activeIndicatorColor: '--plasma-step-item-active-indicator-color',
    /** @styleType color @styleProp activeIndicatorColor @styleState hovered */
    activeIndicatorColorHover: '--plasma-step-item-active-indicator-color-hover',
    /** @styleType color */
    activeIndicatorBackground: '--plasma-step-item-active-indicator-background',

    /** @styleType color */
    bulletActiveBackground: '--plasma-step-item-bullet-active-indicator-background',

    /** @styleType color @styleComponent Steps StepItem */
    completedTitleColor: '--plasma-step-item-completed-title-color',
    /** @styleType color @styleComponent Steps StepItem */
    completedTitleColorHover: '--plasma-step-item-completed-title-color-hover',
    /** @styleType color @styleComponent Steps StepItem */
    completedIndicatorColor: '--plasma-step-item-completed-indicator-color',
    /** @styleType color @styleComponent Steps StepItem */
    completedIndicatorColorHover: '--plasma-step-item-completed-indicator-color-hover',

    /** @styleType color @styleComponent Steps StepItem */
    completedIndicatorBackground: '--plasma-step-item-completed-indicator-background',
    /** @styleType color @styleComponent Steps StepItem */
    completedIndicatorBackgroundHover: '--plasma-step-item-completed-indicator-background-hover',

    /** @styleType color */
    completedBulletBackground: '--plasma-step-item-completed-bullet-background',
    /** @styleType color @styleProp completedBulletBackground @styleState hovered */
    completedBulletBackgroundHover: '--plasma-step-item-completed-bullet-background-hover',

    /** @styleType value */
    completedIndicatorBorder: '--plasma-step-item-completed-indicator-border',
    /** @styleType value @styleProp completedIndicatorBorder @styleState hovered */
    completedIndicatorBorderHover: '--plasma-step-item-completed-indicator-border-hover',

    /** @styleType value */
    completedBulletBorder: '--plasma-step-item-completed-bullet-border',
    /** @styleType value @styleProp completedBulletBorder @styleState hovered */
    completedBulletBorderHover: '--plasma-step-item-completed-bullet-border-hover',

    /** @styleType color */
    inactiveIndicatorColor: '--plasma-step-item-inactive-indicator-color',
    /** @styleType color */
    inactiveIndicatorColorHover: '--plasma-step-item-inactive-indicator-color-hover',
    /** @styleType color */
    inactiveIndicatorBackground: '--plasma-step-item-inactive-indicator-background',
    /** @styleType color */
    inactiveIndicatorBackgroundHover: '--plasma-step-item-inactive-indicator-background-hover',

    /** @styleType color @styleProp inactiveBulletBackground @styleState hovered */
    inactiveBulletBackgroundHover: '--plasma-step-item-inactive-bullet-background-hover',

    /** @styleType color */
    inactiveBulletBackground: '--plasma-step-item-inactive-bullet-background',
    /** @styleType value */
    inactiveBulletBorder: '--plasma-step-item-inactive-bullet-border',

    /** @styleType float */
    disabledOpacity: '--plasma-step-item-disabled-opacity',

    /** @styleType dimension */
    dividerThickness: '--plasma-step-item-divider-thickness',
    /** @styleType dimension */
    bulletBorderThickness: '--plasma-step-item-bullet-border-thickness',
    /** @styleType dimension */
    activeBulletBorderThickness: '--plasma-step-item-active-bullet-border-thickness',
    /** @styleType color @styleComponent Steps StepItem */
    dividerColor: '--plasma-step-item-divider-color',
    /** @styleType color */
    dividerGradientColor: '--plasma-step-item-divider-gradient-color',
    /** @styleType color */
    dividerActiveGradientColor: '--plasma-step-item-active-divider-gradient-color',
    /** @styleType color */
    dividerVerticalGradientColor: '--plasma-step-item-divider-vertical-gradient-color',
    /** @styleType color */
    dividerActiveVerticalGradientColor: '--plasma-step-item-active-divider-vertical-gradient-color',
};
