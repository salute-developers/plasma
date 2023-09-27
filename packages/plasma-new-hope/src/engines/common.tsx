import React from 'react';

import { _component } from './linaria';
import type { ComponentConfig, HTMLAnyAttributes, HTMLTagList, PropsType, Variants } from './types';

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
                css && res.push(variant[props[key]]);
            }
        }

        return res;
    };
};

export const mergeConfig = <
    Tag extends HTMLTagList,
    VariantList extends Variants,
    VariantsProps extends PropsType<VariantList>,
    LayoutPropsBase extends React.HTMLAttributes<HTMLElement>,
    LayoutPropsUser extends React.HTMLAttributes<HTMLElement> | undefined = undefined
>(
    baseConfig: ComponentConfig<Tag, Variants, PropsType, LayoutPropsBase>,
    userConfig?: Partial<ComponentConfig<Tag, VariantList, VariantsProps, LayoutPropsUser>>,
) => {
    const res = { ...baseConfig, ...userConfig };

    if (res.variations) {
        // copy variations base css
        // eslint-disable-next-line guard-for-in
        for (const key in res.variations) {
            const variant = baseConfig.variations[key];

            res.variations[key].css = variant?.css;
            /* start of bad decision */
            if (!res.variations[key].true && variant?.true) {
                res.variations[key].true = variant.true;
            }
            /* end of bad decision */
            if (variant?.attrs) {
                res.variations[key].attrs = variant.attrs;
            }
        }
    }

    // eslint-disable-next-line guard-for-in
    for (const key in baseConfig.defaults || {}) {
        if (!(key in res.defaults)) {
            res.defaults[key] = baseConfig.defaults[key];
        }
    }

    return res as ComponentConfig<
        Tag,
        VariantList,
        PropsType<VariantList>,
        LayoutPropsUser extends undefined ? LayoutPropsBase : LayoutPropsUser
    >;
};

export function component<
    Tag extends HTMLTagList,
    VariantList extends Variants,
    VariantsProps extends PropsType<VariantList>,
    LayoutProps extends React.HTMLAttributes<HTMLElement>
>(
    config: ComponentConfig<Tag, VariantList, VariantsProps, LayoutProps>,
): React.FunctionComponent<VariantsProps & LayoutProps> {
    const Comp = config.layout(_component((config as unknown) as ComponentConfig));

    return React.forwardRef<VariantsProps & LayoutProps, any>((props, ref) => (
        <Comp {...config?.defaults} {...props} ref={ref} />
    ));
}
