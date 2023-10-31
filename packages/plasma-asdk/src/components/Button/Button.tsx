import { buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

export type ButtonProps = typeof ButtonComponent;

/**
 * Кнопка.
 * Поддерживает несколько режимов отображения (`view`) и размеров (`size`).
 */
export const Button = ButtonComponent;
