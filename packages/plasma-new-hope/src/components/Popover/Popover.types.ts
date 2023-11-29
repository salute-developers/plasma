import { Placement, ComputedPlacement } from '@popperjs/core';
import type { HTMLAttributes, ReactNode, SyntheticEvent } from 'react';

export type PopoverTrigger = 'hover' | 'click';

export type PopoverPlacementBasic = ComputedPlacement;
export type PopoverPlacement = Placement;

export type CustomPopoverProps = {
    /**
     * Всплывающее окно раскрыто или нет.
     */
    isOpen?: boolean;
    /**
     * Способ открытия всплывающего окна - наведение или клик мышью.
     * @default
     *  click
     */
    trigger?: PopoverTrigger;
    /**
     * Сторона открытия окна относительно target элемента.
     * @default
     *  auto
     */
    placement?: PopoverPlacement | Array<PopoverPlacementBasic>;
    /**
     * Отступ окна относительно элемента, у которого оно вызвано.
     * @default
     * [0, 0]
     */
    offset?: [number, number];
    /**
     * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: 'document' | string | React.RefObject<HTMLElement>;
    /**
     * Элемент, рядом с которым произойдет вызов всплывающего окна.
     */
    target?: ReactNode;
    /**
     * Есть ли стрелка над элементом.
     */
    hasArrow?: boolean;
    /**
     * Значение z-index для Popover.
     */
    zIndex?: string;
    /**
     * Контент всплывающего окна.
     */
    children?: ReactNode;
    /**
     * Предотвратить автоматическое изменение положения.
     */
    preventOverflow?: boolean;
    /**
     * Блокировать ли фокус на всплывающем окне.
     * @default
     * true
     */
    isFocusTrapped?: boolean;
    /**
     * Событие сворачивания/разворачивания всплывающего окна.
     */
    onToggle?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
    /**
     * Закрывать окно при нажатии вне области окна.
     * @default
     * true
     */
    closeOnOverlayClick?: boolean;
    /**
     * Закрывать окно при нажатии ESC.
     * @default
     * true
     */
    closeOnEsc?: boolean;
    /**
     * Находится ли в портале.
     * @default
     * true
     */
    insidePortal?: boolean;

    view?: string;
};

export type PopoverProps = HTMLAttributes<HTMLDivElement> & CustomPopoverProps;
