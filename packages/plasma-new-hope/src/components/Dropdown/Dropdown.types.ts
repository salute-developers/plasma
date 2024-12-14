import type { HTMLAttributes, ReactNode, SyntheticEvent, CSSProperties } from 'react';
import React from 'react';

import { FocusedPathState } from './reducers/focusedPathReducer';
import { DropdownItemOption } from './ui/DropdownItem/DropdownItem.type';

export type DropdownPlacement = 'auto' | 'top' | 'right' | 'bottom' | 'left';

export type DropdownTrigger = 'hover' | 'click';

export type DropdownProps<T extends DropdownItemOption = DropdownItemOption> = {
    /**
     * Список элементов.
     */
    items: T[];
    /**
     * Дропдаун открыт всегда.
     */
    alwaysOpened?: boolean;
    /**
     * Target для открытия.
     */
    children?: ReactNode;
    /**
     * WAI-ARIA role элемента меню.
     * @default option
     */
    itemRole?: string;
    /**
     * Обработчик наведения на item.
     */
    onHover?: (index: number) => void;
    /**
     * Обработчик выбора item.
     */
    onItemSelect?: (item: T, event: SyntheticEvent) => void;
    /**
     * Способ открытия дропдауна окна - наведение или клик мышью.
     * @default click
     */
    trigger?: DropdownTrigger;
    /**
     * Сторона открытия дропдауна относительно target элемента.
     * @default bottom
     */
    placement?: DropdownPlacement;
    /**
     * Отступ дропдауна относительно элемента, у которого оно вызвано.
     * @default [0, 0]
     */
    offset?: [number, number];
    /**
     * Значение css width для выпадающего списка.
     * @example width="200px"
     */
    listWidth?: CSSProperties['width'];
    /**
     * Стрелка у выпадающего списка.
     * @default true
     */
    hasArrow?: boolean;
    /**
     * Закрыть выпадающий список после выбора.
     * @default true
     */
    closeOnSelect?: boolean;
    /**
     * Закрывать окно при нажатии вне области дропдауна.
     * @default true
     */
    closeOnOverlayClick?: boolean;
    /**
     * Событие сворачивания/разворачивания дропдауна.
     */
    onToggle?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
    size?: string;
    view?: string;
    /**
     * Вариант: обычный или сжатый
     * @default normal
     */
    variant?: 'normal' | 'tight';
    /**
     * Портал для выпадающего списка. Принимает id контейнера или ref.
     */
    portal?: string | React.RefObject<HTMLElement>;
    /**
     * Callback для кастомной настройки айтема в выпадающем списке.
     */
    renderItem?: (item: T) => React.ReactNode;
    /**
     * CSS-свойство z-index для выпадающего списка.
     */
    zIndex?: CSSProperties['zIndex'];
    /**
     * Ячейка для контента в начале выпадающего списка.
     */
    beforeList?: ReactNode;
    /**
     * Ячейка для контента в конце выпадающего списка.
     */
    afterList?: ReactNode;

    /**
     * Обработчик клика по item.
     * @deprecated использовать onItemSelect.
     */
    onItemClick?: (item: T, event: SyntheticEvent) => void;
    /**
     * Значение css overflow для выпадающего меню.
     * @default initial
     * @deprecated
     * @example listOverflow="scroll"
     */
    listOverflow?: CSSProperties['overflow'];
    // TODO: #1584
    /**
     * Значение css height для выпадающего меню.
     * @default initial
     * @deprecated
     * @example listHeight="11", listHeight="auto", listHeight={11}
     */
    listHeight?: CSSProperties['height'];
    /**
     * Индекс элемента при наведении
     * @deprecated использовать onHover
     */
    hoverIndex?: number;
} & HTMLAttributes<HTMLDivElement>;

export type HandleGlobalToggleType = (opened: boolean, event: SyntheticEvent | Event) => void;

export type PlacementType = 'auto' | 'top-start' | 'right-start' | 'bottom-start' | 'left-start';

export type FloatingPopoverProps = {
    target: React.ReactNode;
    children: React.ReactNode;
    opened: boolean;
    onToggle: (opened: boolean, event: SyntheticEvent | Event) => void;
    placement: PlacementType;
    trigger: DropdownProps['trigger'];
    isInner?: boolean;
    portal?: DropdownProps['portal'];
    offset?: [number, number];
    zIndex?: DropdownProps['zIndex'];
};

export type ItemContext = {
    focusedPath: FocusedPathState;
    size: DropdownProps['size'];
    variant: DropdownProps['variant'];
    itemRole: DropdownProps['itemRole'];
    handleGlobalToggle: HandleGlobalToggleType;
    closeOnSelect: DropdownProps['closeOnSelect'];
    onHover: DropdownProps['onHover'];
    onItemSelect: DropdownProps['onItemSelect'];
    onItemClick: DropdownProps['onItemClick'];
    hasArrow: DropdownProps['hasArrow'];
    treeId: string;
    renderItem: DropdownProps['renderItem'];
};
