import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { getStaticVariants, getDynamicVariants, getIntersectionStyles } from './utils';
import type { ComponentConfig, HTMLAnyAttributes } from './types';

export { styled, css };

const Root = styled.div<{
    base: string;
    staticVariants: string[];
    dynamicVariants: (props: HTMLAnyAttributes) => any[];
    intersectionStyles: string[];
    responsiveStyles?: string;
}>`
    ${({ base }) => base};
    ${({ staticVariants }) => staticVariants};
    ${({ dynamicVariants }) => dynamicVariants};
    ${({ intersectionStyles }) => intersectionStyles};
    ${({ responsiveStyles }) => responsiveStyles};
`;

/* eslint-disable no-underscore-dangle */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, intersections, responsive } = componentConfig;
    const staticVariants = getStaticVariants(componentConfig);
    const dynamicVariants = getDynamicVariants(componentConfig);

    return forwardRef<HTMLElement, HTMLAnyAttributes>((props, ref) => {
        const { responsive: responsiveProp, ...rest } = props;
        const intersectionStyles = getIntersectionStyles(rest, intersections);
        const responsiveStyles = responsiveProp ? responsive : undefined;

        return (
            <Root
                as={tag}
                base={base}
                staticVariants={staticVariants}
                dynamicVariants={dynamicVariants}
                intersectionStyles={intersectionStyles}
                responsiveStyles={responsiveStyles}
                {...rest}
                ref={ref}
            />
        );
    });
};
