import type { KeyboardEvent } from 'react';

import type { ValueToItemMapType, FocusedToValueMapType } from '../../hooks/usePathMaps';
import type { SelectProps } from '../../Select.types';
import { FocusedChipIndexState, FocusedPathState } from '../../reducers';

export type TargetProps = Pick<
    SelectProps,
    | 'size'
    | 'multiselect'
    | 'isTargetAmount'
    | 'target'
    | 'label'
    | 'labelPlacement'
    | 'placeholder'
    | 'contentLeft'
    | 'disabled'
    | 'renderValue'
> & {
    value: string | string[];
    opened: boolean;
    valueToItemMap: ValueToItemMapType;
    onChipClick: (value: string) => void;
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    focusedChipIndex: FocusedChipIndexState;
    focusedPath: FocusedPathState;
    focusedToValueMap: FocusedToValueMapType;
};
