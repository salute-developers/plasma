const CYPRESS_SCOPE = [
    '@salutejs/plasma-web',
    '@salutejs/plasma-b2c',
    '@salutejs/plasma-ui',
    '@salutejs/plasma-temple',
];

module.exports = () => {
    const { CHANGED_STATE } = process.env;

    if (!CHANGED_STATE) {
        return { SCOPE: [], HAS_SCOPE: false };
    }

    const packagesList = CHANGED_STATE.split(',');

    console.log(packagesList);

    const HAS_PLASMA_UI_DOCS = packagesList.includes('@salutejs/plasma-ui-docs');
    const HAS_PLASMA_WEB_DOCS = packagesList.includes('@salutejs/plasma-web-docs');
    const HAS_PLASMA_TEMPLE_DOCS = packagesList.includes('@salutejs/plasma-temple-docs');
    const HAS_PLASMA_WEBSITE = packagesList.includes('@salutejs/plasma-website');

    const HAS_PLASMA_UI = packagesList.includes('@salutejs/plasma-ui');
    const HAS_PLASMA_WEB = packagesList.includes('@salutejs/plasma-web');
    const HAS_PLASMA_B2C = packagesList.includes('@salutejs/plasma-b2c');
    const HAS_PLASMA_TEMPLE = packagesList.includes('@salutejs/plasma-temple');

    const HAS_DOCUMENTATION_CHANGED =
        HAS_PLASMA_UI_DOCS || HAS_PLASMA_WEB_DOCS || HAS_PLASMA_TEMPLE_DOCS || HAS_PLASMA_WEBSITE;

    console.log(
        HAS_DOCUMENTATION_CHANGED,
        HAS_PLASMA_UI_DOCS,
        HAS_PLASMA_WEB_DOCS,
        HAS_PLASMA_TEMPLE_DOCS,
        HAS_PLASMA_WEBSITE,
        HAS_PLASMA_UI,
        HAS_PLASMA_WEB,
        HAS_PLASMA_B2C,
        HAS_PLASMA_TEMPLE,
    );

    const scope = packagesList.filter((item) => CYPRESS_SCOPE.includes(item)).map((item) => `"${item.split('-')[1]}"`);

    return {
        SCOPE: JSON.stringify(scope),
        HAS_SCOPE: Boolean(scope.length),
        HAS_DOCUMENTATION_CHANGED,
        HAS_PLASMA_UI_DOCS,
        HAS_PLASMA_WEB_DOCS,
        HAS_PLASMA_TEMPLE_DOCS,
        HAS_PLASMA_WEBSITE,
        HAS_PLASMA_UI,
        HAS_PLASMA_WEB,
        HAS_PLASMA_B2C,
        HAS_PLASMA_TEMPLE,
    };
};
