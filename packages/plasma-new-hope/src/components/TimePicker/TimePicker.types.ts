import type { CSSProperties, HTMLAttributes, RefObject, SyntheticEvent } from 'react';

import type { LabelProps } from '../TextField/TextField.types';

export type TimePickerChangeEvent = {
    value?: string;
    timeValues: {
        hour?: number;
        minute?: number;
        second?: number;
    };
};

export type TextFieldProps = {
    /**
     * Выравнивание индикатора обязательности поля
     */
    requiredPlacement?: 'left' | 'right';
    /**
     * Флаг обязательности поля
     */
    required?: boolean;
    /**
     * Флаг наличия индикатора обязательности поля
     */
    hasRequiredIndicator?: boolean;
    /**
     * Выбранное значение времени в формате HH:mm:ss
     */
    value?: string;
    /**
     * Значение по умолчанию
     */
    defaultTime?: Date;
    /**
     * Плейсхолдер поля ввода
     */
    placeholder?: string;
    /**
     * Флаг некорректного значения
     */
    valueError?: boolean;
    /**
     * Флаг корректного значения
     */
    valueSuccess?: boolean;
    /**
     * Вспомогательный текст снизу слева
     */
    leftHelper?: string;
    /**
     * Левый контент
     */
    contentLeft?: React.ReactElement;
    /**
     * Правый контент
     */
    contentRight?: React.ReactElement;
    /**
     * Текст перед полем ввода
     */
    textBefore?: string;
    /**
     * Текст после поля ввода
     */
    textAfter?: string;
    /**
     * Обработчик изменения значения
     */
    onChange?: (event: TimePickerChangeEvent) => void;
} & LabelProps;

export type TimePickerPopoverProps = {
    /**
     * Видимость поповера
     */
    opened?: boolean;
    /**
     * Отступ поповера относительно поля ввода
     */
    offset?: [number, number];
    /**
     * Контейнер для позиционирования
     */
    frame?: 'document' | string | RefObject<HTMLElement>;
    /**
     * Закрывать при клике вне области
     */
    closeOnOverlayClick?: boolean;
    /**
     * Закрывать при нажатии Escape
     */
    closeOnEsc?: boolean;
    /**
     * Использовать портал для рендера
     */
    usePortal?: boolean;
    /**
     * Обработчик изменения видимости
     */
    onToggle?: (isOpen: boolean, event?: SyntheticEvent | Event) => void;
};

type BasicProps = {
    /**
     * Выравнивание выпадающего списка
     */
    dropdownAlign?: 'left' | 'right';
    /**
     * Ширина выпадающего списка
     */
    dropdownWidth?: 'auto' | 'fullWidth' | CSSProperties['width'];
    /**
     * Высота выпадающего списка
     */
    dropdownHeight?: CSSProperties['height'];
    /**
     * Количество колонок (2 - часы/минуты, 3 - часы/минуты/секунды)
     */
    columnsQuantity?: 2 | 3;
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Стиль компонента
     */
    view?: string;
    /**
     * Флаг неактивного состояния
     */
    disabled?: boolean;
    /**
     * Флаг состояния только для чтения
     */
    readonly?: boolean;
    /**
     * Растягивание на всю ширину
     */
    stretched: boolean;
};

export type TimePickerProps = BasicProps &
    TextFieldProps &
    TimePickerPopoverProps &
    Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>;
