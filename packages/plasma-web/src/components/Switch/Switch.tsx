import { switchConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Switch.config';

const mergedConfig = mergeConfig(switchConfig, config);
const SwitchComponent = component(mergedConfig);

export const Switch = SwitchComponent;
