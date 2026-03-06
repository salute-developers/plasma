import { addons, types } from 'storybook/manager-api';
import theme from './theme';
import React from 'react';

addons.setConfig({
    theme,
});

addons.register('theme-switcher', (api) => {
    addons.add('theme-switcher/tool', {
        title: 'Theme Switcher',
        type: types.TOOL,
        match: ({ viewMode }) => viewMode === 'story',
        render: () => {
            const isDark = localStorage.getItem('sbTheme') === 'dark';

            return (
                <button
                    onClick={() => {
                        const newTheme = isDark ? 'light' : 'dark';
                        localStorage.setItem('sbTheme', newTheme);
                        location.reload(); // Storybook needs refresh to apply UI theme
                    }}
                >
                    {isDark ? '🌞 Light' : '🌚 Dark'}
                </button>
            );
        },
    });
});
