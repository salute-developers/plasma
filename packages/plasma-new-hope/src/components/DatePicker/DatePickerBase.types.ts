import type { Dispatch, SetStateAction, ChangeEvent } from 'react';

import type { CalendarStateType } from '../Calendar';
import type { DateInfo, DisabledDay, EventDay } from '../Calendar/Calendar.types';

import type { Langs } from './utils/dateHelper';

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
};

export type DatePickerVariationProps = {
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
    setInputValue: Dispatch<SetStateAction<string>>;
    setCalendarValue: Dispatch<SetStateAction<Date | undefined>>;
    dateFormatDelimiter: () => string;
    format?: string;
    lang?: Langs;
    disabled?: boolean;
    readOnly?: boolean;
    maskWithFormat?: boolean;
    valueError?: boolean;
    valueSuccess?: boolean;
    name?: string;
    onChangeValue?: (event: ChangeEvent<HTMLInputElement> | null, value?: string) => void;
    onCommitDate?: (value: Date | string, error?: boolean, success?: boolean, dateInfo?: DateInfo) => void;
    onChange?: (event: { target: { value?: string; name?: string } }) => void;
};

export type ValidateDateArgs = {
    currentValue: string;
    format: string;
    lang?: Langs;
};
