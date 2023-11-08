import { dropdownConfig, dropdownItemConfig } from '../../../../../components/Dropdown';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
export const Dropdown = component(mergedConfig);

const mergedItemConfig = mergeConfig(dropdownItemConfig);
export const DropdownItem = component(mergedItemConfig);
