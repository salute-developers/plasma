import type { Preview } from '@storybook/react-vite';
import { withReactStrictMode, reactStrictModePreviewOption, disabledToolsParameters } from '@salutejs/plasma-sb-utils';

import storybookTheme from './theme';
import { docsPage } from './docsPage';
import { withTheme, DEFAULT_MODE, ON_DARK_MODE, ON_LIGHT_MODE } from './decoratorThemes';
import { SDDS_FINAI_LIGHT_THEME, SDDS_FINAI_DARK_THEME, DEFAULT_TENANT } from './themes';
import { withToast } from './decoratorToast';

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
                items: [SDDS_FINAI_LIGHT_THEME, SDDS_FINAI_DARK_THEME],
            },
        },
        tenant: {
            description: 'Global tenant for components',
            toolbar: {
                title: 'Tenant',
                icon: 'globe',
                items: [DEFAULT_TENANT, 'beta_core', 'high_contrast'],
                dynamicTitle: true,
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
        theme: SDDS_FINAI_LIGHT_THEME,
        tenant: DEFAULT_TENANT,
        viewContainer: DEFAULT_MODE,
    },
    parameters: {
        ...disabledToolsParameters,
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
                375: {
                    name: '375x812',
                    styles: {
                        width: '375px',
                        height: '812px',
                    },
                },
                768: {
                    name: '768x576',
                    styles: {
                        width: '768px',
                        height: '576px',
                    },
                },
                1024: {
                    name: '1024x768',
                    styles: {
                        width: '1024px',
                        height: '768px',
                    },
                },
                1920: {
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
