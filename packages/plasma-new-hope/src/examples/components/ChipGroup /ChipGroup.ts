import { chipGroupConfig } from '../../../components/ChipGroup';
import { component, mergeConfig } from '../../../engines';

import { config } from './ChipGroup.config';

const mergedConfig = mergeConfig(chipGroupConfig, config);

export const ChipGroup = component(mergedConfig);
