import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';

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
     * Сторона открытия вложенного выпадающего списка относительно текущего элемента
     */
    placement?: DropdownPlacement;
    /**
     * Список дочерних items
     */
    items?: Array<DropdownItemOption>;
    /**
     * Ячейка для контента в начале выпадающего списка.
     * Применяется только к при наличии дочерних элементов `items`
     */
    beforeList?: ReactNode;
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
     * Максимальная высота дочернего выпадающего списка.
     */
    listMaxHeight?: CSSProperties['height'];

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
     * Item не активен
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
