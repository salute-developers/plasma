import { component, mergeConfig } from '../../../../engines';
import { rangeConfig } from '../../../../components/Range';

import { config } from './Range.config';

const mergedConfig = mergeConfig(rangeConfig, config);
export const Range = component(mergedConfig);
