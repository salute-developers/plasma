import { dropdownItemConfig } from '../../../../components/Dropdown/DropdownItem/DropdownItem';
import { component, mergeConfig } from '../../../../engines';

import { config } from './DropdownItem.config';

const mergedConfig = mergeConfig(dropdownItemConfig, config);

export const DropdownItem = component(mergedConfig);
