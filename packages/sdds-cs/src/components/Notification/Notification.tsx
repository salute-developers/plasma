import React, { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';
import {
    NotificationProps as NotificationPropsNewHope,
    NotificationDefaultArgs,
    NotificationPlacement,
    notificationConfig,
    NotificationsProvider as Provider,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/emotion';

import { config } from './Notification.config';

export type { NotificationPlacement };

const mergedConfig = mergeConfig(notificationConfig, config);

export const NotificationNewHope = component(mergedConfig);

type ConfigProps = 'size' | 'view' | 'layout' | 'closeIconType';
type NotificationProps = Pick<ComponentProps<typeof NotificationNewHope>, ConfigProps> &
    Omit<NotificationPropsNewHope, ConfigProps>;

export const Notification = NotificationNewHope as ForwardRefExoticComponent<NotificationProps>;

export const NotificationsProvider: React.FC<{
    children: ReactNode;
    frame?: string;
    placement?: NotificationPlacement;
    UNSAFE_SSR_ENABLED?: boolean;
    defaultNotificationArgs?: NotificationDefaultArgs<NotificationProps>;
}> = ({ children, frame = 'document', placement, UNSAFE_SSR_ENABLED, defaultNotificationArgs }) => {
    return (
        <Provider
            config={mergedConfig}
            frame={frame}
            placement={placement}
            UNSAFE_SSR_ENABLED={UNSAFE_SSR_ENABLED}
            defaultNotificationArgs={defaultNotificationArgs}
        >
            {children}
        </Provider>
    );
};
