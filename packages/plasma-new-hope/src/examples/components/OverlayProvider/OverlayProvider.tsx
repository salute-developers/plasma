import React from 'react';
import type { ComponentType } from 'react';

import { createOverlayProvider } from '../../../components/OverlayProvider';
import { notificationConfig } from '../../../components/Notification';
import { mergeConfig } from '../../../engines';
import { ToastController } from '../Toast/Toast';
import { config as notificationExampleConfig } from '../Notification/Notification.config';

export const OverlayProvider = createOverlayProvider({
    toast: ToastController,
    notificationConfig: mergeConfig(notificationConfig, notificationExampleConfig),
});

/**
 * Декоратор Storybook: оборачивает историю в OverlayProvider.
 */
export const WithOverlayProvider = (Story: ComponentType) => (
    <OverlayProvider>
        <Story />
    </OverlayProvider>
);
