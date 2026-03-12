"use strict";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigMatrix = void 0;
var getConfigMatrix = function (config, options, excludePropsValues) {
    if (!(config === null || config === void 0 ? void 0 : config.variations)) {
        return [];
    }
    var variations = config.variations;
    // Pre-compute filtered values per prop, respecting options and excludePropsValues
    var filteredVariations = Object.keys(variations).reduce(function (acc, propName) {
        if ((options === null || options === void 0 ? void 0 : options.length) && !options.includes(propName)) {
            return acc;
        }
        var values = Object.keys(variations[propName]).filter(function (value) { var _a; return !((_a = excludePropsValues === null || excludePropsValues === void 0 ? void 0 : excludePropsValues[propName]) === null || _a === void 0 ? void 0 : _a.includes(value)); });
        if (values.length > 0) {
            acc[propName] = values;
        }
        return acc;
    }, {});
    // Find the prop with the most values
    var maxLength = Object.values(filteredVariations).reduce(function (max, values) { return Math.max(max, values.length); }, 0);
    if (maxLength === 0)
        return [];
    return Array.from({ length: maxLength }, function (_, i) {
        return Object.keys(filteredVariations).reduce(function (props, propName) {
            var propValues = filteredVariations[propName];
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
