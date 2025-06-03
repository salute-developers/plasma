import { progressConfig } from '../../../components/Progress';
import { component, mergeConfig } from '../../../engines';

import { config } from './Progress.config';

const mergedConfig = mergeConfig(progressConfig, config);

export const Progress = component(mergedConfig);
