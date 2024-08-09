import { selectConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Select.config';

const mergedConfig = mergeConfig(selectConfig, config);
const Select = component(mergedConfig);

export { Select };
