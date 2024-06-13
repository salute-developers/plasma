import type { HTMLAttributes } from 'react';

import type { CalendarStateType } from '../../Calendar';
import type { DisabledDay, EventDay } from '../../Calendar/Calendar.types';
import type { RangeProps } from '../../Range';
import type { DatePickerdVariationProps } from '../DatePickerBase.types';
import { DatePickerPopoverProps } from '../SingleDate/DatePicker.types';

export type DatePickerRangePlacement = 'top' | 'bottom';

type BaseRangeProps = Omit<RangeProps, 'firstValue' | 'secondValue' | 'onSearchFirstValue' | 'onSearchSecondValue'>;

export type DatePickerRangeFieldProps = {
    /**
     * Значение по умолчанию для первого поля.
     */
    defaultFirstDate?: Date;
    /**
     * Значение по умолчанию для второго поля.
     */
    defaultSecondDate?: Date;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре для первой даты.
     */
    onCommitFirstDate?: (value: Date | string, error?: boolean, success?: boolean) => void;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре для первой даты.
     */
    onCommitSecondDate?: (value: Date | string, error?: boolean, success?: boolean) => void;
} & BaseRangeProps;

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
     * Тип отображения календаря: дни, месяца, года.
     */
    type?: CalendarStateType;
};

export type DatePickerDoublePopoverProps = Omit<DatePickerPopoverProps, 'placement'> & {
    /**
     * Сторона открытия календаря относительно поля ввода.
     * @default
     * ["bottom", "top"]
     */
    placement?: DatePickerRangePlacement | Array<DatePickerRangePlacement>;
    /**
     * Отобразить двойной календарь
     */
    isDoubleCalendar?: boolean;
};

export type DatePickerRangeProps = DatePickerdVariationProps &
    DatePickerRangeFieldProps &
    DatePickerCalendarProps &
    DatePickerDoublePopoverProps &
    Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>;
