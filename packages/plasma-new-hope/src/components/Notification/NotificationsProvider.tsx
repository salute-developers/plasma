import React, { FC, ReactNode, RefAttributes } from 'react';
import { StoreContext } from 'storeon/react';

import { ComponentConfig } from '../../engines';
import { PropsType, Variants } from '../../engines/types';

import { NotificationsStore } from './NotificationsStore';
import { NotificationsPortal } from './NotificationsPortal';
import { NotificationProps } from './Notification.types';

export const NotificationsProvider: FC<{
    children: ReactNode;
    config: ComponentConfig<string, Variants, PropsType<Variants>, NotificationProps & RefAttributes<HTMLDivElement>>;
    frame?: string;
}> = ({ children, config, frame }) => {
    return (
        <StoreContext.Provider value={NotificationsStore}>
            {children}
            <NotificationsPortal frame={frame} config={config} />
        </StoreContext.Provider>
    );
};
