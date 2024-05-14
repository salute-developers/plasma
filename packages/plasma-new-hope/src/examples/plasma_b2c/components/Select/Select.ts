import { component, mergeConfig } from '../../../../engines';
import { selectConfig } from '../../../..';

import { config } from './Select.config';

const mergedConfig = mergeConfig(selectConfig, config);
const Select = component(mergedConfig);

export { Select };
