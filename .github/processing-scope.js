/**
 * Define CI config
 * @typedef {object} json
 * @property {Array<string>} PACKAGES_CYPRESS
 * @property {Array<string>} PACKAGES_DS
 */
const CONFIG = require('./config-ci.json');

module.exports = () => {
    const { RAW_DATA } = process.env;

    /**
     * @param RAW_DATA Information about the changed state
     * @param RAW_DATA.name The name of the package.
     * @param RAW_DATA.version The version of the package.
     * @param RAW_DATA.private The type of the package.
     * @param RAW_DATA.location The path of the package.
     *
     * @example
     * {
     *   "name": "@salutejs/plasma-website",
     *   "version": "0.184.0",
     *   "private": true,
     *   "location": ".../plasma/website/plasma-website"
     *  }
     */
    const rawData = JSON.parse(RAW_DATA).map(({ name }) => name);

    if (!rawData || !rawData.length) {
        return {
            RAW_DATA: [],
            PACKAGES_CYPRESS_RUN: [],
            PACKAGES_DOCUMENTATIONS_RUN: [],
            PROCESSED_DATA: [],
            HAS_PACKAGES_CYPRESS_RUN: false,
            HAS_PACKAGES_DS_CHANGES: false,
            HAS_DEPLOY_WEBSITE: false,
        };
    }

    /**
     * Processed data - packages name without "@salutejs/"
     * @example
     * ["plasma-web", "plasma-ui", "sdds-serv"]
     */
    const PROCESSED_DATA = rawData.map((item) => item.replace('@salutejs/', ''));

    /**
     * List short packages name for run cypress test
     * @example
     * ["web", "ui", "b2c"]
     */
    const PACKAGES_CYPRESS_RUN = PROCESSED_DATA.filter((item) => CONFIG.PACKAGES_CYPRESS.includes(item)).map((item) =>
        item.replace('plasma-', ''),
    );

    /**
     * List packages who has a documentations artifacts: storybook, docusaurus
     * @example
     * ["plasma-web", "caldera-online", "sdds-serv"]
     * item - project package,
     * @example
     * "plasma-web-docs" or "sdds-serv"
     */
    const PACKAGES_DOCUMENTATIONS_RUN = PROCESSED_DATA.reduce((acc, item) => {
        // INFO: When `lerna la` return only docs package then need get client package
        // INFO: @example get 'plasma-web-docs' -> 'plasma-web'
        const packageDS = item.endsWith('-docs') ? item.replace('-docs', '') : item;

        if (CONFIG.PACKAGES_DS.includes(packageDS) && !acc.includes(packageDS)) {
            acc.push(packageDS);
        }

        return acc;
    }, []);

    const HAS_PACKAGES_DS_CHANGES = Boolean(PACKAGES_DOCUMENTATIONS_RUN.length);

    const HAS_DEPLOY_WEBSITE = HAS_PACKAGES_DS_CHANGES || PROCESSED_DATA.includes('plasma-website');

    return {
        RAW_DATA: JSON.stringify(rawData),
        PACKAGES_DOCUMENTATIONS_RUN: JSON.stringify(PACKAGES_DOCUMENTATIONS_RUN),
        PACKAGES_CYPRESS_RUN: JSON.stringify(PACKAGES_CYPRESS_RUN),
        PROCESSED_DATA: JSON.stringify(PROCESSED_DATA),
        HAS_PACKAGES_CYPRESS_RUN: Boolean(PACKAGES_CYPRESS_RUN.length),
        HAS_DEPLOY_WEBSITE,
        HAS_PACKAGES_DS_CHANGES,
    };
};
