import type { HTMLAttributes, ReactNode, SyntheticEvent } from 'react';

export type DropdownPlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type DropdownPlacement = DropdownPlacementBasic | 'auto';

export type DropdownTrigger = 'hover' | 'click';

export type CustomDropdownProps = {
    /**
     * Дропдаун открыт или нет.
     * @default
     *  false
     */
    isOpen?: boolean;
    /**
     * Способ открытия дропдауна окна - наведение или клик мышью.
     * @default
     *  click
     */
    trigger?: DropdownTrigger;
    /**
     * Сторона открытия дропдауна относительно target элемента.
     * @default
     *  auto
     */
    placement?: DropdownPlacement | Array<DropdownPlacementBasic>;
    /**
     * Отступ дропдауна относительно элемента, у которого оно вызвано.
     * @default
     * [0, 0]
     */
    offset?: [number, number];
    /**
     * Предотвратить автоматическое изменение положения при ресайзе.
     */
    preventOverflow?: boolean;
    /**
     * Элемент, рядом с которым произойдет вызов дропдауна.
     */
    target?: ReactNode;
    /**
     * Стрелка над элементом.
     */
    hasArrow?: boolean;
    /**
     * Контент всплывающего окна.
     */
    children?: ReactNode;
    /**
     * Блокировать ли фокус на дропдауне.
     * @default
     * true
     */
    isFocusTrapped?: boolean;
    /**
     * Закрывать окно при нажатии вне области дропдауна.
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
     * Событие сворачивания/разворачивания дропдауна.
     */
    onToggle?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
    /**
     * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: 'document' | string | React.RefObject<HTMLElement>;
    size?: string;
    view?: string;
};

export type DropdownProps = HTMLAttributes<HTMLDivElement> & CustomDropdownProps;
