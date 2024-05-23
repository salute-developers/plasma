import type { Dispatch } from 'react';

import type { PathAction, PathState } from '../../reducers';

import type { ItemOptionTransformed } from './elements/Item/Item.types';

export interface InnerProps {
    item: ItemOptionTransformed;
    currentLevel: number;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
}
