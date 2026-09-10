import type { HTMLAttributes } from 'react';
import type { AsProps } from '@salutejs/plasma-new-hope/styled-components';

export type NumbersProps = {
    /**
     * Отображаемое число. NaN и бесконечные значения не отображаются.
     */
    value: number;
    /**
     * Единица измерения: degree — градусы (°), percent — проценты (%).
     * По умолчанию отображается только число.
     */
    unit?: 'degree' | 'percent';
    /**
     * Размер цифр.
     * @default xs
     */
    size?: string;
    /**
     * Вид компонента.
     * @default default
     */
    view?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'> &
    AsProps;
