import type { HTMLAttributes } from 'react';

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
}
