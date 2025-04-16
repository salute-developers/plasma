import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';

// TODO: #1008 Избавиться от импортов и переделать addFocus
import 'focus-visible';
import { getStaticVariants, getDynamicVariants, getIntersectionStyles } from './utils';
import { ComponentConfig, HTMLAnyAttributes } from './types';

/* eslint-disable no-underscore-dangle */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, name, intersections } = componentConfig;
    const staticVariants = getStaticVariants(componentConfig);
    const dynamicVariants = getDynamicVariants(componentConfig);

    const component = forwardRef<HTMLElement, HTMLAnyAttributes>((props, ref) => {
        const { className, as, forwardedAs, ...rest } = props;
        const variants = dynamicVariants(rest);
        const intersectionStyles = getIntersectionStyles(rest, intersections) as string[];

        const cls = cx(className, base as string, ...(staticVariants as string[]), ...variants, ...intersectionStyles);

        // styled-components do it inside
        // filter props
        const baseProps: HTMLAnyAttributes = {};
        for (const key in rest) {
            if (!(key in componentConfig.variations)) {
                baseProps[key] = rest[key];
            }
        }

        baseProps.ref = ref;

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

        const Root = as || forwardedAs || (tag as React.ElementType);

        return <Root className={cls} {...htmlAttrs} {...baseProps} />;
    });
    if (name) {
        component.displayName = name;
    }
    return component;
};
