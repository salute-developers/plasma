import { buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

/**
 * Кнопка.
 */
export const Button = ButtonComponent;
