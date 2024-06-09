import type { ReactNode } from 'react';

import type { PathState } from '../../../../reducers';

export type ItemOption = {
    /**
     *  Значение у item
     */
    value: string;
    /**
     * Метка-подпись к item
     */
    label: string;
    /**
     * Список дочерних items.
     */
    items?: Array<ItemOption>;
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
     * @deprecated
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

export type ItemOptionTransformed = ItemOption & { parent?: ItemOption | null };

export interface ItemProps {
    item: ItemOptionTransformed;
    currentLevel: number;
    index: number;
    path: PathState;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaLevel?: React.AriaAttributes['aria-level'];
    ariaLabel?: React.AriaAttributes['aria-label'];
    itemRole?: string;
}
