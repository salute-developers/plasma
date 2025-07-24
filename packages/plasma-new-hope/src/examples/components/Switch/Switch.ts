import { switchConfig } from '../../../components/Switch';
import { component, mergeConfig } from '../../../engines';

import { config } from './Switch.config';
import { config as outlineConfig } from './Switch.outline.config';

const mergedConfig = mergeConfig(switchConfig, config);

export const Switch = component(mergedConfig);

const mergedOutlineConfig = mergeConfig(switchConfig, outlineConfig);

export const SwitchOutline = component(mergedOutlineConfig);
