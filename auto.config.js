const npmOptions = {
    setRcToken: false,
    commitNextVersion: true,
};

const releasedOptions = {
    includeBotPrs: true,
    message: '🚀 This %TYPE is included in version: %VERSION 🚀',
};

/** Auto configuration */
module.exports = function rc() {
    const plugins = [['npm', npmOptions], 'conventional-commits'];

    return {
        prereleaseBranches: ['dev'],
        plugins,
    };
};
