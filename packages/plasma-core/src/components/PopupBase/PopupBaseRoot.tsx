import React, { useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';

import { useForkRef } from '../../hooks';

import { usePopupBaseContext } from './PopupBaseContext';
import { handlePosition, popupBaseRootClass } from './utils';
import { PopupRootContainerProps, PopupRootProps } from './types';

export const DEFAULT_Z_INDEX = 9000;

const PopupBaseView = styled.div`
    position: relative;
    max-width: 100%;
    pointer-events: all;
`;

const PopupRootContainer = styled.div<PopupRootContainerProps>`
    ${({ frame }) => css`
        position: ${frame === 'document' ? 'fixed' : 'absolute'};
    `}

    ${({ zIndex }) => css`
        z-index: ${zIndex || DEFAULT_Z_INDEX};
    `}

    ${({ placement, offset }) => handlePosition(placement, offset)};
`;

/**
 * Корень PopupBase.
 * Управляет показом/скрытием и анимацией всплывающего окна.
 */
export const PopupBaseRoot = React.forwardRef<HTMLDivElement, PopupRootProps>(
    ({ id, placement, offset, frame, setVisible, children, role, zIndex, animationInfo, ...rest }, ref) => {
        const contentRef = useRef<HTMLDivElement | null>(null);
        const innerRef = useForkRef<HTMLDivElement>(contentRef, ref);

        const popupController = usePopupBaseContext();

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
            [popupController.unregister, animationInfo?.endAnimation, setVisible],
        );

        return (
            <PopupRootContainer
                className={popupBaseRootClass}
                ref={innerRef}
                placement={placement}
                frame={frame}
                offset={offset}
                zIndex={zIndex}
                onAnimationEnd={handleAnimationEnd}
                onTransitionEnd={handleAnimationEnd}
                {...rest}
            >
                <PopupBaseView role={role}>{children}</PopupBaseView>
            </PopupRootContainer>
        );
    },
);
