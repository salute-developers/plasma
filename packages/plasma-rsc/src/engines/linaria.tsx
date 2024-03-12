import React from 'react';
import { cx } from '@linaria/core';

// TODO: #1008 Избавиться от импортов и переделать addFocus
import 'focus-visible';
import { getStaticVariants, getDynamicVariants } from './common';
import type { ComponentConfig, HTMLAnyAttributes } from './types';

/* eslint-disable no-underscore-dangle */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, name } = componentConfig;
    const staticVariants = getStaticVariants(componentConfig);
    const dynamicVariants = getDynamicVariants(componentConfig);
    const Root = tag as React.ElementType;

    const component = (props: HTMLAnyAttributes) => {
        const { className, ...rest } = props;
        const variants = dynamicVariants(rest);
        const cls = cx(className, base, ...staticVariants, ...variants);

        // styled-components do it inside
        // filter props
        const baseProps: HTMLAnyAttributes = {};
        for (const key in rest) {
            if (!(key in componentConfig.variations)) {
                baseProps[key] = rest[key];
            }
        }

        // styled-components do it inside
        // add props that should be attr( disabled for example)
        const htmlAttrs: HTMLAnyAttributes = {};
        for (const key in componentConfig.variations || {}) {
            if (key in rest) {
                const variant = componentConfig.variations[key];

                const { attrs } = variant;
                if (typeof attrs === 'boolean') {
                    htmlAttrs[key] = rest[key];
                }
            }
        }

        return <Root className={cls} {...htmlAttrs} {...baseProps} />;
    };
    if (name) {
        component.displayName = name;
    }
    return component;
};
