import { iconButtonGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './IconButtonGroup.config';

const mergedConfig = mergeConfig(iconButtonGroupConfig, config);

/**
 * Группа кнопок-иконок.
 */
export const IconButtonGroup = component(mergedConfig);
