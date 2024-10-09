import type { ChangeEvent, HTMLAttributes } from 'react';

import type { RangeInnerProps } from '../../Range/Range.types';
import type { DatePickerCalendarProps, DatePickerdVariationProps } from '../DatePickerBase.types';
import type { DatePickerPopoverProps } from '../SingleDate/SingleDate.types';
import type { DateInfo } from '../../Calendar/Calendar.types';

export type DatePickerRangePlacement = 'top' | 'bottom';

export type CallbackChangeInstance = (event: ChangeEvent<HTMLInputElement> | null, value?: string) => void;
export type CallbackSearchInstance = (
    value: Date | string,
    error?: boolean,
    success?: boolean,
    dateInfo?: DateInfo,
) => void;

type BaseRangeProps = Omit<
    RangeInnerProps,
    | 'firstValue'
    | 'secondValue'
    | 'onSearchFirstValue'
    | 'onSearchSecondValue'
    | 'onChangeFirstValue'
    | 'onChangeSecondValue'
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
     * Свойство для названия поля при работе с формой
     */
    name?: string;
    /**
     * Коллбэк, вызываемый при изменении первого поля ввода
     */
    onChangeFirstValue?: CallbackChangeInstance;
    /**
     * Коллбэк, вызываемый при изменении второго поля ввода
     */
    onChangeSecondValue?: CallbackChangeInstance;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре для первой даты.
     */
    onCommitFirstDate?: CallbackSearchInstance;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре для первой даты.
     */
    onCommitSecondDate?: CallbackSearchInstance;
    /**
     * Свойство устарело, используется формой. Вместо используйте onCommitFirstDate и onCommitSecondDate
     * @deprecated
     */
    onChange?: (event: { target: { value?: string; name?: string } }) => void;
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
