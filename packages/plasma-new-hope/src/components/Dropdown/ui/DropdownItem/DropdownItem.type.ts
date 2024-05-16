import type { HTMLAttributes, ReactNode, SyntheticEvent } from 'react';

import { DropdownProps } from '../../Dropdown.types';
import type { FocusedPathState } from '../../reducers/focusedPathReducer';
import type { PathState } from '../../reducers/pathReducer';

export type DropdownItemOption = {
    /**
     *  Значение у item
     */
    value: string | number;
    /**
     * Метка-подпись к item
     */
    label: string;
    /**
     * Список дочерних items.
     */
    items?: Array<DropdownItemOption>;
    /**
     * Item не активен
     */
    disabled?: boolean;
    /**
     * Слот для контента слева
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа
     */
    contentRight?: ReactNode;
    /**
     * Выбранный item.
     * @deprecated использовать ContentLeft || ContentRight
     */
    isActive?: boolean;
    /**
     * Кастомный цвет текста
     * @deprecated
     */
    color?: string;
    /**
     * Айтем не активен
     * @deprecated использовать disabled
     */
    isDisabled?: boolean;
};

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
    item: DropdownItemOption;
    focusedPath: FocusedPathState;
    currentLevel: number;
    index: number;
    variant: DropdownProps['variant'];
    path?: PathState;
    itemRole?: DropdownProps['itemRole'];
    closeOnSelect?: DropdownProps['closeOnSelect'];
    handleGlobalToggle?: (opened: boolean, event: Event | SyntheticEvent<Element, Event>) => void;
    onHover?: DropdownProps['onHover'];
    onItemSelect?: DropdownProps['onItemSelect'];
    onItemClick?: DropdownProps['onItemClick'];
    hasArrow?: DropdownProps['hasArrow'];
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaHasPopup?: React.AriaAttributes['aria-haspopup'];
    ariaLevel?: React.AriaAttributes['aria-level'];
    ariaLabel?: React.AriaAttributes['aria-label'];
}
