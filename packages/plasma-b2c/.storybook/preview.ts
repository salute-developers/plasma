import type { Preview } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withTheme } from './decoratorThemes';
import { withToast } from './decoratorToast';

// Workaround: to make VoiceOver read russian text properly
if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', 'ru');
}

const preview: Preview = {
    decorators: [withKnobs, withTheme, withToast],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'dark',
            toolbar: {
                title: 'Theme',
                items: ['light', 'dark'],
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
        breakWord: {
            description: 'Break word for typography',
            defaultValue: 'yes',
            toolbar: {
                title: 'Break word',
                items: ['yes', 'no'],
            },
        },
    },
    parameters: {
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['About', 'Intro', 'Colors', 'Typography', 'Controls', 'Hooks'],
            },
        },
        docs: {
            source: { type: 'code' },
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
