import type { CSSProperties, HTMLAttributes } from 'react';

export type TimePickerGridChangeEvent = {
    timeValues: {
        hour?: number;
        minute?: number;
        second?: number;
    };
    value?: string;
};

export type TimePickerGridProps = {
    /**
     * Выбранное значение времени в формате HH:mm:ss
     */
    value?: string;
    /**
     * Высота выпадающего списка
     */
    dropdownHeight?: CSSProperties['height'];
    /**
     * Ширина выпадающего списка
     */
    dropdownWidth?: 'auto' | 'fullWidth' | CSSProperties['width'];
    /**
     * Формат времени (например: 'HH:mm', 'HH:mm:ss', 'mm:HH')
     */
    format?: string;
    /**
     * Минимальное время (в формате HH:mm:ss или Date)
     */
    min?: string | Date;
    /**
     * Максимальное время (в формате HH:mm:ss или Date)
     */
    max?: string | Date;
    /**
     * @deprecated
     * Используйте параметр format
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
     * Заблокированные значения
     */
    disabledValues?: {
        hour?: number[];
        minute?: number[];
        second?: number[];
    };
    /**
     * Обработчик изменения значения
     */
    onChange?: (event: TimePickerGridChangeEvent) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;
