const getStorybookShortName = (packageName) => packageName.replace(/^plasma-/, '');

module.exports = () => {
    const { DEPLOYED_PACKAGES, BASE_URL, INCLUDE_WEBSITE } = process.env;
    const deployedPackages = JSON.parse(DEPLOYED_PACKAGES || '[]');
    const includeWebsite = INCLUDE_WEBSITE === 'true';

    const storybookLinks = deployedPackages
        .map((packageName) => {
            const name = getStorybookShortName(packageName);

            return `${name} storybook: ${BASE_URL}/${name}-storybook/`;
        })
        .join('\n');

    const parts = ['Documentation preview deployed!', ''];

    if (includeWebsite) {
        parts.push(`website: ${BASE_URL}/`);
    }

    if (storybookLinks) {
        if (includeWebsite) {
            parts.push('');
        }

        parts.push(storybookLinks);
    }

    if (!includeWebsite && !storybookLinks) {
        return 'Documentation preview deploy finished with no published links.';
    }

    return parts.join('\n');
};
