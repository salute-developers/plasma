import { stepsConfig } from '../../../components/Steps';
import { component, mergeConfig } from '../../../engines';

import { config } from './Steps.config';

const mergedConfig = mergeConfig(stepsConfig, config);

const Steps = component(mergedConfig);

export { Steps, mergedConfig };
