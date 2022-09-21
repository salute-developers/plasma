import type { HTMLAttributes } from 'react';

import type { AsProps, SnapType } from '../../types';

export type ScrollAxis = 'x' | 'y';
export type ScrollAlign = 'start' | 'center' | 'end' | 'activeDirection';

export type ToIndex = (i: number) => void;
export type ToPrev = () => void;
export type ToNext = () => void;

export interface BasicProps extends AsProps, HTMLAttributes<HTMLDivElement> {
    /**
     * Индекс текущего элемента
     */
    index: number;
    /**
     * Ось прокрутки
     */
    axis: ScrollAxis;
    /**
     * Тип CSS Scroll Snap
     */
    scrollSnapType?: SnapType;
    /**
     * Центрирование активного элемента при скролле
     */
    scrollAlign?: ScrollAlign;
    /**
     * Отступ в начале, используется при центрировании крайних элементов
     */
    paddingStart?: string;
    /**
     * Отступ в конце, используется при центрировании крайних элементов
     */
    paddingEnd?: string;
    /**
     * Анимированная прокрутка с помощью requestAnimationFrame
     */
    animatedScrollByIndex?: boolean;
    /**
     * Throttling внутренних обработчиков события onScroll
     */
    throttleMs?: number;
    /**
     * Debounce внутренних обработчиков события onScroll
     */
    debounceMs?: number;
    /**
     * Сменить WAI-ARIA Role списка.
     */
    listRole?: string;
    /**
     * Сменить WAI-ARIA Label списка.
     */
    listAriaLabel?: string;
}

export interface CarouselLiteProps extends AsProps, HTMLAttributes<HTMLDivElement> {
    /**
     * Индекс текущего элемента
     */
    index: number;
    /**
     * Ось прокрутки
     */
    axis: ScrollAxis;
    /**
     * Центрирование активного элемента при скролле
     */
    scrollAlign?: ScrollAlign;
    /**
     * Тип CSS Scroll Snap
     */
    scrollSnapType?: SnapType;
    /**
     * Отступ в начале, используется при центрировании крайних элементов
     */
    paddingStart?: string;
    /**
     * Отступ в конце, используется при центрировании крайних элементов
     */
    paddingEnd?: string;
    /**
     * Сменить WAI-ARIA Role списка.
     */
    listRole?: string;
    /**
     * Сменить WAI-ARIA Label списка.
     */
    listAriaLabel?: string;
    /**
     * Переключает тип прокрутки
     */
    scrollMode?: 'scroll' | 'translate';
}

export interface DetectionProps {
    /**
     * Вычислять активный элемент
     */
    detectActive: true;
    /**
     * Пороговое значение определения центрального элемента (0-1)
     */
    detectThreshold: number;
    /**
     * Коллбек изменения индекса
     */
    onIndexChange?: (index: number) => void;
    /**
     * Коллбек изменения позиции скролла
     */
    onDetectActiveItem?: (index: number) => void;
    /**
     * Обработчик стилизации элемента во вьюпорте
     */
    scaleCallback?: (itemEl: HTMLElement, slot: number) => void;
    /**
     * Обработчик для сброса стилей элементов, находящихся вне вьюпорта
     */
    scaleResetCallback?: (itemEl: HTMLElement) => void;
}

export interface NoDetectionProps {
    detectActive?: false;
    detectThreshold?: never;
    onIndexChange?: never;
    onDetectActiveItem?: never;
    scaleCallback?: never;
    scaleResetCallback?: never;
}
export type CarouselProps = BasicProps & (DetectionProps | NoDetectionProps);

export type UseCarouselOptions = Pick<
    CarouselProps,
    | 'index'
    | 'axis'
    | 'detectActive'
    | 'detectThreshold'
    | 'scrollAlign'
    | 'scaleCallback'
    | 'scaleResetCallback'
    | 'onIndexChange'
    | 'onDetectActiveItem'
    | 'animatedScrollByIndex'
    | 'throttleMs'
    | 'debounceMs'
>;

export type UseCarouselLiteOptions = Pick<CarouselLiteProps, 'index' | 'axis' | 'scrollAlign' | 'scrollMode'>;

export type CarouselTemplateProps = Omit<BasicProps, Exclude<keyof UseCarouselOptions, 'axis'>>;

export type CarouselVirtualProps = {
    /**
     * Высота или ширина (px) карусели в зависимости от axis.
     */
    virtualSize: number;
} & Omit<CarouselTemplateProps, 'paddingStart' | 'paddingEnd' | 'scrollSnapType'>;
