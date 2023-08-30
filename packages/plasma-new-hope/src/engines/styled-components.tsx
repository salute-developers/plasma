import React from 'react';

import styled from 'styled-components';
import { css } from 'styled-components';

import { getStaticVariants, getDynamicVariants, ComponentConfig } from './common';

export { styled, css };

export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, defaults } = componentConfig;
    const staticVarians = getStaticVariants(componentConfig);
    const dynamicVarians = getDynamicVariants(componentConfig);

    const Root = styled.div`
        ${base}
        ${staticVarians}
        ${dynamicVarians}
    `;

    return (props: any) => <Root as={tag} {...defaults} {...props} />;
};


export function component(config: ComponentConfig) {
    return config.layout(_component(config));
}
