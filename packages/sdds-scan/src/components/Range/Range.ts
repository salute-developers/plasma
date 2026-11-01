import {
    rangeConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as configDefault } from './Range.config';
import { config as configWhite } from './Range.white.config';

const mergedConfigDefault = mergeConfig(rangeConfig, configDefault);
export const RangeDefault = component(mergedConfigDefault);

const mergedConfigWhite = mergeConfig(rangeConfig, configWhite);
export const RangeWhite = component(mergedConfigWhite);

export const Range = createConditionalComponent({
    default: RangeDefault,
    white: RangeWhite,
});
