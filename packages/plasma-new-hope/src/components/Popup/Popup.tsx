import React, { forwardRef, useRef } from 'react';
import { useForkRef } from '@salutejs/plasma-core';
import { RootProps } from 'src/engines/types';
import { canUseDOM, cx, safeUseId } from 'src/utils';

import { Portal } from '../Portal';

import { Draggable, Resizable } from './ui';
import type { PopupPlacementBasic, PopupPlacement, PopupPositionType, PopupProps } from './Popup.types';
import { PopupRoot } from './PopupRoot';
import { usePopup } from './hooks';
import { classes } from './Popup.tokens';
import { StyledPortalContainer, base } from './Popup.styles';

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
    const placements = placement.split('-') as PopupPlacementBasic[];

    placements.forEach((placementValue: PopupPlacementBasic) => {
        switch (placementValue) {
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
 * Базовый компонент Popup.
 */
export const popupRoot = (Root: RootProps<HTMLDivElement, PopupProps>) =>
    forwardRef<HTMLDivElement, PopupProps>(
        (
            {
                id,
                isOpen = false,
                opened = false,
                placement = 'center',
                offset = [0, 0],
                frame = 'document',
                children,
                overlay,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                role,
                zIndex,
                popupInfo,
                withAnimation = false,
                className,
                draggable,
                resizable: outerResizable,
                ...rest
            },
            outerRootRef,
        ) => {
            const innerIsOpen = isOpen || opened;

            const uniqId = safeUseId();
            const innerId = id || uniqId;

            const { isVisible, animationInfo, setVisible, rootId } = usePopup({
                isOpen: innerIsOpen,
                id: innerId,
                popupInfo,
                withAnimation,
            });

            const portalRef = useRef<HTMLDivElement | null>(null);
            const contentRef = useRef<HTMLDivElement | null>(null);

            const innerRef = useForkRef<HTMLDivElement>(contentRef, outerRootRef);

            if (!isVisible && !innerIsOpen) {
                return null;
            }

            const cls = cx(
                className,
                animationInfo?.endAnimation ? classes.endAnimation : '',
                animationInfo?.endTransition ? classes.endTransition : '',
            );

            const rootNode = (
                <Root className={cls}>
                    {overlay}

                    <PopupRoot
                        id={innerId}
                        ref={innerRef}
                        position={handlePosition(placement, offset)}
                        zIndex={zIndex}
                        frame={frame}
                        animationInfo={animationInfo}
                        setVisible={setVisible}
                        {...rest}
                    >
                        <Draggable draggable={draggable}>
                            <Resizable resizable={outerResizable} placement={placement}>
                                {children}
                            </Resizable>
                        </Draggable>
                    </PopupRoot>
                </Root>
            );

            if (typeof frame !== 'string' && frame && frame.current && canUseDOM) {
                return <Portal container={frame.current}>{rootNode}</Portal>;
            }

            const withFrameId = typeof frame === 'string' && frame !== 'document';
            const containerElement = withFrameId && canUseDOM && document.getElementById(frame as string);

            if (containerElement) {
                return (
                    <Portal container={containerElement}>
                        <StyledPortalContainer ref={portalRef}>
                            {portalRef.current && <Portal container={portalRef.current}>{rootNode}</Portal>}
                        </StyledPortalContainer>{' '}
                    </Portal>
                );
            }

            const globalPortal = canUseDOM && document.getElementById(rootId);

            return <>{globalPortal && <Portal container={globalPortal}>{rootNode}</Portal>}</>;
        },
    );

export const popupConfig = {
    name: 'Popup',
    tag: 'div',
    layout: popupRoot,
    base,
    variations: {},
    defaults: {},
};
