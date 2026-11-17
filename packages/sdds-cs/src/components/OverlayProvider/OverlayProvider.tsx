import { createOverlayProvider, mergeConfig, notificationConfig } from '@salutejs/plasma-new-hope/emotion';

import { ToastController } from '../Toast/Toast';
import { config as notificationVerticalConfig } from '../Notification/Notification.config';

/**
 * Общий провайдер всплывающих слоёв: стек слоёв, z-index, Escape, клик вне, фокус, блокировка прокрутки
 * и область сообщений (Toast и Notification).
 */
export const OverlayProvider = createOverlayProvider({
    toast: ToastController,
    notificationConfig: mergeConfig(notificationConfig, notificationVerticalConfig),
});
