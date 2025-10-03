"use strict";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigMatrix = void 0;
var getConfigMatrix = function (config, options) {
    var variations = config.variations;
    // Find the prop with the most values
    var maxLength = Object.values(variations).reduce(function (max, values) { return Math.max(max, Object.keys(values).length); }, 0);
    if (maxLength === 0)
        return [];
    return Array.from({ length: maxLength }, function (_, i) {
        return Object.keys(variations).reduce(function (props, propName) {
            if ((options === null || options === void 0 ? void 0 : options.length) && !options.includes(propName)) {
                return props;
            }
            var propValues = Object.keys(variations[propName]);
            if (propValues.length === 1) {
                if (i === 0) {
                    // eslint-disable-next-line prefer-destructuring
                    props[propName] = propValues[0];
                }
            }
            else if (i < propValues.length) {
                props[propName] = propValues[i];
            }
            return props;
        }, {});
    });
};
exports.getConfigMatrix = getConfigMatrix;
