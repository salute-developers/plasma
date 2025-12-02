import type { Preview } from '@storybook/react-vite';
// @ts-ignore
import { withViewContainer } from './decoratorViewContainer';
import { withReactStrictMode, reactStrictModePreviewOption } from '@salutejs/plasma-sb-utils';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const DEFAULT_MODE = 'default';
const ON_DARK_MODE = 'onDark';
const ON_LIGHT_MODE = 'onLight';

const preview: Preview = {
    decorators: [withViewContainer, withReactStrictMode],
    parameters: {
        docs: {
            source: { type: 'code', language: 'tsx' },
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                title: 'Theme',
                items: [LIGHT_THEME, DARK_THEME],
            },
        },
        viewContainer: {
            description: 'ViewContainer mode for components',
            toolbar: {
                title: 'ViewContainer',
                items: [DEFAULT_MODE, ON_DARK_MODE, ON_LIGHT_MODE],
            },
        },
        ...reactStrictModePreviewOption,
    },
    initialGlobals: {
        theme: LIGHT_THEME,
        viewContainer: DEFAULT_MODE,
    },
    tags: ['autodocs'],
};

export default preview;
