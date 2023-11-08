import { dropdownDividerConfig } from '../../../../components/Dropdown/DropdownDivider/DropdownDivider';
import { component, mergeConfig } from '../../../../engines';

import { config } from './DropdownDivider.config';

const mergedConfig = mergeConfig(dropdownDividerConfig, config);

export const DropdownDivider = component(mergedConfig);
