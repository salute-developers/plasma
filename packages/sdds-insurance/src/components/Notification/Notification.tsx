import React, { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import {
    component,
    mergeConfig,
    noticationConfig,
    NotificationProps,
    NotificationsProvider as Provider,
    NotificationIconPlacement,
    NotificationLayout,
    addNotification,
    closeNotification,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Notification.config';

export { modalClasses } from '../Modal';

const mergedConfig = mergeConfig(noticationConfig, config);

export const Notification = component(mergedConfig) as ForwardRefExoticComponent<
    NotificationProps & RefAttributes<HTMLDivElement>
>;

export const NotificationsProvider: React.FC<{ children: ReactNode; frame?: string }> = ({
    children,
    frame = 'document',
}) => {
    return (
        <Provider config={mergedConfig} frame={frame}>
            {children}
        </Provider>
    );
};

export type { NotificationIconPlacement, NotificationLayout, NotificationProps };
export { addNotification, closeNotification };
