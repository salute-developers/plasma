import React, { createContext, useState, useContext, FC, PropsWithChildren, useRef } from 'react';
import ReactDOM from 'react-dom';

import { hasModals } from '../Modal/ModalContext';

import type { PopupContextType, PopupInfo } from './Popup.types';
import { StyledPortal } from './Popup.styles';

export const POPUP_PORTAL_ID = 'plasma-popup-root';

const items: PopupInfo[] = [];

const PopupContext = createContext<PopupContextType>({
    items,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register(_info: PopupInfo): void {
        throw new Error('Function not implemented. Add PopupProvider');
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    unregister(_id: string): void {
        throw new Error('Function not implemented. Add PopupProvider');
    },
});

export const usePopupContext = () => useContext(PopupContext);

export const PopupProvider: FC<PropsWithChildren> = ({ children }) => {
    const prevBodyOverflowY = useRef(typeof document !== 'undefined' ? document.body.style.overflowY : '');
    // eslint-disable-next-line no-shadow
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

    return (
        <PopupContext.Provider value={context}>
            {children}
            {ReactDOM.createPortal(<StyledPortal id={POPUP_PORTAL_ID} />, document.body)}
        </PopupContext.Provider>
    );
};
