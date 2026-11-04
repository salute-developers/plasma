import { groupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Group.config';

const mergedConfig = mergeConfig(groupConfig, config);

/**
 * Группа элементов с общими отступами, направлением и скруглением внутренних углов.
 */
export const Group = component(mergedConfig);
