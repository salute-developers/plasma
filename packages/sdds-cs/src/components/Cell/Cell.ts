import { cellConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Cell.config';

const mergedConfig = mergeConfig(cellConfig, config);
const CellComponent = component(mergedConfig);

/**
 * Кнопка.
 */
export const Cell = CellComponent;
