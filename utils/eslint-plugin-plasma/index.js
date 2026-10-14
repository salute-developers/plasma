/* eslint-disable @typescript-eslint/no-var-requires */
const styleApiAnnotations = require('./rules/style-api-annotations');

module.exports = {
    rules: {
        'style-api-annotations': styleApiAnnotations,
    },
};
