import React from 'react';
import { ToastProvider } from '../src/components/Toast';

export const withToast = (Story) => (
    <ToastProvider>
        <Story />
    </ToastProvider>
);
