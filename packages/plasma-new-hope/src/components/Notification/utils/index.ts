import { classes } from '../Notification.tokens';
import { NotificationLayout } from '../Notification.types';

export const getLayoutClass = (layout?: NotificationLayout) => {
    if (!layout) {
        return undefined;
    }

    return classes[layout];
};
