import type { Dispatch } from 'react';

import type { PathAction, PathState } from '../../reducers';
import type { ComboboxProps } from '../../Combobox.types';

import type { ItemOptionTransformed } from './ui/Item/Item.types';

export type InnerProps = {
    item: ItemOptionTransformed;
    currentLevel: number;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
    listWidth: ComboboxProps['listWidth'];
};
