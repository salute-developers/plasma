// Плагин собирается с новым JSX-runtime (`jsx: react-jsx`): импорт React в файлах с JSX не нужен.
module.exports = {
    rules: {
        'react/react-in-jsx-scope': 'off',
    },
};
