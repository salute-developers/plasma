import React, { useContext, useMemo, useState } from 'react';
import type { FC } from 'react';
import styled from 'styled-components';
import { canUseDOM, safeUseId } from 'src/utils';

import { Portal } from '../Portal';
import { ClientOnlyPortal } from '../Popup/ClientOnlyPortal';

import { OverlayManager } from './OverlayManager';
import { OverlayContext, OVERLAY_ROOT_ATTRIBUTE, OVERLAY_ROOT_ID } from './OverlayContext';
import type { OverlayContextValue } from './OverlayContext';
import type { OverlayProviderProps } from './OverlayProvider.types';

const StyledOverlayRoot = styled.div``;

const getPortalContainer = (portalContainer: OverlayProviderProps['portalContainer']) => {
    if (!canUseDOM) {
        return null;
    }

    if (portalContainer && typeof portalContainer !== 'string') {
        return portalContainer.current;
    }

    if (portalContainer && portalContainer !== 'document') {
        return document.getElementById(portalContainer);
    }

    return document.body;
};

/**
 * Глобальный провайдер слоёв Overlay.
 * Создаёт общий стек слоёв и корень для их отрисовки. Вложенный провайдер использует менеджер родителя.
 */
export const OverlayProvider: FC<OverlayProviderProps> = ({
    children,
    zIndexBase,
    portalContainer,
    UNSAFE_SSR_ENABLED,
}) => {
    const parentContext = useContext(OverlayContext);
    const [ownManager] = useState(() => (parentContext ? null : new OverlayManager({ zIndexBase })));
    const manager = parentContext?.manager ?? (ownManager as OverlayManager);

    const uuid = safeUseId();
    const rootId = `${OVERLAY_ROOT_ID}-${uuid.replace(/:/g, '')}`;

    const context = useMemo<OverlayContextValue>(() => ({ manager, rootId }), [manager, rootId]);

    const rootNode = <StyledOverlayRoot id={rootId} {...{ [OVERLAY_ROOT_ATTRIBUTE]: '' }} />;

    const renderRoot = () => {
        if (UNSAFE_SSR_ENABLED) {
            return <ClientOnlyPortal providerFrame={portalContainer}>{rootNode}</ClientOnlyPortal>;
        }

        const container = getPortalContainer(portalContainer);

        return container ? <Portal container={container}>{rootNode}</Portal> : null;
    };

    return (
        <OverlayContext.Provider value={context}>
            {children}
            {renderRoot()}
        </OverlayContext.Provider>
    );
};
