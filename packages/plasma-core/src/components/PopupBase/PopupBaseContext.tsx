import React, { ReactNode, useEffect } from 'react';

export interface PopupInfo {
    id: string;
    info?: Object;
}

export const POPOVER_PORTAL_ID = 'plasma-popup-root';

const items: PopupInfo[] = [];

export interface PopupContextType {
    items: PopupInfo[];
    register: (info: PopupInfo) => void;
    unregister: (id: string) => void;
}

const PopupBaseContext = React.createContext<PopupContextType>({
    items,
    register(_info: PopupInfo): void {
        throw new Error('Function not implemented.');
    },
    unregister(_id: string): void {
        throw new Error('Function not implemented.');
    },
});

export const usePopupBaseContext = () => React.useContext(PopupBaseContext);

export const PopupBaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = React.useState<PopupInfo[]>([]);

    const register = (info: PopupInfo) => {
        const updatedItems = [...items];
        updatedItems.push(info);
        setItems(updatedItems);
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

    return <PopupBaseContext.Provider value={context}>{children}</PopupBaseContext.Provider>;
};
