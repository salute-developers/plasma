import {
    buttonConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';
import { makePolymorphic } from '@salutejs/plasma-new-hope';

import { config } from './Button.config';
import { config as outlineConfig } from './Button.outline.config';

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

const mergedConfigOutline = mergeConfig(buttonConfig, outlineConfig);
const ButtonOutlineComponent = component(mergedConfigOutline);

export type ButtonProps = typeof ButtonComponent;

/**
 * Кнопка.
 */
export const Button = createConditionalComponent({
    default: makePolymorphic(ButtonComponent, 'button'),
    outline: makePolymorphic(ButtonOutlineComponent, 'button'),
});
