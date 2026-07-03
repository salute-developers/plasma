import { badgeConfig, component, mergeConfig, createConditionalComponent } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Badge.config';
import { config as clearConfig } from './Badge.clear.config';

const mergedConfig = mergeConfig(badgeConfig, config);
export const BadgeDefault = component(mergedConfig);

const mergedConfigClear = mergeConfig(badgeConfig, clearConfig);
export const BadgeClear = component(mergedConfigClear);

/**
 * Компонент Badge.
 */
export const Badge = createConditionalComponent({
    default: BadgeDefault,
    clear: BadgeClear,
});
