import type { Dispatch, RefObject } from 'react';

import type { DropdownProps, ItemOption } from '../../Dropdown.types';
import type { PathState, PathAction } from '../../reducers/pathReducer';

export interface DropdownInnerProps {
    item: ItemOption;
    currentLevel: number;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
    trigger: DropdownProps['trigger'];
    listWidth: DropdownProps['listWidth'];
    portal: RefObject<HTMLElement>;
}
