import React, { ReactNode, useEffect } from 'react';

/**
 * Хранилище модальных окон.
 */
class PopupController {
    public items: string[] = [];

    public register(id: string) {
        return this.items.push(id);
    }

    public unregister(id: string) {
        this.items.splice(this.items.indexOf(id), 1);
    }
}

const controller = new PopupController();

export const MODALS_PORTAL_ID = 'plasma-popup-root';

export const PopupContext = React.createContext(controller);

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
        return () => {
            const portal = document.createElement('div');
            if (portal && document.body.contains(portal)) {
                document.body.removeChild(portal);
            }
        };
    }, []);

    return <PopupContext.Provider value={controller}>{children}</PopupContext.Provider>;
};
