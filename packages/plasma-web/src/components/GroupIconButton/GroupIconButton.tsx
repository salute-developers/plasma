import { groupIconButtonConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './GroupIconButton.config';

const mergedConfig = mergeConfig(groupIconButtonConfig, config);

/**
 * Группа кнопок-иконок.
 */
export const GroupIconButton = component(mergedConfig);
