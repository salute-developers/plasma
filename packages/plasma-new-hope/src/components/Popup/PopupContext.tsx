import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { canUseDOM } from 'src/utils';

import { OverlayProvider } from '../OverlayProvider/OverlayProvider';
import { OVERLAY_ROOT_ID, useOverlayContext } from '../OverlayProvider/OverlayContext';

import type { PopupContextType, PopupInfo } from './Popup.types';

export const POPUP_PORTAL_ID = OVERLAY_ROOT_ID;

/**
 * Доступ к зарегистрированным окнам. Данные берутся из общего стека слоёв OverlayProvider.
 */
export const usePopupContext = (): PopupContextType => {
    const { manager, rootId, isFallback } = useOverlayContext();
    const [, setVersion] = useState(0);

    useEffect(() => manager.subscribe(() => setVersion((version) => version + 1)), [manager]);

    const register = useCallback(
        (info: PopupInfo) => {
            if (!canUseDOM) {
                return;
            }

            manager.register({ id: info.id, info: info.info });
        },
        [manager],
    );

    const unregister = useCallback(
        (id: string) => {
            if (!canUseDOM) {
                return;
            }

            manager.unregister(id);
        },
        [manager],
    );

    const layers = manager.getLayers();
    const items = useMemo(
        () =>
            new Map<string, PopupInfo>(
                layers.filter(({ kind }) => kind !== 'message').map(({ id, info }) => [id, { id, info }]),
            ),
        [layers.map(({ id }) => id).join(' ')],
    );

    return { items, rootId: isFallback ? OVERLAY_ROOT_ID : rootId, register, unregister };
};

/**
 * @deprecated Используйте OverlayProvider. PopupProvider оставлен для обратной совместимости
 * и создаёт корень для окон внутри общего стека слоёв.
 */
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
> = ({ children, providerFrame, UNSAFE_SSR_ENABLED }) => (
    <OverlayProvider portalContainer={providerFrame} UNSAFE_SSR_ENABLED={UNSAFE_SSR_ENABLED}>
        {children}
    </OverlayProvider>
);
