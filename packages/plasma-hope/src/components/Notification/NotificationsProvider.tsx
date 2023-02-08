import React, { ReactNode } from 'react';
import { StoreContext } from 'storeon/react';

import { NotificationsStore } from './NotificationsStore';
import { NotificationsPortal } from './NotificationsPortal';

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <StoreContext.Provider value={NotificationsStore}>
            {children}
            <NotificationsPortal />
        </StoreContext.Provider>
    );
};
