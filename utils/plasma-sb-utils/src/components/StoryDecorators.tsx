import React from 'react';
import { Decorator } from '@storybook/react';

export const InSpacing: Decorator = (Story) => (
    <div style={{ padding: '1rem' }}>
        <Story />
    </div>
);
