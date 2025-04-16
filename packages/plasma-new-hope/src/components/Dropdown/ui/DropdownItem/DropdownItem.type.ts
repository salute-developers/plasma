import type { HTMLAttributes, ReactNode } from 'react';

import type { PathState } from '../../reducers/pathReducer';
import type { DropdownPlacement, DropdownTrigger } from '../../Dropdown.types';

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
     * Сторона открытия вложенного дропдауна относительно текущего элемента
     */
    placement?: DropdownPlacement;
    /**
     * Список дочерних items
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
     * Отобразить ли разделитель до элемента
     */
    dividerBefore?: boolean;
    /**
     * Отобразить ли разделитель после элемента
     */
    dividerAfter?: boolean;
    /**
     * Classname для item
     */
    className?: string;
    /**
     * Способ открытия дочернего списка.
     * Имеет больший приоритет над одноименным свойством из DropdownProps.
     */
    trigger?: DropdownTrigger;

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
    currentLevel: number;
    index: number;
    path?: PathState;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaLevel?: React.AriaAttributes['aria-level'];
    ariaLabel?: React.AriaAttributes['aria-label'];
}
