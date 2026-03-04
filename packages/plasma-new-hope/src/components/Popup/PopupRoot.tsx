import React, { useCallback, forwardRef, useRef, AnimationEvent, TransitionEvent } from 'react';
import Draggable from 'react-draggable';
import { useForkRef } from '@salutejs/plasma-core';

import { usePopupContext } from './PopupContext';
import type { PopupRootProps } from './Popup.types';
import { PopupRootContainer, PopupView } from './Popup.styles';
import { classes } from './Popup.tokens';

const getDragPositionOffset = (transform?: string) => {
    switch (transform) {
        case 'translate(-50%, -50%)':
            return { x: '-50%', y: '-50%' };
        case 'translateX(-50%)':
            return { x: '-50%', y: '0%' };
        case 'translateY(-50%)':
            return { x: '0%', y: '-50%' };
        default:
            return undefined;
    }
};

/**
 * Корень Popup.
 * Управляет показом/скрытием и анимацией всплывающего окна.
 */
export const PopupRoot = forwardRef<HTMLDivElement, PopupRootProps>(
    ({ id, position, setVisible, children, role, frame, zIndex, animationInfo, draggable, ...rest }, ref) => {
        const contentRef = useRef<HTMLDivElement | null>(null);
        const innerRef = useForkRef<HTMLDivElement>(contentRef, ref);

        const popupController = usePopupContext();
        const positionOffset = getDragPositionOffset(position?.transform);
        const currentPosition = positionOffset && draggable ? { ...position, transform: undefined } : position;

        const handleAnimationEnd = useCallback(
            (e: AnimationEvent<HTMLDivElement> | TransitionEvent<HTMLDivElement>) => {
                if (!contentRef || e.target !== contentRef.current) {
                    return;
                }
                e.stopPropagation();
                if (animationInfo?.endAnimation) {
                    popupController.unregister(id);
                    setVisible(false);
                    animationInfo.setEndAnimation(false);
                }
            },
            [popupController.unregister, animationInfo?.endAnimation, setVisible],
        );

        const popupNode = (
            <PopupRootContainer
                className={classes.root}
                ref={innerRef}
                position={currentPosition}
                zIndex={zIndex}
                frame={frame}
                onAnimationEnd={handleAnimationEnd}
                onTransitionEnd={handleAnimationEnd}
                {...rest}
            >
                <PopupView role={role}>{children}</PopupView>
            </PopupRootContainer>
        );

        if (!draggable) {
            return popupNode;
        }

        return (
            <Draggable
                nodeRef={contentRef}
                cancel={`.${classes.resizableHandleWrapper}`}
                defaultClassName={classes.draggablePopupWrapper}
                defaultClassNameDragging={classes.draggingPopupWrapper}
                positionOffset={positionOffset}
            >
                {popupNode}
            </Draggable>
        );
    },
);
