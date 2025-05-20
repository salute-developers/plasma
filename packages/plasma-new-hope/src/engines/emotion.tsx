import React, { forwardRef } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { getStaticVariants, getDynamicVariants, getIntersectionStyles } from './utils';
import { ComponentConfig, HTMLAnyAttributes, PolymorphicClassName } from './types';

export { css };

const Root = styled.div<{
    base: string | SerializedStyles;
    staticVariants: (string | SerializedStyles)[];
    dynamicVariants: (props: HTMLAnyAttributes) => any[];
    intersectionStyles: PolymorphicClassName[];
    invariants?: string | SerializedStyles;
}>`
    ${({ base }) => base};
    ${({ staticVariants }) => staticVariants};
    ${({ dynamicVariants }) => dynamicVariants};
    ${({ intersectionStyles }) => intersectionStyles};
    ${({ invariants }) => invariants};
`;

/* eslint-disable no-underscore-dangle */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, intersections, invariants } = componentConfig;
    const staticVariants = getStaticVariants(componentConfig);
    const dynamicVariants = getDynamicVariants(componentConfig);

    // TODO: should we type tag as more then string ?
    const R = Root.withComponent(tag as keyof JSX.IntrinsicElements);

    return forwardRef<HTMLElement, HTMLAnyAttributes>((props, ref) => {
        const intersectionStyles = getIntersectionStyles(props, intersections);

        return (
            <R
                base={base}
                staticVariants={staticVariants}
                dynamicVariants={dynamicVariants}
                intersectionStyles={intersectionStyles}
                invariants={invariants}
                {...props}
                ref={ref}
            />
        );
    });
};
