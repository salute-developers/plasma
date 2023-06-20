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

    const scope = CHANGED_STATE.split(',')
        .filter((item) => CYPRESS_SCOPE.includes(item))
        .map((item) => `"${item.split('-')[1]}"`);

    return {
        SCOPE: JSON.stringify(scope),
        HAS_SCOPE: !!scope.length,
    };
};
