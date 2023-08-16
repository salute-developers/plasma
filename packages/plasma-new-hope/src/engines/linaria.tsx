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
    const { tag: Root, base, defaults } = componentConfig;
    const staticVarians = getStaticVariants(componentConfig);
    const dynamicVarians = getDynamicVariants(componentConfig);

    return ({ className, ...rest }: any) => {
        const variants = dynamicVarians({ ...defaults, ...rest });
        const cls = cx(className, base, ...staticVarians, ...variants);

        return <Root className={cls} {...defaults} {...rest} />;
    };
};
/** linaria engine */

export function component(config: ComponentConfig) {
    return config.layout(_component(config));
}
