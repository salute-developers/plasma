import type { PopupPlacement } from '../Popup.types';

// Горизонтальный и вертикальный множитель ресайза.
type ReturnType = [number, number];

export const getRatioBasedOnPlacement = (placement: PopupPlacement): ReturnType => {
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
