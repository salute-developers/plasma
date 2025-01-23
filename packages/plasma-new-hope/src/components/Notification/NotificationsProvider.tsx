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
    /**
     * @description Только для применения в рамках SSR.
     */
    UNSAFE_SSR_ENABLED?: boolean;
}> = ({ children, config, frame, placement, UNSAFE_SSR_ENABLED }) => {
    return (
        <StoreContext.Provider value={NotificationsStore}>
            {children}
            <NotificationsPortal
                frame={frame}
                placement={placement}
                config={config}
                UNSAFE_SSR_ENABLED={UNSAFE_SSR_ENABLED}
            />
        </StoreContext.Provider>
    );
};
