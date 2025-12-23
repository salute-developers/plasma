import { component, mergeConfig } from 'src/engines';
import { createConditionalComponent } from 'src/utils';
import { rangeConfig } from 'src/components/Range';

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
