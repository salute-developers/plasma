import { buttonConfig, component, mergeConfig, makePolymorphic } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

/**
 * Компонент Button.
 */
export const Button = makePolymorphic(ButtonComponent, 'button');
