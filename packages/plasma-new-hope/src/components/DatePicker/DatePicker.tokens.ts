export const classes = {
    datePickerError: 'date-picker-error',
    datePickerSuccess: 'date-picker-success',
    datePickerEdited: 'date-picker-edited',
    datePickerRoot: 'date-picker-root',
    datePickerstretched: 'date-picker-stretched',
    datePickerCalendarstretched: 'date-picker-calendar-stretched',
    shortcutItemDisabled: 'date-picker-shortcut-item-disabled',
};

export const privateTokens = {
    calendarDoubleWidth: '--plasma_private-calendar-double-width',
};

export const tokens = {
    /** @styleType dimension */
    width: '--plasma-date-picker-width',

    /** Токены полей ввода в рендже */
    /** @styleType color */
    background: '--plasma-date-picker_range-background',
    /** @styleType color */
    backgroundError: '--plasma-date-picker_range-background-error',
    /** @styleType color */
    backgroundSuccess: '--plasma-date-picker_range-background-success',
    /** @styleType color */
    backgroundEdited: '--plasma-date-picker_range-background-edited',
    /** @styleType color */
    backgroundReadOnly: '--plasma-date-picker_range-background-readonly',
    /** @styleType dimension */
    borderRadius: '--plasma-date-picker_range-border-radius',
    /** @styleType dimension */
    borderWidth: '--plasma-date-picker_range-border-width',
    /** @styleType color */
    borderColor: '--plasma-date-picker_range-border-color',
    /** @styleType color @styleProp borderColor @styleState hovered */
    borderColorHover: '--plasma-date-picker_range-border-color-hover',
    /** @styleType color */
    borderColorFocus: '--plasma-date-picker_range-border-color-focus',
    /** @styleType color */
    borderColorError: '--plasma-date-picker_range-border-color-error',
    /** @styleType color */
    borderColorSuccess: '--plasma-date-picker_range-border-color-success',
    /** @styleType color */
    borderColorEdited: '--plasma-date-picker_range-border-color-edited',
    /** @styleType color */
    borderColorReadOnly: '--plasma-date-picker_range-border-color-readonly',

    /** Токены разделителя */
    /** @styleType color */
    clearDividerColor: '--plasma-date-picker-clear__divider-color',
    /** @styleType color */
    dividerColor: '--plasma-date-picker_range__divider-color',
    /** @styleType color */
    dividerColorReadOnly: '--plasma-date-picker_range__divider-color-readonly',
    /** @styleType dimension */
    dividerPadding: '--plasma-date-picker_range__divider-padding',
    /** @styleType typography @styleProp dividerStyle @stylePart fontFamily */
    dividerFontFamily: '--plasma-date-picker_range__divider-font-family',
    /** @styleType typography @styleProp dividerStyle @stylePart fontStyle */
    dividerFontStyle: '--plasma-date-picker_range__divider-font-style',
    /** @styleType typography @styleProp dividerStyle @stylePart fontSize */
    dividerFontSize: '--plasma-date-picker_range__divider-font-size',
    /** @styleType typography @styleProp dividerStyle @stylePart fontWeight */
    dividerFontWeight: '--plasma-date-picker_range__divider-font-weight',
    /** @styleType typography @styleProp dividerStyle @stylePart letterSpacing */
    dividerLetterSpacing: '--plasma-date-picker_range__divider-letter-spacing',
    /** @styleType typography @styleProp dividerStyle @stylePart lineHeight */
    dividerLineHeight: '--plasma-date-picker_range__divider-line-height',
    /** @styleType float */
    dividerOpacityReadOnly: '--plasma-date-picker_range__divider-opacity-readonly',

    /** Токены слотов для контента в range */
    /** @styleType dimension */
    leftContentMargin: '--plasma-date-picker_range__left-content-margin',
    /** @styleType dimension */
    rightContentMargin: '--plasma-date-picker_range__right-content-margin',
    /** @styleType float */
    rightContentOpacityReadOnly: '--plasma-date-picker_range__right-content-opacity-readonly',

    /** @styleType color */
    contentSlotColor: '--plasma-date-picker-content-slot-color',
    /** @styleType color @styleProp contentSlotColor @styleState hovered */
    contentSlotColorHover: '--plasma-date-picker-content-slot-color-hover',
    /** @styleType color @styleProp contentSlotColor @styleState pressed */
    contentSlotColorActive: '--plasma-date-picker-content-slot-color-active',

    /** @styleType color */
    contentSlotColorSuccess: '--plasma-date-picker-content-slot-color-success',
    /** @styleType color @styleProp contentSlotColorSuccess @styleState hovered */
    contentSlotColorSuccessHover: '--plasma-date-picker-content-slot-color-success-hover',
    /** @styleType color @styleProp contentSlotColorSuccess @styleState pressed */
    contentSlotColorSuccessActive: '--plasma-date-picker-content-slot-color-success-active',

    /** @styleType color */
    contentSlotColorError: '--plasma-date-picker-content-slot-color-error',
    /** @styleType color @styleProp contentSlotColorError @styleState hovered */
    contentSlotColorErrorHover: '--plasma-date-picker-content-slot-color-error-hover',
    /** @styleType color @styleProp contentSlotColorError @styleState pressed */
    contentSlotColorErrorActive: '--plasma-date-picker-content-slot-color-error-active',

    /** @styleType color */
    contentSlotRightColor: '--plasma-date-picker-content-right-slot-color',
    /** @styleType color @styleProp contentSlotRightColor @styleState hovered */
    contentSlotRightColorHover: '--plasma-date-picker-content-right-slot-color-hover',
    /** @styleType color @styleProp contentSlotRightColor @styleState pressed */
    contentSlotRightColorActive: '--plasma-date-picker-content-right-slot-color-active',

    /** @styleType dimension */
    embedIconButtonHeight: '--plasma-date-picker-embed-icon-button-height',
    /** @styleType dimension */
    embedIconButtonWidth: '--plasma-date-picker-embed-icon-button-width',
    /** @styleType dimension */
    embedIconButtonPadding: '--plasma-date-picker-embed-icon-button-padding',
    /** @styleType dimension */
    embedIconButtonRadius: '--plasma-date-picker-embed-icon-button-radius',
    /** @styleType color */
    embedIconButtonFocusColor: '--plasma-date-picker-embed-icon-button-focus-color',

    /** Токены лейбла */
    /** @styleType dimension */
    labelWrapperOffset: '--plasma-date-picker-label-wrapper-offset',
    /** @styleType color */
    labelColor: '--plasma-date-picker__label-color',
    /** @styleType color */
    labelColorReadOnly: '--plasma-date-picker__label-color-readonly',
    /** @styleType dimension */
    labelOffset: '--plasma-date-picker__label-offset',

    /** @styleType typography @styleProp labelStyle @stylePart fontFamily */
    labelFontFamily: '--plasma-date-picker__label-font-family',
    /** @styleType typography @styleProp labelStyle @stylePart fontStyle */
    labelFontStyle: '--plasma-date-picker__label-font-style',
    /** @styleType typography @styleProp labelStyle @stylePart fontSize */
    labelFontSize: '--plasma-date-picker__label-font-size',
    /** @styleType typography @styleProp labelStyle @stylePart fontWeight */
    labelFontWeight: '--plasma-date-picker__label-font-weight',
    /** @styleType typography @styleProp labelStyle @stylePart letterSpacing */
    labelLetterSpacing: '--plasma-date-picker__label-letter-spacing',
    /** @styleType typography @styleProp labelStyle @stylePart lineHeight */
    labelLineHeight: '--plasma-date-picker__label-line-height',

    /** Токены индикатора */
    /** @styleType dimension */
    indicatorWrapperGap: '--plasma-date-picker-indicator-wrapper-gap',
    /** @styleType color */
    indicatorColor: '--plasma-date-picker__indicator-color',
    /** @styleType dimension */
    indicatorSizeInner: '--plasma-date-picker__indicator-size',
    /** @styleType dimension */
    indicatorSizeOuter: '--plasma-date-picker__indicator-size-outer',

    /** @styleType dimension */
    indicatorPlacement: '--plasma-date-picker__indicator-placement',
    /** @styleType dimension */
    indicatorPlacementRight: '--plasma-date-picker__indicator-placement-right',
    /** @styleType dimension */
    indicatorOuterPlacement: '--plasma-date-picker__indicator-placement-outer',
    /** @styleType dimension */
    indicatorOuterPlacementRight: '--plasma-date-picker__indicator-placement-outer-right',

    /** @styleType dimension */
    indicatorMarginTop: '--plasma-date-picker-indicator-margin-top',
    /** @styleType dimension */
    indicatorOuterLeft: '--plasma-date-picker-indicator-outer-left',
    /** @styleType dimension */
    indicatorWithoutLabelInner: '--plasma-date-picker-indicator-without-label-inner',
    /** @styleType dimension */
    indicatorWithoutLabelInnerLeft: '--plasma-date-picker-indicator-without-label-inner-left',
    /** @styleType value */
    indicatorWithoutLabelOuterHint: '--plasma-date-picker-indicator-without-label-outer-hint',

    /** Токены индикатора (удалить после перехода на InformationWrapper в Textfield) */
    /** @styleType value */
    clearIndicatorHintInnerRight: '--plasma-date-picker__clear-indicator-hint-placement-inner-right',

    /* label-placement-inner */
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontFamily */
    labelInnerFontFamily: '--plasma-date-picker-placement_inner__label-font-family',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontStyle */
    labelInnerFontStyle: '--plasma-date-picker-placement_inner__label-font-style',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontSize */
    labelInnerFontSize: '--plasma-date-picker-placement_inner__label-font-size',
    /** @styleType typography @styleProp labelInnerStyle @stylePart fontWeight */
    labelInnerFontWeight: '--plasma-date-picker-placement_inner__label-font-weight',
    /** @styleType typography @styleProp labelInnerStyle @stylePart letterSpacing */
    labelInnerLetterSpacing: '--plasma-date-picker-placement_inner__label-letter-spacing',
    /** @styleType typography @styleProp labelInnerStyle @stylePart lineHeight */
    labelInnerLineHeight: '--plasma-date-picker-placement_inner__label-line-height',

    /** @styleType dimension */
    labelInnerPadding: '--plasma-date-picker-placement_inner__label-padding',
    /** @styleType dimension */
    contentLabelInnerPadding: '--plasma-date-picker-placement_inner__content-padding',

    /** Токены вспомогательного текста */
    /** @styleType color */
    leftHelperColor: '--plasma-date-picker__left-helper-color',
    /** @styleType color */
    leftHelperColorError: '--plasma-date-picker__left-helper-color-error',
    /** @styleType color */
    leftHelperColorSuccess: '--plasma-date-picker__left-helper-color-success',
    /** @styleType color */
    leftHelperColorEdited: '--plasma-date-picker__left-helper-color-edited',
    /** @styleType color */
    leftHelperColorReadOnly: '--plasma-date-picker__left-helper-color-readonly',
    /** @styleType color */
    leftHelperColorFocus: '--plasma-date-picker__left-helper-color-focus',
    /** @styleType dimension */
    leftHelperOffset: '--plasma-date-picker__left-helper-offset',

    /** @styleType typography @styleProp leftHelperStyle @stylePart fontFamily */
    leftHelperFontFamily: '--plasma-date-picker__left-helper-font-family',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontStyle */
    leftHelperFontStyle: '--plasma-date-picker__left-helper-font-style',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontSize */
    leftHelperFontSize: '--plasma-date-picker__left-helper-font-size',
    /** @styleType typography @styleProp leftHelperStyle @stylePart fontWeight */
    leftHelperFontWeight: '--plasma-date-picker__left-helper-font-weight',
    /** @styleType typography @styleProp leftHelperStyle @stylePart letterSpacing */
    leftHelperLetterSpacing: '--plasma-date-picker__left-helper-letter-spacing',
    /** @styleType typography @styleProp leftHelperStyle @stylePart lineHeight */
    leftHelperLineHeight: '--plasma-date-picker__left-helper-line-height',

    /** @styleType dimension */
    titleCaptionOffset: '--plasma-date-picker-title-caption-offset',
    /** @styleType dimension */
    titleCaptionMargin: '--plasma-date-picker-title-caption-margin',
    /** @styleType color */
    titleCaptionColor: '--plasma-date-picker-title-caption-color',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontFamily */
    titleCaptionFontFamily: '--plasma-date-picker-title-caption-font-family',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontStyle */
    titleCaptionFontStyle: '--plasma-date-picker-title-caption-font-style',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontSize */
    titleCaptionFontSize: '--plasma-date-picker-title-caption-font-size',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart fontWeight */
    titleCaptionFontWeight: '--plasma-date-picker-title-caption-font-weight',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart letterSpacing */
    titleCaptionLetterSpacing: '--plasma-date-picker-title-caption-letter-spacing',
    /** @styleType typography @styleProp titleCaptionStyle @stylePart lineHeight */
    titleCaptionLineHeight: '--plasma-date-picker-title-caption-line-height',
    /** Токены контейнера календаря */
    /** @styleType shadow */
    popoverShadow: '--plasma-date-picker-popover-shadow',
    /** @styleType shadow */
    rangeShadow: '--plasma-date-picker-range-shadow',
    /** @styleType dimension */
    popoverGap: '--plasma-date-picker-popover-gap',
    /** @styleType dimension */
    popoverBorderRadius: '--plasma-date-picker-popover-border-radius',
    /** @styleType dimension */
    popoverPadding: '--plasma-date-picker-popover-padding',
    /** @styleType dimension */
    popoverVerticalPadding: '--plasma-date-picker-popover-vertical-padding',
    /** @styleType color */
    popoverBackgroundColor: '--plasma-date-picker-popover__background-color',
    /** @styleType color */
    popoverSeparatorBackground: '--plasma-date-picker-popover__separator-background',

    /** Прозрачность для всего компонента в состоянии disabled */
    /** @styleType float */
    disabledOpacity: '--plasma-date-picker-disabled-opacity',
    /** @styleType float */
    disabledBackgroundOpacity: '--plasma-date-picker-disabled-background-opacity',
    /** @styleType float */
    disabledInnerContentOpacity: '--plasma-date-picker-disabled-inner-content-opacity',

    /** @styleType float */
    rangeReadOnlyOpacity: '--plasma-date-picker-readonly-opacity',

    /** Цвет обводки поля ввода при фокусе */
    /** @styleType color */
    focusColor: '--plasma-date-picker-focus-color',

    /** Токены полей ввода */
    /** @styleType color */
    textFieldColor: '--plasma-date-picker-textfield-color',
    /** @styleType color */
    textFieldColorError: '--plasma-date-picker-textfield-color-error',
    /** @styleType color */
    textFieldColorSuccess: '--plasma-date-picker-textfield-color-success',
    /** @styleType color */
    textFieldColorEdited: '--plasma-date-picker-textfield-color-edited',
    /** @styleType color */
    textFieldPlaceholderColorFocus: '--plasma-date-picker-textfield__placeholder-color-focus',
    /** @styleType color */
    textFieldFocusColor: '--plasma-date-picker-textfield-focus-color',
    /** @styleType color */
    textFieldPlaceholderColor: '--plasma-date-picker-textfield-placeholder-color',
    /** @styleType color */
    textFieldClearPlaceholderColorFocus: '--plasma-date-picker-textfield-clear-placeholder-color-focus',
    /** @styleType color */
    textFieldCaretColor: '--plasma-date-picker-textfield-caret-color',

    /** @styleType color */
    textFieldBackgroundColor: '--plasma-date-picker-textfield-background-color',
    /** @styleType color @styleProp textFieldBackgroundColor @styleState hovered */
    textFieldBackgroundColorHover: '--plasma-date-picker-textfield-background-color-hover',
    /** @styleType color */
    textFieldBackgroundColorFocus: '--plasma-date-picker-textfield-background-color-focus',
    /** @styleType color */
    textFieldBackgroundErrorColor: '--plasma-date-picker-textfield-background-color-error',
    /** @styleType color @styleProp textFieldBackgroundErrorColor @styleState hovered */
    textFieldBackgroundErrorColorHover: '--plasma-date-picker-textfield-background-color-error-hover',
    /** @styleType color */
    textFieldBackgroundErrorColorFocus: '--plasma-date-picker-textfield-background-color-error-focus',
    /** @styleType color */
    textFieldBackgroundSuccessColor: '--plasma-date-picker-textfield-background-color-success',
    /** @styleType color @styleProp textFieldBackgroundSuccessColor @styleState hovered */
    textFieldBackgroundSuccessColorHover: '--plasma-date-picker-textfield-background-color-success-hover',
    /** @styleType color */
    textFieldBackgroundSuccessColorFocus: '--plasma-date-picker-textfield-background-color-success-focus',
    /** @styleType color */
    textFieldBackgroundEditedColor: '--plasma-date-picker-textfield-background-color-edited',
    /** @styleType color @styleProp textFieldBackgroundEditedColor @styleState hovered */
    textFieldBackgroundEditedColorHover: '--plasma-date-picker-textfield-background-color-edited-hover',
    /** @styleType color */
    textFieldBackgroundEditedColorFocus: '--plasma-date-picker-textfield-background-color-edited-focus',

    /** @styleType shadow */
    textFieldBoxShadowSecondary: '--plasma-date-picker-textfield-box-shadow-secondary',

    /** @styleType color */
    textFieldBorderColor: '--plasma-date-picker-textfield-border-color',
    /** @styleType color @styleProp textFieldBorderColor @styleState hovered */
    textFieldBorderColorHover: '--plasma-date-picker-textfield-border-color-hover',
    /** @styleType color */
    textFieldBorderColorFocus: '--plasma-date-picker-textfield-border-color-focus',
    /** @styleType color */
    textFieldBorderColorError: '--plasma-date-picker-textfield-border-color-error',
    /** @styleType color @styleProp textFieldBorderColorError @styleState hovered */
    textFieldBorderColorErrorHover: '--plasma-date-picker-textfield-border-color-error-hover',
    /** @styleType color */
    textFieldBorderColorErrorFocus: '--plasma-date-picker-textfield-border-color-error-focus',
    /** @styleType color */
    textFieldBorderColorSuccess: '--plasma-date-picker-textfield-border-color-success',
    /** @styleType color @styleProp textFieldBorderColorSuccess @styleState hovered */
    textFieldBorderColorSuccessHover: '--plasma-date-picker-textfield-border-color-success-hover',
    /** @styleType color */
    textFieldBorderColorSuccessFocus: '--plasma-date-picker-textfield-border-color-success-focus',
    /** @styleType color */
    textFieldBorderColorEdited: '--plasma-date-picker-textfield-border-color-edited',
    /** @styleType color @styleProp textFieldBorderColorEdited @styleState hovered */
    textFieldBorderColorEditedHover: '--plasma-date-picker-textfield-border-color-edited-hover',
    /** @styleType color */
    textFieldBorderColorEditedFocus: '--plasma-date-picker-textfield-border-color-edited-focus',

    /** @styleType color */
    textFieldColorReadOnly: '--plasma-date-picker-textfield-color-readonly',
    /** @styleType color */
    textFieldBackgroundColorReadOnly: '--plasma-date-picker-textfield-background-color-readonly',
    /** @styleType color */
    textFieldBorderColorReadOnly: '--plasma-date-picker-textfield-border-color-readonly',
    /** @styleType color */
    textFieldPlaceholderColorReadOnly: '--plasma-date-picker-textfield-placeholder-color-readonly',
    /** @styleType float */
    textFieldReadOnlyOpacity: '--plasma-date-picker-textfield-readonly-opacity',

    /** @styleType dimension */
    textFieldHeight: '--plasma-date-picker-textfield-height',
    /** @styleType dimension */
    textFieldBorderWidth: '--plasma-date-picker-textfield-border-width',
    /** @styleType dimension */
    textFieldBorderRadius: '--plasma-date-picker-textfield-border-radius',
    /** @styleType value */
    textFieldPadding: '--plasma-date-picker-textfield-padding',
    /** @styleType dimension */
    textFieldLeftContentMargin: '--plasma-date-picker-textfield__left-content-margin',
    /** @styleType dimension */
    textFieldRightContentMargin: '--plasma-date-picker-textfield__right-content-margin',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontFamily */
    textFieldFontFamily: '--plasma-date-picker-textfield-font-family',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontStyle */
    textFieldFontStyle: '--plasma-date-picker-textfield-font-style',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontSize */
    textFieldFontSize: '--plasma-date-picker-textfield-font-size',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontWeight */
    textFieldFontWeight: '--plasma-date-picker-textfield-font-weight',
    /** @styleType typography @styleProp textFieldStyle @stylePart letterSpacing */
    textFieldLetterSpacing: '--plasma-date-picker-textfield-letter-spacing',
    /** @styleType typography @styleProp textFieldStyle @stylePart lineHeight */
    textFieldLineHeight: '--plasma-date-picker-textfield-line-height',

    /** @styleType color */
    textFieldTextBeforeColor: '--plasma-date-picker-textfield__before-text-color',
    /** @styleType color */
    textFieldTextAfterColor: '--plasma-date-picker-textfield__after-text-color',
    /** @styleType dimension */
    textFieldTextBeforeMargin: '--plasma-date-picker-textfield__before-text-margin',
    /** @styleType dimension */
    textFieldTextAfterMargin: '--plasma-date-picker-textfield__after-text-margin',

    /** @styleType color */
    textFieldContentSlotRightColor: '--plasma-date-picker-textfield__content-right-color',
    /** @styleType color @styleProp textFieldContentSlotRightColor @styleState hovered */
    textFieldContentSlotRightColorHover: '--plasma-date-picker-textfield__content-right-color-hover',
    /** @styleType color @styleProp textFieldContentSlotRightColor @styleState pressed */
    textFieldContentSlotRightColorActive: '--plasma-date-picker-textfield__content-right-color-active',

    /** @styleType color */
    textFieldContentSlotColor: '--plasma-date-picker-textfield__content-color',
    /** @styleType color @styleProp textFieldContentSlotColor @styleState hovered */
    textFieldContentSlotColorHover: '--plasma-date-picker-textfield__content-color-hover',
    /** @styleType color @styleProp textFieldContentSlotColor @styleState pressed */
    textFieldContentSlotColorActive: '--plasma-date-picker-textfield__content-color-active',

    /** @styleType color */
    textFieldContentRightSlotColor: '--plasma-date-picker-textfield__content-right-color',
    /** @styleType color @styleProp textFieldContentRightSlotColor @styleState hovered */
    textFieldContentRightSlotColorHover: '--plasma-date-picker-textfield__content-right-color-hover',
    /** @styleType color @styleProp textFieldContentRightSlotColor @styleState pressed */
    textFieldContentRightSlotColorActive: '--plasma-date-picker-textfield__content-right-color-active',
    /** @styleType float */
    textFieldContentSlotRightOpacityReadOnly: '--plasma-date-picker-textfield__content-right-readonly-opacity',

    /** @styleType color */
    textFieldContentSlotColorSuccess: '--plasma-date-picker-textfield-content-slot-color-success',
    /** @styleType color @styleProp textFieldContentSlotColorSuccess @styleState hovered */
    textFieldContentSlotColorSuccessHover: '--plasma-date-picker-textfield-content-slot-color-success-hover',
    /** @styleType color @styleProp textFieldContentSlotColorSuccess @styleState pressed */
    textFieldContentSlotColorSuccessActive: '--plasma-date-picker-textfield-content-slot-color-success-active',

    /** @styleType color */
    textFieldContentSlotColorError: '--plasma-date-picker-textfield-content-slot-color-error',
    /** @styleType color @styleProp textFieldContentSlotColorError @styleState hovered */
    textFieldContentSlotColorErrorHover: '--plasma-date-picker-textfield-content-slot-color-error-hover',
    /** @styleType color @styleProp textFieldContentSlotColorError @styleState pressed */
    textFieldContentSlotColorErrorActive: '--plasma-date-picker-textfield-content-slot-color-error-active',

    /** @styleType color */
    textFieldDividerColorSuccess: '--plasma-date-picker-textfield__divider-color-success',
    /** @styleType color */
    textFieldDividerColorError: '--plasma-date-picker-textfield__divider-color-error',
    /** @styleType color */
    textFieldDividerColorEdited: '--plasma-date-picker-textfield__divider-color-edited',
    /** @styleType color */
    textFieldDividerColorHover: '--plasma-date-picker-textfield__divider-color-hover',
    /** @styleType color */
    textFieldDividerColorFocus: '--plasma-date-picker-textfield__divider-color-focus',

    /** Токены календаря */
    /** @styleType dimension */
    calendarWidth: '--plasma-date-picker-calendar-width',
    /** @styleType dimension */
    calendarHeight: '--plasma-date-picker-calendar-height',
    /** @styleType dimension */
    calendarBorderWidth: '--plasma-date-picker-calendar-border-width',
    /** @styleType color */
    calendarBorderColor: '--plasma-date-picker-calendar-border-color',

    /** @styleType dimension */
    calendarYearsPadding: '--plasma-date-picker-calendar__years-padding',
    /** @styleType dimension */
    calendarYearItemBorderRadius: '--plasma-date-picker-calendar__year-item-border-radius',
    /** @styleType typography @styleProp calendarYearStyle @stylePart fontFamily */
    calendarYearFontFamily: '--plasma-date-picker-calendar__year-font-family',
    /** @styleType typography @styleProp calendarYearStyle @stylePart fontSize */
    calendarYearFontSize: '--plasma-date-picker-calendar__year-font-size',
    /** @styleType typography @styleProp calendarYearStyle @stylePart fontStyle */
    calendarYearFontStyle: '--plasma-date-picker-calendar__year-font-style',
    /** @styleType typography @styleProp calendarYearStyle @stylePart letterSpacing */
    calendarYearFontLetterSpacing: '--plasma-date-picker-calendar__year-letter-spacing',
    /** @styleType typography @styleProp calendarYearStyle @stylePart lineHeight */
    calendarYearFontLineHeight: '--plasma-date-picker-calendar__year-line-height',
    /** @styleType typography @styleProp calendarYearStyle @stylePart fontWeight */
    calendarYearFontWeight: '--plasma-date-picker-calendar__year-font-weight',
    /** @styleType typography @styleProp calendarYearStyle @stylePart fontWeight @styleState selected */
    calendarYearSelectedFontWeight: '--plasma-date-picker-calendar__year-selected-font-weight',

    /** @styleType dimension */
    calendarMonthsPadding: '--plasma-date-picker-calendar__months-padding',
    /** @styleType dimension */
    calendarMonthItemBorderRadius: '--plasma-date-picker-calendar__month-item-border-radius',
    /** @styleType typography @styleProp calendarMonthStyle @stylePart fontFamily */
    calendarMonthFontFamily: '--plasma-date-picker-calendar__month-font-family',
    /** @styleType typography @styleProp calendarMonthStyle @stylePart fontSize */
    calendarMonthFontSize: '--plasma-date-picker-calendar__month-font-size',
    /** @styleType typography @styleProp calendarMonthStyle @stylePart fontStyle */
    calendarMonthFontStyle: '--plasma-date-picker-calendar__month-font-style',
    /** @styleType typography @styleProp calendarMonthStyle @stylePart letterSpacing */
    calendarMonthFontLetterSpacing: '--plasma-date-picker-calendar__month-letter-spacing',
    /** @styleType typography @styleProp calendarMonthStyle @stylePart lineHeight */
    calendarMonthFontLineHeight: '--plasma-date-picker-calendar__month-line-height',
    /** @styleType typography @styleProp calendarMonthStyle @stylePart fontWeight */
    calendarMonthFontWeight: '--plasma-date-picker-calendar__month-font-weight',
    /** @styleType typography @styleProp calendarMonthStyle @stylePart fontWeight @styleState selected */
    calendarMonthSelectedFontWeight: '--plasma-date-picker-calendar__month-selected-font-weight',

    /** @styleType dimension */
    calendarQuartersPadding: '--plasma-date-picker-calendar__quarters-padding',
    /** @styleType dimension */
    calendarQuarterItemBorderRadius: '--plasma-date-picker-calendar__quarter-item-border-radius',
    /** @styleType typography @styleProp calendarQuarterStyle @stylePart fontFamily */
    calendarQuarterFontFamily: '--plasma-date-picker-calendar__quarter-font-family',
    /** @styleType typography @styleProp calendarQuarterStyle @stylePart fontSize */
    calendarQuarterFontSize: '--plasma-date-picker-calendar__quarter-font-size',
    /** @styleType typography @styleProp calendarQuarterStyle @stylePart fontStyle */
    calendarQuarterFontStyle: '--plasma-date-picker-calendar__quarter-font-style',
    /** @styleType typography @styleProp calendarQuarterStyle @stylePart letterSpacing */
    calendarQuarterFontLetterSpacing: '--plasma-date-picker-calendar__quarter-letter-spacing',
    /** @styleType typography @styleProp calendarQuarterStyle @stylePart lineHeight */
    calendarQuarterFontLineHeight: '--plasma-date-picker-calendar__quarter-line-height',
    /** @styleType typography @styleProp calendarQuarterStyle @stylePart fontWeight */
    calendarQuarterFontWeight: '--plasma-date-picker-calendar__quarter-font-weight',
    /** @styleType typography @styleProp calendarQuarterStyle @stylePart fontWeight @styleState selected */
    calendarQuarterSelectedFontWeight: '--plasma-date-picker-calendar__quarter-selected-font-weight',

    /** @styleType dimension */
    calendarDaysPadding: '--plasma-date-picker-calendar__days-padding',
    /** @styleType dimension */
    calendarDayItemBorderRadius: '--plasma-date-picker-calendar__day-item-border-radius',
    /** @styleType typography @styleProp calendarDayStyle @stylePart fontFamily */
    calendarDayFontFamily: '--plasma-date-picker-calendar__day-font-family',
    /** @styleType typography @styleProp calendarDayStyle @stylePart fontSize */
    calendarDayFontSize: '--plasma-date-picker-calendar__day-font-size',
    /** @styleType typography @styleProp calendarDayStyle @stylePart fontStyle */
    calendarDayFontStyle: '--plasma-date-picker-calendar__day-font-style',
    /** @styleType typography @styleProp calendarDayStyle @stylePart letterSpacing */
    calendarDayFontLetterSpacing: '--plasma-date-picker-calendar__day-letter-spacing',
    /** @styleType typography @styleProp calendarDayStyle @stylePart lineHeight */
    calendarDayFontLineHeight: '--plasma-date-picker-calendar__day-line-height',
    /** @styleType typography @styleProp calendarDayStyle @stylePart fontWeight */
    calendarDayFontWeight: '--plasma-date-picker-calendar__day-font-weight',
    /** @styleType typography @styleProp calendarDayStyle @stylePart fontWeight @styleState selected */
    calendarDaySelectedFontWeight: '--plasma-date-picker-calendar__day-selected-font-weight',
    /** @styleType color */
    calendarDayOfWeekColor: '--plasma-date-picker-calendar__day-of-week-color',

    /** @styleType dimension */
    calendarEventItemBottom: '--plasma-date-picker-calendar__event-item-bottom',

    /** @styleType value */
    calendarHeaderWrapperPadding: '--plasma-date-picker-calendar__header-wrapper-padding',
    /** @styleType dimension */
    calendarHeaderArrowGap: '--plasma-date-picker-calendar__header-arrow-gap',
    /** @styleType value */
    calendarHeaderArrowPadding: '--plasma-date-picker-calendar__header-arrow-padding',
    /** @styleType dimension */
    calendarHeaderPadding: '--plasma-date-picker-calendar__header-padding',
    /** @styleType dimension */
    calendarHeaderDateGap: '--plasma-date-picker-calendar__header-date-gap',
    /** @styleType typography @styleProp calendarHeaderStyle @stylePart fontFamily */
    calendarHeaderFontFamily: '--plasma-date-picker-calendar__header-font-family',
    /** @styleType typography @styleProp calendarHeaderStyle @stylePart fontSize */
    calendarHeaderFontSize: '--plasma-date-picker-calendar__header-font-size',
    /** @styleType typography @styleProp calendarHeaderStyle @stylePart fontStyle */
    calendarHeaderFontStyle: '--plasma-date-picker-calendar__header-font-style',
    /** @styleType typography @styleProp calendarHeaderStyle @stylePart letterSpacing */
    calendarHeaderFontLetterSpacing: '--plasma-date-picker-calendar__header-letter-spacing',
    /** @styleType typography @styleProp calendarHeaderStyle @stylePart lineHeight */
    calendarHeaderFontLineHeight: '--plasma-date-picker-calendar__header-line-height',
    /** @styleType typography @styleProp calendarHeaderStyle @stylePart fontWeight */
    calendarHeaderFontWeight: '--plasma-date-picker-calendar__header-font-weight',
    /** @styleType value */
    calendarHeaderFontWeightBold: '--plasma-date-picker-calendar__header-font-weight-bold',
    /** @styleType value */
    calendarHeaderArrowColor: '--plasma-date-picker-calendar__header-arrow-color',
    /** @styleType dimension */
    calendarHeaderArrowCustomSize: '--plasma-date-picker-calendar__header-arrow-custom-size',

    /** @styleType color */
    iconButtonColor: '--plasma-date-picker-icon-button__color',
    /** @styleType color */
    iconButtonBackgroundColor: '--plasma-date-picker-icon-button__background-color',
    /** @styleType color @styleProp iconButtonColor @styleState hovered */
    iconButtonColorHover: '--plasma-date-picker-icon-button__color-hover',
    /** @styleType color @styleProp iconButtonBackgroundColor @styleState hovered */
    iconButtonBackgroundColorHover: '--plasma-date-picker-icon-button__background-color-hover',
    /** @styleType color @styleProp iconButtonColor @styleState pressed */
    iconButtonColorActive: '--plasma-date-picker-icon-button__color-active',
    /** @styleType color @styleProp iconButtonBackgroundColor @styleState pressed */
    iconButtonBackgroundColorActive: '--plasma-date-picker-icon-button__background-color-active',
    /** @styleType dimension */
    iconButtonHeight: '--plasma-date-picker-icon-button__height',
    /** @styleType dimension */
    iconButtonWidth: '--plasma-date-picker-icon-button__width',
    /** @styleType dimension */
    iconButtonPadding: '--plasma-date-picker-icon-button__padding',
    /** @styleType dimension */
    iconButtonRadius: '--plasma-date-picker-icon-button__radius',
    /** @styleType color */
    iconButtonFocusColor: '--plasma-date-picker-icon-button__focus-color',

    /** @styleType color */
    calendarSelectedItemBackground: '--plasma-date-picker-calendar__selected-item-background',
    /** @styleType color */
    calendarSelectedItemColor: '--plasma-date-picker-calendar__selected-item-color',
    /** @styleType color */
    calendarSelectableItemBackgroundHover: '--plasma-date-picker-calendar__selectable-item-background-hover',
    /** @styleType color */
    calendarCurrentItemBorderColor: '--plasma-date-picker-calendar__current-item-border-color',
    /** @styleType dimension */
    calendarCurrentItemBorderWidth: '--plasma-date-picker-calendar__current-item-border-width',
    /** @styleType color */
    calendarCurrentItemBackgroundHover: '--plasma-date-picker-calendar__current-item-background-hover',
    /** @styleType color */
    calendarCurrentItemColorHover: '--plasma-date-picker-calendar__current-item-color-hover',
    /** @styleType color */
    calendarCurrentItemChildBackgroundHover: '--plasma-date-picker-calendar__current-item-child-background-hover',
    /** @styleType color */
    calendarActiveItemBackground: '--plasma-date-picker-calendar__active-item-background',
    /** @styleType color */
    calendarActiveItemColor: '--plasma-date-picker-calendar__active-item-color',
    /** @styleType color */
    calendarHoveredItemBackground: '--plasma-date-picker-calendar__hovered-item-background',
    /** @styleType color */
    calendarHoveredItemColor: '--plasma-date-picker-calendar__hovered-item-color',
    /** @styleType color */
    calendarRangeBackground: '--plasma-date-picker-calendar__range-background',
    /** @styleType color */
    calendarOutlineFocusColor: '--plasma-date-picker-calendar__outline-focus-color',
    /** @styleType color */
    calendarContentPrimaryColor: '--plasma-date-picker-calendar__content-primary-color',
    /** @styleType color */
    calendarContentSecondaryColor: '--plasma-date-picker-calendar__content-secondary-color',
    /** @styleType color */
    calendarContentPrimaryDisabledColor: '--plasma-date-picker-calendar__content-primary-disabled-color',
    /** @styleType color */
    calendarContentSecondaryDisabledColor: '--plasma-date-picker-calendar__content-secondary-disabled-color',
    /** @styleType float */
    calendarDisabledOpacity: '--plasma-date-picker-calendar__disabled-opacity',

    /* Токены тултипа для событий */
    /** @styleType dimension */
    tooltipPaddingTop: '--plasma-date-picker-calendar-tooltip-padding-top',
    /** @styleType dimension */
    tooltipPaddingRight: '--plasma-date-picker-calendar-tooltip-padding-right',
    /** @styleType dimension */
    tooltipPaddingBottom: '--plasma-date-picker-calendar-tooltip-padding-bottom',
    /** @styleType dimension */
    tooltipPaddingLeft: '--plasma-date-picker-calendar-tooltip-padding-left',
    /** @styleType dimension */
    tooltipMinHeight: '--plasma-date-picker-calendar-tooltip-min-height',
    /** @styleType color */
    tooltipBackgroundColor: '--plasma-date-picker-calendar-tooltip-background-color',
    /** @styleType shadow */
    tooltipBoxShadow: '--plasma-date-picker-calendar-tooltip-box-shadow',
    /** @styleType dimension */
    tooltipBorderRadius: '--plasma-date-picker-calendar-tooltip-border-radius',
    /** @styleType color */
    tooltipColor: '--plasma-date-picker-calendar-tooltip-color',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontFamily */
    tooltipTextFontFamily: '--plasma-date-picker-calendar-tooltip-text-font-family',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontSize */
    tooltipTextFontSize: '--plasma-date-picker-calendar-tooltip-text-font-size',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontStyle */
    tooltipTextFontStyle: '--plasma-date-picker-calendar-tooltip-text-font-style',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontWeight */
    tooltipTextFontWeight: '--plasma-date-picker-calendar-tooltip-text-font-weight',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart letterSpacing */
    tooltipTextFontLetterSpacing: '--plasma-date-picker-calendar-tooltip-text-font-letter-spacing',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart lineHeight */
    tooltipTextFontLineHeight: '--plasma-date-picker-calendar-tooltip-text-font-line-height',
    /** @styleType dimension */
    tooltipContentLeftMargin: '--plasma-date-picker-calendar-tooltip-content-left-margin',
    /** @styleType dimension */
    tooltipArrowMaskWidth: '--plasma-date-picker-calendar-tooltip-arrow-mask-width',
    /** @styleType dimension */
    tooltipArrowMaskHeight: '--plasma-date-picker-calendar-tooltip-arrow-mask-height',
    /** @styleType value */
    tooltipArrowMaskImage: '--plasma-date-picker-calendar-tooltip-arrow-mask-image',
    /** @styleType color */
    tooltipArrowBackground: '--plasma-date-picker-calendar-tooltip-arrow-background',
    /** @styleType dimension */
    tooltipArrowHeight: '--plasma-date-picker-calendar-tooltip-arrow-height',
    /** @styleType dimension */
    tooltipArrowEdgeMargin: '--plasma-date-picker-calendar-tooltip-arrow-edge-margin',

    /* токены для hint */
    /** @styleType value */
    hintMargin: '--plasma-date-picker-info-wrapper-hint-margin',
    /** @styleType dimension */
    hintTargetSize: '--plasma-date-picker-info-wrapper-hint-target-size',
    /** @styleType dimension */
    hintCustomIconTargetSize: '--plasma-date-picker-info-wrapper-hint-custom-icon-target-size',
    /** @styleType color */
    hintIconColor: '--plasma-date-picker-info-wrapper-hint-icon-color',
    /** @styleType dimension */
    hintWithoutLabelPlacementOffset: '--plasma-date-picker-info-wrapper-hint-without-label-placement-offset',
    /** @styleType dimension */
    hintPlacementInnerMargin: '--plasma-date-picker-info-wrapper-hint-placement-inner-offset',
    /** @styleType dimension */
    hintInnerLabelPlacementOffset: '--plasma-date-picker_old_hint-inner-label-placement-offset',
    /** @styleType dimension */
    clearHintInnerLabelPlacementOffset: '--plasma-date-picker_old_clear-hint-inner-label-placement-offset',

    /** @styleType dimension */
    hintTooltipPaddingTop: '--plasma-date-picker-calendar-hint-tooltip-padding-top',
    /** @styleType dimension */
    hintTooltipPaddingRight: '--plasma-date-picker-calendar-hint-tooltip-padding-right',
    /** @styleType dimension */
    hintTooltipPaddingBottom: '--plasma-date-picker-calendar-hint-tooltip-padding-bottom',
    /** @styleType dimension */
    hintTooltipPaddingLeft: '--plasma-date-picker-calendar-hint-tooltip-padding-left',
    /** @styleType dimension */
    hintTooltipMinHeight: '--plasma-date-picker-calendar-hint-tooltip-min-height',
    /** @styleType color */
    hintTooltipBackgroundColor: '--plasma-date-picker-calendar-hint-tooltip-background-color',
    /** @styleType shadow */
    hintTooltipBoxShadow: '--plasma-date-picker-calendar-hint-tooltip-box-shadow',
    /** @styleType dimension */
    hintTooltipBorderRadius: '--plasma-date-picker-calendar-hint-tooltip-border-radius',
    /** @styleType color */
    hintTooltipColor: '--plasma-date-picker-calendar-hint-tooltip-color',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart fontFamily */
    hintTooltipTextFontFamily: '--plasma-date-picker-calendar-hint-tooltip-text-font-family',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart fontSize */
    hintTooltipTextFontSize: '--plasma-date-picker-calendar-hint-tooltip-text-font-size',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart fontStyle */
    hintTooltipTextFontStyle: '--plasma-date-picker-calendar-hint-tooltip-text-font-style',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart fontWeight */
    hintTooltipTextFontWeight: '--plasma-date-picker-calendar-hint-tooltip-text-font-weight',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart letterSpacing */
    hintTooltipTextFontLetterSpacing: '--plasma-date-picker-calendar-hint-tooltip-text-font-letter-spacing',
    /** @styleType typography @styleProp hintTooltipTextStyle @stylePart lineHeight */
    hintTooltipTextFontLineHeight: '--plasma-date-picker-calendar-hint-tooltip-text-font-line-height',
    /** @styleType dimension */
    hintTooltipContentLeftMargin: '--plasma-date-picker-calendar-hint-tooltip-content-left-margin',
    /** @styleType dimension */
    hintTooltipArrowMaskWidth: '--plasma-date-picker-calendar-hint-tooltip-arrow-mask-width',
    /** @styleType dimension */
    hintTooltipArrowMaskHeight: '--plasma-date-picker-calendar-hint-tooltip-arrow-mask-height',
    /** @styleType value */
    hintTooltipArrowMaskImage: '--plasma-date-picker-calendar-hint-tooltip-arrow-mask-image',
    /** @styleType color */
    hintTooltipArrowBackground: '--plasma-date-picker-calendar-hint-tooltip-arrow-background',
    /** @styleType dimension */
    hintTooltipArrowHeight: '--plasma-date-picker-calendar-hint-tooltip-arrow-height',
    /** @styleType dimension */
    hintTooltipArrowEdgeMargin: '--plasma-date-picker-calendar-hint-tooltip-arrow-edge-margin',

    /** Токены предустановленных дат */
    /** @styleType color */
    shortcutColor: '--plasma-date-picker-shortcut-item-color',
    /** @styleType color */
    shortcutBackground: '--plasma-date-picker-shortcut-item-background',
    /** @styleType color */
    shortcutBackgroundHover: '--plasma-date-picker-shortcut-item-background-hover',

    /** @styleType typography @styleProp shortcutStyle @stylePart fontFamily */
    shortcutFontFamily: '--plasma-date-picker-shortcut-item-font-family',
    /** @styleType typography @styleProp shortcutStyle @stylePart fontStyle */
    shortcutFontStyle: '--plasma-date-picker-shortcut-item-font-style',
    /** @styleType typography @styleProp shortcutStyle @stylePart fontSize */
    shortcutFontSize: '--plasma-date-picker-shortcut-item-font-size',
    /** @styleType typography @styleProp shortcutStyle @stylePart fontWeight */
    shortcutFontWeight: '--plasma-date-picker-shortcut-item-font-weight',
    /** @styleType typography @styleProp shortcutStyle @stylePart letterSpacing */
    shortcutLetterSpacing: '--plasma-date-picker-shortcut-item-letter-spacing',
    /** @styleType typography @styleProp shortcutStyle @stylePart lineHeight */
    shortcutLineHeight: '--plasma-date-picker-shortcut-item-line-height',

    /** @styleType dimension */
    shortcutPadding: '--plasma-date-picker-shortcut-item-padding',
    /** @styleType value */
    shortcutPaddingLeftContent: '--plasma-date-picker-shortcut-item-padding-left-content',
    /** @styleType value */
    shortcutPaddingContent: '--plasma-date-picker-shortcut-item-padding-content',
    /** @styleType value */
    shortcutPaddingRightContent: '--plasma-date-picker-shortcut-item-right-padding-content',
    /** @styleType dimension */
    shortcutGap: '--plasma-date-picker-shortcut-item-gap',
    /** @styleType dimension */
    shortcutBorderRadius: '--plasma-date-picker-shortcut-item-border-radius',

    /** @styleType color */
    outlineFocusColor: '--plasma-date-picker-outline-focus',
    /** @styleType float */
    textFieldDisabledBackgroundOpacity: '--plasma-date-picker-disabled-textfield-background-opacity',
    /** @styleType float */
    textFieldDisabledInnerContentOpacity: '--plasma-date-picker-disabled-textfield-inner-content-opacity',
};
