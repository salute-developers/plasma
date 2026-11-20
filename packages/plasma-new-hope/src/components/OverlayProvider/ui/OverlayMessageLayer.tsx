import React, { createContext, useContext } from 'react';
import type { FC, ReactNode } from 'react';
import { canUseDOM, safeUseId } from 'src/utils';

import { Portal } from '../../Portal';
import { useOverlayContext } from '../OverlayContext';
import { useOverlayLayer } from '../hooks/useOverlayLayer';

const MessagesZIndexContext = createContext<string | undefined>(undefined);

/**
 * z-index области сообщений. Вне OverlayProvider возвращает `undefined`, компонент использует свой z-index.
 */
export const useMessagesZIndex = () => useContext(MessagesZIndexContext);

/**
 * Слой области сообщений (Toast, Notification).
 * Не перехватывает Escape и фокус, остаётся доступным при открытом модальном слое.
 */
export const OverlayMessageLayer: FC<{ opened: boolean; children?: ReactNode }> = ({ opened, children }) => {
    const { rootId, isFallback } = useOverlayContext();
    const id = safeUseId();
    const { state, layerRef } = useOverlayLayer({ id, kind: 'message', registered: opened, closeOnEsc: false });

    const zIndex = !isFallback && state ? String(state.zIndex) : undefined;

    const content = (
        <MessagesZIndexContext.Provider value={zIndex}>
            <div ref={layerRef} style={{ display: 'contents' }}>
                {children}
            </div>
        </MessagesZIndexContext.Provider>
    );

    const container = !isFallback && canUseDOM ? document.getElementById(rootId) : null;

    return container ? <Portal container={container}>{content}</Portal> : content;
};
