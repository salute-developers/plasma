import { PopoverPlacementBasic } from '../components/Popover';

export type PlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type PlacementVariation =
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
export type Placement = PlacementBasic | PlacementVariation | 'auto';

export const getPlacement = (placement: Placement) => {
    return `${placement}-start` as PopoverPlacementBasic;
};

export const getPlacements = (placements?: Placement | PlacementBasic[], placeStartByDefault = true) => {
    if (!placements) {
        return;
    }
    const isArray = Array.isArray(placements);

    if (!isArray) {
        return placeStartByDefault ? getPlacement(placements as Placement) : placements;
    }
    return ((placements || []) as PlacementBasic[]).map((placement) => getPlacement(placement));
};
