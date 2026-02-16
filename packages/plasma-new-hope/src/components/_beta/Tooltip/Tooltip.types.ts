import type { HTMLAttributes, ReactNode, ReactElement } from 'react';

import { Placement } from '../Popover/Popover.types';

export type BasicTooltipProps = {
    /**
     * Контент всплывающего окна.
     */
    children: string;
    /**
     * Целевой элемент взаимодействия с всплывающим окном.
     */
    target: ReactElement;
    /**
     * Слот для иконки слева.
     */
    iconSlot?: ReactNode;
    /**
     * Способ скрытия/раскрытия всплывающего окна.
     * @default click
     */
    trigger?: 'click' | 'hover' | 'focus';
    /**
     * Сторона раскрытия окна относительно target-элемента.
     * @default bottom
     */
    placement?: Placement;
    /**
     * Включение хвостика у всплывающего окна.
     * @default true
     */
    hasTail?: boolean;
    /**
     * Отступ всплывающего окна относительно target.
     * @default 0
     */
    offset?: number;
    /**
     * Задержка перед раскрытием, мс. (При trigger === 'hover')
     * @default 0
     */
    delayOpen?: number;
    /**
     * Задержка перед скрытием, мс. (При trigger === 'hover')
     * @default 0
     */
    delayClose?: number;
    /**
     * CSS-свойство z-index всплывающего окна.
     * @default 1000
     */
    zIndex?: number;
    /**
     * Портал для всплывающего контента.
     */
    portal?: React.RefObject<HTMLElement | null>;

    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Размер компонента.
     */
    size?: string;
};

export type TooltipProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & BasicTooltipProps;
