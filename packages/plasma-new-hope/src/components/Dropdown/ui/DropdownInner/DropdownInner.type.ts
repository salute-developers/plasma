import type { Dispatch, RefObject } from 'react';

import type { DropdownProps, DropdownItemOption } from '../../Dropdown.types';
import type { PathState, PathAction } from '../../reducers/pathReducer';

export interface DropdownInnerProps {
    item: DropdownItemOption;
    currentLevel: number;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
    trigger: DropdownProps['trigger'];
    listWidth: DropdownProps['listWidth'];
    portal: RefObject<HTMLElement>;
}
