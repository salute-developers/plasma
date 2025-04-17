import type { Dispatch, SetStateAction, ChangeEvent, MutableRefObject } from 'react';

import type { CalendarStateType } from '../Calendar';
import type { DateInfo, DateType, DisabledDay, EventDay } from '../Calendar/Calendar.types';

import type { Langs } from './utils/monthFullNameFormatter';
import type { FormatStructure } from './utils/formatHelper';
import type { SelectionBeforeChange } from './hooks/useKeyboardNavigation';

export type DatePickerCalendarProps = {
    /**
     * Формат даты.
     * @default `DD.MM.YYYY`
     */
    format?: string;
    /**
     * @deprecated
     * Ввод форматируется по умолчанию.
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
    selectionBeforeChange: SelectionBeforeChange;
    formatStructure: FormatStructure | null;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    format?: string;
    type?: CalendarStateType;
    lang?: Langs;
    disabled?: boolean;
    readOnly?: boolean;
    maskWithFormat?: boolean;
    valueError?: boolean;
    valueSuccess?: boolean;
    name?: string;
    currentKeyPressed?: string;
    min?: Date;
    max?: Date;
    includeEdgeDates?: boolean;
    setInputValue: Dispatch<SetStateAction<string>>;
    setCalendarValue: Dispatch<SetStateAction<DateType>>;
    setCorrectDates: Dispatch<
        SetStateAction<{
            calendar: Date | undefined;
            input: string;
        }>
    >;
    dateFormatDelimiter: () => string;
    onChangeValue?: (
        event: ChangeEvent<HTMLInputElement> | null,
        value: string | undefined,
        originalDate?: Date | null,
        isoDate?: string,
    ) => void;
    onCommitDate?: (
        value: Date | string,
        error?: boolean,
        success?: boolean,
        dateInfo?: DateInfo,
        originalDate?: Date,
        isoDate?: string,
    ) => void;
    onChange?: (event: {
        target: {
            value?: string;
            name?: string;
            originalDate?: Date | null;
            isoDate?: string;
        };
    }) => void;
};

export type ValidateDateArgs = {
    currentValue: string;
    format: string;
    lang?: Langs;
};
