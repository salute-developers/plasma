import type { HTMLAttributes } from 'react';
import { AsProps } from 'src/types';

export type SnapType = 'mandatory' | 'proximity' | 'none';
export type SnapAlign = 'start' | 'center' | 'end';
export type SnapStop = 'normal' | 'always';

export type ScrollAxis = 'x' | 'y';
export type ScrollAlign = 'start' | 'center' | 'end' | 'activeDirection';

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

type CarouselPropsBase = BasicProps & (DetectionProps | NoDetectionProps);

export type CarouselProps = Omit<CarouselPropsBase, 'axis' | 'animatedScrollByIndex' | 'throttleMs' | 'debounceMs'> & {
    /**
     * При значении `polite` скринридер будет объявлять переключаемые слайды.
     */
    ariaLive?: 'off' | 'polite';
    // Выключает драг скролл (только для десктопа). False по дефолту.
    isDragScrollDisabled?: boolean;
};

export type CarouselItemProps = {
    scrollSnapAlign?: SnapAlign;
    scrollSnapStop?: SnapStop;
} & AsProps &
    HTMLAttributes<HTMLDivElement>;
