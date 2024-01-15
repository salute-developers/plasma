import { counterConfig } from '../../../../components/Counter';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Counter.config';

const mergedConfig = mergeConfig(counterConfig, config);

export const Counter = component(mergedConfig);
