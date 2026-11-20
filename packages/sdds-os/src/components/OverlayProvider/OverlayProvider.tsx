import { createOverlayProvider, mergeConfig, notificationConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config as notificationVerticalConfig } from '../Notification/Notification.config';

/**
 * Общий провайдер всплывающих слоёв: стек слоёв, z-index, Escape, клик вне, фокус, блокировка прокрутки
 * и область сообщений (Notification).
 */
export const OverlayProvider = createOverlayProvider({
    notificationConfig: mergeConfig(notificationConfig, notificationVerticalConfig),
});
