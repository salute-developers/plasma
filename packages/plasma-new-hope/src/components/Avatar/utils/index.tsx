import { classes } from '../Avatar.tokens';

export { getInitialsForName } from './getInitialsForName';

export const extraPlacementMap = (extraPlacement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
    switch (extraPlacement) {
        case 'top-left':
            return classes.extraPlacementTopLeft;
        case 'bottom-left':
            return classes.extraPlacementBottomLeft;
        case 'bottom-right':
            return classes.extraPlacementBottomRight;
        default:
            return classes.extraPlacementTopRight;
    }
};
