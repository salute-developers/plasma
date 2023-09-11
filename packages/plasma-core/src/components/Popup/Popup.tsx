import React, { useEffect, useRef, useState, useContext, FC } from 'react';
import ReactDOM from 'react-dom';
import styled, { Keyframes, css } from 'styled-components';

import { useUniqId } from '../../hooks';

import { PopupContext, POPOVER_PORTAL_ID } from './PopupContext';

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
    /**
     * Анимация при появлении Popup.
     */
    showAnimation?: Keyframes;
    /**
     * Анимация при скрытии Popup.
     */
    hideAnimation?: Keyframes;
    /**
     * Значение z-index для Popup.
     */
    zIndex: string;
}

interface HidingProps {
    isHiding?: boolean;
}

const DEFAULT_Z_INDEX = 9000;

interface PopupRootProps {
    position?: PopupPlacement | [number | string, number | string];
    showAnimation?: Keyframes;
    hideAnimation?: Keyframes;
    zIndex?: string;
}

const PopupView = styled.div`
    position: relative;
    max-width: 100%;
    pointer-events: all;
`;

const handlePosition = (position?: PopupPlacement | [number | string, number | string]) => {
    if (!position || position === 'center') {
        return css`
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `;
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
        ${left !== 0 &&
        right !== 0 &&
        css`
            left: 50%;
            transform: translateX(-50%);
        `}
        ${top !== 0 &&
        bottom !== 0 &&
        css`
            top: 50%;
            transform: translateY(-50%);
        `}
    `;
};

const PopupRoot = styled.div<HidingProps & PopupRootProps>`
    position: fixed;
    ${({ zIndex }) => css`
        z-index: ${zIndex || DEFAULT_Z_INDEX};
    `}

    ${({ position }) => handlePosition(position)};

    ${({ isHiding, showAnimation, hideAnimation }) => css`
        animation: 0.4s ${isHiding ? hideAnimation : showAnimation} ease-out;
    `}
`;

/**
 * Базовый Popup.
 * Управляет показом/скрытием и анимацией(?) высплывающего окна.
 */
export const Popup: FC<PopupProps> = ({
    id,
    isOpen,
    position,
    children,
    role,
    zIndex,
    showAnimation,
    hideAnimation,
    ...rest
}) => {
    const uniqId = useUniqId();
    const innerId = id || uniqId;

    const portalRef = useRef<HTMLElement | null>(null);

    const controller = useContext(PopupContext);

    const [, forceRender] = useState(false);

    useEffect(() => {
        let portal = document.getElementById(POPOVER_PORTAL_ID);

        if (!portal) {
            portal = document.createElement('div');
            portal.setAttribute('id', POPOVER_PORTAL_ID);
            portal.style.position = 'relative';
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
    }, [controller, innerId, zIndex]);

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
                    <PopupRoot position={position} showAnimation={showAnimation} hideAnimation={hideAnimation}>
                        <PopupView {...rest} role={role}>
                            {children}
                        </PopupView>
                    </PopupRoot>,
                    portalRef.current,
                )}
        </>
    );
};
