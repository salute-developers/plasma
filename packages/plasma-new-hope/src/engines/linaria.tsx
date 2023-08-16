import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';

import { getStaticVariants, getDynamicVariants, ComponentConfig } from './common';

/* eslint-disable no-underscore-dangle */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, defaults, name } = componentConfig;
    const staticVarians = getStaticVariants(componentConfig);
    const dynamicVarians = getDynamicVariants(componentConfig);
    const Root = tag as React.ElementType;

    const component = forwardRef((p, ref) => {
        const { className, ...rest } = p as { className: string };
        const variants = dynamicVarians({ ...defaults, ...rest });
        const cls = cx(className, base, ...staticVarians, ...variants);

        // styled-components do it inside
        // filter props
        const props: Record<string, any> = {};
        for (const key in rest) {
            if (!(key in componentConfig.variations)) {
                props[key] = (rest as Record<string, any>)[key];
            }
        }

        // styled-components do it inside
        // add props that should be attr( disabled for example)
        const htmlAttrs: Record<string, any> = {};
        for (const [key, value] of Object.entries(componentConfig.variations || {})) {
            if (key in rest) {
                const { attrs } = value;
                if (typeof attrs === 'boolean') {
                    htmlAttrs[key] = (rest as Record<string, any>)[key];
                }
            }
        }

        return <Root className={cls} {...htmlAttrs} {...props} ref={ref} />;
    });
    if (name) {
        component.displayName = name;
    }
    return component;
};

// TODO: move to common
// TODO: refactor generator to import from @salute/plasma-new-hope/
export function component(config: ComponentConfig) {
    return config.layout(_component(config));
}
