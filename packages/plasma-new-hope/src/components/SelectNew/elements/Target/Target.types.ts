import type { KeyboardEvent } from 'react';

import { FocusedChipIndexState } from '../../reducers';
import { SelectNewProps } from '../../SelectNew.types';

export type TargetProps = Pick<
    SelectNewProps,
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
    valueToItemMap: any;
    onChipClick: (value: string) => void;
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    focusedChipIndex: FocusedChipIndexState;
};
