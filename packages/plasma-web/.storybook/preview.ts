import type { Preview } from '@storybook/react';

import { withTheme, themesList } from './decoratorThemes';
import { withToast } from './decoratorToast';
import { docsPage } from './docsPage';
import storybookTheme from './theme';

// Workaround: to make VoiceOver read russian text properly
if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', 'ru');
}

const preview: Preview = {
    decorators: [withTheme, withToast],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'b2b:light',
            toolbar: {
                title: 'Theme',
                items: themesList,
            },
        },
        typoVersion: {
            description: 'Global typography version for components',
            defaultValue: 'standard',
            toolbar: {
                title: 'Typography version',
                items: ['standard', 'old'],
            },
        },
    },
    parameters: {
        docs: {
            page: docsPage,
            theme: storybookTheme,
            source: { type: 'code', languages: 'tsx' },
        },
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['About', 'Tokens', 'Layout', '*', 'Hooks'],
            },
        },
        viewport: {
            viewports: {
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
