import type { SimpleTimePickerProps } from '../SimpleTimePicker';

import { defaultOptions } from './constants';

export interface DateStructure {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface DateRange {
    value: number | string;
    date: Date;
}

export interface TimePickerProps
    extends Omit<SimpleTimePickerProps, 'type' | 'range' | 'onChange' | 'infiniteScroll' | 'dateStructureGetter'> {
    /**
     * Значение контрола
     */
    value: Date;
    /**
     * Максимальное значение даты
     */
    max: Date;
    /**
     * Минимальное значение даты
     */
    min: Date;
    /**
     * Формат выводимого значения
     */
    options?: typeof defaultOptions;
    /**
     * Интервалы в секундах.
     * @example:
     * 7200 = интервал в 2 часа
     * 300 = интервал в 5 минут
     * 5 = интервал в 5 секунд
     * 7505 = интервалы 2 часа, 5 минут, 5 секунд
     */
    step?: number;
    /**
     * Сменить WAI-ARIA Label списка дней.
     */
    secondsAriaLabel?: string;
    /**
     * Сменить WAI-ARIA Label списка месяцев.
     */
    minutesAriaLabel?: string;
    /**
     * Сменить WAI-ARIA Label списка годов.
     */
    hoursAriaLabel?: string;

    /**
     * Label для picker "часов"
     */
    hoursLabel?: string;

    /**
     * Label для picker "минуты"
     */
    minutesLabel?: string;

    /**
     * Label для picker "секунды"
     */
    secondsLabel?: string;

    /**
     * Показывать ли label для picker "секунды", "минуты" и т.д.
     */
    hasLabel?: boolean;

    /**
     * Бесконечная прокрутка; выключена по умолчанию для lowPerformance Devices.
     * Если переданы min и/или max, бесконечная прокрутка будет выключена.
     */
    infiniteScroll?: boolean;

    /**
     * Обработчик изменения
     */
    onChange?: (value: Date) => void;
}
