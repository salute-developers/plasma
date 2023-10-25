import React, { forwardRef, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useForkRef, useUniqId } from '@salutejs/plasma-core';
import { cx } from '@linaria/core';

import { RootProps } from '../../engines/types';

import { BasicPopupPlacement, PopupPlacement, PopupPositionType, PopupProps } from './Popup.types';
import { POPUP_PORTAL_ID } from './PopupContext';
import { PopupRoot } from './PopupRoot';
import { usePopup } from './Popup.hooks';
import { endAnimationClass, endTransitionClass } from './Popup.utils';

export const handlePosition = (
    placement: PopupPlacement,
    offset: [number, number] | [string, string],
): PopupPositionType => {
    let x = '0rem';
    let y = '0rem';
    if (offset) {
        const [_x, _y] = offset;
        x = typeof _x === 'number' ? `${_x}rem` : _x;
        y = typeof _y === 'number' ? `${_y}rem` : _y;
    }

    if (!placement || placement === 'center') {
        return {
            left: `calc(50% + ${x})`,
            top: `calc(50% - ${y})`,
            transform: 'translate(-50%, -50%)',
        };
    }

    let left;
    let right;
    let top;
    let bottom;
    let transform;
    const placements = placement.split('-') as BasicPopupPlacement[];

    placements.forEach((placement: BasicPopupPlacement) => {
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

    if (isCenteredX) {
        transform = 'translateX(-50%)';
    }

    if (isCenteredY) {
        transform = 'translateY(-50%)';
    }

    return {
        left: isCenteredX ? `calc(50% + ${x})` : left,
        right,
        top: isCenteredY ? `calc(50% - ${y})` : top,
        bottom,
        transform,
    };
};

/**
 * Базовый копмонент Popup.
 */
export const popupRoot = (Root: RootProps<HTMLDivElement, PopupProps>) =>
    forwardRef<HTMLDivElement, PopupProps>(
        (
            {
                id,
                isOpen = false,
                placement = 'center',
                offset = [0, 0],
                frame = 'document',
                children,
                overlay,
                role,
                zIndex,
                popupInfo,
                withAnimation = false,
                className,
                ...rest
            },
            outerRootRef,
        ) => {
            const uniqId = useUniqId();
            const innerId = id || uniqId;

            const { isVisible, animationInfo, setVisible } = usePopup({
                isOpen,
                id: innerId,
                popupInfo,
                withAnimation,
            });

            const portalRef = useRef<HTMLElement | null>(null);
            const contentRef = useRef<HTMLDivElement | null>(null);

            const innerRef = useForkRef<HTMLDivElement>(contentRef, outerRootRef);

            const [, forceRender] = useState(false);

            useEffect(() => {
                let portal = document.getElementById(POPUP_PORTAL_ID);

                if (typeof frame !== 'string' && frame && frame.current) {
                    portal = frame.current;
                }

                if (!portal) {
                    portal = document.createElement('div');
                    portal.setAttribute('id', POPUP_PORTAL_ID);
                    if (typeof frame === 'string' && frame !== 'document') {
                        document.getElementById(frame)?.appendChild(portal);
                    } else {
                        document.body.appendChild(portal);
                    }
                }

                portalRef.current = portal;

                /**
                 * Изменение стейта нужно для того, чтобы Popup
                 * отобразился после записи DOM элемента в portalRef.current
                 */
                forceRender(true);
            }, []);

            if (!isVisible && !isOpen) {
                return null;
            }

            const cls = cx(
                className,
                animationInfo?.endAnimation && endAnimationClass,
                animationInfo?.endTransition && endTransitionClass,
            );

            return (
                <>
                    {portalRef.current &&
                        ReactDOM.createPortal(
                            <Root className={cls} {...rest}>
                                {overlay}
                                <PopupRoot
                                    id={innerId}
                                    ref={innerRef}
                                    position={handlePosition(placement, offset)}
                                    frame={frame}
                                    zIndex={zIndex}
                                    animationInfo={animationInfo}
                                    setVisible={setVisible}
                                >
                                    {children}
                                </PopupRoot>
                            </Root>,
                            portalRef.current,
                        )}
                </>
            );
        },
    );

export const popupConfig = {
    name: 'Popup',
    tag: 'div',
    layout: popupRoot,
    base: '',
    variations: {},
    defaults: {},
};
