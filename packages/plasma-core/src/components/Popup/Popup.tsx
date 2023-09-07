import React, { useEffect, useRef, useState, useContext, FC } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import { useUniqId } from '../../hooks';

import { PopupContext, MODALS_PORTAL_ID } from './PopupContext';

type BasicPopupPlacement = 'center' | 'top' | 'bottom' | 'right' | 'left';
type MixedPopupPlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type PopupPlacement = BasicPopupPlacement | MixedPopupPlacement;

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Отображение модального окна.
     */
    isOpen: boolean;
    /* Позиция на экране
     * center - по умолчанию
     * left, right, top, bottom и их комбинации
     * (x, y) - <number | string, number | string> или проценты; (0, 0) - верхний левый угол
     */
    position?: PopupPlacement | [number | string, number | string];
    /**
     * Содержимое Popup.
     */
    children?: React.ReactNode;
}

interface HidingProps {
    isHiding?: boolean;
}

interface PositionProps {
    position?: PopupPlacement | [number | string, number | string];
}

const StyledWrapper = styled.div<HidingProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const PopupView = styled.div`
    position: relative;
    max-width: 100%;
    pointer-events: all;
`;

const handlePosition = (position?: PopupPlacement | [number | string, number | string]) => {
    if (!position || position === 'center') {
        return;
    }

    if (Array.isArray(position)) {
        const [left, top] = position;
        return css`
            left: ${typeof left === 'number' ? `${left}rem` : left};
            top: ${typeof top === 'number' ? `${top}rem` : top};
        `;
    }

    let left;
    let right;
    let top;
    let bottom;
    const placements = position.split('-') as BasicPopupPlacement[];

    placements.forEach((placement: BasicPopupPlacement) => {
        switch (placement) {
            case 'left':
                left = 0;
                break;
            case 'right':
                right = 0;
                break;
            case 'top':
                top = 0;
                break;
            case 'bottom':
                bottom = 0;
                break;
            default:
                break;
        }
    });

    return css`
        left: ${left};
        right: ${right};
        top: ${top};
        bottom: ${bottom};
    `;
};

const StyledPopup = styled.div<PositionProps>`
    position: absolute;
    pointer-events: none;

    ${({ position }) => handlePosition(position)};
`;

/**
 * Базовый Popup.
 * Управляет показом/скрытием и анимацией(?) высплывающего окна.
 */
export const Popup: FC<PopupProps> = ({ id, isOpen, position, children, role = 'dialog', ...rest }) => {
    const uniqId = useUniqId();
    const innerId = id || uniqId;

    const portalRef = useRef<HTMLElement | null>(null);

    const controller = useContext(PopupContext);

    const [, forceRender] = useState(false);

    useEffect(() => {
        let portal = document.getElementById(MODALS_PORTAL_ID);

        if (!portal) {
            portal = document.createElement('div');
            portal.setAttribute('id', MODALS_PORTAL_ID);
            portal.setAttribute('aria-live', 'off');
            portal.setAttribute('role', 'presentation');
            portal.style.position = 'relative';
            portal.style.zIndex = '9000';
            document.body.appendChild(portal);
        }

        portalRef.current = portal;

        /**
         * Изменение стейта нужно для того, чтобы Popup
         * отобразился после записи DOM элемента в portalRef.current
         */
        forceRender(true);

        return () => {
            controller.unregister(innerId);
        };
    }, [controller, innerId]);

    if (isOpen) {
        controller.register(innerId);
    } else {
        controller.unregister(innerId);
        return null;
    }

    return (
        <>
            {portalRef.current &&
                ReactDOM.createPortal(
                    <StyledWrapper>
                        <StyledPopup position={position}>
                            <PopupView {...rest} role={role} aria-modal="true">
                                {children}
                            </PopupView>
                        </StyledPopup>
                    </StyledWrapper>,
                    portalRef.current,
                )}
        </>
    );
};
