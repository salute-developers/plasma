import type { WheelItem, WheelItemValue } from './Wheel.types';

export const normalizeIndex = (index: number, length: number) => ((index % length) + length) % length;

/** Поиск доступной опции ограничен длиной списка, включая зацикленные столбцы. */
export const findNextIndex = (items: readonly WheelItem[], index: number, direction: number, loop: boolean): number => {
    for (let step = 1; step <= items.length; step++) {
        const next = index + step * direction;
        if (!loop && (next < 0 || next >= items.length)) {
            return index;
        }

        const normalized = normalizeIndex(next, items.length);
        if (!items[normalized].disabled) {
            return normalized;
        }
    }

    return index;
};

export const getSelectedIndex = (items: readonly WheelItem[], value: WheelItemValue | undefined) => {
    const index = items.findIndex((item) => item.value === value);
    return index >= 0 ? index : items.findIndex((item) => !item.disabled);
};

export const getItemText = (item: WheelItem) => item.textValue ?? String(item.label);
