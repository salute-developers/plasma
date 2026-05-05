import type { HTMLAttributes, ReactNode, SyntheticEvent, CSSProperties, RefObject } from 'react';

import { FocusedPathState } from './reducers/focusedPathReducer';

export type DropdownPlacement = 'auto' | 'top' | 'right' | 'bottom' | 'left';
export type DropdownTrigger = 'hover' | 'click';
export type HandleGlobalToggleType = (opened: boolean, event?: SyntheticEvent | Event) => void;
export type PlacementType = 'auto' | 'top-start' | 'right-start' | 'bottom-start' | 'left-start';

export type DropdownItemOption = {
    /**
     *  Значение у item.
     */
    value: string | number;
    /**
     * Label у item.
     */
    label: string;
    /**
     * Сторона открытия вложенного выпадающего списка относительно текущего элемента.
     */
    placement?: DropdownPlacement;
    /**
     * Список дочерних items.
     */
    items?: DropdownItemOption[];
    /**
     * Слот в начале дочернего выпадающего списка.
     */
    beforeList?: ReactNode;
    /**
     * Item не активен.
     */
    disabled?: boolean;
    /**
     * Слот для контента слева.
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа.
     */
    contentRight?: ReactNode;
    /**
     * Отобразить ли разделитель до элемента.
     */
    dividerBefore?: boolean;
    /**
     * Отобразить ли разделитель после элемента.
     */
    dividerAfter?: boolean;
    /**
     * Classname для item.
     */
    className?: string;
    /**
     * Способ открытия дочернего списка.
     */
    trigger?: DropdownTrigger;
    /**
     * Максимальная высота дочернего выпадающего списка.
     */
    listMaxHeight?: CSSProperties['height'];
};

export type DropdownProps<T extends DropdownItemOption = DropdownItemOption> = {
    /**
     * Список элементов.
     */
    items: T[];
    /**
     * Способ открытия Dropdown окна - наведение или клик мышью.
     * @default click
     */
    trigger?: DropdownTrigger;
    /**
     * Сторона открытия Dropdown относительно target элемента.
     * @default bottom
     */
    placement?: DropdownPlacement;
    /**
     * Target для открытия.
     */
    children?: ReactNode;
    /**
     * Вариант: обычный или сжатый
     * @default normal
     */
    variant?: 'normal' | 'tight';
    /**
     * CSS-свойство z-index для выпадающего списка.
     */
    zIndex?: CSSProperties['zIndex'];
    /**
     * Максимальная высота выпадающего списка.
     */
    listMaxHeight?: CSSProperties['height'];
    /**
     * Значение css width для выпадающего списка.
     * @example width="200px"
     */
    listWidth?: CSSProperties['width'];
    /**
     * Портал для выпадающего списка. Принимает id контейнера или ref.
     */
    portal?: string | RefObject<HTMLElement>;
    /**
     * Callback для кастомной настройки айтема в выпадающем списке.
     */
    renderItem?: (item: T) => ReactNode;
    /**
     * Ячейка для контента в начале выпадающего списка.
     */
    beforeList?: ReactNode;
    /**
     * Ячейка для контента в конце выпадающего списка.
     */
    afterList?: ReactNode;
    /**
     * Событие сворачивания/разворачивания Dropdown.
     */
    onToggle?: (isOpen: boolean, event?: SyntheticEvent | Event) => void;
    /**
     * Выпадающий список открыт всегда.
     * @default false
     */
    alwaysOpened?: boolean;
    /**
     * Обработчик наведения на item.
     */
    onHover?: (index: number, item: T) => void;
    /**
     * Обработчик выбора item.
     */
    onItemSelect?: (item: T, event: SyntheticEvent) => void;
    /**
     * Открывает выпадающий список окно по правому клику мышью
     * @default false
     */
    openByRightClick?: boolean;
    /**
     * Отступ выпадающего списка относительно элемента, у которого оно вызвано.
     * @default [0, 8]
     */
    offset?: [number, number];
    /**
     * Закрыть выпадающий список после выбора.
     * @default true
     */
    closeOnSelect?: boolean;
    /**
     * Закрывать окно при нажатии вне области Dropdown.
     * @default true
     */
    closeOnOverlayClick?: boolean;
    /**
     * WAI-ARIA role элемента меню.
     * @default option
     */
    itemRole?: string;
    /**
     * Выпадающий список не активен.
     */
    disabled?: boolean;

    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
} & HTMLAttributes<HTMLDivElement>;

export type FloatingPopoverProps = {
    target: ReactNode;
    children: ReactNode;
    opened: boolean;
    onToggle: (opened: boolean, event?: SyntheticEvent | Event) => void;
    placement: PlacementType;
    trigger: DropdownProps['trigger'];
    isInner: boolean;
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
    treeId: string;
    renderItem: DropdownProps['renderItem'];
};
