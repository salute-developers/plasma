import { numberInputConfig } from '../../../components/NumberInput';
import { component, mergeConfig } from '../../../engines';

import { config } from './NumberInput.config';

const mergedConfig = mergeConfig(numberInputConfig, config);

export const NumberInput = component(mergedConfig);
