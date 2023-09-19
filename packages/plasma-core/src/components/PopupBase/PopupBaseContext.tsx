import React, { ReactNode, useEffect } from 'react';

/**
 * Хранилище модальных окон.
 */
class PopupBaseController {
    public items: string[] = [];

    public register(id: string) {
        return this.items.push(id);
    }

    public unregister(id: string) {
        this.items.splice(this.items.indexOf(id), 1);
    }
}

const controller = new PopupBaseController();

export const POPOVER_PORTAL_ID = 'plasma-popup-root';

export const PopupBaseContext = React.createContext(controller);

export const PopupBaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
        return () => {
            const portal = document.createElement('div');
            if (portal && document.body.contains(portal)) {
                document.body.removeChild(portal);
            }
        };
    }, []);

    return <PopupBaseContext.Provider value={controller}>{children}</PopupBaseContext.Provider>;
};
