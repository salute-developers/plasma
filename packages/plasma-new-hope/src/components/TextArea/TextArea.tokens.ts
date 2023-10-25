export const classes = {
    /** Класс отвечающий за поднятие и уменьшение плейсхолдера */
    innerPlaceholderUp: 'inner-placeholder-up',
    /** Класс отвечающий за изменение цвета плейсхолдера при фокусе */
    focusedOuterPlaceholderColor: 'focused-outer-placeholder-color',
    /** Класс отвечающий за скрытие плейсхолдера */
    hidePlaceHolder: 'hide-placeholder',
    /** Класс для компонента `StyledContainer` */
    styledContainer: 'textarea-container',
    /** Класс для компонента `StyledTextArea` */
    styledTextArea: 'textarea',
    /** Класс для компонента `StyledTextAreaWrapper` */
    styledTextAreaWrapper: 'textarea-wrapper',
    /** Класс для компонента `StyledPlaceholder` */
    styledPlaceholder: 'textarea-placeholder',
    /** Класс для компонента `StyledHelpers` */
    styledHelpers: 'textarea-helpers',
};

export const tokens = {
    /** Цвет фона для элемента textarea */
    inputBackgroundColor: '--plasma-textarea-input-background-color',
    /** Цвет фона для элемента textarea в состоянии hover */
    inputBackgroundColorHover: '--plasma-textarea-input-background-color-hover',
    /** Цвет фона для элемента textarea в состоянии active */
    inputBackgroundColorActive: '--plasma-textarea-input-background-color-active',
    /** Цвет фона для элемента textarea в состоянии focus */
    inputBackgroundColorFocus: '--plasma-textarea-input-background-color-focus',
    /** Цвета границы для элемента textarea */
    inputBorderColor: '--plasma-textarea-input-border-color',
    /** Цвета границы для элемента textarea в состоянии hover */
    inputBorderColorHover: '--plasma-textarea-input-border-color-hover',
    /** Цвета границы для элемента textarea в состоянии active */
    inputBorderColorActive: '--plasma-textarea-input-border-color-active',
    /** Цвета границы для элемента textarea в состоянии focus */
    inputBorderColorFocus: '--plasma-textarea-input-border-color-focus',
    /** Цвет фона для блока подписей снизу */
    helpersBackgroundColor: '--plasma-textarea-helpers-background-color',
    /** Цвет фона для блока подписей снизу в состоянии hover */
    helpersBackgroundColorHover: '--plasma-textarea-helpers-background-color-hover',
    /** Цвет фона для блока подписей снизу в состоянии active */
    helpersBackgroundColorActive: '--plasma-textarea-helpers-background-color-active',
    /** Цвет фона для блока подписей снизу в состоянии focus */
    helpersBackgroundColorFocus: '--plasma-textarea-helpers-background-color-focus',
    /** Цвет текста для элемента textarea */
    inputColor: '--plasma-textarea-input-color',
    /** Цвет текста для элемента textarea в состоянии focus */
    inputColorFocus: '--plasma-textarea-input-color-focus',
    /** Цвет каретки для элемента textarea */
    inputCaretColor: '--plasma-textarea-input-caret-color',
    /** Цвет элемента placeholder */
    placeholderColor: '--plasma-textarea-placeholder-color',
    /** Цвет элемента placeholder в состоянии focus */
    placeholderColorFocus: '--plasma-textarea-placeholder-color-focus',
    /** Цвет текста для левой подписи снизу */
    leftHelperColor: '--plasma-textarea-left-helper-color',
    /** Цвет текста для правой подписи снизу */
    rightHelperColor: '--plasma-textarea-right-helper-color',
    /** Цвета границы для всего компонента */
    borderColor: '--plasma-textarea-border-color',
    /** Цвета границы для всего компонента в состоянии hover */
    borderColorHover: '--plasma-textarea-border-color-hover',
    /** Цвета границы для всего компонента в состоянии focus */
    borderColorFocus: '--plasma-textarea-border-color-focus',

    /** Ширина элемента textarea */
    inputWidth: '--plasma-textarea-input-width',
    /** Высота элемента textarea */
    inputHeight: '--plasma-textarea-input-height',
    /** Минимальная высота элемента textarea */
    inputMinHeight: '--plasma-textarea-input-min-height',
    /** Толщина рамки всего компонента */
    borderSize: '--plasma-textarea-border-size',
    /** Размер скругления рамки всего компонента */
    borderRadius: '--plasma-textarea-border-radius',
    /** Размер скругления рамки всего компонента, когда есть блок подписей и у него нет рамки */
    borderRadiusWithHelpers: '--plasma-textarea-border-radius-with-helpers',
    /** Отступ сверху для элемента textarea */
    inputPaddingTop: '--plasma-textarea-input-padding-top',
    /** Отступ справа для элемента textarea */
    inputPaddingRight: '--plasma-textarea-input-padding-right',
    /** Отступ справа для элемента textarea, когда есть контент справа */
    inputPaddingRightWithRightContent: '--plasma-textarea-input-padding-right-with-right-content',
    /** Отступ снизу для элемента textarea */
    inputPaddingBottom: '--plasma-textarea-input-padding-bottom',
    /** Отступ снизу для элемента textarea, когда есть блок подписей */
    inputPaddingBottomWithHelpers: '--plasma-textarea-input-padding-bottom-with-helpers',
    /** Отступ слева для элемента textarea */
    inputPaddingLeft: '--plasma-textarea-input-padding-left',
    /** Отступ сверху для блока подписей */
    helpersPaddingTop: '--plasma-textarea-helpers-padding-top',
    /** Отступ справа для блока подписей */
    helpersPaddingRight: '--plasma-textarea-helpers-padding-right',
    /** Отступ снизу для блока подписей */
    helpersPaddingBottom: '--plasma-textarea-helpers-padding-bottom',
    /** Отступ слева для блока подписей */
    helpersPaddingLeft: '--plasma-textarea-helpers-padding-left',
    /** Вспомогательная высота для всего компонента, когда есть блок подписей и у него нет рамки */
    helpersOffset: '--plasma-textarea-helpers-offset',
    /** Отступ сверху для контента справа */
    rightContentTop: '--plasma-textarea-right-content-top',
    /** Отступ справа для контента справа */
    rightContentRight: '--plasma-textarea-right-content-right',
    /** Высота контента справа */
    rightContentHeight: '--plasma-textarea-right-content-height',
    /** Отступ сверху для элемента label, когда он внутри и уменьшен */
    labelMarginBottom: '--plasma-textarea-label-margin-bottom',
    /** Шрифт для элемента label, когда он внутри и уменьшен */
    labelInnerFontFamily: '--plasma-textarea-label-inner-font-family',
    /** Размер шрифта для элемента label, когда он внутри и уменьшен */
    labelInnerFontSize: '--plasma-textarea-label-inner-font-size',
    /** Стиль шрифта для элемента label, когда он внутри и уменьшен */
    labelInnerFontStyle: '--plasma-textarea-label-inner-font-style',
    /** Начертание шрифта для элемента label, когда он внутри и уменьшен */
    labelInnerFontWeight: '--plasma-textarea-label-inner-font-weight',
    /** Межсимвольное расстояние для элемента label, когда он внутри и уменьшен */
    labelInnerLetterSpacing: '--plasma-textarea-label-inner-letter-spacing',
    /** Высота строки для элемента label, когда он внутри и уменьшен */
    labelInnerLineHeight: '--plasma-textarea-label-inner-line-height',
    /** Шрифт для элемента textarea */
    inputFontFamily: '--plasma-textarea-input-font-family',
    /** Размер шрифта для элемента textarea */
    inputFontSize: '--plasma-textarea-input-font-size',
    /** Стиль шрифта для элемента textarea */
    inputFontStyle: '--plasma-textarea-input-font-style',
    /** Начертание шрифта для элемента textarea */
    inputFontWeight: '--plasma-textarea-input-font-weight',
    /** Межсимвольное расстояние шрифта для элемента textarea */
    inputLetterSpacing: '--plasma-textarea-input-letter-spacing',
    /** Высота строки шрифта для элемента textarea */
    inputLineHeight: '--plasma-textarea-input-line-height',
    /** Шрифт для элемента блока подписей снизу */
    helpersFontFamily: '--plasma-textarea-helpers-font-family',
    /** Размер шрифта для элемента блока подписей снизу */
    helpersFontSize: '--plasma-textarea-helpers-font-size',
    /** Стиль шрифта для элемента блока подписей снизу */
    helpersFontStyle: '--plasma-textarea-helpers-font-style',
    /** Начертание шрифта для элемента блока подписей снизу */
    helpersFontWeight: '--plasma-textarea-helpers-font-weight',
    /** Межсимвольное расстояние для элемента блока подписей снизу */
    helpersLetterSpacing: '--plasma-textarea-helpers-letter-spacing',
    /** Высота строки для элемента блока подписей снизу */
    helpersLineHeight: '--plasma-textarea-helpers-line-height',

    /** Прозрачность для всего компонента в состоянии disabled */
    disabledOpacity: '--plasma-textarea-disabled-opacity',
    /** Цвет текста для элемента textarea в состоянии disabled */
    inputColorDisabled: '--plasma-textarea-input-color-disabled',
};
