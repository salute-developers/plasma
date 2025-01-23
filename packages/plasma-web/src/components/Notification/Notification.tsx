import React, { ReactNode } from 'react';
import {
    NotificationPlacement,
    notificationConfig,
    NotificationsProvider as Provider,
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
    UNSAFE_SSR_ENABLED?: boolean;
}> = ({ children, frame = 'document', placement, UNSAFE_SSR_ENABLED }) => {
    return (
        <Provider config={mergedConfig} frame={frame} placement={placement} UNSAFE_SSR_ENABLED={UNSAFE_SSR_ENABLED}>
            {children}
        </Provider>
    );
};
