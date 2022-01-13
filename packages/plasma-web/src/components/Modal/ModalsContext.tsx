import React, { useEffect } from 'react';

/**
 * Хранилище модальных окон.
 */
class ModalsController {
    public items: string[] = [];

    public register(id: string) {
        return this.items.push(id);
    }

    public unregister(id: string) {
        this.items.splice(this.items.indexOf(id), 1);
    }
}

const controller = new ModalsController();

export const MODALS_PORTAL_ID = 'plasma-modals-root';

export const ModalsContext = React.createContext(controller);

export const ModalsProvider: React.FC = ({ children }) => {
    useEffect(() => {
        return () => {
            const portal = document.createElement('div');
            if (portal && document.body.contains(portal)) {
                document.body.removeChild(portal);
            }
        };
    }, []);

    return <ModalsContext.Provider value={controller}>{children}</ModalsContext.Provider>;
};
