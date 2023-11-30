import React, { ReactNode } from 'react';

import { noticationConfig, NotificationsProvider as Provider } from '../../../../components/Notification';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Notification.config';

export { modalClasses } from '../../../../components/Modal';

const mergedConfig = mergeConfig(noticationConfig, config);

export const Notification = component(mergedConfig);

export const NotificationsProvider: React.FC<{ children: ReactNode; frame?: string }> = ({
    children,
    frame = 'theme-root',
}) => {
    return (
        <Provider config={mergedConfig} frame={frame}>
            {children}
        </Provider>
    );
};
