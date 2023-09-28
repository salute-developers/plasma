import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import { useUniqId } from '../../hooks';

import { POPOVER_PORTAL_ID, PopupInfo, usePopupBaseContext } from './PopupBaseContext';

type BasicPopupBasePlacement = 'center' | 'top' | 'bottom' | 'right' | 'left';
type MixedPopupBasePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type PopupBasePlacement = BasicPopupBasePlacement | MixedPopupBasePlacement;

export interface PopupBaseProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Отображение PopupBase.
     */
    isOpen: boolean;
    /* Позиция на экране
     * center - по умолчанию
     * left, right, top, bottom и их комбинации
     */
    placement?: PopupBasePlacement;
    /* Смещение отнсительно текущей позиции налево и вверх.
     * (x, y) - <number | string, number | string> или проценты.
     * При передаче number, то расчёт в rem.
     */
    offset?: [number | string, number | string];
    /**
     * В каком контейнере позиционируется(по умолчанию document).
     */
    frame?: 'document' | React.RefObject<HTMLElement>;
    /**
     * Содержимое PopupBase.
     */
    children?: React.ReactNode;
    /**
     * Соседний элемент для окна в портале.
     */
    overlay?: React.ReactNode;
    /**
     * Значение z-index для PopupBase.
     */
    zIndex?: string;
    /**
     * Дополнительная информация для программного взаимодействия с окном через контекст.
     */
    popupInfo?: PopupInfo;
}

interface HidingProps {
    isHiding?: boolean;
}

export const DEFAULT_Z_INDEX = 9000;

interface PopupBaseRootProps extends Omit<PopupBaseProps, 'isOpen'> {}

const PopupBaseView = styled.div`
    position: relative;
    max-width: 100%;
    pointer-events: all;
`;

const handlePosition = (placement?: PopupBasePlacement, offset?: [number | string, number | string]) => {
    let x = '0rem';
    let y = '0rem';
    if (offset) {
        const [_x, _y] = offset;
        x = typeof _x === 'number' ? `${_x}rem` : _x;
        y = typeof _y === 'number' ? `${_y}rem` : _y;
    }

    if (!placement || placement === 'center') {
        return css`
            left: calc(50% + ${x});
            top: calc(50% - ${y});
            transform: translate(-50%, -50%);
        `;
    }

    let left;
    let right;
    let top;
    let bottom;
    const placements = placement.split('-') as BasicPopupBasePlacement[];

    placements.forEach((placement: BasicPopupBasePlacement) => {
        switch (placement) {
            case 'left':
                left = x;
                break;
            case 'right':
                right = x;
                break;
            case 'top':
                top = y;
                break;
            case 'bottom':
                bottom = y;
                break;
            default:
                break;
        }
    });

    const isCenteredX = left === undefined && right === undefined;
    const isCenteredY = top === undefined && bottom === undefined;

    return css`
        left: ${left};
        right: ${right};
        top: ${top};
        bottom: ${bottom};
        ${isCenteredX &&
        css`
            left: calc(50% + ${x});
            transform: translateX(-50%);
        `}
        ${isCenteredY &&
        css`
            top: calc(50% - ${y});
            transform: translateY(-50%);
        `}
    `;
};

const PopupBaseRoot = styled.div<HidingProps & PopupBaseRootProps>`
    ${({ frame }) => css`
        position: ${frame === 'document' ? 'fixed' : 'absolute'};
    `}

    ${({ zIndex }) => css`
        z-index: ${zIndex || DEFAULT_Z_INDEX};
    `}

    ${({ placement, offset }) => handlePosition(placement, offset)};
`;

/**
 * Базовый PopupBase.
 * Управляет показом/скрытием и анимацией(?) высплывающего окна.
 */

export const PopupBase = React.forwardRef<HTMLDivElement, PopupBaseProps>(
    (
        { id, isOpen, placement, offset, frame = 'document', children, overlay, role, zIndex, popupInfo, ...rest },
        ref,
    ) => {
        // Внутренее состояние, необходимое для правильного отображения вложенных окон, а также для анимации
        const [isClosed, setClosed] = useState(!isOpen);

        const uniqId = useUniqId();
        const innerId = id || uniqId;

        const portalRef = useRef<HTMLElement | null>(null);

        const popupController = usePopupBaseContext();

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

        useEffect(() => {
            // сначала добавление/удаление из контекста
            if (isOpen) {
                popupController.register({ id: innerId, ...popupInfo });
            } else {
                popupController.unregister(innerId);
            }
            // затем отображение
            setClosed(!isOpen);
        }, [isOpen]);

        if (isClosed) {
            return null;
        }

        return (
            <>
                {portalRef.current &&
                    ReactDOM.createPortal(
                        <>
                            {overlay}
                            <PopupBaseRoot
                                ref={ref}
                                placement={placement}
                                frame={frame}
                                offset={offset}
                                zIndex={zIndex}
                            >
                                <PopupBaseView {...rest} role={role}>
                                    {children}
                                </PopupBaseView>
                            </PopupBaseRoot>
                        </>,
                        portalRef.current,
                    )}
            </>
        );
    },
);
