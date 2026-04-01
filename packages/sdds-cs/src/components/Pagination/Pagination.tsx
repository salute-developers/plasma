import { paginationConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Pagination.config';

const mergedConfig = mergeConfig(paginationConfig, config);
const PaginationComponent = component(mergedConfig);

/**
 * Пагинация
 */
export const Pagination = PaginationComponent;
