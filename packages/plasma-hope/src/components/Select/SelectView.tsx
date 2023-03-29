import React, { useMemo, forwardRef, HTMLAttributes } from 'react';
import type { FieldProps as BaseProps, DisabledProps } from '@salutejs/plasma-core';

import { SelectDropdownProps } from './SelectDropdown';
import { SelectButtonProps, SelectRefElement } from './SelectButton';
import { SelectView as SelectViewWeb } from './views/web/SelectView';
import { SelectView as SelectViewB2C } from './views/b2c/SelectView';
import { Design } from './types';

export interface FieldProps extends BaseProps, DisabledProps, HTMLAttributes<HTMLLabelElement> {}

export interface SelectViewProps
    extends Pick<FieldProps, 'status' | 'placeholder' | 'helperText' | 'disabled'>,
        Pick<SelectDropdownProps, 'items' | 'onItemSelect'>,
        Omit<SelectButtonProps, 'hasItems' | 'isExpanded' | 'onChange'> {
    /**
     * Выбор нескольких значений.
     */
    multiselect?: boolean;
}

const componentsMap = {
    web: SelectViewWeb,
    b2c: SelectViewB2C,
};

/**
 * Поле с выпадающим списком.
 */
export const SelectView = forwardRef<SelectRefElement, SelectViewProps & Design>((props, ref) => {
    const { design } = props;
    const SelectViewBase = useMemo(() => componentsMap[design], [design]);

    return <SelectViewBase {...props} ref={ref} />;
});
