import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

import type { CustomToastProps, ToastControllerProps, ToastProps } from '../Toast.types';
import { DEFAULT_CLOSE_ICON_TYPE, DEFAULT_FADE, DEFAULT_POSITION, TIMER_DELAY } from '../utils';
import { OverlayMessageLayer } from '../../OverlayProvider/ui/OverlayMessageLayer';

import type {
    ShowToast,
    ShowToastArgs,
    ShowToastCallSignature,
    ToastContextType,
    ToastProviderProps,
} from './ToastProvider.types';

export const ToastContext = createContext<ToastContextType | null>(null);

const DEFAULT_MAX_QUEUE_LENGTH = 5;

export const useToastInner = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider or OverlayProvider');
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

const isSameToast = (a: ShowToastArgs, b: ShowToastArgs) =>
    a.text === b.text && a.position === b.position && a.view === b.view;

/**
 * @deprecated Используйте OverlayProvider: он включает область Toast.
 * Локальное использование ToastProvider продолжает работать.
 */
export const ToastProviderHoc = <T extends ToastProps>(ToastComponent: FC<T>) =>
    function ToastProvider({
        children,
        defaultToastArgs,
        queue = false,
        maxQueueLength = DEFAULT_MAX_QUEUE_LENGTH,
    }: ToastProviderProps) {
        const [isVisible, setIsVisible] = useState(false);
        const [isHidden, setIsHidden] = useState(true);
        const hideTimeout = useRef<number | null>(null);
        const animationRunTimeout = useRef<number | null>(null);

        const isVisibleRef = useRef(false);
        const currentToastRef = useRef<ShowToastArgs | null>(null);
        const queueRef = useRef<ShowToastArgs[]>([]);
        const timerRef = useRef({ startedAt: 0, remaining: 0, paused: false });
        const settingsRef = useRef({ defaultToastArgs, queue, maxQueueLength });
        settingsRef.current = { defaultToastArgs, queue, maxQueueLength };

        const [toastProps, setToastProps] = useState<ToastControllerProps>(initialToastData);
        const [toastInfo, setToastInfo] = useState<Pick<ShowToastArgs, 'timeout' | 'onHide'>>({
            timeout: undefined,
            onHide: undefined,
        });

        const displayToast = useCallback((args: ShowToastArgs) => {
            const { defaultToastArgs: defaults } = settingsRef.current;
            const {
                text = defaults?.text,
                offset = defaults?.offset,
                position = defaults?.position || DEFAULT_POSITION,
                fade = defaults?.fade || DEFAULT_FADE,
                timeout = defaults?.timeout,
                contentLeft = defaults?.contentLeft,
                role = defaults?.role,
                pilled = defaults?.pilled,
                hasClose = defaults?.hasClose,
                size = defaults?.size,
                view = defaults?.view,
                width = defaults?.width,
                closeIconType = defaults?.closeIconType || DEFAULT_CLOSE_ICON_TYPE,
                textColor = defaults?.textColor,
                onHide = defaults?.onHide,
                onShow = defaults?.onShow,
            } = args;

            if (animationRunTimeout.current) {
                clearTimeout(animationRunTimeout.current);
                animationRunTimeout.current = null;
            }

            currentToastRef.current = args;
            timerRef.current.paused = false;

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

            isVisibleRef.current = true;
            setIsHidden(false);
            setIsVisible(true);
            onShow?.();
        }, []);

        const showToast: ShowToast = useCallback((...args: ShowToastCallSignature) => {
            const toastArgs = getShowToastCallSignature(args) as ShowToastArgs;
            const { queue: withQueue, maxQueueLength: limit } = settingsRef.current;

            if (withQueue && isVisibleRef.current) {
                const isDuplicate =
                    (currentToastRef.current && isSameToast(currentToastRef.current, toastArgs)) ||
                    queueRef.current.some((queued) => isSameToast(queued, toastArgs));

                if (!isDuplicate && queueRef.current.length < limit) {
                    queueRef.current.push(toastArgs);
                }

                return;
            }

            displayToast(toastArgs);
        }, []);

        const { onHide, timeout } = toastInfo;

        const clearHideTimeout = () => {
            if (hideTimeout?.current) {
                clearTimeout(hideTimeout.current);
                hideTimeout.current = null;
            }
        };

        const hideToast = useCallback(() => {
            clearHideTimeout();

            if (!isVisible) {
                return;
            }

            onHide?.();
            isVisibleRef.current = false;
            currentToastRef.current = null;
            setIsVisible(false);

            animationRunTimeout.current = setTimeout(() => {
                animationRunTimeout.current = null;
                const next = queueRef.current.shift();

                if (next) {
                    displayToast(next);
                    return;
                }

                setIsHidden(true);
                setToastProps(initialToastData);
            }, TIMER_DELAY);
        }, [onHide, isVisible, isHidden]);

        const hideToastRef = useRef(hideToast);
        hideToastRef.current = hideToast;

        const startTimer = (ms: number) => {
            clearHideTimeout();
            timerRef.current.startedAt = Date.now();
            timerRef.current.remaining = ms;
            hideTimeout.current = setTimeout(() => hideToastRef.current(), ms);
        };

        // Таймер приостанавливается при наведении и фокусе внутри сообщения.
        const pauseTimer = useCallback(() => {
            if (!hideTimeout.current || timerRef.current.paused) {
                return;
            }

            clearHideTimeout();
            timerRef.current.paused = true;
            timerRef.current.remaining = Math.max(
                timerRef.current.remaining - (Date.now() - timerRef.current.startedAt),
                0,
            );
        }, []);

        const resumeTimer = useCallback(() => {
            if (!timerRef.current.paused || !isVisibleRef.current) {
                return;
            }

            timerRef.current.paused = false;
            startTimer(timerRef.current.remaining);
        }, []);

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
                startTimer(timeout);
            }

            return () => {
                clearHideTimeout();
            };
        }, [isVisible, timeout, toastProps]);

        return (
            <ToastContext.Provider
                value={{ showToast, hideToast, isVisible, hideTimeout, animationRunTimeout, pauseTimer, resumeTimer }}
            >
                {children}
                <OverlayMessageLayer opened={!isHidden}>
                    {!isHidden && <ToastComponent {...(toastProps as T)} />}
                </OverlayMessageLayer>
            </ToastContext.Provider>
        );
    };
