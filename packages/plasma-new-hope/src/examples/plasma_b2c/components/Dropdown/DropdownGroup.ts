import { dropdownGroupConfig } from '../../../../components/Dropdown/DropdownGroup/DropdownGroup';
import { component, mergeConfig } from '../../../../engines';

import { config } from './DropdownGroup.config';

const mergedConfig = mergeConfig(dropdownGroupConfig, config);

export const DropdownGroup = component(mergedConfig);
