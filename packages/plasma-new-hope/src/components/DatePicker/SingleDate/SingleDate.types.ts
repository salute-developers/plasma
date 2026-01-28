import type { HTMLAttributes, ReactNode, RefObject, SyntheticEvent } from 'react';

import type { DatePickerCalendarProps, DatePickerVariationProps, OnCommitDateCallback } from '../DatePickerBase.types';
import type { DateType } from '../../Calendar/Calendar.types';
import type { HintProps, LabelProps } from '../../TextField/TextField.types';

export type DatePickerPlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type DatePickerPlacementVariation =
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
export type DatePickerPlacement = DatePickerPlacementBasic | DatePickerPlacementVariation | 'auto';

export type DatePickerTextFieldProps = {
    /**
     * Метка-подпись к элементу справа.
     */
    titleCaption?: ReactNode;
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
     * @default false
     */
    hasRequiredIndicator?: boolean;
    /**
     * Выбранное значение.
     */
    value?: Date | string;
    /**
     * Сохранять невалидное значение после блюра поля ввода
     */
    preserveInvalidOnBlur?: boolean;
    /**
     * Выбранное значение по умолчанию.
     */
    defaultDate?: Date;
    /**
     * Placeholder для поля ввода
     */
    placeholder?: string;
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
     * Автозаполнение полей.
     */
    autoComplete?: string;
    /**
     * Callback по нажатию Enter в поле ввода или выборе дня на календаре.
     * @param value - значение даты
     * @param {Object} formattedValues - набор значений в разных форматах
     * @param formattedValues.error - статус ошибки валидации
     * @param formattedValues.success - статус успешной валидации
     * @param formattedValues.dateInfo - информация о дате (для кварталов и т.д.)
     * @param formattedValues.originalDate - дата как экземпляр Date
     * @param formattedValues.isoDate - дата в формате ISO
     * @return void
     */
    onCommitDate?: OnCommitDateCallback;
    /**
     * Обработчик изменения значения.
     */
    onChangeValue?: (
        event: SyntheticEvent<HTMLInputElement> | null,
        value?: string,
        originalDate?: DateType,
        isoDate?: string,
    ) => void;
    /**
     * Свойство устарело, используется формой. Вместо используйте onChangeValue и onCommitDate
     * @deprecated
     */
    onChange?: (event: {
        target: { value?: string; name?: string; originalDate?: DateType; isoDate?: string };
    }) => void;
} & LabelProps;

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
     * CSS-свойство z-index для выпадающего календаря
     */
    zIndex?: string;
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
     * Закрыть календарь после выбора дат
     */
    closeAfterDateSelect?: boolean;
    /**
     * Событие сворачивания/разворачивания календаря.
     */
    onToggle?: (isOpen: boolean, event?: SyntheticEvent | Event) => void;
};

export type DatePickerProps = DatePickerVariationProps &
    DatePickerTextFieldProps &
    DatePickerCalendarProps &
    DatePickerPopoverProps &
    HintProps &
    Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>;

export type RootDatePickerProps = {
    eventTooltipSize?: string;
} & Omit<DatePickerProps, 'opened' | 'defaultValue' | 'onChangeValue'>;
