import type { HTMLAttributes } from 'react';

type CustomCounterProps = {
    /**
     * Отображаемое число
     */
    count: number;
    /**
     * Максимальное отображаемое число
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
     * primary
     */
    view?: string;
};

export type CounterProps = HTMLAttributes<HTMLDivElement> & CustomCounterProps;
