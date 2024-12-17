import type { ResizeDirections } from '../Popup.types';

interface Directions {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    topRight?: boolean;
    bottomRight?: boolean;
    bottomLeft?: boolean;
    topLeft?: boolean;
}

export const getResizeDirections = (directions?: ResizeDirections): Directions => {
    if (!directions) {
        return {
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
        };
    }

    const result: Directions = {
        top: false,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
    };

    for (const dir of directions) {
        switch (dir) {
            case 'top':
                result.top = true;
                break;
            case 'right':
                result.right = true;
                break;
            case 'bottom':
                result.bottom = true;
                break;
            case 'left':
                result.left = true;
                break;
            case 'top-right':
                result.topRight = true;
                break;
            case 'top-left':
                result.topLeft = true;
                break;
            case 'bottom-right':
                result.bottomRight = true;
                break;
            case 'bottom-left':
                result.bottomLeft = true;
                break;
            default:
                break;
        }
    }

    return result;
};
