import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

import type { CustomToastProps, ToastControllerProps, ToastProps } from '../Toast.types';
import { DEFAULT_CLOSE_ICON_TYPE, DEFAULT_FADE, DEFAULT_POSITION, TIMER_DELAY } from '../utils';

import type {
    ShowToast,
    ShowToastArgs,
    ShowToastCallSignature,
    ToastContextType,
    ToastProviderProps,
} from './ToastProvider.types';

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
    const [
        text,
        position,
        timeout,
        fade,
        contentLeft,
        role,
        offset,
        pilled,
        width,
        hasClose,
        size,
        view,
        closeIconType,
        textColor,
        onHide,
        onShow,
    ] = args;

    return {
        text: text === undefined ? undefined : String(text),
        position,
        timeout,
        fade,
        contentLeft,
        role,
        offset,
        pilled,
        width,
        hasClose,
        size,
        view,
        closeIconType,
        textColor,
        onHide,
        onShow,
    };
};

export const ToastProviderHoc = <T extends ToastProps>(ToastComponent: FC<T>) =>
    function ToastProvider({ children, defaultToastArgs }: ToastProviderProps) {
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
                text = defaultToastArgs?.text,
                offset = defaultToastArgs?.offset,
                position = defaultToastArgs?.position || DEFAULT_POSITION,
                fade = defaultToastArgs?.fade || DEFAULT_FADE,
                timeout = defaultToastArgs?.timeout,
                contentLeft = defaultToastArgs?.contentLeft,
                role = defaultToastArgs?.role,
                pilled = defaultToastArgs?.pilled,
                hasClose = defaultToastArgs?.hasClose,
                size = defaultToastArgs?.size,
                view = defaultToastArgs?.view,
                width = defaultToastArgs?.width,
                closeIconType = defaultToastArgs?.closeIconType || DEFAULT_CLOSE_ICON_TYPE,
                textColor = defaultToastArgs?.textColor,
                onHide = defaultToastArgs?.onHide,
                onShow = defaultToastArgs?.onShow,
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
                closeIconType,
                textColor,
            });

            setToastInfo({ timeout, onHide });

            setIsHidden(false);
            setIsVisible(true);
            onShow?.();
        };

        const showToast = useCallback(showToastCallback, []);

        const { onHide, timeout } = toastInfo;

        const hideToast = useCallback(() => {
            if (hideTimeout?.current) {
                clearTimeout(hideTimeout.current);
                hideTimeout.current = null;
            }

            if (!isVisible) {
                return;
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

            return () => {
                if (animationRunTimeout?.current) {
                    clearTimeout(animationRunTimeout.current);
                }
            };
        }, [timeout]);

        // очистка таймаутов перенесена из ToastController, т. к. в StrictМоde react делает дополнительный unmount
        useEffect(() => {
            if (timeout && isVisible) {
                hideTimeout.current = setTimeout(() => {
                    hideToast();
                }, timeout);
            }

            return () => {
                if (hideTimeout?.current) {
                    clearTimeout(hideTimeout.current);
                    hideTimeout.current = null;
                }
            };
        }, [isVisible, timeout]);

        return (
            <ToastContext.Provider value={{ showToast, hideToast, isVisible, hideTimeout, animationRunTimeout }}>
                {children}
                {!isHidden && <ToastComponent {...(toastProps as T)} />}
            </ToastContext.Provider>
        );
    };
