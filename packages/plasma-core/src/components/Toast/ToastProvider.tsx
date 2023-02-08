import React, { ReactNode, useState, useCallback } from 'react';

import { ToastInfo, ShowToastCallSignature, ShowToast } from './Toast.types';
import { ToastController } from './ToastController';
import { ToastContext } from './ToastContext';

const DEFAULT_POSITION = 'bottom';
const DEFAULT_TIMEOUT = 3000;
const DEFAULT_FADE = true;

const getShowToastCallSignature = (args: ShowToastCallSignature) => {
    if (typeof args[0] === 'object' && 'text' in args[0]) {
        return args[0];
    }

    // TODO: issue https://github.com/salute-developers/plasma/issues/333
    const [text, position, timeout, fade, contentLeft, role] = args;

    return { text, position, timeout, fade, contentLeft, role };
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState<ToastInfo>({ text: null, position: null, timeout: null });

    const showToastCallback: ShowToast = (...args: ShowToastCallSignature) => {
        const {
            text,
            position = DEFAULT_POSITION,
            timeout = DEFAULT_TIMEOUT,
            fade = DEFAULT_FADE,
            contentLeft,
            role,
            onHide,
            onShow,
        } = getShowToastCallSignature(args);

        setValue({
            text,
            position,
            timeout,
            fade,
            contentLeft,
            role,
            onHide,
            onShow,
        });

        if (onShow) {
            onShow();
        }
    };

    const showToast = useCallback(showToastCallback, []);

    const { onHide } = value;

    const hideToast = useCallback(() => {
        setValue({ text: null, position: null, timeout: null });

        if (onHide) {
            onHide();
        }
    }, [onHide]);

    return (
        <ToastContext.Provider value={{ ...value, showToast, hideToast }}>
            {children}
            <ToastController {...value} />
        </ToastContext.Provider>
    );
};
