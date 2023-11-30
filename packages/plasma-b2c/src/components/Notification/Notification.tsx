import React, { ReactNode } from 'react';
import {
    noticationConfig,
    NotificationsProvider as Provider,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Notification.config';

const mergedConfig = mergeConfig(noticationConfig, config);

export const Notification = component(mergedConfig);

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
