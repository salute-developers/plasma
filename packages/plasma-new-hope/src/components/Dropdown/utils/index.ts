import type { PopoverPlacementBasic } from '../../Popover';
import type { DropdownPlacement, DropdownPlacementBasic } from '../Dropdown.types';

export const getPlacement = (placement: DropdownPlacement) => {
    return `${placement}-start` as PopoverPlacementBasic;
};

export const getPlacements = (placements?: DropdownPlacement | DropdownPlacementBasic[]) => {
    if (!placements) {
        return;
    }
    const isArray = Array.isArray(placements);

    if (!isArray) {
        return getPlacement(placements as DropdownPlacement);
    }
    return ((placements || []) as DropdownPlacementBasic[]).map((placement) => getPlacement(placement));
};
