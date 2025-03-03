import React, { useCallback, forwardRef, useRef, AnimationEvent, TransitionEvent } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { usePopupContext } from './PopupContext';
import type { PopupRootProps } from './Popup.types';
import { PopupRootContainer, PopupView } from './Popup.styles';
import { classes } from './Popup.tokens';

/**
 * Корень Popup.
 * Управляет показом/скрытием и анимацией всплывающего окна.
 */
export const PopupRoot = forwardRef<HTMLDivElement, PopupRootProps>(
    ({ id, placement, offset, setVisible, children, role, frame, zIndex, animationInfo, ...rest }, ref) => {
        const contentRef = useRef<HTMLDivElement | null>(null);
        const innerRef = useForkRef<HTMLDivElement>(contentRef, ref);

        const popupController = usePopupContext();

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

        return (
            <PopupRootContainer
                className={classes.root}
                ref={innerRef}
                placement={placement}
                offset={offset}
                zIndex={zIndex}
                frame={frame}
                onAnimationEnd={handleAnimationEnd}
                onTransitionEnd={handleAnimationEnd}
                {...rest}
            >
                <PopupView role={role}>{children}</PopupView>
            </PopupRootContainer>
        );
    },
);
