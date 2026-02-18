import type { Dispatch, RefObject } from 'react';

import type { PathAction, PathState } from '../../reducers';
import type { SelectProps } from '../../Select.types';

import type { MergedDropdownNodeTransformed } from './ui/Item/Item.types';

export type InnerProps = {
    item: MergedDropdownNodeTransformed;
    currentLevel: number;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
    listWidth: SelectProps['listWidth'];
    shift: SelectProps['shift'];
    flip: SelectProps['flip'];
    portal?: RefObject<HTMLElement>;
};
