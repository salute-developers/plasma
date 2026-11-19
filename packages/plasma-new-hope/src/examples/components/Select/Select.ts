import { createConditionalComponent } from 'src/utils';

import { component, mergeConfig } from '../../../engines';
import { selectConfig } from '../../../components/Select';

import { config } from './Select.config';
import { config as clearConfig } from './Select.clear.config';

const mergedConfigDefault = mergeConfig(selectConfig, config);
const SelectDefault = component(mergedConfigDefault);

const mergedConfigClear = mergeConfig(selectConfig, clearConfig);
const SelectClear = component(mergedConfigClear);

const Select = createConditionalComponent({
    default: SelectDefault,
    clear: SelectClear,
});

export { Select };
