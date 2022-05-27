import type { HTMLAttributes } from 'react';

import type { AsProps, SnapType } from '../../types';
import { DetectionProps } from '../Carousel/types';

export type ScrollAxis = 'x' | 'y';
export type ScrollAlign = 'start' | 'center' | 'end' | 'activeDirection';

export type ToIndex = (i: number) => void;
export type ToPrev = () => void;
export type ToNext = () => void;

export interface BasicProps extends AsProps, HTMLAttributes<HTMLDivElement> {
    /**
     * Ось прокрутки
     */
    axis: ScrollAxis;
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
     * Количество всех элементов в списке.
     */
    itemCount: number;
    /**
     * Вычисление размера элемента в зависимости от индекса.
     * По умолчанию размер = 50px
     */
    estimateSize: (index: number) => number;
    /**
     * количество элементов для рендера за видимой областью
     * при скролле
     */
    overscan?: number;
    /**
     * Функция для отрисовки элементов
     * @param visibleItems - текущие элементы
     * @param currentIndex - текущий выбранный индекс
     */
    renderItems: (visibleItems: { index: number; start: number }[], currentIndex: number) => React.FC;
    /**
     * Высота карусели
     */
    carouselHeight: number;
}

export type CarouselVirtualProps = BasicProps &
    Exclude<DetectionProps, 'scaleCallback' | 'scaleResetCallback' | 'detectThreshold'> & {
        /**
         * Сменить WAI-ARIA Role списка.
         */
        listRole?: string;
        /**
         * Сменить WAI-ARIA Label списка.
         */
        listAriaLabel?: string;
        index?: number;
    };
