import { createContext, useContext } from 'react';

import type { AddNotification, CloseNotification } from './NotificationsStore';

export type NotificationsContextValue = {
    addNotification: AddNotification;
    closeNotification: CloseNotification;
};

export const NotificationsContext = createContext<NotificationsContextValue | null>(null);

export const useNotifications = () => {
    const context = useContext(NotificationsContext);

    if (!context) {
        throw new Error('useNotifications must be used within a NotificationsProvider');
    }

    return context;
};
