import React, { useCallback, forwardRef, useRef, AnimationEvent, TransitionEvent } from 'react';
import Draggable from 'react-draggable';
import { useForkRef } from 'src/hooks';
import { safeUseId } from 'src/utils';
import cls from 'classnames';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ id, position, setVisible, children, role, frame, zIndex, animationInfo, draggable, ...rest }, ref) => {
        const contentRef = useRef<HTMLDivElement | null>(null);
        const innerRef = useForkRef<HTMLDivElement>(contentRef, ref);

        const uniqueId = safeUseId();
        const handleClass = `draggable-handle-${uniqueId.replace(/:/g, '-')}`;

        const positionOffset = getDragPositionOffset(position?.transform);
        const currentPosition = positionOffset && draggable ? { ...position, transform: undefined } : position;

        const handleAnimationEnd = useCallback(
            (e: AnimationEvent<HTMLDivElement> | TransitionEvent<HTMLDivElement>) => {
                if (!contentRef || e.target !== contentRef.current) {
                    return;
                }
                e.stopPropagation();
                if (animationInfo?.endAnimation) {
                    setVisible(false);
                    animationInfo.setEndAnimation(false);
                }
            },
            [animationInfo?.endAnimation, setVisible],
        );

        const popupNode = (
            <PopupRootContainer
                className={cls(classes.root, handleClass)}
                ref={innerRef}
                position={currentPosition}
                zIndex={zIndex}
                frame={frame}
                onAnimationEnd={handleAnimationEnd}
                onTransitionEnd={handleAnimationEnd}
                role={role}
                {...rest}
            >
                <PopupView>{children}</PopupView>
            </PopupRootContainer>
        );

        if (!draggable) {
            return popupNode;
        }

        return (
            <Draggable
                nodeRef={contentRef}
                handle={`.${handleClass}`}
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
