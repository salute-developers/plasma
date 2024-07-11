import type { HTMLAttributes, SyntheticEvent } from 'react';

import type { CalendarStateType } from '../../Calendar';
import type { DisabledDay, EventDay } from '../../Calendar/Calendar.types';
import type { DatePickerdVariationProps } from '../DatePickerBase.types';

export type DatePickerPlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type DatePickerPlacement = DatePickerPlacementBasic | 'auto';

export type DatePickerTextFieldProps = {
    /**
     * Выбранное значение.
     */
    defaultDate?: Date;
    /**
     * Некорректное значение даты
     */
    valueError?: boolean;
    /**
     * Корректное значение даты
     */
    valueSuccess?: boolean;
    /**
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    leftHelper?: string;
    /**
     * Слот для контента слева.
     */
    contentLeft?: React.ReactElement;
    /**
     * Слот для контента справа.
     */
    contentRight?: React.ReactElement;
    /**
     * Слот для вспомогательного текста справа.
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста слева.
     */
    textAfter?: string;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре.
     */
    onCommitDate?: (value: Date | string, error?: boolean, success?: boolean) => void;
    /**
     * Обработчик изменения значения.
     */
    onChangeValue?: (event: SyntheticEvent<HTMLInputElement>, value?: string) => void;
};

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

export type DatePickerPopoverProps = {
    /**
     * Видимость календаря.
     */
    isOpen?: boolean;
    /**
     * Сторона открытия календаря относительно поля ввода.
     * @default
     * ["bottom", "top"]
     */
    placement?: DatePickerPlacement | Array<DatePickerPlacementBasic>;
    /**
     * Отступ календаря относительно поля ввода.
     * @default [0, 0]
     */
    offset?: [number, number];
    /**
     * Закрывать календарь при нажатии вне области элемента.
     * @default true
     */
    closeOnOverlayClick?: boolean;
    /**
     * Закрывать календарь при нажатии Escape.
     * @default true
     */
    closeOnEsc?: boolean;
    /**
     * Событие сворачивания/разворачивания календаря.
     */
    onToggle?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
};

export type DatePickerProps = DatePickerdVariationProps &
    DatePickerTextFieldProps &
    DatePickerCalendarProps &
    DatePickerPopoverProps &
    Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>;
