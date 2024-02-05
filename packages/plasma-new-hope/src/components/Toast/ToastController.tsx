import React, { useEffect } from 'react';
import type { FC } from 'react';

import { classes } from './Toast.tokens';
import { ToastControllerProps, ToastProps } from './Toast.types';
import { StyledOverlay, StyledRoot } from './Toast.styles';
import { useToastInner } from './ToastProvider';
import { FADE_Z_INDEX, gradients } from './utils';

export const ToastControllerHoc = <T extends ToastProps>(ToastComponent: FC<T>) =>
    function ToastController(props: ToastControllerProps) {
        const { position = 'bottom', offset, fade, text, ...rest } = props;

        const { hideToast, isVisible, hideTimeout, animationRunTimeout } = useToastInner();
        const toastKey = `${text}${position}`;

        const showedClass = isVisible ? classes.toastShowed : classes.toastHidden;
        const showedFadeClass = isVisible ? classes.toastFadeShowed : classes.toastFadeHidden;

        const toastProps = {
            text,
            onCloseButtonClick: hideToast,
            ...rest,
        } as T;

        useEffect(() => {
            return () => {
                if (hideTimeout?.current) {
                    clearTimeout(hideTimeout.current);
                }
                if (animationRunTimeout?.current) {
                    clearTimeout(animationRunTimeout.current);
                }
            };
        }, []);

        if (!text) {
            return null;
        }

        return (
            <>
                {fade && (
                    <StyledOverlay
                        className={showedFadeClass}
                        zIndex={FADE_Z_INDEX}
                        backgroundColorProperty={gradients[position]}
                        isClickable={false}
                    />
                )}
                <StyledRoot
                    key={toastKey}
                    position={position}
                    offset={offset}
                    isVisible={isVisible}
                    className={showedClass}
                >
                    <ToastComponent {...toastProps} />
                </StyledRoot>
            </>
        );
    };
