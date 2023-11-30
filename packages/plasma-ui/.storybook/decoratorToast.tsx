import React from 'react';
import { ToastProvider } from '@salutejs/plasma-core';
import type { Decorator } from '@storybook/react';

export const withToast: Decorator = (Story) => (
    <ToastProvider>
        <Story />
    </ToastProvider>
);
