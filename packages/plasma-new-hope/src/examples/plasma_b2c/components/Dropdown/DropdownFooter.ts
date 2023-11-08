import { dropdownFooterConfig } from '../../../../components/Dropdown/DropdownFooter/DropdownFooter';
import { component, mergeConfig } from '../../../../engines';

import { config } from './DropdownFooter.config';

const mergedConfig = mergeConfig(dropdownFooterConfig, config);

export const DropdownFooter = component(mergedConfig);
