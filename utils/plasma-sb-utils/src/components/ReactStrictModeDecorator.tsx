import React from 'react';
import type { Decorator } from '@storybook/react';

export const reactStrictModePreviewOption = {
    reactStrictMode: {
        description: 'Decorator for toggle react strict mode',
        toolbar: {
            title: 'React "Strict Mode"',
            items: [
                { value: false, title: 'Disabled' },
                { value: true, title: 'Enabled' },
            ],
        },
    },
};

export const withReactStrictMode: Decorator = (Story, context) => {
    if (!context.globals.reactStrictMode) {
        return <Story />;
    }

    return (
        <React.StrictMode>
            <Story />
        </React.StrictMode>
    );
};
