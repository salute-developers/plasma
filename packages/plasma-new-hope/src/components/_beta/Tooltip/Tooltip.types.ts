import type { HTMLAttributes, ReactNode, ReactElement } from 'react';

type Placement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';

export type BasicPopoverProps = {
    /**
     * Контент всплывающего окна.
     */
    children: string | number;
    /**
     * Слот для контента слева.
     */
    contentLeft: ReactNode;
    /**
     * Целевой элемент взаимодействия с всплывающим окном.
     */
    target: ReactElement;
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
     * Вид компонента.
     */
    view?: string;
    /**
     * Размер компонента.
     */
    size?: string;
};

export type PopoverProps = HTMLAttributes<HTMLDivElement> & BasicPopoverProps;
