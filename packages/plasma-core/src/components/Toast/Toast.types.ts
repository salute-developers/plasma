import type { ReactNode } from 'react';

export type ToastPosition = 'top' | 'bottom';
export type ToastRole = 'alert' | 'log' | 'status';

type ToastCommonParameters = {
    contentLeft?: ReactNode;
    fade?: boolean;
    role?: ToastRole;
    /**
     * callback срабатывающий в момент события hideToast
     */
    onHide?: () => void;
    /**
     * callback срабатывающий в момент события showToast
     */
    onShow?: () => void;
    /**
     * Значение для дополнительно отступа блока подсказки, считается в rem.
     */
    offset?: number;
};

export type ToastInfo = ToastCommonParameters & {
    text: string | null;
    position: ToastPosition | null;
    timeout: number | null;
};

export interface Options extends ToastCommonParameters {
    text: string;
    position?: ToastPosition;
    timeout?: number;
}

export interface HideToast {
    hideToast: () => void;
}

// TODO: issue https://github.com/salute-developers/plasma/issues/333
type ShowToastCallSignatureLegacy = Parameters<
    (
        text: string,
        position?: ToastPosition,
        timeout?: number,
        fade?: boolean,
        contentLeft?: ReactNode,
        role?: ToastRole,
    ) => void
>;

type ShowToastCallSignatureCurrent = Parameters<(options: Options) => void>;

export interface ShowToast {
    /** @deprecated It is preferable to use the "Options" implementation */
    (...args: ShowToastCallSignatureLegacy): void;
    (...args: ShowToastCallSignature): void;
}

export type ShowToastCallSignature = ShowToastCallSignatureLegacy | ShowToastCallSignatureCurrent;
