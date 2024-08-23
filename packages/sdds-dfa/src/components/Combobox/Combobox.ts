import { comboboxNewConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Combobox.config';

const mergedConfig = mergeConfig(comboboxNewConfig, config);
export const Combobox = component(mergedConfig);
