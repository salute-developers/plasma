module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    'packages/plasma-new-hope/src/**/*.{ts,tsx}': () => [
        'npm run generate:api-props',
        'git add utils/plasma-sb-utils/src/apiProps.generated.ts',
    ],
    '*.{jsx,tsx}': ['stylelint'],
    '*.md': ['prettier --write --parser markdown'],
    '*.json': (files) => {
        const format = files.filter((f) => !f.endsWith('package-lock.json'));

        return format.length ? [`prettier --write --parser json ${format.map((f) => `"${f}"`).join(' ')}`] : [];
    },
};
