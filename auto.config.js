const npmOptions = {
    setRcToken: false,
    commitNextVersion: true,
};

const releasedOptions = {
    includeBotPrs: true,
    message: '🚀 This %TYPE is included in version: %VERSION 🚀',
};

const uploadAssetsPluginOptions = {
    assets: ['./utils/plasma-tokens-native/build/**/*'],
    message: '🐤 Download canary assets:',
    group: '(color|shadow|typo|borderRadius|spacing).*\\.(kt|xml|swift|ts)',
    compact: true,
};

/** Auto configuration */
module.exports = function rc() {
    const { upload_assets: uploadAssets = 'false' } = process.env || {};
    const plugins = [['released', releasedOptions], ['npm', npmOptions], 'conventional-commits'];

    if (uploadAssets === 'true') {
        plugins.unshift(['./auto-plugins/dist/upload-assets-extend.js', uploadAssetsPluginOptions]);
    }

    return {
        prereleaseBranches: ['dev'],
        plugins,
    };
};
