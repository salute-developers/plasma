import { component, mergeConfig } from '../../../../engines';
import { selectConfig, SelectNotFoundContent } from '../../../../components/Select';

import { config } from './Select.config';

const mergedConfig = mergeConfig(selectConfig, config);
export const Select = component(mergedConfig);

export { SelectNotFoundContent };
