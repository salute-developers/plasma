import type { ReactNode } from 'react';
import React from 'react';

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
};

export type MergedDropdownNodeTransformed = MergedDropdownNode & { parent?: MergedDropdownNode | null };
