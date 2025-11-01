import React from 'react';
import type { Decorator, StoryFn, StoryContext } from '@storybook/react';

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

export const withReactStrictMode: Decorator = (Story: StoryFn, context: StoryContext) => {
    if (!context.globals.reactStrictMode) {
        return <Story />;
    }

    return (
        <React.StrictMode>
            <Story />
        </React.StrictMode>
    );
};
