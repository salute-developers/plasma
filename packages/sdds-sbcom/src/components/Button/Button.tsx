import { buttonConfig, component, mergeConfig, makePolymorphic } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

export type ButtonProps = typeof ButtonComponent;

/**
 * Кнопка.
 */
export const Button = makePolymorphic(ButtonComponent, 'button');
