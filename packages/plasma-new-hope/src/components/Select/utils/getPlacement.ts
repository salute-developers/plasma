import { AlignedPlacement, Placement } from '@floating-ui/react';

import type { FloatingPopoverProps } from '../Select.types';

export const getPlacement = (placement: NonNullable<FloatingPopoverProps['placement']>): Placement | undefined => {
    if (placement instanceof Array) {
        return undefined;
    }

    return `${placement}-start` as AlignedPlacement;
};
