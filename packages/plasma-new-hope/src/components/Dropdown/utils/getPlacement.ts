import type { DropdownProps, PlacementType } from '../Dropdown.types';

const centerPlacements = {
    'top-center': 'top',
    'right-center': 'right',
    'bottom-center': 'bottom',
    'left-center': 'left',
} as const;

type CenterPlacement = keyof typeof centerPlacements;

const isCenterPlacement = (placement: string): placement is CenterPlacement => placement in centerPlacements;

export const getPlacement = (placement: DropdownProps['placement']): PlacementType => {
    if (!placement) {
        return 'bottom-start';
    }

    if (placement === 'auto' || placement.endsWith('-start') || placement.endsWith('-end')) {
        return placement as PlacementType;
    }

    if (isCenterPlacement(placement)) {
        return centerPlacements[placement];
    }

    return `${placement}-start` as PlacementType;
};
