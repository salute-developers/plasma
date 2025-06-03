import { flowConfig } from '../../../components/Flow';
import { component, mergeConfig } from '../../../engines';

import { config } from './Flow.config';

const mergedConfig = mergeConfig(flowConfig, config);

export const Flow = component(mergedConfig);
