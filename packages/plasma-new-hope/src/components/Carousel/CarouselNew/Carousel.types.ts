import type { HTMLAttributes, CSSProperties } from 'react';

export type ScrollAlign = 'start' | 'center' | 'end';

export interface CarouselNewProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Номер слайда.
     * Controlled-режим.
     */
    index?: number;
    /**
     * Callback для изменения слайда;
     */
    onChangeIndex?: (index: number) => void;
    /**
     * Номер слайда по-умолчанию.
     * Только при uncontrolled-режиме.
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
     * Зацикливание карусели.
     * При включении после последнего слайда идет первый, и наоборот.
     * @default false
     */
    loop?: boolean;
    /**
     * Автоматическое пролистывание карусели.
     * @default false
     */
    autoPlay?: boolean;
    /**
     * Интервал автоматического пролистывания в мс.
     * @default 5000
     */
    autoPlayInterval?: number;
    /**
     * Включение свайпа/drag для touch- и pointer-устройств.
     * @default false
     */
    swipeEnabled?: boolean;
    /**
     * Включение виртуализации слайдов.
     * @default false
     */
    virtual?: boolean;

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
