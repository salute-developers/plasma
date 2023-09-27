import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { getStaticVariants, getDynamicVariants } from './common';
import type { ComponentConfig, HTMLAnyAttributes } from './types';

export { styled, css };

/* eslint-disable no-underscore-dangle */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base } = componentConfig;
    const staticVariants = getStaticVariants(componentConfig);
    const dynamicVariants = getDynamicVariants(componentConfig);

    const Root = styled(tag as React.ElementType)`
        ${base}
        ${staticVariants}
        ${dynamicVariants}
    `;

    return forwardRef<HTMLElement, HTMLAnyAttributes>((props, ref) => <Root {...props} ref={ref} />);
};
