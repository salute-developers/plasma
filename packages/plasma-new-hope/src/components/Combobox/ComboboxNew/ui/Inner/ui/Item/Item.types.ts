import type { ReactNode } from 'react';
import React from 'react';

import type { PathState } from '../../../../../../Select/reducers';
import type { Placement } from '../../../../Combobox.types';

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
     * Сторона открытия вложенного дропдауна относительно текущего элемента
     * @default right
     */
    placement?: Placement;
    /**
     * Список дочерних items
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
     * Classname для item
     */
    className?: string;
};

export type ItemOptionTransformed = ItemOption & { parent?: ItemOption | null };

export type ItemProps = {
    item: ItemOptionTransformed;
    currentLevel: number;
    index: number;
    path: PathState;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaLevel?: React.AriaAttributes['aria-level'];
    ariaLabel?: React.AriaAttributes['aria-label'];
};
