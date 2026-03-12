// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

type GetConfigMatrixReturn = {
    [key: string]: string;
};

export const getConfigMatrix = <T = {}>(
    config: T,
    options?: string[],
    excludePropsValues?: Record<string, string[]>,
): GetConfigMatrixReturn[] => {
    if (!config?.variations) {
        return [];
    }

    const { variations } = config;

    // Pre-compute filtered values per prop, respecting options and excludePropsValues
    const filteredVariations = Object.keys(variations).reduce((acc, propName) => {
        if (options?.length && !options.includes(propName)) {
            return acc;
        }

        const values = Object.keys(variations[propName]).filter(
            (value) => !excludePropsValues?.[propName]?.includes(value),
        );

        if (values.length > 0) {
            acc[propName] = values;
        }

        return acc;
    }, {} as Record<string, string[]>);

    // Find the prop with the most values
    const maxLength = Object.values(filteredVariations).reduce((max, values) => Math.max(max, values.length), 0);

    if (maxLength === 0) return [];

    return Array.from({ length: maxLength }, (_, i) =>
        Object.keys(filteredVariations).reduce((props, propName) => {
            const propValues = filteredVariations[propName];

            if (propValues.length === 1) {
                if (i === 0) {
                    // eslint-disable-next-line prefer-destructuring
                    props[propName] = propValues[0];
                }
            } else if (i < propValues.length) {
                props[propName] = propValues[i];
            }

            return props;
        }, {} as GetConfigMatrixReturn),
    );
};
