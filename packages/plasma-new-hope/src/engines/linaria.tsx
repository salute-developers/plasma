import React from 'react';

// import { styled } from '@linaria/react';
// import { css } from '@linaria/core';
import { cx } from '@linaria/core';

import { getStaticVariants, getDynamicVariants, ComponentConfig } from './common';

// TODO: tagResolver: (source, tag) => string
// export { styled, css };

// TODO: remove props => _view=primary
/** linaria engine */
export const _component = (componentConfig: ComponentConfig) => {
    const { tag, base, defaults, name } = componentConfig;
    const staticVarians = getStaticVariants(componentConfig);
    const dynamicVarians = getDynamicVariants(componentConfig);
    const Root = tag as React.ElementType;

    const component: React.FC<{ className: string }> = ({ className, ...rest }) => {
        const variants = dynamicVarians({ ...defaults, ...rest });
        const cls = cx(className, base, ...staticVarians, ...variants);

        return <Root className={cls} {...defaults} {...rest} />;
    };
    if (name) {
        component.displayName = name;
    }
    return component;
};
/** linaria engine */

export function component(config: ComponentConfig) {
    return config.layout(_component(config));
}
