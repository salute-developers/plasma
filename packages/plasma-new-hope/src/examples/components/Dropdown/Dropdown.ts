import { dropdownConfig } from 'src/components/Dropdown';
import { component, mergeConfig } from 'src/engines';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
export const Dropdown = component(mergedConfig);
