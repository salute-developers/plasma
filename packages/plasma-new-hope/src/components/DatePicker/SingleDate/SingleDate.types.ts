import type { HTMLAttributes, RefObject, SyntheticEvent } from 'react';

import type { DatePickerCalendarProps, DatePickerdVariationProps } from '../DatePickerBase.types';
import type { DateInfo } from '../../Calendar/Calendar.types';

export type DatePickerPlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type DatePickerPlacement = DatePickerPlacementBasic | 'auto';

export type DatePickerTextFieldProps = {
    /**
     * Выбранное значение.
     */
    defaultDate?: Date;
    /**
     * Свойство для названия поля при работе с формой
     */
    name?: string;
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
     * Расположение лейбла.
     */
    labelPlacement?: 'inner' | 'outer';
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
    onCommitDate?: (value: Date | string, error?: boolean, success?: boolean, dateInfo?: DateInfo) => void;
    /**
     * Обработчик изменения значения.
     */
    onChangeValue?: (event: SyntheticEvent<HTMLInputElement> | null, value?: string) => void;
    /**
     * Свойство устарело, используется формой. Вместо используйте onChangeValue и onCommitDate
     * @deprecated
     */
    onChange?: (event: { target: { value?: string; name?: string } }) => void;
};

export type DatePickerPopoverProps = {
    /**
     * Видимость календаря.
     * @deprecated
     */
    isOpen?: boolean;
    /**
     * Видимость календаря.
     */
    opened?: boolean;
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
     * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: 'document' | string | RefObject<HTMLElement>;
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
     * Находится ли в портале.
     * @default
     * false
     */
    usePortal?: boolean;
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
