import React, { createContext, useEffect, useState, useContext, FC, PropsWithChildren } from 'react';

import type { PopupContextType, PopupInfo } from './Popup.types';

export const POPUP_PORTAL_ID = 'plasma-popup-root';

const items: PopupInfo[] = [];

const PopupContext = createContext<PopupContextType>({
    items,
    register(_info: PopupInfo): void {
        throw new Error('Function not implemented. Add PopupProvider');
    },
    unregister(_id: string): void {
        throw new Error('Function not implemented. Add PopupProvider');
    },
});

export const usePopupContext = () => useContext(PopupContext);

export const PopupProvider: FC<PropsWithChildren> = ({ children }) => {
    const [items, setItems] = useState<PopupInfo[]>([]);

    const register = (info: PopupInfo) => {
        setItems([...items, info]);
    };

    const unregister = (id: string) => {
        const index = items.findIndex((item: PopupInfo) => id === item.id);

        if (index === -1) {
            return;
        }

        items.splice(index, 1);
        setItems([...items]);
    };

    const context = {
        items,
        register,
        unregister,
    };

    useEffect(() => {
        return () => {
            const portal = document.createElement('div');
            if (portal && document.body.contains(portal)) {
                document.body.removeChild(portal);
            }
        };
    }, []);

    return <PopupContext.Provider value={context}>{children}</PopupContext.Provider>;
};
