import React from 'react';
import type { Decorator } from '@storybook/react-vite';
import { ToastProvider } from '../src';

export const withToast: Decorator = (Story) => (
    <ToastProvider>
        <Story />
    </ToastProvider>
);
