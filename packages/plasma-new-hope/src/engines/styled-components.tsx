import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { getStaticVariants, getDynamicVariants } from './common';
import type { ComponentConfig, HTMLAnyAttributes } from './types';

export { styled, css };

const Root = styled.div<{
    base: string;
    staticVariants: string[];
    dynamicVariants: (props: HTMLAnyAttributes) => any[];
}>`
    ${({ base }) => base};
    ${({ staticVariants }) => staticVariants};
    ${({ dynamicVariants }) => dynamicVariants};
`;

/* eslint-disable no-underscore-dangle */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base } = componentConfig;
    const staticVariants = getStaticVariants(componentConfig);
    const dynamicVariants = getDynamicVariants(componentConfig);

    return forwardRef<HTMLElement, HTMLAnyAttributes>((props, ref) => (
        <Root
            as={tag}
            base={base}
            staticVariants={staticVariants}
            dynamicVariants={dynamicVariants}
            {...props}
            ref={ref}
        />
    ));
};
