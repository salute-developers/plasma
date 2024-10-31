import React, { createContext, useState, useContext, FC, PropsWithChildren, useRef } from 'react';

import { hasModals } from '../Modal/ModalContext';
import { canUseDOM, safeUseId } from '../../utils';
import { Portal } from '../Portal';

import type { PopupContextType, PopupInfo } from './Popup.types';
import { StyledPortal } from './Popup.styles';

export const POPUP_PORTAL_ID = 'plasma-popup-root';

const items: PopupInfo[] = [];

const PopupContext = createContext<PopupContextType>({
    items,
    rootId: POPUP_PORTAL_ID,
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
    const prevBodyOverflowY = useRef(canUseDOM ? document.body.style.overflowY : '');
    // eslint-disable-next-line no-shadow
    const [items, setItems] = useState<PopupInfo[]>([]);

    const uuid = safeUseId();
    const rootId = `${POPUP_PORTAL_ID}-${uuid}`;

    const register = (info: PopupInfo) => {
        if (!canUseDOM) {
            return;
        }

        setItems((prevItems) => {
            if (info.info?.isModal && !hasModals(prevItems)) {
                prevBodyOverflowY.current = document.body.style.overflowY;
                document.body.style.overflowY = 'hidden';
            }

            return [...prevItems, info];
        });
    };

    const unregister = (id: string) => {
        if (!canUseDOM) {
            return;
        }

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
        rootId,
        register,
        unregister,
    };

    return (
        <PopupContext.Provider value={context}>
            {children}
            {canUseDOM && (
                <Portal container={document.body}>
                    <StyledPortal id={rootId} />
                </Portal>
            )}
        </PopupContext.Provider>
    );
};
