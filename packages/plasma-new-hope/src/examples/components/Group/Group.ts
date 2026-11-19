import { groupConfig } from '../../../components/Group';
import { component, mergeConfig } from '../../../engines';

import { config } from './Group.config';

const mergedConfig = mergeConfig(groupConfig, config);

export const Group = component(mergedConfig);
