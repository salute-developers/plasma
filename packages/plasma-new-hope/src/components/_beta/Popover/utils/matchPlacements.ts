import { Placement as ResizablePlacement } from '../../../_Resizable/Resizable.types';
import { PopoverProps } from '../Popover.types';

export const matchPlacements = (placement: PopoverProps['placement']): ResizablePlacement => {
    switch (placement) {
        case 'top':
            return 'top';

        case 'right':
            return 'right';

        case 'bottom':
            return 'bottom';

        case 'left':
            return 'left';

        case 'top-start':
        case 'left-start':
            return 'top-left';

        case 'top-end':
        case 'right-start':
            return 'top-right';

        case 'right-end':
        case 'bottom-end':
            return 'bottom-right';

        case 'bottom-start':
        case 'left-end':
            return 'bottom-left';

        default:
            return 'center';
    }
};
