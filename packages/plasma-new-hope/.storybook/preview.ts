import type { Preview } from '@storybook/react';
import { withViewContainer } from './decoratorViewContainer';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const preview: Preview = {
    decorators: [withViewContainer],
    parameters: {
        docs: {
            source: { type: 'code', language: 'tsx' },
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: LIGHT_THEME,
            toolbar: {
                title: 'Theme',
                items: [LIGHT_THEME, DARK_THEME],
            },
        },
    },
};

export default preview;
