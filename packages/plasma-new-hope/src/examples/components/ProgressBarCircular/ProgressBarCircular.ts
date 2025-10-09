import { progressBarCircularConfig } from '../../../components/ProgressBarCircular';
import { component, mergeConfig } from '../../../engines';

import { config } from './ProgressBarCircular.config';

const mergedConfig = mergeConfig(progressBarCircularConfig, config);

export const ProgressBarCircular = component(mergedConfig);
