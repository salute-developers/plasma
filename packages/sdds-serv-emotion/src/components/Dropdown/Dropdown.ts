import { dropdownConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
const Dropdown = component(mergedConfig);

export { Dropdown };
