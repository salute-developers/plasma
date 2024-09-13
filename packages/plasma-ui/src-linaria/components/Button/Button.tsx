import { buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { ButtonProps } from '@salutejs/plasma-core';
import React, { forwardRef } from 'react';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

/**
 * Кнопка.
 */
export const Button = forwardRef<any, ButtonProps | any>((props, ref) => {
    const { text, children, ...rest } = props;

    return (
        <ButtonComponent ref={ref} {...rest}>
            {children || text}
        </ButtonComponent>
    );
});
