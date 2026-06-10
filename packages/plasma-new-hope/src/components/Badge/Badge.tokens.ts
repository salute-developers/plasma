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
    background: '--plasma-badge-background',
    color: '--plasma-badge-color',
    // TODO: Сделать это с помощью appearance (разных конфигов) и удалить эти токены
    backgroundTransparent: '--plasma-badge-background-transparent',
    colorTransparent: '--plasma-badge-color-transparent',
    colorClear: '--plasma-badge-color-clear',
    backgroundClear: '--plasma-badge-background-clear',

    borderRadius: '--plasma-badge-border-radius',
    pilledBorderRadius: '--plasma-badge-pilled-border-radius', // TODO: Удалить этот токен и юзать только borderRadius с разными конфигами для разных appearance
    height: '--plasma-badge-height',
    padding: '--plasma-badge-padding',
    paddingIconOnly: '--plasma-badge-padding-icon-only', // TODO: Подумать, можно ли обойтись без этого токена

    fontFamily: '--plasma-badge-font-family',
    fontSize: '--plasma-badge-font-size',
    fontStyle: '--plasma-badge-font-style',
    fontWeight: '--plasma-badge-font-weight',
    letterSpacing: '--plasma-badge-letter-spacing',
    lineHeight: '--plasma-badge-line-height',

    // TODO: Подумать, можно ли обойтись без этих токенов или как-то объеденить
    leftContentMarginLeft: '--plasma-badge-left-content-margin-left',
    leftContentMarginRight: '--plasma-badge-left-content-margin-right',
    rightContentMarginLeft: '--plasma-badge-right-content-margin-left',
    rightContentMarginRight: '--plasma-badge-right-content-margin-right',
};
