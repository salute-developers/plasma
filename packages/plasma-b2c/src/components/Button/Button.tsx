import React, { forwardRef } from 'react';
// import { Button as ButtonHope } from '@salutejs/plasma-hope';
import type { ButtonProps } from '@salutejs/plasma-hope';
// export const ButtonBase = ButtonHope({ design: 'b2c' });
import { buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);

const ButtonBase = component(mergedConfig);

/**
 * Кнопка.
 * Поддерживает несколько режимов отображения (`view`) и размеров (`size`).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <ButtonBase {...props} ref={ref} />);
