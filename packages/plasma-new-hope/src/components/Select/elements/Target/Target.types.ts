import type { KeyboardEvent } from 'react';

import type { ValueToItemMapType } from '../../hooks/usePathMaps';
import type { SelectProps } from '../../Select.types';
import { FocusedChipIndexState } from '../../reducers';

export type TargetProps = Pick<
    SelectProps,
    | 'value'
    | 'size'
    | 'multiselect'
    | 'isTargetAmount'
    | 'target'
    | 'label'
    | 'labelPlacement'
    | 'placeholder'
    | 'contentLeft'
    | 'disabled'
    | 'renderTargetLabel'
> & {
    opened: boolean;
    valueToItemMap: ValueToItemMapType;
    onChipClick: (value: string) => void;
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    focusedChipIndex: FocusedChipIndexState;
};
