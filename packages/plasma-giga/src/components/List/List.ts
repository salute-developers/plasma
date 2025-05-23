import { listConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './List.config';

const mergedConfig = mergeConfig(listConfig, config);
const ListComponent = component(mergedConfig);

/**
 * Лист.
 */
export const List = ListComponent;
