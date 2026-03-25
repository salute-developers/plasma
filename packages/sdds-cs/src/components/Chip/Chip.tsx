import { chipConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Chip.config';

const mergedConfig = mergeConfig(chipConfig, config);
const ChipComponent = component(mergedConfig);

/**
 * Компонент chip.
 */
export const Chip = ChipComponent;
