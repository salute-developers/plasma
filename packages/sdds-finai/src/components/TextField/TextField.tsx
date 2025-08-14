import { textFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);

/**
 * Поле ввода текста.
 */
export const TextField = component(mergedConfig);
