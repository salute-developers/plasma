export const classes = {
    dayOfWeek: 'day-of-week',
    dayInCurrentMonth: 'day-in-current-month',
    disabled: 'item-disabled',
    disabledCurrent: 'item-disabled-current',
    sideInRange: 'item-side-in-range',
    inRange: 'item-in-range',
    sideLeft: 'item-side-left',
    sideRight: 'item-side-right',
    selectableItem: 'item-selectable',
    selectedItem: 'item-selected',
    currentItem: 'item-current',
    hoveredItem: 'item-hovered',
    doubleHeaderDate: 'double-header-date',
    doubleHeaderLastDateWrapper: 'double-header--last-date-wrapper',
    disabledPrevButton: 'disabled-prev-button',
    stretched: 'plasma-calendar-stretched',
};

export const innerTokens = {
    dateStructureFontFamily: '--plasma-calendar-date-structure-font-family',
    dateStructureFontSize: '--plasma-calendar-date-structure-font-size',
    dateStructureFontStyle: '--plasma-calendar-date-structure-font-style',
    dateStructureFontWeight: '--plasma-calendar-date-structure-font-weight',
    dateStructureFontLetterSpacing: '--plasma-calendar-date-structure-font-letter-spacing',
    dateStructureFontLineHeight: '--plasma-calendar-date-structure-line-height',

    dateStructureSelectedFontWeight: '--plasma-calendar-date-structure-selected-font-weight',

    dateStructureBorderRadius: '--plasma-calendar-date-structure-border-radius',
};

