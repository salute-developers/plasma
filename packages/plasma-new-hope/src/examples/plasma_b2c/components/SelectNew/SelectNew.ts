import { component, mergeConfig } from '../../../../engines';
import { selectNewConfig } from '../../../../components/SelectNew';

import { config } from './SelectNew.config';

const mergedConfig = mergeConfig(selectNewConfig, config);
export const SelectNew = component(mergedConfig);
