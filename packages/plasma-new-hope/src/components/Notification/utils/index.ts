import { classes } from '../Notification.tokens';
import { layouts } from '../Notification.types';

export const getLayoutClass = (layout?: string) => {
    if (!layout) return undefined;
    if (layout === layouts.horizontal) return classes.horizontal;
    return classes.vertical;
};
