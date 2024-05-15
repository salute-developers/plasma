import type { Dispatch } from 'react';

import type { ItemOptionTransformed } from '../Item/Item.types';
import type { PathAction, PathState } from '../../reducers';

export interface SelectInnerProps {
    item: ItemOptionTransformed;
    currentLevel: number;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
}
