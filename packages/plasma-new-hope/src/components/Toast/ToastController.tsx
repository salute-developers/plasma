import React from 'react';
import type { FC } from 'react';

import { useMessagesZIndex } from '../OverlayProvider/ui/OverlayMessageLayer';

import { classes } from './Toast.tokens';
import { ToastControllerProps, ToastProps } from './Toast.types';
import { StyledOverlay, StyledRoot } from './Toast.styles';
import { useToastInner } from './ToastProvider';
import { FADE_Z_INDEX, TOAST_Z_INDEX, gradients } from './utils';

export const ToastControllerHoc = <T extends ToastProps>(ToastComponent: FC<T>) =>
    function ToastController(props: ToastControllerProps) {
        const { position = 'bottom', offset, fade, text, ...rest } = props;

        const { hideToast, isVisible, pauseTimer, resumeTimer } = useToastInner();
        const messagesZIndex = useMessagesZIndex();
        const toastKey = `${text}${position}`;

        const showedClass = isVisible ? classes.toastShowed : classes.toastHidden;
        const showedFadeClass = isVisible ? classes.toastFadeShowed : classes.toastFadeHidden;

        const toastProps = {
            text,
            onCloseButtonClick: hideToast,
            ...rest,
        } as T;

        if (!text) {
            return null;
        }

        return (
            <>
                {fade && (
                    <StyledOverlay
                        className={showedFadeClass}
                        zIndex={messagesZIndex || FADE_Z_INDEX}
                        backgroundColorProperty={gradients[position]}
                        isClickable={false}
                    />
                )}
                <StyledRoot
                    key={toastKey}
                    position={position}
                    offset={offset}
                    isVisible={isVisible}
                    zIndex={messagesZIndex || TOAST_Z_INDEX}
                    className={showedClass}
                    onMouseEnter={pauseTimer}
                    onMouseLeave={resumeTimer}
                    onFocus={pauseTimer}
                    onBlur={resumeTimer}
                >
                    <ToastComponent {...toastProps} />
                </StyledRoot>
            </>
        );
    };
