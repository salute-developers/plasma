import type { DropdownProps, PlacementType } from '../Dropdown.types';

export const getPlacement = (placement: DropdownProps['placement']): PlacementType => {
    if (!placement) {
        return 'bottom-start';
    }

    if (placement === 'auto') {
        return placement;
    }

    return `${placement}-start` as PlacementType;
};
