export const classes = {
    badgePilled: 'badge-pilled',
    badgeTransparent: 'badge-transparent',
    badgeClear: 'badge-clear',
    badgeTruncate: 'badge-truncate',
    iconOnly: 'badge-icon-only',
};

export const privateTokens = {
    customBackground: '--plasma-badge-custom-background',
    customColor: '--plasma-badge-custom-color',
};

export const tokens = {
    /** @styleType color */
    background: '--plasma-badge-background',
    /** @styleType color */
    color: '--plasma-badge-color',
    // TODO: Сделать это с помощью appearance (разных конфигов) и удалить эти токены
    /** @styleType color */
    backgroundTransparent: '--plasma-badge-background-transparent',
    /** @styleType color */
    colorTransparent: '--plasma-badge-color-transparent',
    /** @styleType color */
    colorClear: '--plasma-badge-color-clear',
    /** @styleType color */
    backgroundClear: '--plasma-badge-background-clear',

    /** @styleType shape @styleProp shape */
    borderRadius: '--plasma-badge-border-radius',
    /** @styleType shape */
    pilledBorderRadius: '--plasma-badge-pilled-border-radius', // TODO: Удалить этот токен и юзать только borderRadius с разными конфигами для разных appearance
    /** @styleType dimension */
    height: '--plasma-badge-height',
    /** @styleType dimension */
    padding: '--plasma-badge-padding',
    /** @styleType dimension */
    paddingIconOnly: '--plasma-badge-padding-icon-only', // TODO: Подумать, можно ли обойтись без этого токена

    /** @styleType typography @styleProp textStyle @stylePart fontFamily */
    fontFamily: '--plasma-badge-font-family',
    /** @styleType typography @styleProp textStyle @stylePart fontSize */
    fontSize: '--plasma-badge-font-size',
    /** @styleType typography @styleProp textStyle @stylePart fontStyle */
    fontStyle: '--plasma-badge-font-style',
    /** @styleType typography @styleProp textStyle @stylePart fontWeight */
    fontWeight: '--plasma-badge-font-weight',
    /** @styleType typography @styleProp textStyle @stylePart letterSpacing */
    letterSpacing: '--plasma-badge-letter-spacing',
    /** @styleType typography @styleProp textStyle @stylePart lineHeight */
    lineHeight: '--plasma-badge-line-height',

    // TODO: Подумать, можно ли обойтись без этих токенов или как-то объеденить
    /** @styleType dimension */
    leftContentMarginLeft: '--plasma-badge-left-content-margin-left',
    /** @styleType dimension */
    leftContentMarginRight: '--plasma-badge-left-content-margin-right',
    /** @styleType dimension */
    rightContentMarginLeft: '--plasma-badge-right-content-margin-left',
    /** @styleType dimension */
    rightContentMarginRight: '--plasma-badge-right-content-margin-right',
};
