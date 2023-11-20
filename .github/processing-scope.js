const CYPRESS_SCOPE = [
    '@salutejs/plasma-web',
    '@salutejs/plasma-b2c',
    '@salutejs/plasma-ui',
    '@salutejs/plasma-temple',
];

module.exports = () => {
    const { CHANGED_STATE, AS_ENUMERATION } = process.env;

    /**
     *
     * @param CHANGED_STATE Information about the changed state
     * @param CHANGED_STATE.name The name of the package.
     * @param CHANGED_STATE.version The version of the package.
     * @param CHANGED_STATE.private The type of the package.
     * @param CHANGED_STATE.location The path of the package.
     *
     * @example
     * {
     *   "name": "@salutejs/plasma-website",
     *   "version": "0.184.0",
     *   "private": true,
     *   "location": "/Users/workspace/plasma/website/plasma-website"
     *  }
     */
    const changedState = JSON.parse(JSON.parse(CHANGED_STATE));

    if (!changedState || !changedState.length) {
        return { SCOPE: [], HAS_SCOPE: false };
    }

    const packagesList = changedState.map(({ name }) => name);

    const HAS_PLASMA_UI_DOCS = packagesList.includes('@salutejs/plasma-ui-docs');
    const HAS_PLASMA_WEB_DOCS = packagesList.includes('@salutejs/plasma-web-docs');
    const HAS_PLASMA_TEMPLE_DOCS = packagesList.includes('@salutejs/plasma-temple-docs');

    const HAS_PLASMA_UI = packagesList.includes('@salutejs/plasma-ui');
    const HAS_PLASMA_WEB = packagesList.includes('@salutejs/plasma-web');
    const HAS_PLASMA_B2C = packagesList.includes('@salutejs/plasma-b2c');
    const HAS_PLASMA_TEMPLE = packagesList.includes('@salutejs/plasma-temple');
    const HAS_PLASMA_HOPE = packagesList.includes('@salutejs/plasma-new-hope');
    const HAS_PLASMA_ASDK = packagesList.includes('@salutejs/plasma-asdk');
    const HAS_PLASMA_WEBSITE = packagesList.includes('@salutejs/plasma-website');

    const HAS_DOCUMENTATION_CHANGED =
        HAS_PLASMA_WEBSITE || HAS_PLASMA_UI_DOCS || HAS_PLASMA_WEB_DOCS || HAS_PLASMA_TEMPLE_DOCS || HAS_PLASMA_ASDK;

    /**
     * List short packages name
     * @example
     * ["web", "ui", "b2c"]
     */
    const scope = packagesList.filter((item) => CYPRESS_SCOPE.includes(item)).map((item) => `"${item.split('-')[1]}"`);

    /**
     * Enumeration packages name
     * @example
     * ["plasma-web", "plasma-ui", "plasma-b2c"]
     */
    const packagesEnumeration = AS_ENUMERATION === 'true' ? packagesList.map((item) => `"${item.split('/')[1]}"`) : [];

    console.log('packagesEnumeration =>', packagesEnumeration);
    console.log('packagesList =>', packagesList);

    return {
        SCOPE: JSON.stringify(scope),
        PACKAGES_ENUMERATION: JSON.stringify(packagesEnumeration),
        HAS_SCOPE: Boolean(scope.length),
        HAS_DOCUMENTATION_CHANGED,
        HAS_PLASMA_UI_DOCS,
        HAS_PLASMA_WEB_DOCS,
        HAS_PLASMA_TEMPLE_DOCS,
        HAS_PLASMA_UI,
        HAS_PLASMA_WEB,
        HAS_PLASMA_B2C,
        HAS_PLASMA_TEMPLE,
        HAS_PLASMA_HOPE,
        HAS_PLASMA_ASDK,
    };
};
