import React, { createContext, useState, useContext, useEffect, FC, PropsWithChildren } from 'react';
import { canUseDOM, safeUseId } from 'src/utils';

import { Portal } from '../Portal';
import { hasModals } from '../Modal/ModalContext';

import { ClientOnlyPortal } from './ClientOnlyPortal';
import type { PopupContextType, PopupInfo } from './Popup.types';
import { StyledPortal } from './Popup.styles';

export const POPUP_PORTAL_ID = 'plasma-popup-root';

/**
 * INFO:
 * Глобальный координатор overflow для нескольких экземпляров PopupProvider.
 * Каждый PopupProvider независимо управляет своими items, но overflow на body — общий ресурс.
 * Используется Set с ID провайдеров вместо счётчика — Set.add/delete идемпотентны,
 * поэтому повторные вызовы при ремаунте (hydration mismatch, Strict Mode) не ломают состояние.
 * Overflow сохраняется при ∅→1 и восстанавливается при 1→∅.
 */
const globalOverflowState = {
    activeProviders: new Set<string>(),
    savedOverflowY: '',
};

const lockBodyOverflow = (providerId: string) => {
    if (globalOverflowState.activeProviders.has(providerId)) {
        return;
    }
    if (globalOverflowState.activeProviders.size === 0) {
        globalOverflowState.savedOverflowY = document.body.style.overflowY;
    }
    globalOverflowState.activeProviders.add(providerId);
    document.body.style.overflowY = 'hidden';
};

const unlockBodyOverflow = (providerId: string) => {
    const wasActive = globalOverflowState.activeProviders.delete(providerId);
    if (wasActive && globalOverflowState.activeProviders.size === 0) {
        document.body.style.overflowY = globalOverflowState.savedOverflowY;
    }
};

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
         * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
         */
        providerFrame?: 'document' | string | React.RefObject<HTMLElement>;
        /**
         * @description Только для применения в рамках SSR.
         */
        UNSAFE_SSR_ENABLED?: boolean;
    }
> = ({ children, providerFrame, UNSAFE_SSR_ENABLED }) => {
    const [items, setItems] = useState(initialItems);

    const uuid = safeUseId();
    const rootId = `${POPUP_PORTAL_ID}-${uuid}`;

    useEffect(() => {
        if (!canUseDOM) {
            return;
        }

        const currentHasModals = hasModals(Array.from(items.values()));

        if (currentHasModals) {
            lockBodyOverflow(rootId);
        } else {
            unlockBodyOverflow(rootId);
        }
    }, [items, rootId]);

    /**
     * INFO:
     * Cleanup при unmount: если PopupProvider размонтируется с открытой модалкой
     * (например, при смене роута или hydration mismatch), провайдер удаляется из Set
     * и overflow восстанавливается, если активных провайдеров не осталось.
     * Выделен в отдельный эффект, чтобы не срабатывать при каждой смене items.
     */
    useEffect(() => {
        return () => {
            unlockBodyOverflow(rootId);
        };
    }, [rootId]);

    const register = (info: PopupInfo) => {
        if (!canUseDOM) {
            return;
        }

        setItems((prevItems) => {
            const newItems = new Map(prevItems);
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
            newItems.delete(id);
            return newItems;
        });
    };

    const context = {
        items,
        rootId,
        register,
        unregister,
    };

    const getDefaultPortal = () => {
        if (typeof providerFrame !== 'string' && providerFrame && providerFrame.current && canUseDOM) {
            return (
                <Portal container={providerFrame.current}>
                    <StyledPortal id={rootId} />
                </Portal>
            );
        }

        const withFrameId = typeof providerFrame === 'string' && providerFrame !== 'document';
        const containerElement = withFrameId && canUseDOM && document.getElementById(providerFrame as string);

        if (containerElement) {
            return (
                <Portal container={containerElement}>
                    <StyledPortal id={rootId} />
                </Portal>
            );
        }

        return (
            <Portal container={document.body}>
                <StyledPortal id={rootId} />
            </Portal>
        );
    };

    return (
        <PopupContext.Provider value={context}>
            {children}

            {UNSAFE_SSR_ENABLED ? (
                <ClientOnlyPortal>
                    <StyledPortal id={rootId} />
                </ClientOnlyPortal>
            ) : (
                getDefaultPortal()
            )}
        </PopupContext.Provider>
    );
};
