import React from 'react';
import type { Decorator, StoryFn } from '@storybook/react';

export const InSpacing: Decorator = (Story: StoryFn) => (
    <div style={{ padding: '1rem' }}>
        <Story />
    </div>
);
