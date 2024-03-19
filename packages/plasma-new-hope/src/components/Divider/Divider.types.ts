import { HTMLAttributes } from 'react';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Направление разделителя
     * @default 'horizontal'
     */
    orientation?: string;
    /**
     * Размер разделителя
     * @default '100%'
     * @description
     * В зависимости от ориентации разделителя устанавливает его размер.
     * Для horizontal будет меняться 'width' для vertical - 'height'.
     * Значение может принимать число с единицой измерения CSS (px, rem и тд.).
     * Если передано число без единицы измерения - рассчитывается в процентах.
     */
    length?: string | number;
    /**
     * Вид разделителя
     * @default 'default'
     */
    view?: string;
    /**
     * Размер разделителя
     * @default 'm'
     */
    size?: string;
}
