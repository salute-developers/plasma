import type { HTMLAttributes, ReactNode, SyntheticEvent } from 'react';

export type PopoverPlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type PopoverPlacement = PopoverPlacementBasic | 'auto';

export type PopoverTrigger = 'hover' | 'click';

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
     * Элемент, рядом с которым произойдет вызов всплывающего окна.
     */
    target?: ReactNode;
    /**
     * Стрелка над элементом.
     */
    arrow?: ReactNode;
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
};

export type PopoverProps = HTMLAttributes<HTMLDivElement> & CustomPopoverProps;
