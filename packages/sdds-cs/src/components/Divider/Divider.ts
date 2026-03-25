import { dividerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Divider.config';

const mergedConfig = mergeConfig(dividerConfig, config);

/**
 * Компонент Divider.
 */
export const Divider = component(mergedConfig);
