import { rangeConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Range.config';

const mergedConfig = mergeConfig(rangeConfig, config);

/**
 * Компонент Range.
 */
export const Range = component(mergedConfig);
