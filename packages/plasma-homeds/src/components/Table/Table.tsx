import { tableConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Table.config';

const mergedConfig = mergeConfig(tableConfig, config);
const TableComponent = component(mergedConfig);

/**
 * Таблица.
 */
export const Table = TableComponent;
