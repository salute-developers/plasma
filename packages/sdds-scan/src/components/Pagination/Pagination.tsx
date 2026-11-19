import {
    paginationConfig,
    component,
    createConditionalComponent,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import type { PaginationProps as PaginationPropsNewHope } from '@salutejs/plasma-new-hope';

import { config } from './Pagination.config';
import { config as whiteConfig } from './Pagination.white.config';

const mergedConfig = mergeConfig(paginationConfig, config);
const PaginationDefault = component(mergedConfig);

const mergedConfigWhite = mergeConfig(paginationConfig, whiteConfig);
const PaginationWhite = component(mergedConfigWhite);

export type PaginationProps = PaginationPropsNewHope & {
    appearance?: 'default' | 'white';
};

/**
 * Пагинация
 */
export const Pagination = createConditionalComponent({
    default: PaginationDefault,
    white: PaginationWhite,
});
