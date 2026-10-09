import { groupIconButtonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './GroupIconButton.config';

const mergedConfig = mergeConfig(groupIconButtonConfig, config);

/**
 * Группа кнопок-иконок.
 */
export const GroupIconButton = component(mergedConfig);
