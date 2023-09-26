import React, { ReactNode, useEffect } from 'react';

export interface PopupInfo {
    id: string;
    isModal?: true;
    onOverlayClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Хранилище модальных окон.
 */
class PopupBaseController {
    public items: PopupInfo[] = [];

    public register(info: PopupInfo) {
        return this.items.push(info);
    }

    public unregister(id: string) {
        const index = this.items.findIndex((item: PopupInfo) => id === item.id);
        if (index === -1) {
            return;
        }
        this.items.splice(index, 1);
    }

    getLastModal() {
        const modals = this.items.filter((item: PopupInfo) => item.isModal);
        return modals && modals[modals.length - 1];
    }

    public getIdLastModal() {
        return this.getLastModal()?.id;
    }

    public callCurrentModalClose(event: React.MouseEvent<HTMLDivElement>) {
        this.getLastModal()?.onOverlayClick?.(event);
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
