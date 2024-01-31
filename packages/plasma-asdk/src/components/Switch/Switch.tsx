import { switchConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Switch.config';

const mergedConfig = mergeConfig(switchConfig, config);
const SwitchComponent = component(mergedConfig);

export type SwitchProps = typeof SwitchComponent;

/**
 * Визуальный переключатель между двумя взаимоисключающими состояниями — вкл. и выкл.
 */
export const Switch = SwitchComponent;
