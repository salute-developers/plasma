import type { ItemOption, Value, ComboboxProps } from '../Combobox.types';

export const hasOuterValue = <K extends ItemOption>(
    value: ComboboxProps<K>['value'] | null | undefined,
): value is Value => {
    return value !== null && value !== undefined;
};
