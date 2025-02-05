import type { HTMLAttributesWithoutOnChange } from '../../engines/types';

interface CustomPaginationDots {
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     * @default default
     */
    view?: string;
    /**
     * Отображение активного элемента
     * @default 'dot'
     */
    activeElementView?: 'dot' | 'line';
    /**
     * Ориентация элементов
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Центрирует элемент по горизонтали на всю ширину контейнера
     * @default false
     */
    centered?: boolean;
    /**
     * Выбранная страница
     */
    value?: number;
    /**
     * Количество страниц
     */
    count?: number;
    /**
     * Максимальное количество видимых точек, для условий count > visibleCount
     */
    visibleCount?: number;
    /**
     * Обработчик клика по точке
     */
    onChange?: (index: number) => void;
}

export interface PaginationDotsProps extends HTMLAttributesWithoutOnChange<HTMLDivElement>, CustomPaginationDots {}
