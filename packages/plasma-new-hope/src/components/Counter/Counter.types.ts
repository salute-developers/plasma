import type { HTMLAttributes } from 'react';

export type CustomCounterProps = {
    /**
     * Отображаемое число. Не может быть меньше 1.
     */
    count: number;
    /**
     * Максимальное отображаемое число. Не может быть меньше 1.
     */
    maxCount?: number;
    /**
     * Размер Counter
     * @default
     * xs
     */
    size?: string;
    /**
     * Вид Counter
     * @default
     * default
     */
    view?: string;
};

export type CounterProps = HTMLAttributes<HTMLDivElement> & CustomCounterProps;
