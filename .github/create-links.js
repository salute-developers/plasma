module.exports = () => {
    const { PACKAGES_DS, BASE_URL } = process.env;

    const links = JSON.parse(PACKAGES_DS)
        .map((item) => {
            const name = item.replace('plasma-', '');

            return `${name} storybook: ${BASE_URL}/${name}-storybook/`;
        })
        .join('\n');

    return 'Documentation preview deployed!' + '\n\n' + `website:${BASE_URL}/` + '\n' + `${links}`;
};
