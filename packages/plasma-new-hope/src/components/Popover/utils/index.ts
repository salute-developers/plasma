import type { Placement } from '@popperjs/core';

import type { PopoverPlacement } from '../Popover.types';

export const ESCAPE_KEYCODE = 27;

export const getPlacement = (placement: PopoverPlacement) => {
    return `${placement}-start` as Placement;
};

export const getAutoPlacements = (placements?: PopoverPlacement[]) => {
    return (placements || []).map((placement) => getPlacement(placement));
};
