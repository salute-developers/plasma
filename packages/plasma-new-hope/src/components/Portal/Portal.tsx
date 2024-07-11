import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';

import type { RootProps } from '../../engines/types';

import { PortalProps } from './Portal.types';

/*
 * Вспомогательный компонент. Используется в Popup, Popover.
 * Представляет собой ReactDOM.createPortal() в форме компонента.
 */
export const portalRoot = (Root: RootProps<HTMLDivElement, Omit<PortalProps, 'container'>>) =>
    forwardRef<HTMLDivElement, PortalProps>(({ children, container, disabled = false }, outerRootRef) => {
        const portalContainer = typeof container === 'function' ? container() : container;

        return (
            <Root disabled={disabled} ref={outerRootRef}>
                {disabled && children}
                {!disabled && ReactDOM.createPortal(children, portalContainer)}
            </Root>
        );
    });

export const portalConfig = {
    name: 'Portal',
    tag: 'div',
    layout: portalRoot,
    base: '',
    variations: {},
    defaults: {},
};
