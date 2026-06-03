import { useLayoutEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { isEmpty } from 'src/utils';

import { updateDescendants, syncCheckedState } from '../utils';
import type { ComboboxProps, ItemOption, ItemOptionTransformed, Value } from '../Combobox.types';

import type { ValueToCheckedMapType, ValueToItemMapType } from './usePathMaps';

type Props = {
    multiple: ComboboxProps['multiple'];
    mode: NonNullable<ComboboxProps['mode']>;
    value: Value;
    valueToCheckedMap: ValueToCheckedMapType;
    valueToItemMap: ValueToItemMapType;
    closeAfterSelect: boolean;
    handleChange: (newValue: Value, item: ItemOption | null) => void;
    resetListState: () => void;
};

export const useCheckedState = ({
    multiple,
    mode,
    value,
    valueToCheckedMap,
    valueToItemMap,
    closeAfterSelect,
    handleChange,
    resetListState,
}: Props) => {
    const [checked, setChecked] = useState(valueToCheckedMap);

    const handleCheckboxChange = (item: ItemOptionTransformed) => {
        if (!multiple) {
            return;
        }

        const checkedCopy = new Map(checked);

        switch (checkedCopy.get(item.value)) {
            case 'indeterminate': {
                updateDescendants(item, checkedCopy, true, valueToItemMap);
                break;
            }

            case true: {
                updateDescendants(item, checkedCopy, false, valueToItemMap);
                checkedCopy.set(item.value, false);
                break;
            }

            case false: {
                updateDescendants(item, checkedCopy, true, valueToItemMap);
                checkedCopy.set(item.value, true);
                break;
            }

            default: {
                break;
            }
        }

        const newValues: string[] = [];

        valueToItemMap.forEach((currentItem, currentValue) => {
            if (checkedCopy.get(currentValue)) {
                newValues.push(currentItem.value);
            }
        });

        if (Array.isArray(value)) {
            value.forEach((currentValue) => {
                if (!valueToItemMap.has(currentValue)) {
                    newValues.push(currentValue);
                }
            });
        }

        if (closeAfterSelect) {
            resetListState();
        }

        handleChange(newValues, item);
    };

    const handleItemClick = (item: ItemOptionTransformed, event?: MouseEvent<HTMLElement>) => {
        if (!isEmpty(item?.items)) {
            return;
        }

        if (multiple) {
            handleCheckboxChange(item);
            return;
        }

        event?.stopPropagation();

        const isCurrentChecked = checked.get(item.value);

        if (closeAfterSelect) {
            resetListState();
        }

        if (mode === 'radio' && isCurrentChecked) {
            return;
        }

        handleChange(isCurrentChecked ? '' : item.value, item);
    };

    const handlePressDown = (item: ItemOptionTransformed, event?: MouseEvent<HTMLElement>) => {
        if (isEmpty(item.items)) {
            handleItemClick(item, event);
            return;
        }

        if (multiple) {
            handleCheckboxChange(item);
        }
    };

    useLayoutEffect(() => {
        setChecked(syncCheckedState(value, valueToCheckedMap, valueToItemMap));
    }, [value, valueToCheckedMap, valueToItemMap]);

    return {
        checked,
        handleCheckboxChange,
        handleItemClick,
        handlePressDown,
    };
};
