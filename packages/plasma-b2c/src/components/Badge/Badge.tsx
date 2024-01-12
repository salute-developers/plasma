import { badgeConfig, quantityBadgeConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Badge.config';
import { config as quantityBadgeCustomConfig } from './QuantityBadge.config';

const mergedConfig = mergeConfig(badgeConfig, config);
const mergedQuantityConfig = mergeConfig(quantityBadgeConfig, quantityBadgeCustomConfig);

/**
 * Компонент Badge.
 */
export const Badge = component(mergedConfig);

/**
 * Компонент QuantityBadge.
 */
export const QuantityBadge = component(mergedQuantityConfig);
