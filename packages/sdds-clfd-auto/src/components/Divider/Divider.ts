import { dividerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Divider.config';

const mergedConfig = mergeConfig(dividerConfig, config);

/**
 * Компонент Divider.
 */
export const Divider = component(mergedConfig);
