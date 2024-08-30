import React, { createContext, useEffect, useState, useContext, FC, PropsWithChildren, useRef } from 'react';

import { hasModals } from '../Modal/ModalContext';

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
    const prevBodyOverflowY = useRef(typeof document !== 'undefined' ? document.body.style.overflowY : '');
    const [items, setItems] = useState<PopupInfo[]>([]);

    const register = (info: PopupInfo) => {
        setItems((prevItems) => {
            if (info.info?.isModal && !hasModals(prevItems)) {
                prevBodyOverflowY.current = document.body.style.overflowY;
                document.body.style.overflowY = 'hidden';
            }

            return [...prevItems, info];
        });
    };

    const unregister = (id: string) => {
        setItems((prevItems) => {
            const index = prevItems.findIndex((item: PopupInfo) => id === item.id);

            if (index === -1) {
                return prevItems;
            }

            const prevHasModals = hasModals(prevItems);
            prevItems.splice(index, 1);

            if (prevHasModals && !hasModals(prevItems)) {
                document.body.style.overflowY = prevBodyOverflowY.current;
            }

            // при return prevItems не обновится контекст
            return [...prevItems];
        });
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
