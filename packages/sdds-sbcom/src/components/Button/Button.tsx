import { buttonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { ComponentType, ElementType } from 'react';

import { config } from './Button.config';

/** Same behavior as `makePolymorphic` from `plasma-new-hope` (not shipped in published JS bundle). */
function makePolymorphic<Comp extends ComponentType<any>, T extends ElementType>(comp: Comp, _: T) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return comp as any;
}

const mergedConfig = mergeConfig(buttonConfig, config);
const ButtonComponent = component(mergedConfig);

export type ButtonProps = typeof ButtonComponent;

/**
 * Кнопка.
 */
export const Button = makePolymorphic(ButtonComponent, 'button');
