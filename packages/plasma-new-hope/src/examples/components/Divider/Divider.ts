import { dividerConfig } from '../../../components/Divider';
import { component, mergeConfig } from '../../../engines';

import { config } from './Divider.config';

const mergedConfig = mergeConfig(dividerConfig, config);

export const Divider = component(mergedConfig);
