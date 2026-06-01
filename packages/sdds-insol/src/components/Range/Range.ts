import {
    rangeConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as configDefault } from './Range.config';

const mergedConfigDefault = mergeConfig(rangeConfig, configDefault);
export const RangeDefault = component(mergedConfigDefault);

export const Range = createConditionalComponent({
    default: RangeDefault,
});
