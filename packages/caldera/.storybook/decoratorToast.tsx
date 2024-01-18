import React from 'react';
import type { Decorator } from '@storybook/react';
import { ToastProvider } from '@salutejs/plasma-core';

export const withToast: Decorator = (Story) => (
    <ToastProvider>
        <Story />
    </ToastProvider>
);
