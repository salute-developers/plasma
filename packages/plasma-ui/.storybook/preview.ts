import type { Preview } from '@storybook/react';

import storybookTheme from './theme';
import { docsPage } from './docsPage';
import { withTheme } from './decoratorThemes';
import { withToast } from './decoratorToast';

// Workaround: to make VoiceOver read russian text properly
if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', 'ru');
}

const preview: Preview = {
    decorators: [withTheme, withToast],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'darkSber',
            toolbar: {
                title: 'Theme',
                items: ['darkSber', 'darkJoy', 'darkEva', 'darkB2E', 'lightSber', 'lightJoy', 'lightEva', 'lightB2E'],
            },
        },
        typoSystem: {
            description: 'Typography system',
            defaultValue: 'legacy',
            toolbar: {
                title: 'Typo system',
                items: ['legacy', 'responsive'],
            },
        },
        deviceKind: {
            description: 'Device kind',
            defaultValue: 'sberBox',
            toolbar: {
                title: 'Device kind',
                items: ['mobile', 'sberBox', 'sberPortal'],
            },
        },
        lowPerformanceDevice: {
            description: 'Low performance device',
            defaultValue: 'no',
            toolbar: {
                title: 'Low performance',
                items: ['yes', 'no'],
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
        docs: {
            page: docsPage,
            theme: storybookTheme,
            source: { type: 'code' },
        },
        viewport: {
            defaultViewport: 'SberBox',
            viewports: {
                '360': {
                    name: '360',
                    styles: {
                        width: '360px',
                        height: '640px',
                    },
                },
                '720': {
                    name: '720',
                    styles: {
                        width: '720px',
                        height: '405px',
                    },
                },
                '860': {
                    name: '860',
                    styles: {
                        width: '860px',
                        height: '640px',
                    },
                },
                '1024': {
                    name: '1024',
                    styles: {
                        width: '1024px',
                        height: '768px',
                    },
                },
                SberPortal: {
                    name: 'SberPortal',
                    styles: {
                        width: '1280px',
                        height: '720px',
                    },
                },
                SberBox: {
                    name: 'SberBox',
                    styles: {
                        width: '1920px',
                        height: '1080px',
                    },
                },
            },
        },
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['About', 'Colors', 'Typography', 'Tokens', 'Layout', 'Content', 'Controls', 'Showcase'],
            },
        },
    },
};

export default preview;
