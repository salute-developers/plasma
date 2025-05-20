import React, { forwardRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getStaticVariants, getDynamicVariants, getIntersectionStyles } from './utils';
import { ComponentConfig, HTMLAnyAttributes, PolymorphicClassName, SerializedStyles } from './types';

export { css };

const Root = styled.div<{
    base: PolymorphicClassName;
    staticVariants: PolymorphicClassName[];
    dynamicVariants: (props: HTMLAnyAttributes) => any[];
    intersectionStyles: PolymorphicClassName[];
    responsiveStyles?: PolymorphicClassName;
    invariants?: string | SerializedStyles;
}>`
    ${({ base }) => base};
    ${({ staticVariants }) => staticVariants};
    ${({ dynamicVariants }) => dynamicVariants};
    ${({ intersectionStyles }) => intersectionStyles};
    ${({ responsiveStyles }) => responsiveStyles};
    ${({ invariants }) => invariants};
`;

/* eslint-disable no-underscore-dangle */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, intersections, invariants, responsive } = componentConfig;
    const staticVariants = getStaticVariants(componentConfig);
    const dynamicVariants = getDynamicVariants(componentConfig);

    // TODO: should we type tag as more then string ?
    const R = Root.withComponent(tag as keyof JSX.IntrinsicElements);

    return forwardRef<HTMLElement, HTMLAnyAttributes>((props, ref) => {
        const { responsive: responsiveProp, ...rest } = props;
        const intersectionStyles = getIntersectionStyles(rest, intersections);
        const responsiveStyles = responsiveProp ? responsive : undefined;

        return (
            <R
                base={base}
                staticVariants={staticVariants}
                dynamicVariants={dynamicVariants}
                intersectionStyles={intersectionStyles}
                responsiveStyles={responsiveStyles}
                invariants={invariants}
                {...rest}
                ref={ref}
            />
        );
    });
};
