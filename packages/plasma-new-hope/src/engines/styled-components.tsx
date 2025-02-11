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
}>`
    ${({ base }) => base};
    ${({ staticVariants }) => staticVariants};
    ${({ dynamicVariants }) => dynamicVariants};
    ${({ intersectionStyles }) => intersectionStyles};
`;

/* eslint-disable no-underscore-dangle */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, intersections } = componentConfig;
    const staticVariants = getStaticVariants(componentConfig);
    const dynamicVariants = getDynamicVariants(componentConfig);

    return forwardRef<HTMLElement, HTMLAnyAttributes>((props, ref) => {
        const intersectionStyles = getIntersectionStyles(props, intersections);

        return (
            <Root
                as={tag}
                base={base}
                staticVariants={staticVariants}
                dynamicVariants={dynamicVariants}
                intersectionStyles={intersectionStyles}
                {...props}
                ref={ref}
            />
        );
    });
};
