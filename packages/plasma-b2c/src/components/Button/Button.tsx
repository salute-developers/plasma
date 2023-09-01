import React, { forwardRef } from 'react';
// import { Button as ButtonHope } from '@salutejs/plasma-hope';
import type { ButtonProps } from '@salutejs/plasma-hope';
// export const ButtonBase = ButtonHope({ design: 'b2c' });
import { buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Button.config';
import { css } from 'styled-components';

buttonConfig.variations['pin'] = { css: css`` };

console.log('buttonConfig', buttonConfig)

const mergedConfig = mergeConfig(buttonConfig, config);

console.log('mergedConfig', mergedConfig);

const ButtonBase = component(mergedConfig);


/**
 * Кнопка.
 * Поддерживает несколько режимов отображения (`view`) и размеров (`size`).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { square, ...rest} = props;
    // TODO: I don't like these code
    const isSquare = square !== undefined ? square : !props.text && !props.children;
    console.log(isSquare, props);
    return (<ButtonBase square={isSquare} {...rest} ref={ref} />);
});
