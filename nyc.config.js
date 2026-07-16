const coverageDir = process.env.COVERAGE_DIR;

let nycConfig = {};

if (coverageDir) {
    nycConfig = {
        'report-dir': coverageDir,
        'temp-dir': `.nyc_output/${coverageDir}`,
        include: [`**/packages/${process.env.PACKAGE_NAME}/**`],
        exclude: ['**/*.examples.tsx'],
        excludeAfterRemap: true,
    };
}

module.exports = nycConfig;
