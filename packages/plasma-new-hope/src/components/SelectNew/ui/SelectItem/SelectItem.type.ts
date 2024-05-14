import type { HTMLAttributes, ReactNode, SyntheticEvent } from 'react';

import type { FocusedPathState } from '../../reducers/focusedPathReducer';
import type { PathState } from '../../reducers/pathReducer';

export type SelectItemOption = {
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
    items?: Array<SelectItemOption>;
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

export interface SelectItemProps extends HTMLAttributes<HTMLLIElement> {
    item: SelectItemOption;
    focusedPath: FocusedPathState;
    currentLevel: number;
    index: number;
    path?: PathState;
    handleGlobalToggle?: (opened: boolean, event: Event | SyntheticEvent<Element, Event>) => void;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaHasPopup?: React.AriaAttributes['aria-haspopup'];
    ariaLevel?: React.AriaAttributes['aria-level'];
    ariaLabel?: React.AriaAttributes['aria-label'];
}
