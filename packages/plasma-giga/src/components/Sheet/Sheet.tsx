import { sheetConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Sheet.config';

const mergedConfig = mergeConfig(sheetConfig, config);
const SheetComponent = component(mergedConfig);

/**
 * Открывает окно-шторку поверх основного экрана.
 */
export const Sheet = SheetComponent;
