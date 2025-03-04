import { autocompleteConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Autocomplete.config';

const mergedConfig = mergeConfig(autocompleteConfig, config);
export const Autocomplete = component(mergedConfig);
