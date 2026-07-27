import { progressConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Progress.config';

const mergedConfig = mergeConfig(progressConfig, config);
const ProgressComponent = component(mergedConfig);

export const Progress = ProgressComponent;
