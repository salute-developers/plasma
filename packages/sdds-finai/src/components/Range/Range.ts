import {
    rangeConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Range.config';
import { config as viewModeConfig } from './Range.viewMode.config';

const mergedConfig = mergeConfig(rangeConfig, config);
export const RangeDefault = component(mergedConfig);

const mergedConfigViewMode = mergeConfig(rangeConfig, viewModeConfig);
export const RangeViewMode = component(mergedConfigViewMode);

/**
 * Компонент Range.
 */
export const Range = createConditionalComponent({
    default: RangeDefault,
    viewMode: RangeViewMode,
});
