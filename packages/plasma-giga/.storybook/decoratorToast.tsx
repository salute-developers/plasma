import React from 'react';
import type { Decorator } from '@storybook/react';
import { ToastProvider } from '../src/components/Toast';

export const withToast: Decorator = (Story) => (
    <ToastProvider>
        <Story />
    </ToastProvider>
);
