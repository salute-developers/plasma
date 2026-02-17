import {
    rangeConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as configDefault } from './Range.config';
import { config as configClear } from './Range.clear.config';

const mergedConfigDefault = mergeConfig(rangeConfig, configDefault);
export const RangeDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(rangeConfig, configClear);
export const RangeClear = component(mergedConfigClear);

export const Range = createConditionalComponent(RangeDefault, [
    {
        conditions: { prop: 'appearance', value: 'clear' },
        component: RangeClear,
    },
]);
