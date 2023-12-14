import { switchConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { SwitchProps } from '@salutejs/plasma-core';

import { config } from './Switch.config';

const mergedConfig = mergeConfig(switchConfig, config);
const SwitchComponent = component(mergedConfig) as React.ForwardRefExoticComponent<
    SwitchProps & React.RefAttributes<HTMLInputElement>
>;
export type { SwitchProps };

/**
 * Визуальный переключатель между двумя взаимоисключающими состояниями — вкл. и выкл.
 */
export const Switch = SwitchComponent;
