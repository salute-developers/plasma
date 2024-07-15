import React from 'react';
import ReactDOM from 'react-dom';

import { PortalProps } from './Portal.types';

/*
 * Вспомогательный компонент. Используется в Popup, Popover.
 * Представляет собой ReactDOM.createPortal() в форме компонента.
 */
export const Portal = ({ children, container, disabled = false }: PortalProps) => {
    const portalContainer = typeof container === 'function' ? container() : container;

    return (
        <>
            {disabled && children}
            {!disabled && ReactDOM.createPortal(children, portalContainer)}
        </>
    );
};
