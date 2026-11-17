import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { OverlayLayerContext, OverlayLayerContextValue, useOverlayContext } from '../OverlayContext';
import type { CloseReason, OverlayLayerConfig, OverlayLayerState } from '../OverlayProvider.types';

export interface UseOverlayLayerOptions extends OverlayLayerConfig {
    id: string;
    /**
     * Слой зарегистрирован в стеке (открыт или ещё анимируется при закрытии).
     */
    registered: boolean;
    /**
     * Слой закрывается: не участвует в маршрутизации событий и модальности.
     */
    closing?: boolean;
    /**
     * Явный z-index.
     */
    zIndex?: number | string;
}

const toNumber = (value?: number | string) => {
    if (value === undefined || value === '') {
        return undefined;
    }

    const result = Number(value);

    return Number.isNaN(result) ? undefined : result;
};

/**
 * Подключает компонент к общему стеку слоёв OverlayProvider.
 */
export const useOverlayLayer = (options: UseOverlayLayerOptions) => {
    const { manager } = useOverlayContext();
    const parentLayer = useContext(OverlayLayerContext);
    const parentId = parentLayer?.layerId ?? null;
    const { id, registered } = options;

    const optionsRef = useRef(options);
    optionsRef.current = options;

    const elementsRef = useRef<Set<Element>>(new Set());
    const lastStateRef = useRef<OverlayLayerState | null>(null);
    const [, setVersion] = useState(0);

    const { kind, modal, transient, group, closeOnEsc, closeOnOutside, scrollLock, info, closing } = options;
    const zIndex = toNumber(options.zIndex);
    const dismissable = Boolean(options.onClose);

    const getConfig = () => ({
        kind: kind ?? 'popup',
        modal: Boolean(modal),
        transient,
        group,
        closeOnEsc: closeOnEsc ?? true,
        closeOnOutside: Boolean(closeOnOutside),
        scrollLock,
        info,
        closing: Boolean(closing),
        zIndex,
        dismissable,
    });
    const getConfigRef = useRef(getConfig);
    getConfigRef.current = getConfig;

    useEffect(() => {
        if (!registered) {
            return undefined;
        }

        const unsubscribe = manager.subscribe(() => setVersion((version) => version + 1));
        const unregister = manager.register({
            id,
            parentId,
            ...getConfigRef.current(),
            getElements: () => Array.from(elementsRef.current),
            onClose: (reason, event) => optionsRef.current.onClose?.(reason, event),
            onCloseRequest: (reason, event) => optionsRef.current.onCloseRequest?.(reason, event),
        });

        setVersion((version) => version + 1);

        return () => {
            unsubscribe();
            unregister();
        };
    }, [manager, registered, id, parentId]);

    useEffect(() => {
        if (!registered) {
            return;
        }

        manager.update(id, getConfig());
    }, [
        manager,
        registered,
        id,
        kind,
        modal,
        transient,
        group,
        closeOnEsc,
        closeOnOutside,
        scrollLock,
        info,
        closing,
        zIndex,
        dismissable,
    ]);

    /**
     * Ref для DOM-элементов слоя: определяют границы «внутри / снаружи» и модальность.
     */
    const layerRef = useCallback(
        (element: Element | null) => {
            elementsRef.current.clear();

            if (element) {
                elementsRef.current.add(element);
            }

            manager.refresh();
        },
        [manager],
    );

    const requestClose = useCallback((reason: CloseReason, event?: Event) => manager.requestClose(id, reason, event), [
        manager,
        id,
    ]);

    const currentState = registered ? manager.getState(id) : null;

    if (currentState) {
        lastStateRef.current = currentState;
    }

    const state = currentState ?? (registered ? null : lastStateRef.current);

    const layerContextValue = useMemo<OverlayLayerContextValue>(() => ({ layerId: id, state, requestClose }), [
        id,
        state?.zIndex,
        state?.isTop,
        state?.isTopModal,
        state?.isBlocked,
        state?.hasActiveModal,
        requestClose,
    ]);

    return { manager, parentId, state, layerRef, requestClose, layerContextValue };
};
