import { CSSProperties, ReactNode } from 'react';

export interface FlowProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    /**
     * Ориентация элементов
     * @default `horizontal`
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Расположение элементов относительно выбранной ориентации
     */
    arrangement?: 'start' | 'center' | 'end' | 'spaceBetween' | 'spaceAround';
    /**
     * Выравнивание элементов внутри строк по вертикали при горизонтальной ориентации,
     * или внутри столбцов по горизонтали при вертикальной
     */
    alignment?: 'start' | 'center' | 'end';
    /**
     *  Фиксированный отступ между элементами по главной оси
     */
    mainAxisGap?: number | string;
    /**
     *  Фиксированный отступ между элементами по второстепенной оси
     */
    crossAxisGap?: number | string;
    /**
     *  Количество элементов по главной оси в отображении grid, при itemsPerLine > 0,
     *  иначе используется flex и flex-wrap
     */
    itemsPerLine?: number;
}
