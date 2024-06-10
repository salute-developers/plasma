import { component, mergeConfig } from '../../../../engines';
import { selectConfig, SelectNotFoundContent } from '../../../../components/Select';

import { config } from './Select.config';

const mergedConfig = mergeConfig(selectConfig, config);
const Select = component(mergedConfig);

export { Select, SelectNotFoundContent };
