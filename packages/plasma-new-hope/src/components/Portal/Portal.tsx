import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import { PortalProps } from './Portal.types';

/**
 * Вспомогательный компонент. Используется в Popup, Popover.
 * Представляет собой ReactDOM.createPortal() в форме компонента.
 */
export const Portal: FC<PortalProps> = ({ children, container, disabled = false }) => {
    const portalContainer = typeof container === 'function' ? container() : container;

    return <>{disabled || !portalContainer ? children : ReactDOM.createPortal(children, portalContainer)}</>;
};
