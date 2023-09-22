import { checkboxConfig } from '../../../../components/Checkbox';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Checkbox.config';

const mergedConfig = mergeConfig(checkboxConfig, config);

export const Checkbox = component(mergedConfig);
