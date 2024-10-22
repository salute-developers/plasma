import type { HTMLAttributes, ReactNode, SyntheticEvent } from 'react';
import { Placement as PopoverPlacement, ComputedPlacement as PopoverPlacementBasic } from '@popperjs/core';

export type { Placement as PopoverPlacement, ComputedPlacement as PopoverPlacementBasic } from '@popperjs/core';
export type PopoverTrigger = 'hover' | 'click';

export type CustomPopoverProps = {
    /**
     * @deprecated Всплывающее окно раскрыто или нет.
     */
    isOpen?: boolean;
    /**
     * Всплывающее окно раскрыто или нет.
     */
    opened?: boolean;
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
     * Закрывать окно при нажатии ESC.
     * @default
     * true
     */
    closeOnEsc?: boolean;
    /**
     * Закрывать окно при нажатии вне области окна. (Если trigger === 'click')
     */
    closeOnOverlayClick?: boolean;
    /**
     * Находится ли в портале.
     * @default
     * false
     */
    usePortal?: boolean;

    view?: string;
};

export type PopoverProps = HTMLAttributes<HTMLDivElement> & CustomPopoverProps;
