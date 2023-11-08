import { dropdownConfig } from '../../../../components/Dropdown';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);

export const Dropdown = component(mergedConfig);
