import React, { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

import {
    noticationConfig,
    NotificationProps,
    NotificationsProvider as Provider,
} from '../../../../components/Notification';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Notification.config';

export { modalClasses } from '../../../../components/Modal';

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
