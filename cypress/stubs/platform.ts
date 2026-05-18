// Stub for the `platform` package used by ally.js (cypress-plugin-tab).
// The real platform.js parses navigator.userAgent at module load time which crashes
// in Cypress/Vite environment. We only need tab-trapping to work, not UA detection.
const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';

const platform = {
    description: ua,
    layout: null,
    manufacturer: null,
    name: 'Chrome',
    prerelease: null,
    product: null,
    ua,
    version: '120',
    os: { architecture: 64, family: 'Windows', version: '10' },
    parse: () => platform,
    toString: () => 'Chrome 120',
};

export default platform;
export const { description, layout, manufacturer, name, prerelease, product, version, os, parse, toString } = platform;
