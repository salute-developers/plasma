const npmOptions = {
    setRcToken: false,
    commitNextVersion: true,
};

/** Auto configuration */
module.exports = function rc() {
    const plugins = [['npm', npmOptions], 'conventional-commits'];

    return {
        prereleaseBranches: ['dev'],
        plugins,
    };
};
