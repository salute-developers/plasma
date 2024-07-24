import { component, mergeConfig } from '../../../../engines';
import { autocompleteConfig } from '../../../../components/Autocomplete';

import { config } from './Autocomplete.config';

const mergedConfig = mergeConfig(autocompleteConfig, config);
export const Autocomplete = component(mergedConfig);
