import type { Dispatch } from 'react';

import type { DropdownItemOption } from '../DropdownItem/DropdownItem.type';
import type { DropdownProps } from '../../Dropdown.types';
import type { PathState, PathAction } from '../../reducers/pathReducer';

export interface DropdownInnerProps {
    item: DropdownItemOption;
    currentLevel: number;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
    trigger: DropdownProps['trigger'];
    listMaxHeight: DropdownProps['listHeight'];
    listOverflow: DropdownProps['listOverflow'];
    listWidth: DropdownProps['listWidth'];
}
