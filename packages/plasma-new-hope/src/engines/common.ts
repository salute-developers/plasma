export function getStaticVariants(config: ComponentConfig) {
    if (!config.variations) {
        return [];
    }
    const res = [];
    const { variations } = config;

    for (const key of Object.keys(variations)) {
        const css = variations[key].css;
        css && res.push(css);
    }

    // console.log('static', res);
    return res;
}

// TODO: why I thought about extra???
// TODO: intersection
export function getDynamicVariants(config: ComponentConfig /* extra = {} */) {
    return (props: Record<string, any>) => {
        const res = [];

        // console.log(config.variations, props);
        for (const [key, value] of Object.entries(config.variations || {})) {
            if (key in props) {
                const css = value[props[key]];
                // console.log(css);
                // no css for { modifier: true }
                css && res.push(value[props[key]]);
                // key in extra && res.push(extra[key][props[key]]);
                // } else if (value[true]) {
                //     value[true] && res.push(value[true]);
            }
        }

        // for (const intersection of config.intersections || []) {
        //     if (Object.keys(intersection.match).every(key => {
        //         const propMatch = intersection.match[key];
        //         if (key in props) {
        //             return props[key] === propMatch;
        //         }
        //         return propMatch === true;
        //     })) {
        //         res.push(intersection.value);
        //     }
        // }

        // console.log('dynamic', res);
        return res;
    };
}

export type Variant = {
    // should we name it css or base ??
    css?: any;
    attrs?: boolean;
} & Record<string, any>;

export interface ComponentConfig {
    name: string;
    // TODO: react
    layout: Function;
    // TODO: tags
    tag: string;

    // TODO: css
    base: any;

    // TODO: optional
    variations: Record<string, Variant>;

    // TODO: optional
    defaults: Record<string, string>;
}

export type UserComponentConfig = Partial<ComponentConfig>;

export function mergeConfig(baseConfig: ComponentConfig, userConfig?: UserComponentConfig) {
    const res = { ...baseConfig, ...userConfig };

    // TODO: how we do extend ??
    if (res.variations) {
        // copy variations base css
        for (const key in res.variations) {
            res.variations[key].css = baseConfig.variations[key]?.css;
            // TODO: fuck me
            /* start of bad decision */
            if (!res.variations[key]['true'] && baseConfig.variations[key]?.true) {
                res.variations[key]['true'] = baseConfig.variations[key]['true'];
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

    // TODO: intersections

    return res;
}
