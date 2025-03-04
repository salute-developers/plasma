import { AlignedPlacement, Placement } from '@floating-ui/react';

import type { FloatingPopoverProps } from '../Select.types';

export const getFallbackPlacements = (
    placement: NonNullable<FloatingPopoverProps['placement']>,
): Placement[] | undefined => {
    if (placement instanceof Array) {
        return placement.map((p) => `${p}-start`) as AlignedPlacement[];
    }

    return undefined;
};
