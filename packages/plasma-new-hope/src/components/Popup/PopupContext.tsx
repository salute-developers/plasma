import React, { createContext, useState, useContext, FC, PropsWithChildren, useRef } from 'react';
import { canUseDOM, safeUseId } from 'src/utils';

import { Portal } from '../Portal';
import { hasModals } from '../Modal/ModalContext';

import { ClientOnlyPortal } from './ClientOnlyPortal';
import type { PopupContextType, PopupInfo } from './Popup.types';
import { StyledPortal } from './Popup.styles';

export const POPUP_PORTAL_ID = 'plasma-popup-root';

const initialItems = new Map<string, PopupInfo>();

const PopupContext = createContext<PopupContextType>({
    items: initialItems,
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

// TODO: #1599
export const PopupProvider: FC<
    PropsWithChildren & {
        /**
         * @description Только для применения в рамках SSR.
         */
        UNSAFE_SSR_ENABLED?: boolean;
    }
> = ({ children, UNSAFE_SSR_ENABLED }) => {
    const prevBodyOverflowY = useRef(canUseDOM ? document.body.style.overflowY : '');
    const [items, setItems] = useState(initialItems);

    const uuid = safeUseId();
    const rootId = `${POPUP_PORTAL_ID}-${uuid}`;

    const register = (info: PopupInfo) => {
        if (!canUseDOM) {
            return;
        }

        setItems((prevItems) => {
            const newItems = new Map(prevItems);

            if (info.info?.isModal && !hasModals(Array.from(prevItems.values()))) {
                prevBodyOverflowY.current = document.body.style.overflowY;
                document.body.style.overflowY = 'hidden';
            }

            newItems.set(info.id, info);
            return newItems;
        });
    };

    const unregister = (id: string) => {
        if (!canUseDOM) {
            return;
        }

        setItems((prevItems) => {
            if (!prevItems.has(id)) {
                return prevItems;
            }

            const newItems = new Map(prevItems);
            const prevHasModals = hasModals(Array.from(newItems.values()));

            newItems.delete(id);

            if (prevHasModals && !hasModals(Array.from(newItems.values()))) {
                document.body.style.overflowY = prevBodyOverflowY.current;
            }

            return newItems;
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

            {UNSAFE_SSR_ENABLED ? (
                <ClientOnlyPortal>
                    <StyledPortal id={rootId} />
                </ClientOnlyPortal>
            ) : (
                <Portal container={document.body}>
                    <StyledPortal id={rootId} />
                </Portal>
            )}
        </PopupContext.Provider>
    );
};
