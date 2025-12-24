import type { HTMLAttributes, ReactNode, ReactElement } from 'react';

import { ResizableProps } from '../../_Resizable';

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
     * Стиль для UI конфигурации
     * Влияет на выбор предустановленного набора токенов
     * @default closeNone
     */
    appearance?: 'closeNone' | 'closeInner';
    /**
     * Контент всплывающего окна.
     */
    children: ReactNode;
    /**
     * Целевой элемент взаимодействия с всплывающим окном.
     */
    target: ReactElement;
    /**
     * Управление скрытием/раскрытием всплывающего окна.
     */
    opened?: boolean;
    /**
     * Раскрыто ли всплывающее окно по умолчанию.
     * @default false
     */
    defaultOpened?: boolean;
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
     * Коррекция placement, если всплывающее окно находится за пределами экрана.
     * @default false
     */
    flip?: boolean;
    /**
     * Смещение всплывающего окна при соприкосновении с границами экрана.
     * @default false
     */
    shift?: boolean;
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
     * Закрывать окно при нажатии вне области окна. (При trigger === 'click')
     * @default true
     */
    outsideClick?: boolean;
    /**
     * Настройка resizable-режима.
     * @default false
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
     * Событие сворачивания/разворачивания всплывающего окна.
     */
    onToggle?: (isOpen: boolean) => void;
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
