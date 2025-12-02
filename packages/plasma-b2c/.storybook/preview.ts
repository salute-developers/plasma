import type { Preview } from '@storybook/react-vite';
import { withTheme, DEFAULT_MODE, ON_DARK_MODE, ON_LIGHT_MODE } from './decoratorThemes';
import { withToast } from './decoratorToast';
import { withReactStrictMode, reactStrictModePreviewOption } from '@salutejs/plasma-sb-utils';

// Workaround: to make VoiceOver read russian text properly
if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', 'ru');
}

const preview: Preview = {
    decorators: [withTheme, withToast, withReactStrictMode],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                title: 'Theme',
                items: ['light', 'dark'],
            },
        },
        typoVersion: {
            description: 'Global typography version for components',
            toolbar: {
                title: 'Typography version',
                items: ['standard', 'old'],
            },
        },
        breakWord: {
            description: 'Break word for typography',
            toolbar: {
                title: 'Break word',
                items: ['yes', 'no'],
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
        theme: 'dark',
        typoVersion: 'standard',
        breakWord: 'yes',
        viewContainer: DEFAULT_MODE,
    },
    parameters: {
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['About', 'Tokens', 'Layout', '*', 'Hooks'],
            },
        },
        docs: {
            source: { type: 'code' },
        },
        viewport: {
            options: {
                '375': {
                    name: '375x812',
                    styles: {
                        width: '375px',
                        height: '812px',
                    },
                },
                '768': {
                    name: '768x576',
                    styles: {
                        width: '768px',
                        height: '576px',
                    },
                },
                '1024': {
                    name: '1024x768',
                    styles: {
                        width: '1024px',
                        height: '768px',
                    },
                },
                '1920': {
                    name: '1920x1080',
                    styles: {
                        width: '1920px',
                        height: '1080px',
                    },
                },
            },
        },
    },
};

export default preview;
