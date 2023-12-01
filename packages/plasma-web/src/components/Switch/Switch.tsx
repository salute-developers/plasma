import { switchConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { SwitchProps } from '@salutejs/plasma-core';

import { config } from './Switch.config';

const mergedConfig = mergeConfig(switchConfig, config);
const SwitchComponent = component(mergedConfig);

export const Switch = SwitchComponent as React.ForwardRefExoticComponent<
    SwitchProps & React.RefAttributes<HTMLInputElement>
>;
export type { SwitchProps };
