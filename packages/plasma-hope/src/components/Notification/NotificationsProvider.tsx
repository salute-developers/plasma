import React, { ReactNode } from 'react';
import { StoreContext } from 'storeon/react';

import { NotificationsStore } from './NotificationsStore';
import { NotificationsPopup } from './NotificationsPopup';

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <StoreContext.Provider value={NotificationsStore}>
            {children}
            <NotificationsPopup />
        </StoreContext.Provider>
    );
};
