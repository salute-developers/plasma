import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { TextFieldProps } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);

/**
 * Поле ввода текста.
 */
export const TextField = component(mergedConfig) as ForwardRefExoticComponent<
    TextFieldProps & RefAttributes<HTMLInputElement>
>;
