import type { KeyboardEvent, MutableRefObject } from 'react';

import type { ValueToItemMapType } from '../../hooks/usePathMaps';
import type { DefaultValueType, MergedSelectProps, RequiredProps } from '../../Select.types';
import type { HintProps } from '../../../TextField/TextField.types';
import type { MergedDropdownNodeTransformed } from '../Inner/ui/Item/Item.types';

export type TargetProps = Pick<
    MergedSelectProps,
    | 'size'
    | 'view'
    | 'label'
    | 'labelPlacement'
    | 'keepPlaceholder'
    | 'placeholder'
    | 'contentLeft'
    | 'disabled'
    | 'readOnly'
    | 'renderValue'
    | 'multiselect'
    | 'helperText'
    | 'isTargetAmount'
    | 'chipView'
    | 'chipType'
> & {
    value: DefaultValueType;
    opened: boolean;
    valueToItemMap: ValueToItemMapType;
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    selectProps: MergedSelectProps;
    inputWrapperRef: MutableRefObject<HTMLDivElement>;
    treeId: string;
    activeDescendantItemValue: string;
    onChange: (newValue: string | number | Array<string | number>, item?: MergedDropdownNodeTransformed | null) => void;
    requiredProps: RequiredProps | undefined;
    hintProps: HintProps | undefined;
    separator?: string;
};
