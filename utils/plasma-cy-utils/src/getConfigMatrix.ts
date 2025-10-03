// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

type GetConfigMatrixReturn = {
    [key: string]: string;
};

export const getConfigMatrix = <T = {}>(config: T, options?: string[]): GetConfigMatrixReturn[] => {
    const { variations } = config;

    // Find the prop with the most values
    const maxLength = Object.values(variations).reduce((max, values) => Math.max(max, Object.keys(values).length), 0);

    if (maxLength === 0) return [];

    return Array.from({ length: maxLength }, (_, i) =>
        Object.keys(variations).reduce((props, propName) => {
            if (options?.length && !options.includes(propName)) {
                return props;
            }

            const propValues = Object.keys(variations[propName]);

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
