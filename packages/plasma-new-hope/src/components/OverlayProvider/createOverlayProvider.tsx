import React from 'react';
import type { FC, ReactNode } from 'react';

import { ToastProviderHoc } from '../Toast/ToastProvider';
import type { ToastProviderProps } from '../Toast/ToastProvider/ToastProvider.types';
import type { ToastControllerProps, ToastProps } from '../Toast/Toast.types';
import { NotificationsProvider } from '../Notification/NotificationsProvider';
import type { NotificationsProviderProps } from '../Notification/Notification.types';

import { OverlayProvider as OverlayProviderBase } from './OverlayProvider';
import type { OverlayProviderProps } from './OverlayProvider.types';

export type OverlayToastOptions = Omit<ToastProviderProps, 'children'>;

export type OverlayNotificationsOptions = Omit<NotificationsProviderProps, 'children' | 'config'>;

export interface OverlayProviderWithMessagesProps extends OverlayProviderProps {
    /**
     * Настройки Toast. `false` отключает встроенную область Toast.
     * По умолчанию новые сообщения ставятся в очередь.
     */
    toast?: false | OverlayToastOptions;
    /**
     * Настройки Notification. `false` отключает встроенную область оповещений.
     */
    notifications?: false | OverlayNotificationsOptions;
    children?: ReactNode;
}

export interface CreateOverlayProviderOptions {
    /**
     * ToastController вертикали (`ToastControllerHoc(Toast)`).
     */
    toast?: FC<ToastControllerProps>;
    /**
     * Конфигурация Notification вертикали.
     */
    notificationConfig?: NotificationsProviderProps['config'];
}

/**
 * Создаёт OverlayProvider вертикали: общий стек слоёв и область сообщений с Toast и Notification
 * этой вертикали. Заменяет отдельные PopupProvider, ToastProvider и NotificationsProvider.
 */
export const createOverlayProvider = ({ toast, notificationConfig }: CreateOverlayProviderOptions = {}) => {
    const ToastProvider = toast ? ToastProviderHoc(toast as FC<ToastProps>) : null;

    const OverlayProvider: FC<OverlayProviderWithMessagesProps> = ({
        children,
        toast: toastOptions,
        notifications: notificationsOptions,
        ...rest
    }) => {
        let content = children;

        if (notificationConfig && notificationsOptions !== false) {
            content = (
                <NotificationsProvider
                    config={notificationConfig}
                    frame="document"
                    UNSAFE_SSR_ENABLED={rest.UNSAFE_SSR_ENABLED}
                    {...notificationsOptions}
                >
                    {content}
                </NotificationsProvider>
            );
        }

        if (ToastProvider && toastOptions !== false) {
            content = (
                <ToastProvider queue {...toastOptions}>
                    {content}
                </ToastProvider>
            );
        }

        return <OverlayProviderBase {...rest}>{content}</OverlayProviderBase>;
    };

    return OverlayProvider;
};