export const tokens = {
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarContainerWidth: '--plasma-calendar-container-width',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarContainerHeight: '--plasma-calendar-container-height',
    /** @styleType dimension @styleComponent Calendar */
    calendarBorderWidth: '--plasma-calendar-border-width',
    /** @styleType color @styleComponent Calendar */
    calendarBorderColor: '--plasma-calendar-border-color',

    /* Токены размера сетки лет */
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarYearsPadding: '--plasma-calendar-years-padding',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarYearItemBorderRadius: '--plasma-calendar-year-item-border-radius',

    /**
     * @styleType typography @styleProp calendarYearStyle @stylePart fontFamily
     * @styleComponent Calendar CalendarDouble
     */
    calendarYearFontFamily: '--plasma-calendar-year-font-family',
    /**
     * @styleType typography @styleProp calendarYearStyle @stylePart fontSize
     * @styleComponent Calendar CalendarDouble
     */
    calendarYearFontSize: '--plasma-calendar-year-font-size',
    /**
     * @styleType typography @styleProp calendarYearStyle @stylePart fontStyle
     * @styleComponent Calendar CalendarDouble
     */
    calendarYearFontStyle: '--plasma-calendar-year-font-style',
    /**
     * @styleType typography @styleProp calendarYearStyle @stylePart letterSpacing
     * @styleComponent Calendar CalendarDouble
     */
    calendarYearFontLetterSpacing: '--plasma-calendar-year-font-letter-spacing',
    /**
     * @styleType typography @styleProp calendarYearStyle @stylePart lineHeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarYearFontLineHeight: '--plasma-calendar-year-line-height',
    /**
     * @styleType typography @styleProp calendarYearStyle @stylePart fontWeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarYearFontWeight: '--plasma-calendar-year-font-weight',
    /**
     * @styleType typography @styleProp calendarYearStyle @stylePart fontWeight @styleState selected
     * @styleComponent Calendar CalendarDouble
     */
    calendarYearSelectedFontWeight: '--plasma-calendar-year-selected-font-weight',

    /* Токены размера сетки дней */
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarQuartersPadding: '--plasma-calendar-quarters-padding',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarQuarterItemBorderRadius: '--plasma-calendar-quarter-item-border-radius',

    /**
     * @styleType typography @styleProp calendarQuarterStyle @stylePart fontFamily
     * @styleComponent Calendar CalendarDouble
     */
    calendarQuarterFontFamily: '--plasma-calendar-quarter-font-family',
    /**
     * @styleType typography @styleProp calendarQuarterStyle @stylePart fontSize
     * @styleComponent Calendar CalendarDouble
     */
    calendarQuarterFontSize: '--plasma-calendar-quarter-font-size',
    /**
     * @styleType typography @styleProp calendarQuarterStyle @stylePart fontStyle
     * @styleComponent Calendar CalendarDouble
     */
    calendarQuarterFontStyle: '--plasma-calendar-quarter-font-style',
    /**
     * @styleType typography @styleProp calendarQuarterStyle @stylePart letterSpacing
     * @styleComponent Calendar CalendarDouble
     */
    calendarQuarterFontLetterSpacing: '--plasma-calendar-quarter-font-letter-spacing',
    /**
     * @styleType typography @styleProp calendarQuarterStyle @stylePart lineHeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarQuarterFontLineHeight: '--plasma-calendar-quarter-line-height',
    /**
     * @styleType typography @styleProp calendarQuarterStyle @stylePart fontWeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarQuarterFontWeight: '--plasma-calendar-quarter-font-weight',
    /**
     * @styleType typography @styleProp calendarQuarterStyle @stylePart fontWeight @styleState selected
     * @styleComponent Calendar CalendarDouble
     */
    calendarQuarterSelectedFontWeight: '--plasma-calendar-quarter-selected-font-weight',

    /* Токены размера сетки месяцев */
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarMonthsPadding: '--plasma-calendar-months-padding',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarMonthItemBorderRadius: '--plasma-calendar-month-item-border-radius',

    /**
     * @styleType typography @styleProp calendarMonthStyle @stylePart fontFamily
     * @styleComponent Calendar CalendarDouble
     */
    calendarMonthFontFamily: '--plasma-calendar-month-font-family',
    /**
     * @styleType typography @styleProp calendarMonthStyle @stylePart fontSize
     * @styleComponent Calendar CalendarDouble
     */
    calendarMonthFontSize: '--plasma-calendar-month-font-size',
    /**
     * @styleType typography @styleProp calendarMonthStyle @stylePart fontStyle
     * @styleComponent Calendar CalendarDouble
     */
    calendarMonthFontStyle: '--plasma-calendar-month-font-style',
    /**
     * @styleType typography @styleProp calendarMonthStyle @stylePart letterSpacing
     * @styleComponent Calendar CalendarDouble
     */
    calendarMonthFontLetterSpacing: '--plasma-calendar-month-font-letter-spacing',
    /**
     * @styleType typography @styleProp calendarMonthStyle @stylePart lineHeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarMonthFontLineHeight: '--plasma-calendar-month-line-height',
    /**
     * @styleType typography @styleProp calendarMonthStyle @stylePart fontWeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarMonthFontWeight: '--plasma-calendar-month-font-weight',
    /**
     * @styleType typography @styleProp calendarMonthStyle @stylePart fontWeight @styleState selected
     * @styleComponent Calendar CalendarDouble
     */
    calendarMonthSelectedFontWeight: '--plasma-calendar-month-selected-font-weight',

    /* Токены размера сетки дней */
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarDaysPadding: '--plasma-calendar-days-padding',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarDayItemBorderRadius: '--plasma-calendar-day-item-border-radius',

    /**
     * @styleType typography @styleProp calendarDayStyle @stylePart fontFamily
     * @styleComponent Calendar CalendarDouble
     */
    calendarDayFontFamily: '--plasma-calendar-day-font-family',
    /** @styleType typography @styleProp calendarDayStyle @stylePart fontSize @styleComponent Calendar CalendarDouble */
    calendarDayFontSize: '--plasma-calendar-day-font-size',
    /**
     * @styleType typography @styleProp calendarDayStyle @stylePart fontStyle
     * @styleComponent Calendar CalendarDouble
     */
    calendarDayFontStyle: '--plasma-calendar-day-font-style',
    /**
     * @styleType typography @styleProp calendarDayStyle @stylePart letterSpacing
     * @styleComponent Calendar CalendarDouble
     */
    calendarDayFontLetterSpacing: '--plasma-calendar-day-font-letter-spacing',
    /**
     * @styleType typography @styleProp calendarDayStyle @stylePart lineHeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarDayFontLineHeight: '--plasma-calendar-day-line-height',
    /**
     * @styleType typography @styleProp calendarDayStyle @stylePart fontWeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarDayFontWeight: '--plasma-calendar-day-font-weight',
    /**
     * @styleType typography @styleProp calendarDayStyle @stylePart fontWeight @styleState selected
     * @styleComponent Calendar CalendarDouble
     */
    calendarDaySelectedFontWeight: '--plasma-calendar-day-selected-font-weight',

    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarDayOfWeekColor: '--plasma-calendar-day-of-the-week-color',

    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarEventItemBottom: '--plasma-calendar-event-item-bottom',

    /* Токены шапки календаря */
    /** @styleType value @styleComponent Calendar CalendarDouble */
    calendarHeaderWrapperPadding: '--plasma-calendar-header-wrapper-padding',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarHeaderArrowGap: '--plasma-calendar-arrow-container-gap',
    /** @styleType value @styleComponent Calendar CalendarDouble */
    calendarHeaderArrowPadding: '--plasma-calendar-arrow-container-padding',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarArrowHeaderCustomSize: '--plasma-calendar-arrow-custom-size',

    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarHeaderPadding: '--plasma-calendar-header-padding',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarHeaderDateGap: '--plasma-calendar-header-date-gap',

    /**
     * @styleType typography @styleProp calendarHeaderStyle @stylePart fontFamily
     * @styleComponent Calendar CalendarDouble
     */
    calendarHeaderFontFamily: '--plasma-calendar-header-font-family',
    /**
     * @styleType typography @styleProp calendarHeaderStyle @stylePart fontSize
     * @styleComponent Calendar CalendarDouble
     */
    calendarHeaderFontSize: '--plasma-calendar-header-font-size',
    /**
     * @styleType typography @styleProp calendarHeaderStyle @stylePart fontStyle
     * @styleComponent Calendar CalendarDouble
     */
    calendarHeaderFontStyle: '--plasma-calendar-header-font-style',
    /**
     * @styleType typography @styleProp calendarHeaderStyle @stylePart letterSpacing
     * @styleComponent Calendar CalendarDouble
     */
    calendarHeaderFontLetterSpacing: '--plasma-calendar-header-font-letter-spacing',
    /**
     * @styleType typography @styleProp calendarHeaderStyle @stylePart lineHeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarHeaderFontLineHeight: '--plasma-calendar-header-line-height',
    /**
     * @styleType typography @styleProp calendarHeaderStyle @stylePart fontWeight
     * @styleComponent Calendar CalendarDouble
     */
    calendarHeaderFontWeight: '--plasma-calendar-header-font-weight',
    /** @styleType value @styleComponent Calendar CalendarDouble */
    calendarHeaderFontWeightBold: '--plasma-calendar-header-font-weight-bold',
    /** @styleType value @styleComponent Calendar CalendarDouble */
    calendarHeaderArrowColor: '--plasma-calendar-header-arrow-color',

    /* Токены стрелок навигации календаря */
    /** @styleType color @styleComponent Calendar CalendarDouble */
    iconButtonColor: '--plasma-calendar-icon-button-color',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    iconButtonBackgroundColor: '--plasma-calendar-icon-button-background',
    /** @styleType color @styleProp iconButtonColor @styleState hovered @styleComponent Calendar CalendarDouble */
    iconButtonColorHover: '--plasma-calendar-icon-button-color-hover',
    /**
     * @styleType color @styleProp iconButtonBackgroundColor @styleState hovered
     * @styleComponent Calendar CalendarDouble
     */
    iconButtonBackgroundColorHover: '--plasma-calendar-icon-button-background-hover',
    /** @styleType color @styleProp iconButtonColor @styleState pressed @styleComponent Calendar CalendarDouble */
    iconButtonColorActive: '--plasma-calendar-icon-button-color-active',
    /**
     * @styleType color @styleProp iconButtonBackgroundColor @styleState pressed
     * @styleComponent Calendar CalendarDouble
     */
    iconButtonBackgroundColorActive: '--plasma-calendar-icon-button-background-active',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    iconButtonHeight: '--plasma-calendar-icon-button-height',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    iconButtonWidth: '--plasma-calendar-icon-button-width',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    iconButtonPadding: '--plasma-calendar-icon-button-padding',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    iconButtonRadius: '--plasma-calendar-icon-button-radius',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    iconButtonFocusColor: '--plasma-calendar-icon-button-focus-color',

    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarBackgroundColor: '--plasma-calendar-background',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarSelectedItemBackground: '--plasma-calendar-selected-item-background',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarSelectedItemColor: '--plasma-calendar-selected-item-color',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarSelectableItemBackgroundHover: '--plasma-calendar-selectable-item-bg-hover',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarCurrentItemBorderColor: '--plasma-calendar-current-item-border-color',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    calendarCurrentItemBorderWidth: '--plasma-calendar-current-item-border-width',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarCurrentItemBackgroundHover: '--plasma-calendar-current-item-bg-hover',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarCurrentItemColorHover: '--plasma-calendar-current-item-color-hover',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarCurrentItemChildBackgroundHover: '--plasma-calendar-current-item-child-bg-hover',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarActiveItemBackground: '--plasma-calendar-active-item-bg',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarActiveItemColor: '--plasma-calendar-active-item-color',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarHoveredItemBackground: '--plasma-calendar-hovered-item-bg',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarHoveredItemColor: '--plasma-calendar-hovered-item-color',
    /** @styleType color @styleComponent CalendarDouble */
    calendarSeparatorBackground: '--plasma-calendar-separator-background',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarRangeBackground: '--plasma-calendar-range-background',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarOutlineFocusColor: '--plasma-calendar-outline-focus-color',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarContentPrimaryColor: '--plasma-calendar-content-primary-color',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarContentPrimaryDisabledColor: '--plasma-calendar-content-primary-disabled-color',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarContentSecondaryColor: '--plasma-calendar-content-secondary-color',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    calendarContentSecondaryDisabledColor: '--plasma-calendar-content-secondary-disabled-color',
    /** @styleType float @styleComponent Calendar CalendarDouble */
    calendarDisabledOpacity: '--plasma-calendar-disabled-opacity',

    /* Токены тултипа для событий */
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipPaddingTop: '--plasma-calendar-tooltip-padding-top',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipPaddingRight: '--plasma-calendar-tooltip-padding-right',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipPaddingBottom: '--plasma-calendar-tooltip-padding-bottom',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipPaddingLeft: '--plasma-calendar-tooltip-padding-left',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipMinHeight: '--plasma-calendar-tooltip-min-height',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    tooltipBackgroundColor: '--plasma-calendar-tooltip-background-color',
    /** @styleType shadow @styleComponent Calendar CalendarDouble */
    tooltipBoxShadow: '--plasma-calendar-tooltip-box-shadow',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipBorderRadius: '--plasma-calendar-tooltip-border-radius',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    tooltipColor: '--plasma-calendar-tooltip-color',
    /**
     * @styleType typography @styleProp tooltipTextStyle @stylePart fontFamily
     * @styleComponent Calendar CalendarDouble
     */
    tooltipTextFontFamily: '--plasma-calendar-tooltip-text-font-family',
    /** @styleType typography @styleProp tooltipTextStyle @stylePart fontSize @styleComponent Calendar CalendarDouble */
    tooltipTextFontSize: '--plasma-calendar-tooltip-text-font-size',
    /**
     * @styleType typography @styleProp tooltipTextStyle @stylePart fontStyle
     * @styleComponent Calendar CalendarDouble
     */
    tooltipTextFontStyle: '--plasma-calendar-tooltip-text-font-style',
    /**
     * @styleType typography @styleProp tooltipTextStyle @stylePart fontWeight
     * @styleComponent Calendar CalendarDouble
     */
    tooltipTextFontWeight: '--plasma-calendar-tooltip-text-font-weight',
    /**
     * @styleType typography @styleProp tooltipTextStyle @stylePart letterSpacing
     * @styleComponent Calendar CalendarDouble
     */
    tooltipTextFontLetterSpacing: '--plasma-calendar-tooltip-text-font-letter-spacing',
    /**
     * @styleType typography @styleProp tooltipTextStyle @stylePart lineHeight
     * @styleComponent Calendar CalendarDouble
     */
    tooltipTextFontLineHeight: '--plasma-calendar-tooltip-text-font-line-height',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipContentLeftMargin: '--plasma-calendar-tooltip-content-left-margin',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipArrowMaskWidth: '--plasma-calendar-tooltip-arrow-mask-width',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipArrowMaskHeight: '--plasma-calendar-tooltip-arrow-mask-height',
    /** @styleType value @styleComponent Calendar CalendarDouble */
    tooltipArrowMaskImage: '--plasma-calendar-tooltip-arrow-mask-image',
    /** @styleType color @styleComponent Calendar CalendarDouble */
    tooltipArrowBackground: '--plasma-calendar-tooltip-arrow-background',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipArrowHeight: '--plasma-calendar-tooltip-arrow-height',
    /** @styleType dimension @styleComponent Calendar CalendarDouble */
    tooltipArrowEdgeMargin: '--plasma-calendar-tooltip-arrow-edge-margin',
};
