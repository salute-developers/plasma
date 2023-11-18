import { chipConfig } from '../../../../components/Chip';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Chip.config';
import { config as configReadOnly } from './ChipReadOnly.config';

const mergedConfig = mergeConfig(chipConfig, config);

export const Chip = component(mergedConfig);

const mergedReadOnlyConfig = mergeConfig(chipConfig, configReadOnly);

export const ChipReadOnly = component(mergedReadOnlyConfig);
