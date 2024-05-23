import type { ReactNode } from 'react';

import type { PathState } from '../../../../reducers';

export type ItemOption = {
    value: string | number;
    label: string;
    items?: Array<ItemOption>;
    disabled?: boolean;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    isActive?: boolean;
    color?: string;
    isDisabled?: boolean;
};

export type ItemOptionTransformed = ItemOption & { parent?: ItemOption | null };

export interface ItemProps {
    item: ItemOptionTransformed;
    currentLevel: number;
    index: number;
    path: PathState;
}
