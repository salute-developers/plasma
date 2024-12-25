import type { Preview } from '@storybook/react';
import { withViewContainer } from './decoratorViewContainer';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const DEFAULT_MODE = 'default';
const ON_DARK_MODE = 'onDark';
const ON_LIGHT_MODE = 'onLight';

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
        viewContainer: {
            description: 'ViewContainer mode for components',
            defaultValue: DEFAULT_MODE,
            toolbar: {
                title: 'ViewContainer',
                items: [DEFAULT_MODE, ON_DARK_MODE, ON_LIGHT_MODE],
            },
        },
    },
    tags: ['autodocs'],
};

export default preview;
