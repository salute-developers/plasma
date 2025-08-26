import type { HTMLAttributes, CSSProperties } from 'react';

export type ScrollAlign = 'start' | 'center' | 'end';

export interface CarouselNewProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Номер слайда по-умолчанию.
     * @default 0
     */
    defaultIndex?: number;
    /**
     * Центрирование активного элемента при скролле.
     * @default start
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
     * Отступ между слайдами.
     * @default 20px
     */
    gap?: CSSProperties['gap'];

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
