import type { ChangeEvent, HTMLAttributes } from 'react';

import type { RangeInnerProps } from '../../Range/Range.types';
import type { DatePickerCalendarProps, DatePickerVariationProps } from '../DatePickerBase.types';
import type { DatePickerPopoverProps } from '../SingleDate/SingleDate.types';
import type { DateInfo } from '../../Calendar/Calendar.types';

export type DatePickerRangePlacementBasic = 'top' | 'bottom';
export type DatePickerRangePlacementVariation = 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
export type DatePickerRangePlacement = DatePickerRangePlacementBasic | DatePickerRangePlacementVariation;

export type ChangeInstanceCallback = (event: ChangeEvent<HTMLInputElement> | null, value?: string) => void;
export type CommitInstanceCallback = (
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
     * Задает выравнивание индикатора обязательности поля
     * @default right
     */
    requiredPlacement?: 'left' | 'right';
    /**
     * Флаг обязательности поля
     */
    required?: boolean;
    /**
     * Флаг наличия индикатора обязательности поля
     * @default true
     */
    hasRequiredIndicator?: boolean;
    /**
     * Выбранные значения.
     */
    value?: [Date | string | null | undefined, Date | string | null | undefined];
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
    onChangeFirstValue?: ChangeInstanceCallback;
    /**
     * Коллбэк, вызываемый при изменении второго поля ввода
     */
    onChangeSecondValue?: ChangeInstanceCallback;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре для первой даты.
     */
    onCommitFirstDate?: CommitInstanceCallback;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре для первой даты.
     */
    onCommitSecondDate?: CommitInstanceCallback;
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
    placement?: DatePickerRangePlacement | Array<DatePickerRangePlacementBasic>;
    /**
     * Отобразить двойной календарь
     */
    isDoubleCalendar?: boolean;
    /**
     * Закрыть календарь после выбора дат
     */
    closeAfterDateSelect?: boolean;
};

export type DatePickerRangeProps = DatePickerVariationProps &
    DatePickerRangeFieldProps &
    DatePickerCalendarProps &
    DatePickerDoublePopoverProps &
    HTMLAttributes<HTMLDivElement>;
