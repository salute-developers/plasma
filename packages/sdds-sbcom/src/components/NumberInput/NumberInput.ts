import { numberInputConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './NumberInput.config';

const mergedConfig = mergeConfig(numberInputConfig, config);

export const NumberInput = component(mergedConfig);
