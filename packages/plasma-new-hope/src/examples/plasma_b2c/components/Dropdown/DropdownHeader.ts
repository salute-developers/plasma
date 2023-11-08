import { dropdownHeaderConfig } from '../../../../components/Dropdown/DropdownHeader/DropdownHeader';
import { component, mergeConfig } from '../../../../engines';

import { config } from './DropdownHeader.config';

const mergedConfig = mergeConfig(dropdownHeaderConfig, config);

export const DropdownHeader = component(mergedConfig);
