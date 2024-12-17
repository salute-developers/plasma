import type { PopupPlacement } from '../Popup.types';

export const getRatioBasedOnPlacement = (placement: PopupPlacement): [number, number] => {
    switch (placement) {
        case 'center': {
            return [2, 2];
        }

        case 'top':
        case 'bottom': {
            return [2, 1];
        }

        case 'left':
        case 'right': {
            return [1, 2];
        }

        case 'top-left':
        case 'top-right':
        case 'bottom-left':
        case 'bottom-right': {
            return [1, 1];
        }

        default: {
            return [2, 2];
        }
    }
};
