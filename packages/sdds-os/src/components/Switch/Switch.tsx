import { switchConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { ComponentProps } from 'react';

import { config } from './Switch.config';

const mergedConfig = mergeConfig(switchConfig, config);
const SwitchComponent = component(mergedConfig);

export const Switch = SwitchComponent;
export type SwitchProps = ComponentProps<typeof SwitchComponent>;
