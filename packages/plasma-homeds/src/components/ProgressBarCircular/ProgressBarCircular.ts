import { progressBarCircularConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './ProgressBarCircular.config';

const mergedConfig = mergeConfig(progressBarCircularConfig, config);

export const ProgressBarCircular = component(mergedConfig);
