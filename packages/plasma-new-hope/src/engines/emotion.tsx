import React, { forwardRef } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { getStaticVariants, getDynamicVariants } from './common';
import type { ComponentConfig, HTMLAnyAttributes } from './types';

export { css };

const Root = styled.div<{
    base: string | SerializedStyles;
    staticVariants: (string | SerializedStyles)[];
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

    // TODO: should we type tag as more then string ?
    const R = Root.withComponent(tag as keyof JSX.IntrinsicElements);

    return forwardRef<HTMLElement, HTMLAnyAttributes>((props, ref) => (
        <R base={base} staticVariants={staticVariants} dynamicVariants={dynamicVariants} {...props} ref={ref} />
    ));
};
