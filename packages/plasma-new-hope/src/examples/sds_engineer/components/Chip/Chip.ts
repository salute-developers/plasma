import { chipConfig } from '../../../../components/Chip';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Chip.config';

const mergedConfig = mergeConfig(chipConfig, config);

export const Chip = component(mergedConfig);
