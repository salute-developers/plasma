import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { useForkRef, useUniqId } from '../../hooks';

import { PopupBaseProps } from './types';
import { POPOVER_PORTAL_ID } from './PopupBaseContext';
import { PopupBaseRoot } from './PopupBaseRoot';
import { usePopup } from './hooks';

const StyledPortal = styled.div``;

/**
 * Базовый копмонент PopupBase.
 */
export const PopupBase = React.forwardRef<HTMLDivElement, PopupBaseProps>(
    (
        {
            id,
            isOpen,
            placement = 'center',
            offset = [0, 0],
            frame = 'document',
            children,
            overlay,
            role,
            zIndex,
            popupInfo,
            withAnimation = false,
            animationInfo,
            ...rest
        },
        ref,
    ) => {
        const uniqId = useUniqId();
        const innerId = id || uniqId;

        const { isVisible, setVisible } = usePopup({ isOpen, id: innerId, withAnimation, popupInfo, animationInfo });

        const portalRef = useRef<HTMLElement | null>(null);
        const contentRef = useRef<HTMLDivElement | null>(null);

        const innerRef = useForkRef<HTMLDivElement>(contentRef, ref);

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
                        <StyledPortal {...rest}>
                            {overlay}
                            <PopupBaseRoot
                                id={innerId}
                                ref={innerRef}
                                placement={placement}
                                frame={frame}
                                offset={offset}
                                zIndex={zIndex}
                                animationInfo={animationInfo}
                                setVisible={setVisible}
                            >
                                {children}
                            </PopupBaseRoot>
                        </StyledPortal>,
                        portalRef.current,
                    )}
            </>
        );
    },
);
