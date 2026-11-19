import { createConditionalComponent } from 'src/utils';

import { component, mergeConfig } from '../../../engines';
import { autocompleteConfig } from '../../../components/Autocomplete';

import { config } from './Autocomplete.config';
import { config as clearConfig } from './Autocomplete.clear.config';

const mergedConfigDefault = mergeConfig(autocompleteConfig, config);
export const AutocompleteDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(autocompleteConfig, clearConfig);
export const AutocompleteClear = component(mergedConfigClear);

export const Autocomplete = createConditionalComponent({
    default: AutocompleteDefault,
    clear: AutocompleteClear,
});
