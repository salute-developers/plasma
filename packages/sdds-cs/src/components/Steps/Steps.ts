import { stepsConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Steps.config';

const mergedConfig = mergeConfig(stepsConfig, config);
const StepsComponent = component(mergedConfig);

export const Steps = StepsComponent;
