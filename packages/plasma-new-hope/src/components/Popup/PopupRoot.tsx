import React, { useCallback, useRef } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { usePopupContext } from './PopupContext';
import { PopupRootProps } from './Popup.types';
import { PopupRootContainer, PopupView } from './Popup.styles';
import { popupRootClass } from './Popup.utils';

/**
 * Корень Popup.
 * Управляет показом/скрытием и анимацией всплывающего окна.
 */
export const PopupRoot = React.forwardRef<HTMLDivElement, PopupRootProps>(
    ({ id, placement, offset, frame, setVisible, children, role, zIndex, animationInfo, className, ...rest }, ref) => {
        const contentRef = useRef<HTMLDivElement | null>(null);
        const innerRef = useForkRef<HTMLDivElement>(contentRef, ref);

        const popupController = usePopupContext();

        const handleAnimationEnd = useCallback(
            (e: React.AnimationEvent<HTMLDivElement> | React.TransitionEvent<HTMLDivElement>) => {
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
            [popupController.unregister, animationInfo, setVisible],
        );

        return (
            <PopupRootContainer
                className={popupRootClass}
                ref={innerRef}
                placement={placement}
                frame={frame}
                offset={offset}
                zIndex={zIndex}
                onAnimationEnd={handleAnimationEnd}
                onTransitionEnd={handleAnimationEnd}
                {...rest}
            >
                <PopupView role={role}>{children}</PopupView>
            </PopupRootContainer>
        );
    },
);
