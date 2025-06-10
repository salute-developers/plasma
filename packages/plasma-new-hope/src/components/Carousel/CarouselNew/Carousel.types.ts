import type { HTMLAttributes } from 'react';

export type ScrollAlign = 'start' | 'center' | 'end' | 'activeDirection';

export interface CarouselNewProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Центрирование активного элемента при скролле.
     * @default center
     */
    scrollAlign?: ScrollAlign;
    /**
     * Опции управления пагинацией.
     */
    paginationOptions?: {
        /**
         * Включение/выключение пагинации.
         * @default false
         */
        disabled?: boolean;
        /**
         * Количество видимых точек пагинации.
         * @default 10
         */
        visibleDots?: number;
        /**
         * Центрирование активной точки.
         * @default false
         */
        centered?: boolean;
    };
    /**
     * Включение/выключение стрелок управления слайдами.
     * @default false
     */
    controlArrowsDisabled?: boolean;

    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     * @default default
     */
    view?: string;
}

export type CarouselItemProps = HTMLAttributes<HTMLDivElement>;
