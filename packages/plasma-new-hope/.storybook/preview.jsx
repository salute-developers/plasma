const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

export const globalTypes = {
    theme: {
        description: 'Global theme for components',
        defaultValue: LIGHT_THEME,
        toolbar: {
            title: 'Theme',
            items: [LIGHT_THEME, DARK_THEME],
        },
    },
};
