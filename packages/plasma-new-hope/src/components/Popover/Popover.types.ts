import { HTMLAttributes, ReactNode, RefObject } from 'react';
import * as React from 'react';

import { ResizableProps } from '../_Resizable';

export type PopoverTrigger = 'hover' | 'click';
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

export type CustomPopoverProps = {
    /**
     * Контент всплывающего окна.
     */
    children: ReactNode;
    /**
     * Всплывающее окно раскрыто или нет.
     */
    opened?: boolean;
    /**
     * Способ открытия всплывающего окна - наведение или клик мышью.
     * @default click
     */
    trigger?: PopoverTrigger;
    /**
     * Сторона открытия окна относительно target элемента.
     * @default bottom
     */
    placement?: Placement;
    /**
     * Автоматическая коррекция всплывающего окна, если оно находится за пределами экрана.
     * @default true
     */
    flip?: boolean;
    /**
     * Отступ окна относительно элемента, у которого оно вызвано.
     * @default [0, 0]
     */
    offset?: [number, number];
    /**
     * Портал для выпадающего списка. Принимает id контейнера или ref.
     */
    portal?: string | React.RefObject<HTMLElement>;
    /**
     * Значение z-index для всплывающего окна.
     */
    zIndex?: string;
    /**
     * Элемент или ref на элемент, рядом с которым произойдет вызов всплывающего окна.
     */
    target?: ReactNode | RefObject<HTMLElement>;
    /**
     * Есть ли стрелка над элементом.
     */
    hasArrow?: boolean;
    /**
     * Блокировать ли фокус на всплывающем окне.
     * @default true
     */
    isFocusTrapped?: boolean;
    /**
     * Событие сворачивания/разворачивания всплывающего окна.
     */
    onToggle?: (isOpen: boolean) => void;
    /**
     * Закрывать окно при нажатии ESC.
     * @default true
     */
    closeOnEsc?: boolean;
    /**
     * Закрывать окно при нажатии вне области окна. (Если trigger === 'click')
     * @default true
     */
    closeOnOverlayClick?: boolean;
    /**
     * Настройка resizable-режима.
     */
    resizable?: ResizableProps['resizable'];
    /**
     * Обработчик начала ресайза.
     */
    onResizeStart?: ResizableProps['onResizeStart'];
    /**
     * Обработчик остановки ресайза.
     */
    onResizeEnd?: ResizableProps['onResizeEnd'];
    /**
     * Анимированное появление Popover
     * @default true
     */
    animated?: boolean;
    /**
     * Вид компонента.
     */
    view?: string;
};

export type PopoverProps = HTMLAttributes<HTMLDivElement> & CustomPopoverProps;
