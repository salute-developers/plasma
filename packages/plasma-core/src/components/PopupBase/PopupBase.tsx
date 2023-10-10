import React, { FC, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { POPOVER_PORTAL_ID } from './PopupBaseContext';
import { PopupBaseProps } from './types';

/**
 * Базовый PopupBase.
 * Управляет показом/скрытием и анимацией(?) высплывающего окна.
 */
export const PopupBase: FC<PopupBaseProps> = ({
    children, hookInfo, ...rest
}) => {
    // Внутренее состояние, необходимое для правильного отображения вложенных окон, а также для анимации
    const portalRef = useRef<HTMLElement | null>(null);

    const { isVisible, frame, isOpen } = hookInfo;

    const [, forceRender] = useState(false);

    useEffect(() => {
        let portal = document.getElementById(POPOVER_PORTAL_ID);

        if (frame !== 'document' && frame && frame.current) {
            portal = frame.current;
        }

        if (!portal) {
            portal = document.createElement('div');
            portal.setAttribute('id', POPOVER_PORTAL_ID);
            document.body.appendChild(portal);
        }

        portalRef.current = portal;

        /**
         * Изменение стейта нужно для того, чтобы PopupBase
         * отобразился после записи DOM элемента в portalRef.current
         */
        forceRender(true);
    }, []);

    if (!isVisible && !isOpen) {
        return null;
    }

    return (
        <>
            {portalRef.current &&
                ReactDOM.createPortal(
                    <div {...rest}>
                        {children}
                    </div>,
                    portalRef.current,
                )}
        </>
    );
}
