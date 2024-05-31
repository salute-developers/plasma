import { PopoverPlacementBasic } from '../components/Popover';

export type PlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type Placement = PlacementBasic | 'auto';

export const getPlacement = (placement: Placement) => {
    return `${placement}-start` as PopoverPlacementBasic;
};

export const getPlacements = (placements?: Placement | PlacementBasic[]) => {
    if (!placements) {
        return;
    }
    const isArray = Array.isArray(placements);

    if (!isArray) {
        return getPlacement(placements as Placement);
    }
    return ((placements || []) as PlacementBasic[]).map((placement) => getPlacement(placement));
};
