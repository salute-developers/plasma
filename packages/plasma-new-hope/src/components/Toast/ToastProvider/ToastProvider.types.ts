import type { MutableRefObject, ReactNode } from 'react';

import type { ToastControllerProps, ToastPosition, ToastRole } from '../Toast.types';

export type ShowToastArgs = ToastControllerProps & {
    text: string;
    /**
     * Время отображения подсказки. Если не передать значение подсказка будет отображаться пока ее не закроют.
     */
    timeout?: number;
    /**
     * callback срабатывающий в момент события hideToast
     */
    onHide?: () => void;
    /**
     * callback срабатывающий в момент события showToast
     */
    onShow?: () => void;
};

// TODO: issue https://github.com/salute-developers/plasma/issues/333
type ShowToastCallSignatureLegacy = Parameters<
    (
        text: string,
        position?: ToastPosition,
        timeout?: number,
        fade?: boolean,
        contentLeft?: ReactNode,
        role?: ToastRole,
        offset?: number,
        pilled?: boolean,
        width?: string | number,
        hasClose?: boolean,
        size?: string,
        view?: string,
    ) => void
>;

type ShowToastCallSignatureCurrent = Parameters<(options: ShowToastArgs) => void>;

export type ShowToast = {
    /** @deprecated It is preferable to use the "Options" implementation */
    (...args: ShowToastCallSignatureLegacy): void;
    (...args: ShowToastCallSignature): void;
};

export type ShowToastCallSignature = ShowToastCallSignatureLegacy | ShowToastCallSignatureCurrent;

export type ToastContextType = {
    isVisible: boolean;
    hideTimeout: MutableRefObject<number | null>;
    animationRunTimeout: MutableRefObject<number | null>;
    showToast: ShowToast;
    hideToast: () => void;
};
