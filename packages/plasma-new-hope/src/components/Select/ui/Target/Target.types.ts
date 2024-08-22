import type { KeyboardEvent } from 'react';

import type { ValueToItemMapType, FocusedToValueMapType } from '../../hooks/usePathMaps';
import { FocusedChipIndexState, FocusedPathState } from '../../reducers';
import type { MergedSelectProps } from '../../Select.types';

export type TargetProps = Pick<
    MergedSelectProps,
    'size' | 'label' | 'labelPlacement' | 'placeholder' | 'contentLeft' | 'disabled' | 'renderValue'
> & {
    value: string | string[];
    opened: boolean;
    valueToItemMap: ValueToItemMapType;
    onChipClick: (value: string) => void;
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    focusedChipIndex: FocusedChipIndexState;
    focusedPath: FocusedPathState;
    focusedToValueMap: FocusedToValueMapType;
    selectProps: MergedSelectProps;
    separator?: string;
};
