import { chipGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './ChipGroup.config';

const mergedConfig = mergeConfig(chipGroupConfig, config);

export const ChipGroup = component(mergedConfig);
