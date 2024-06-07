import type { Dispatch } from 'react';

import type { PathAction, PathState } from '../../reducers';
import type { SelectProps } from '../../Select.types';

import type { ItemOptionTransformed } from './elements/Item/Item.types';

export interface InnerProps {
    item: ItemOptionTransformed;
    currentLevel: number;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
    listWidth: SelectProps['listWidth'];
}
