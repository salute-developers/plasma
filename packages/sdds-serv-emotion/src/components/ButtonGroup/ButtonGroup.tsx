import { buttonGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './ButtonGroup.config';

const mergedConfig = mergeConfig(buttonGroupConfig, config);

/**
 * Группа кнопок.
 */
export const ButtonGroup = component(mergedConfig);
