import { rangeConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config as configDefault } from './Range.config';

const mergedConfigDefault = mergeConfig(rangeConfig, configDefault);
export const Range = component(mergedConfigDefault);
