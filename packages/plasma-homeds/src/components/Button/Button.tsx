import { ComponentProps } from 'react';
import { buttonConfig, component, mergeConfig, makePolymorphic } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

/**
 * Кнопка.
 */
export const Button = makePolymorphic(ButtonComponent, 'button');
export type ButtonProps = ComponentProps<typeof ButtonComponent>;
