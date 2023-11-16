import React from 'react';
import { ToastProvider } from '@salutejs/plasma-core';

export const withToast = (Story) => (
    <ToastProvider>
        <Story />
    </ToastProvider>
);
