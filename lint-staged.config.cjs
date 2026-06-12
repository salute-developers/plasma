module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    '*.{jsx,tsx}': ['stylelint'],
    '*.md': ['prettier --write --parser markdown'],
    '*.json': (files) => {
        const format = files.filter((f) => !f.endsWith('package-lock.json'));

        return format.length
            ? [`prettier --write --parser json ${format.map((f) => `"${f}"`).join(' ')}`]
            : [];
    },
};
