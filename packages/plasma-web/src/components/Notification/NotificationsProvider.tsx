import React, { PropsWithChildren } from 'react';
import { StoreContext } from 'storeon/react';

import { NotificationsStore } from './NotificationsStore';
import { NotificationsPortal } from './NotificationsPortal';

export const NotificationsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <StoreContext.Provider value={NotificationsStore}>
            {children}
            <NotificationsPortal />
        </StoreContext.Provider>
    );
};
