import type { ItemOption, SelectValue, SelectProps } from '../Select.types';

export const hasOuterValue = <K extends ItemOption>(
    value: SelectProps<K>['value'] | null | undefined,
): value is SelectValue => {
    return value !== null && value !== undefined;
};
