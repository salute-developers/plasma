import React, { ReactNode } from 'react';
import {
    notificationConfig,
    NotificationsProvider as Provider,
    NotificationPlacement,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Notification.config';

export type { NotificationPlacement };

const mergedConfig = mergeConfig(notificationConfig, config);

export const Notification = component(mergedConfig);

export const NotificationsProvider: React.FC<{
    children: ReactNode;
    frame?: string;
    placement?: NotificationPlacement;
}> = ({ children, frame = 'document', placement }) => {
    return (
        <Provider config={mergedConfig} frame={frame} placement={placement}>
            {children}
        </Provider>
    );
};
