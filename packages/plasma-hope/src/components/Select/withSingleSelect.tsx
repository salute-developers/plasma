import React, { forwardRef, useCallback, useMemo } from 'react';
import type { ComponentType, RefAttributes } from 'react';

import { DropdownItem } from '../Dropdown/Dropdown.types';

import { flattenItemsRecursive, setActiveRecursive } from './Select.utils';
import type { SelectRefElement } from './SelectButton';
import type { SelectViewProps } from './SelectView';
import { Design } from './types';

export interface SingleSelectProps extends Omit<SelectViewProps, 'onItemClick' | 'value' | 'label' | 'multiselect'> {
    /**
     * Значение control.
     */
    value: string | number | null;
    /**
     * Обработчик изменения значения.
     */
    onChange?: (value: string | number | null) => void;
}

/**
 * Выпадающий список с возможностью выбора одного значения.
 */
export const withSingleSelect = (View: ComponentType<SelectViewProps & Design & RefAttributes<SelectRefElement>>) =>
    forwardRef<SelectRefElement, SingleSelectProps & Design>(
        ({ value, items = [], onChange, design, ...rest }, ref) => {
            const isActive = useCallback((item: DropdownItem) => item.value === value, [value]);

            const viewValue = useMemo(() => flattenItemsRecursive(items).find(isActive)?.label ?? '', [
                value,
                items,
                isActive,
            ]);

            const viewItems = useMemo(() => setActiveRecursive(items, isActive), [value, items, isActive]);

            const onItemSelect = useCallback((item: DropdownItem) => onChange?.(item.value), [onChange]);

            return (
                <View
                    design={design}
                    ref={ref}
                    value={viewValue}
                    items={viewItems}
                    onItemSelect={onItemSelect}
                    {...rest}
                />
            );
        },
    );
