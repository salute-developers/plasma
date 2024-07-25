import type { HTMLAttributes } from 'react';

import type { RangeInnerProps } from '../../Range/Range.types';
import type { DatePickerCalendarProps, DatePickerdVariationProps } from '../DatePickerBase.types';
import type { DatePickerPopoverProps } from '../SingleDate/SingleDate.types';
import type { DateInfo } from '../../Calendar/Calendar.types';

export type DatePickerRangePlacement = 'top' | 'bottom';

type BaseRangeProps = Omit<
    RangeInnerProps,
    'firstValue' | 'secondValue' | 'onSearchFirstValue' | 'onSearchSecondValue'
>;

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
    onCommitFirstDate?: (value: Date | string, error?: boolean, success?: boolean, dateInfo?: DateInfo) => void;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре для первой даты.
     */
    onCommitSecondDate?: (value: Date | string, error?: boolean, success?: boolean, dateInfo?: DateInfo) => void;
} & BaseRangeProps;

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
    HTMLAttributes<HTMLDivElement>;
