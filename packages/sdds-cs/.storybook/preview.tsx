import type { Preview } from '@storybook/react-vite';

import storybookTheme from './theme';
import { docsPage } from './docsPage';
import { withTheme, SDDS_CS_LIGHT_THEME } from './decoratorThemes';
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
                items: [SDDS_CS_LIGHT_THEME],
            },
        },
        ...reactStrictModePreviewOption,
    },
    initialGlobals: {
        theme: SDDS_CS_LIGHT_THEME,
    },
    parameters: {
        docs: {
            page: docsPage,
            theme: storybookTheme,
            source: { type: 'code' },
        },
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['About', 'Tokens', 'Layout', '*', 'Hooks'],
            },
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
