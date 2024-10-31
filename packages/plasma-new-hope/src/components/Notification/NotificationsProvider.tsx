import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { StoreContext } from 'storeon/react';

import { ComponentConfig } from '../../engines';
import { PropsType, Variants } from '../../engines/types';

import { NotificationsStore } from './NotificationsStore';
import { NotificationsPortal } from './NotificationsPortal';
import { NotificationPlacement, NotificationProps } from './Notification.types';

export const NotificationsProvider: FC<{
    children: ReactNode;
    config: ComponentConfig<string, Variants, PropsType<Variants>, NotificationProps & HTMLAttributes<HTMLDivElement>>;
    frame?: string;
    placement?: NotificationPlacement;
}> = ({ children, config, frame, placement }) => {
    return (
        <StoreContext.Provider value={NotificationsStore}>
            {children}
            <NotificationsPortal frame={frame} placement={placement} config={config} />
        </StoreContext.Provider>
    );
};
