import React, { ForwardRefExoticComponent, HTMLAttributes, ReactNode } from 'react';

import {
    notificationConfig,
    NotificationProps,
    NotificationsProvider as Provider,
    NotificationPlacement,
} from '../../../components/Notification';
import { component, mergeConfig } from '../../../engines';

import { config } from './Notification.config';

export { modalClasses } from '../../../components/Modal';

const mergedConfig = mergeConfig(notificationConfig, config);

export const Notification = component(mergedConfig) as ForwardRefExoticComponent<
    NotificationProps & HTMLAttributes<HTMLDivElement>
>;

export type { NotificationPlacement };

export const NotificationsProvider: React.FC<{
    children: ReactNode;
    frame?: string;
    placement?: NotificationPlacement;
}> = ({ children, frame = 'theme-root', placement }) => {
    return (
        <Provider config={mergedConfig} frame={frame} placement={placement}>
            {children}
        </Provider>
    );
};
