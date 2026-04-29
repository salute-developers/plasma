import type { Dispatch, RefObject } from 'react';

import type { PathAction, PathState } from '../../reducers';
import type { SelectProps, ItemOption } from '../../Select.types';

export type InnerProps = {
    item: ItemOption;
    currentLevel: number;
    path: PathState;
    dispatchPath: Dispatch<PathAction>;
    index: number;
    listWidth: SelectProps['listWidth'];
    shift: SelectProps['shift'];
    flip: SelectProps['flip'];
    portal?: RefObject<HTMLElement>;
};
