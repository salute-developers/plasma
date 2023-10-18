import { switchConfig } from '../../../../components/Switch';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Switch.config';

const mergedConfig = mergeConfig(switchConfig, config);

export const Switch = component(mergedConfig);
