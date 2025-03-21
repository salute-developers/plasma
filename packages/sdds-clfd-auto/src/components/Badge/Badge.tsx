import { badgeConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Badge.config';

const mergedConfig = mergeConfig(badgeConfig, config);

/**
 * Компонент Badge.
 */
export const Badge = component(mergedConfig);
