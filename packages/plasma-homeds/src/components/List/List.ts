import {
    listConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './List.config';
import { config as numberedConfig } from './List.numbered.config';

const mergedConfig = mergeConfig(listConfig, config);
const ListDefault = component(mergedConfig);

const mergedNumberedConfig = mergeConfig(listConfig, numberedConfig);
const ListNumbered = component(mergedNumberedConfig);

/**
 * Список.
 */
export const List = createConditionalComponent({
    default: ListDefault,
    numbered: ListNumbered,
});
