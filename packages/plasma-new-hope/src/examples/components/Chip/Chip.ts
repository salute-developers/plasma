import { createConditionalComponent } from 'src/utils/createConditionalComponent';

import { chipConfig } from '../../../components/Chip';
import { component, mergeConfig } from '../../../engines';

import { config } from './Chip.config';
import { config as clearConfig } from './Chip.transparent.config';

const mergedConfigDefault = mergeConfig(chipConfig, config);
export const ChipDefault = component(mergedConfigDefault);

const mergedConfigTransparent = mergeConfig(chipConfig, clearConfig);
export const ChipTransparent = component(mergedConfigTransparent);

export const Chip = createConditionalComponent({
    default: ChipDefault,
    transparent: ChipTransparent,
});
