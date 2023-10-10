import React, { useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';

import { useForkRef } from '../../hooks';

import { usePopupBaseContext } from './PopupBaseContext';
import { handlePosition } from './utils';
import { PopupBasePlacement, PopupInfo, PopupRootProps } from './types';

interface VisibleProps {
    endTransition?: boolean;
    endAnimation?: boolean;
    placement?: PopupBasePlacement;
    offset?: [number | string, number | string];
    frame?: 'document' | React.RefObject<HTMLElement>;
    id?: string;
    withAnimation?: boolean;
    popupInfo?: PopupInfo;
    zIndex?: string;
}

export const DEFAULT_Z_INDEX = 9000;

const PopupBaseView = styled.div`
    position: relative;
    max-width: 100%;
    pointer-events: all;
`;

const Container = styled.div<VisibleProps>`
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
 * Управляет показом/скрытием и анимацией(?) высплывающего окна.
 */
export const PopupBaseRoot = React.forwardRef<HTMLDivElement, PopupRootProps>(
    (
        { children, role, zIndex, hookInfo, ...rest },
        ref,
    ) => {
        // Внутренее состояние, необходимое для правильного отображения вложенных окон, а также для анимации
        const { id, placement, offset, frame, setVisible, endAnimation, setEndAnimation, withAnimation } = hookInfo;

        const contentRef = useRef<HTMLDivElement | null>(null);
        const innerRef = useForkRef<HTMLDivElement>(contentRef, ref);

        const popupController = usePopupBaseContext();

        const handleAnimationEnd = useCallback((e: React.AnimationEvent<HTMLDivElement>) => {
            if (!contentRef || e.target !== contentRef.current) {
                return;
            }
            e.stopPropagation();
            if (endAnimation) {
                popupController.unregister(id);
                setVisible(false);
                setEndAnimation(false);
            }
        }, [popupController.unregister, endAnimation, setEndAnimation, setVisible]);

        const handleTransitionEnd = useCallback(async (e: React.TransitionEvent<HTMLDivElement>) => {
            if (!contentRef || e.target !== contentRef.current) {
                return;
            }
            e.stopPropagation();
            if (endAnimation) {
                popupController.unregister(id);
                setVisible(false);
                setEndAnimation(false);
            }
        }, [popupController.unregister, endAnimation, setEndAnimation, setVisible]);

        return (
            <Container
                ref={innerRef}
                placement={placement}
                frame={frame}
                offset={offset}
                zIndex={zIndex}
                withAnimation={withAnimation}
                endAnimation={endAnimation}
                onAnimationEnd={handleAnimationEnd}
                onTransitionEnd={handleTransitionEnd}
                {...rest}
            >
                <PopupBaseView role={role}>
                    {children}
                </PopupBaseView>
            </Container>
        );
    },
);
