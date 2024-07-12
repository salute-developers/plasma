import { HTMLAttributes, MutableRefObject } from 'react';

import type { CalendarBaseProps } from './CalendarBase/CalendarBase';
import type { CalendarDoubleProps } from './CalendarDouble/CalendarDouble';
import type { CalendarStateType } from './store/types';

export enum Keys {
    pageUp = 33,
    pageDown = 34,
    home = 36,
    end = 35,
    left = 37,
    right = 39,
    up = 38,
    down = 40,
    enter = 13,
    space = 32,
}

export interface DateObject {
    day: number;
    monthIndex: number;
    year: number;
}

export interface ItemProps {
    isCurrent: boolean;
    isSelected: boolean;
}

export interface DateItem extends ItemProps {
    date: DateObject;
    isDayInCurrentMonth?: boolean;
    inRange?: boolean;
    events?: EventDay[];
    disabled?: boolean;
    isOutOfMinMaxRange?: boolean;
    disabledArrowKey?: string;
    disabledMonths?: string;
    disabledDates?: string;
    disabledYears?: string;
    monthName?: string;
    monthIndex?: number;
    monthFullName?: string;
    yearValue?: number;
    quarterName?: string;
}

export type DateBasePorps = {
    isDouble?: boolean;
    isHovered?: boolean;
    inRange?: boolean;
    sideInRange?: 'left' | 'right';
    disabled?: boolean;
};

export interface DateStructureProps extends Partial<ItemProps>, DateBasePorps {
    isDayInCurrentMonth?: boolean;
    dayOfWeek?: boolean;
}

export type QuarterPartialDate = {
    monthIndex: number;
    day: number;
};

export interface QuarterProps extends Partial<ItemProps>, DateBasePorps {
    quarterName: number;
    quarterIndex: number;
}

export interface MonthsProps extends Partial<ItemProps>, DateBasePorps {}

export interface MonthsItem extends ItemProps {
    monthName: string;
    monthIndex: number;
    monthFullName?: string;
}

export interface YearsProps extends ItemProps {}

export interface YearsItem extends ItemProps {
    yearValue: number;
}

export interface EventDay {
    date: Date;
    color?: string;
}

export interface DisabledDay {
    date: Date;
}

export type CalendarValueType = Date | undefined | [Date | undefined, Date?];

export type DateInfo = {
    name: string;
    fullValue: CalendarValueType;
};

export interface Calendar extends HTMLAttributes<HTMLDivElement> {
    /**
     * Выбранное значение.
     */
    value: CalendarValueType;
    /**
     * Обработчик изменения значения.
     */
    onChangeValue: (value: Date, dateInfo?: DateInfo) => void;
    /**
     * Состояние календаря, отвечающее за отображение.
     */
    date?: DateObject;
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
     * Конечный тип отображения календаря: дни, месяца, года, кварталы.
     */
    type?: CalendarStateType;
}

export type CalendarConfigProps = {
    /**
     * Размер календаря.
     */
    size?: string;
    /**
     * Вид календаря.
     */
    view?: string;
};

export type CalendarRange<T> = Omit<T, 'value' | 'onChangeValue'> & {
    /**
     * Выбранное значение.
     */
    value: [Date?, Date?];
    /**
     * Обработчик изменения значения.
     */
    onChangeValue: (values: [Date, Date?], dateInfo?: DateInfo) => void;
    /**
     * Обработчик для выбора стартового значения в диапазоне.
     */
    onChangeStartOfRange?: (value: Date, dateInfo?: DateInfo) => void;
};

export interface DaysMetaDescription {
    refs: MutableRefObject<HTMLDivElement[][]>;
    rowSize: number;
    newRowIndex: number;
    newColumnIndex: number;
    columnSize: number;
    minColumnIndex: number;
    defaultState?: number[];
}

export type KeyboardArrowKey = 'left' | 'right' | 'up' | 'down';

type BaseProps = {
    /**
     * Выбранное значение.
     */
    value: Date;
    /**
     * Режим выбора: диапазон или одинарный.
     */
    isRange?: false;
    /**
     * Режим отображения: двойной или одинарный.
     */
    isDouble?: false;
} & CalendarBaseProps;

type BaseRangeProps = {
    /**
     * Режим выбора: диапазон или одинарный.
     */
    isRange: true;
    /**
     * Режим отображения: двойной или одинарный.
     */
    isDouble?: false;
} & CalendarRange<CalendarBaseProps>;

type DoubleProps = {
    /**
     * Выбранное значение.
     */
    value: Date;
    /**
     * Режим отображения: двойной или одинарный.
     */
    isDouble?: true;
    /**
     * Режим выбора: диапазон или одинарный.
     */
    isRange?: false;
} & CalendarDoubleProps;

type DoubleRangeProps = {
    /**
     * Режим выбора: диапазон или одинарный.
     */
    isRange: true;
    /**
     * Режим отображения: двойной или одинарный.
     */
    isDouble?: true;
} & CalendarRange<CalendarDoubleProps>;

export type ComponentVariation = {
    base: React.FC<CalendarBaseProps>;
    baseRange: React.FC<CalendarRange<CalendarBaseProps>>;
    double: React.FC<CalendarDoubleProps>;
    doubleRange: React.FC<CalendarRange<CalendarDoubleProps>>;
};

export type CalendarProps = BaseProps | BaseRangeProps | DoubleProps | DoubleRangeProps;
