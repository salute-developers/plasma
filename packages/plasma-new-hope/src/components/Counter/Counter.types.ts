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
     * Разделитель тысяч.
     * Может быть строкой (например, ",") или булевым значением.
     * @default ' ' (пробел)
     * @example 123 456 789
     */
    thousandSeparator?: boolean | string;
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
