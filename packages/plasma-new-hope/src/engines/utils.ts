import { ComponentConfig, HTMLAnyAttributes, Intersection, PolymorphicClassName } from './types';

export const getStaticVariants = (config: ComponentConfig) => {
    if (!config.variations) {
        return [];
    }
    const res = [];
    const { variations } = config;

    // eslint-disable-next-line guard-for-in
    for (const key in variations) {
        const { css } = variations[key];
        css && res.push(css);
    }

    return res;
};

export const getDynamicVariants = (config: ComponentConfig) => {
    return (props: HTMLAnyAttributes) => {
        const res = [];

        // eslint-disable-next-line guard-for-in
        for (const key in config.variations) {
            if (key in props) {
                const variant = config.variations[key];

                const css = variant[props[key]];
                // no css for { modifier: true }
                css && Array.isArray(css) ? res.push(...css) : res.push(css);
            }
        }

        return res;
    };
};

export const getIntersectionStyles = (props: Record<string, any>, intersections?: Intersection[]) => {
    if (!intersections) {
        return [];
    }

    return intersections.reduce((styles: PolymorphicClassName[], item) => {
        const hasMatchStyle = Object.entries(item)
            .filter(([key]) => key !== 'style')
            .every(([key, value]) => props[key] === value);

        if (hasMatchStyle) {
            styles.push(item.style);
        }

        return styles;
    }, []);
};
