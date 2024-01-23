import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode, FC } from 'react';

import type { CustomToastProps, ToastControllerProps, ToastProps } from '../Toast.types';
import { DEFAULT_FADE, DEFAULT_POSITION, TIMER_DELAY } from '../utils';

import type { ShowToast, ShowToastArgs, ShowToastCallSignature, ToastContextType } from './ToastProvider.types';

export const ToastContext = createContext<ToastContextType | null>(null);

export const useToastInner = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const useToast = () => {
    const { showToast, hideToast } = useToastInner();
    return { showToast, hideToast };
};

const initialToastData = {
    text: undefined,
    offset: undefined,
    position: DEFAULT_POSITION,
    fade: DEFAULT_FADE,
    timeout: undefined,
    contentLeft: undefined,
    role: undefined,
    pilled: undefined,
    hasClose: undefined,
    width: undefined,
    size: 'm',
    view: 'primary',
} as CustomToastProps;

const getShowToastCallSignature = (args: ShowToastCallSignature) => {
    if (typeof args[0] === 'object' && 'text' in args[0]) {
        return args[0];
    }

    // TODO: issue https://github.com/salute-developers/plasma/issues/333
    const [text, position, timeout, fade, contentLeft, role, offset, pilled, width, hasClose, size, view] = args;

    return { text, position, timeout, fade, contentLeft, role, offset, pilled, width, hasClose, size, view };
};

export const ToastProviderHoc = <T extends ToastProps>(ToastComponent: FC<T>) =>
    function ToastProvider({ children }: { children: ReactNode }) {
        const [isVisible, setIsVisible] = useState(false);
        const [isHidden, setIsHidden] = useState(true);
        const hideTimeout = useRef<number | null>(null);
        const animationRunTimeout = useRef<number | null>(null);

        const [toastProps, setToastProps] = useState<ToastControllerProps>(initialToastData);
        const [toastInfo, setToastInfo] = useState<Pick<ShowToastArgs, 'timeout' | 'onHide'>>({
            timeout: undefined,
            onHide: undefined,
        });

        const showToastCallback: ShowToast = (...args: ShowToastCallSignature) => {
            if (isVisible) {
                return;
            }

            const {
                text,
                offset,
                position = DEFAULT_POSITION,
                fade = DEFAULT_FADE,
                timeout,
                contentLeft,
                role,
                pilled,
                hasClose,
                size,
                view,
                width,
                onHide,
                onShow,
            } = getShowToastCallSignature(args);

            setToastProps({
                text,
                width,
                position,
                offset,
                fade,
                contentLeft,
                role,
                pilled,
                hasClose,
                size,
                view,
            });

            setToastInfo({ timeout, onHide });

            setIsHidden(false);
            setIsVisible(true);
            onShow?.();
        };

        const showToast = useCallback(showToastCallback, []);

        const { onHide, timeout } = toastInfo;

        const hideToast = useCallback(() => {
            if (!isVisible) {
                return;
            }

            if (hideTimeout?.current) {
                clearTimeout(hideTimeout.current);
                hideTimeout.current = null;
            }

            onHide?.();
            setIsVisible(false);

            animationRunTimeout.current = setTimeout(() => {
                setIsHidden(true);
                setToastProps(initialToastData);
            }, TIMER_DELAY);
        }, [onHide, isVisible, isHidden]);

        useEffect(() => {
            if (timeout === null && animationRunTimeout.current !== null) {
                clearTimeout(animationRunTimeout.current);
                animationRunTimeout.current = null;
            }
        }, [timeout]);

        useEffect(() => {
            if (timeout && isVisible) {
                hideTimeout.current = setTimeout(() => {
                    hideToast();
                }, timeout);
            }
        }, [isVisible, timeout]);

        return (
            <ToastContext.Provider value={{ showToast, hideToast, isVisible, hideTimeout, animationRunTimeout }}>
                {children}
                {!isHidden && <ToastComponent {...(toastProps as T)} />}
            </ToastContext.Provider>
        );
    };
