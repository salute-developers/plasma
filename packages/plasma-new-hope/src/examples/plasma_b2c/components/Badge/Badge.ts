import { badgeConfig, quantityBadgeConfig } from '../../../../components/Badge';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Badge.config';
import { config as quantityBadgeCustomConfig } from './QuantityBadge.config';

const mergedConfig = mergeConfig(badgeConfig, config);
const mergedQuantityConfig = mergeConfig(quantityBadgeConfig, quantityBadgeCustomConfig);

export const Badge = component(mergedConfig);
export const QuantityBadge = component(mergedQuantityConfig);
