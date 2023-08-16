export function getStaticVariants(config: ComponentConfig) {
    if (!config.variations) {
        return [];
    }
    const res = [];
    const { variations } = config;

    for (const key of Object.keys(variations)) {
        const { css } = variations[key];
        css && res.push(css);
    }

    return res;
}

export function getDynamicVariants(config: ComponentConfig) {
    return (props: Record<string, any>) => {
        const res = [];

        for (const key in config.variations) {
            if (key in props) {
                const variant = config.variations[key];
                const css = variant[props[key]];
                // no css for { modifier: true }
                css && res.push(variant[props[key]]);
            }
        }

        return res;
    };
}

export type Variant = {
    css?: any;
    attrs?: boolean;
} & Record<string, any>;

export interface ComponentConfig {
    name: string;
    layout: Function;
    tag: string;

    base: any;

    variations: Record<string, Variant>;

    defaults: Record<string, string>;
}

export type UserComponentConfig = Partial<ComponentConfig>;

export function mergeConfig(baseConfig: ComponentConfig, userConfig?: UserComponentConfig) {
    const res = { ...baseConfig, ...userConfig };

    if (res.variations) {
        // copy variations base css
        // eslint-disable-next-line guard-for-in
        for (const key in res.variations) {
            res.variations[key].css = baseConfig.variations[key]?.css;
            /* start of bad decision */
            if (!res.variations[key].true && baseConfig.variations[key]?.true) {
                res.variations[key].true = baseConfig.variations[key].true;
            }
            /* end of bad decision */
            if (baseConfig.variations[key]?.attrs) {
                res.variations[key].attrs = baseConfig.variations[key].attrs;
            }
        }
    }

    for (const key in baseConfig.defaults || {}) {
        if (!(key in res.defaults)) {
            res.defaults[key] = baseConfig.defaults[key];
        }
    }

    return res;
}
