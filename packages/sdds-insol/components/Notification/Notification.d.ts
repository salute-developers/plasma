import React, { ReactNode } from 'react';
import { NotificationProps, NotificationIconPlacement, NotificationPlacement, NotificationLayout, addNotification, closeNotification } from '@salutejs/plasma-new-hope/styled-components';
export { modalClasses } from '../Modal';
export declare const Notification: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLDivElement>>;
export declare const NotificationsProvider: React.FC<{
    children: ReactNode;
    frame?: string;
    placement?: NotificationPlacement;
}>;
export type { NotificationIconPlacement, NotificationPlacement, NotificationLayout, NotificationProps };
export { addNotification, closeNotification };
