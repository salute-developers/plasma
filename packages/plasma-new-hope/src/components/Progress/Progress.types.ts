import type { HTMLAttributes, ReactNode } from 'react';

// TODO удалить после отказа от status
type Status = 'success' | 'warning' | 'error' | 'accent';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Значение прогресса в процентах.
     */
    value: number;
    /**
     * Отображать числовое значение прогресса.
     * @default 'true'
     */
    hasValue?: boolean;
    /**
     * @deprecated Использовать 'hasValue' вместо 'displayValue'
     */
    displayValue?: boolean;
    /**
     * Статус прогресса.
     * @deprecated Использовать 'view' вместо 'status'
     */
    status?: Status;
    /**
     * Вид прогресса.
     * @default 'default'
     */
    view?: string;
    /**
     * Размер прогресса.
     * @default 'm'
     */
    size?: string;
    /**
     * Высота линии прогресса в пикселях.
     * @default '4'
     */
    progressSize?: string;
    /**
     * Текстовая метка прогресса.
     */
    label?: string;
    /**
     * Иконка рядом с текстом метки.
     */
    labelIcon?: ReactNode;
    /**
     * Задает положение текста метки относительно labelIcon.
     * @default 'right'
     */
    labelTextPlacement?: 'left' | 'right' | 'none';
    /**
     * Задает выравнивание метки относительно трека.
     * @default 'top'
     */
    labelPlacement?: 'top' | 'left' | 'none';
    /**
     * Задает выравнивание числового значения относительно трека.
     * Когда передана метка, значение определяется автоматически из labelPlacement.
     * @default 'right'
     */
    valuePlacement?: 'top' | 'right' | 'none';
    /**
     * Выравнивание числового значения по горизонтали.
     * Применяется только когда  valuePlacement равен 'top' и нет метки.
     * @default 'start'
     */
    valueAlign?: 'start' | 'center' | 'end';
    /**
     * Подпись под прогрессом.
     */
    caption?: string;
}
