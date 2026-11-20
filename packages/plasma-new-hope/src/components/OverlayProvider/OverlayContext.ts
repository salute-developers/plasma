import { createContext, useContext } from 'react';
import { canUseDOM } from 'src/utils';

import { OverlayManager } from './OverlayManager';
import type { CloseReason, CloseRequestStatus, OverlayLayerState } from './OverlayProvider.types';

export const OVERLAY_ROOT_ID = 'plasma-overlay-root';
export const OVERLAY_ROOT_ATTRIBUTE = 'data-plasma-overlay-root';

export interface OverlayContextValue {
    manager: OverlayManager;
    /**
     * id корневого элемента, в который отрисовываются слои.
     */
    rootId: string;
}

export const OverlayContext = createContext<OverlayContextValue | null>(null);

export interface OverlayLayerContextValue {
    layerId: string;
    state: OverlayLayerState | null;
    requestClose: (reason: CloseReason, event?: Event) => CloseRequestStatus;
}

/**
 * Контекст текущего слоя: дочерние слои получают владельца без ручной настройки.
 */
export const OverlayLayerContext = createContext<OverlayLayerContextValue | null>(null);

let globalManager: OverlayManager | null = null;

/**
 * Менеджер слоёв для компонентов вне OverlayProvider.
 */
export const getGlobalOverlayManager = () => {
    if (!globalManager) {
        globalManager = new OverlayManager();
    }

    return globalManager;
};

/**
 * Корневой элемент для слоёв вне OverlayProvider. Создаётся по требованию.
 */
export const ensureFallbackOverlayRoot = () => {
    if (!canUseDOM) {
        return null;
    }

    let root = document.getElementById(OVERLAY_ROOT_ID);

    if (!root) {
        root = document.createElement('div');
        root.id = OVERLAY_ROOT_ID;
        root.setAttribute(OVERLAY_ROOT_ATTRIBUTE, '');
        document.body.appendChild(root);
    }

    return root;
};

/**
 * Доступ к менеджеру слоёв. Вне OverlayProvider используется глобальный менеджер.
 */
export const useOverlayContext = (): OverlayContextValue & { isFallback: boolean } => {
    const context = useContext(OverlayContext);

    if (context) {
        return { ...context, isFallback: false };
    }

    return { manager: getGlobalOverlayManager(), rootId: OVERLAY_ROOT_ID, isFallback: true };
};

export const useOverlayLayerContext = () => useContext(OverlayLayerContext);

/**
 * z-index по умолчанию для всплывающих элементов внутри слоя.
 */
export const useOverlayChildZIndex = () => useContext(OverlayLayerContext)?.state?.childZIndex;
