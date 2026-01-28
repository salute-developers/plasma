import type { Dispatch, SetStateAction, ChangeEvent } from 'react';

import type { CalendarStateType } from '../Calendar';
import type { DateInfo, DateType, DisabledDay, EventDay, EventTooltipOptions } from '../Calendar/Calendar.types';

import type { Langs } from './utils/dateHelper';

export type FormattedDateValues = {
    /**
     * Статус ошибки валидации
     */
    error?: boolean;
    /**
     * Статус успешной валидации
     */
    success?: boolean;
    /**
     * Информация о дате (для кварталов и т.д.)
     */
    dateInfo?: DateInfo;
    /**
     * Дата как экземпляр Date
     */
    originalDate?: Date;
    /**
     * Дата в формате ISO
     */
    isoDate?: string;
};

/**
 * @deprecated Используйте новую сигнатуру с объектом formattedValues
 */
export type OnCommitDateCallbackDeprecated = (
    value: Date | string,
    error?: boolean,
    success?: boolean,
    dateInfo?: DateInfo,
    originalDate?: Date,
    isoDate?: string,
) => void;

export type OnCommitDateCallback = (value: Date | string, formattedValues: FormattedDateValues) => void;

export type OnCommitDateCallbackUnion = OnCommitDateCallback | OnCommitDateCallbackDeprecated;

export type DatePickerCalendarProps = {
    /**
     * Формат даты.
     * @default `DD.MM.YYYY`
     */
    format?: string;
    /**
     * Формат применяется в качестве маски ввода.
     */
    maskWithFormat?: boolean;
    /**
     * Минимальное значение даты.
     */
    min?: Date;
    /**
     * Максимальное значение даты.
     */
    max?: Date;
    /**
     * Дата с которой начинается календарная сетка.
     */
    renderFromDate?: Date;
    /**
     * Должны ли значения минимального и максимального дня включаться в диапазон.
     */
    includeEdgeDates?: boolean;
    /**
     * Свойства всплывающей подсказки для событий.
     */
    eventTooltipOptions?: EventTooltipOptions;
    /**
     * Список событий.
     */
    eventList?: EventDay[];
    /**
     * Список отключенных дней.
     */
    disabledList?: DisabledDay[];
    /**
     * Список событий по месяцам.
     */
    eventMonthList?: EventDay[];
    /**
     * Список отключенных месяцев.
     */
    disabledMonthList?: DisabledDay[];
    /**
     * Список событий по кварталам.
     */
    eventQuarterList?: EventDay[];
    /**
     * Список отключенных кварталов.
     */
    disabledQuarterList?: DisabledDay[];
    /**
     * Список событий по годам.
     */
    eventYearList?: EventDay[];
    /**
     * Список отключенных годов.
     */
    disabledYearList?: DisabledDay[];
    /**
     * Тип отображения календаря: дни, месяца, года.
     */
    type?: CalendarStateType;
    /**
     * Язык в маске ввода
     */
    lang?: Langs;
    /**
     * Ширина календаря
     * @description
     * Значение может принимать строку с единицой измерения CSS (px, rem и тд.).
     * Если передано число без единицы измерения - рассчитывается в rem.
     */
    calendarContainerWidth?: number | string;
    /**
     * Высота календаря
     * @description
     * Значение может принимать строку с единицой измерения CSS (px, rem и тд.).
     * Если передано число без единицы измерения - рассчитывается в rem.
     */
    calendarContainerHeight?: number | string;
    /**
     * Растянуть поле ввода на всю доступную ширину
     */
    stretched?: boolean;
};

export type DatePickerVariationProps = {
    /**
     * Вид компонента
     */
    appearance?: 'default' | 'clear';
    /**
     * Флаг наличия разделителя для clear appearance
     * @default false
     */
    hasClearDivider?: boolean;
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     */
    view?: string;
    /**
     * Компонент доступен только для чтения.
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
};

export type UseDatePickerProps = {
    currentValue: string;
    dateFormatDelimiter: string;
    format?: string;
    type?: CalendarStateType;
    lang?: Langs;
    disabled?: boolean;
    readOnly?: boolean;
    maskWithFormat?: boolean;
    valueError?: boolean;
    valueSuccess?: boolean;
    name?: string;
    min?: Date;
    max?: Date;
    includeEdgeDates?: boolean;
    setInnerDate: Dispatch<SetStateAction<string | DateType>>;
    setCorrectDates: Dispatch<
        SetStateAction<{
            calendar: Date | undefined;
            input: string;
        }>
    >;
    onChangeValue?: (
        event: ChangeEvent<HTMLInputElement> | null,
        value: string | undefined,
        originalDate?: DateType,
        isoDate?: string,
    ) => void;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре.
     * @param value - значение даты
     * @param {Object} formattedValues - набор значений в разных форматах
     * @param formattedValues.error - статус ошибки валидации
     * @param formattedValues.success - статус успешной валидации
     * @param formattedValues.dateInfo - информация о дате (для кварталов и т.д.)
     * @param formattedValues.originalDate - дата как экземпляр Date
     * @param formattedValues.isoDate - дата в формате ISO
     * @return void
     */
    onCommitDate?: OnCommitDateCallback;
    onChange?: (event: {
        target: {
            value?: string;
            name?: string;
            originalDate?: DateType;
            isoDate?: string;
        };
    }) => void;
};

export type ValidateDateArgs = {
    currentValue: string;
    format: string;
    lang?: Langs;
};
