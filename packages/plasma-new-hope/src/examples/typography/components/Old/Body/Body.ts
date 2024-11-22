import { oldBodyConfig } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Body.config';

const mergedConfig = mergeConfig(oldBodyConfig, config);

export const OldBody = component(mergedConfig);
