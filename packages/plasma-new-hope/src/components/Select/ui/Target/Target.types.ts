import type { KeyboardEvent, Ref } from 'react';

import type { ValueToItemMapType } from '../../hooks/usePathMaps';
import type { SelectProps, RequiredProps, HintProps, ItemOption, SelectValue } from '../../Select.types';

export type TargetProps = {
    target: SelectProps['target'];
    renderTarget: SelectProps['renderTarget'];
    size: SelectProps['size'];
    view: SelectProps['view'];
    label: SelectProps['label'];
    labelPlacement: SelectProps['labelPlacement'];
    keepPlaceholder: SelectProps['keepPlaceholder'];
    placeholder: SelectProps['placeholder'];
    contentLeft: SelectProps['contentLeft'];
    contentRight: SelectProps['contentRight'];
    disabled: SelectProps['disabled'];
    readOnly: SelectProps['readOnly'];
    renderValue: SelectProps['renderValue'];
    multiselect: SelectProps['multiselect'];
    helperText: SelectProps['helperText'];
    isTargetAmount: SelectProps['isTargetAmount'];
    chipView: SelectProps['chipView'];
    chipType: SelectProps['chipType'];
    chipClickArea: SelectProps['chipClickArea'];
    value: SelectValue;
    opened: boolean;
    valueToItemMap: ValueToItemMapType;
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    inputWrapperRef: Ref<HTMLElement>;
    treeId: string;
    activeDescendantItemValue: string;
    handleChange: (newValue: SelectValue, item: ItemOption | null) => void;
    requiredProps: RequiredProps | undefined;
    hintProps: HintProps | undefined;
};
