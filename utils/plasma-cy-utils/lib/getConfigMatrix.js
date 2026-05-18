// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const getConfigMatrix = (config, options, excludePropsValues) => {
    if (!(config === null || config === void 0 ? void 0 : config.variations)) {
        return [];
    }
    const { variations } = config;
    // Pre-compute filtered values per prop, respecting options and excludePropsValues
    const filteredVariations = Object.keys(variations).reduce((acc, propName) => {
        if ((options === null || options === void 0 ? void 0 : options.length) && !options.includes(propName)) {
            return acc;
        }
        const values = Object.keys(variations[propName]).filter((value) => { var _a; return !((_a = excludePropsValues === null || excludePropsValues === void 0 ? void 0 : excludePropsValues[propName]) === null || _a === void 0 ? void 0 : _a.includes(value)); });
        if (values.length > 0) {
            acc[propName] = values;
        }
        return acc;
    }, {});
    // Find the prop with the most values
    const maxLength = Object.values(filteredVariations).reduce((max, values) => Math.max(max, values.length), 0);
    if (maxLength === 0)
        return [];
    return Array.from({ length: maxLength }, (_, i) => Object.keys(filteredVariations).reduce((props, propName) => {
        const propValues = filteredVariations[propName];
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
    }, {}));
};
