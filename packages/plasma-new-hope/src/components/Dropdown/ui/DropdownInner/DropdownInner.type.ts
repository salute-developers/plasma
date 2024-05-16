import type { SyntheticEvent, Dispatch } from 'react';

import type { DropdownItemOption } from '../DropdownItem/DropdownItem.type';
import type { DropdownProps } from '../../Dropdown.types';
import type { FocusedPathState } from '../../reducers/focusedPathReducer';
import type { PathState, PathAction } from '../../reducers/pathReducer';

export interface DropdownInnerProps {
    item: DropdownItemOption;
    currentLevel: number;
    focusedPath: FocusedPathState;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
    trigger: DropdownProps['trigger'];
    itemRole: string;
    listHeight: DropdownProps['listHeight'];
    listOverflow: DropdownProps['listOverflow'];
    handleGlobalToggle: (opened: boolean, event: Event | SyntheticEvent<Element, Event>) => void;
    closeOnSelect: DropdownProps['closeOnSelect'];
    onHover: DropdownProps['onHover'];
    onItemSelect: DropdownProps['onItemSelect'];
    onItemClick: DropdownProps['onItemClick'];
    listWidth: DropdownProps['listWidth'];
    variant: DropdownProps['variant'];
    hasArrow: DropdownProps['hasArrow'];
}
