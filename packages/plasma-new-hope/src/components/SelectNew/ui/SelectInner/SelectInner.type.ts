import type { SyntheticEvent, Dispatch } from 'react';

import type { SelectItemOption } from '../SelectItem/SelectItem.type';
import type { FocusedPathState } from '../../reducers/focusedPathReducer';
import type { PathState, PathAction } from '../../reducers/pathReducer';

export interface SelectInnerProps {
    item: SelectItemOption;
    currentLevel: number;
    focusedPath: FocusedPathState;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
    handleGlobalToggle: (opened: boolean, event: Event | SyntheticEvent<Element, Event>) => void;

    data: any;
    setData: any;
}
