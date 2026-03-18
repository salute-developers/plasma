import type { CSSProperties, HTMLAttributes, RefObject, SyntheticEvent } from 'react';

import type { LabelProps } from '../TextField/TextField.types';

export type Placement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';

export type TimePickerFloatingPopoverProps = {
    target: React.ReactNode | ((ref: React.MutableRefObject<HTMLElement | null>) => React.ReactNode);
    children: React.ReactNode;
    opened: boolean;
    onToggle: () => void;
    placement: Placement;
    portal?: string | React.RefObject<HTMLElement>;
    offset?: [number, number];
    zIndex?: React.CSSProperties['zIndex'];
    disableFlip?: boolean;
};

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
    defaultValue?: Date;
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
     * Сторона открытия TimePicker относительно поля ввода.
     * @default bottom
     */
    placement?: Placement;
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
     * Отключить автоматическое переворачивание дропдауна при нехватке места
     */
    disableFlip?: boolean;
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
     * @deprecated использовать `placement="bottom-right"`
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
    stretched?: boolean;
};

export type TimePickerProps = BasicProps &
    TextFieldProps &
    TimePickerPopoverProps &
    Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>;
