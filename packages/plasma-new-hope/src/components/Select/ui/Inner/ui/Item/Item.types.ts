import type { ReactNode, CSSProperties } from 'react';
import React from 'react';

import type { PathState } from '../../../../reducers';
import type { SelectPlacement, SelectPlacementBasic } from '../../../../Select.types';

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
     * Сторона открытия вложенного выпадающего списка относительно текущего элемента
     * @default right
     */
    placement?: SelectPlacement | Array<SelectPlacementBasic>;
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
    /**
     * Максимальная высота дочернего выпадающего списка.
     */
    listMaxHeight?: CSSProperties['height'];
};

export type ItemOptionTransformed = ItemOption & { parent?: ItemOption | null };

export type ItemProps = {
    item: MergedDropdownNodeTransformed;
    currentLevel: number;
    index: number;
    path: PathState;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaLevel?: React.AriaAttributes['aria-level'];
    ariaLabel?: React.AriaAttributes['aria-label'];
};

export type MergedDropdownNode = {
    value: string | number;
    label: string;
    /**
     * Сторона открытия вложенного выпадающего списка относительно target элемента.
     * @default bottom
     */
    placement?: SelectPlacement | Array<SelectPlacementBasic>;
    items?: MergedDropdownNode[];
    /**
     * @deprecated
     */
    isActive?: boolean;
    /**
     * @deprecated Использовать disabled
     */
    isDisabled?: boolean;
    /**
     * @deprecated
     */
    color?: string;
    contentLeft?: React.ReactNode;

    disabled?: boolean;
    contentRight?: ReactNode;
    /**
     * Classname для item
     */
    className?: string;
    /**
     * Максимальная высота дочернего выпадающего списка.
     */
    listMaxHeight?: CSSProperties['height'];
};

export type MergedDropdownNodeTransformed = MergedDropdownNode & { parent?: MergedDropdownNode | null };
