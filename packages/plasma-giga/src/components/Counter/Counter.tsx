import { counterConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Counter.config';

const mergedConfig = mergeConfig(counterConfig, config);

/**
 * Компонент Counter.
 */
export const Counter = component(mergedConfig);
