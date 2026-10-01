const path = require.resolve('path-browserify');

module.exports = function override(config) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path,
    };

    return config;
};
