import { flowConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Flow.config';

const mergedConfig = mergeConfig(flowConfig, config);

export const Flow = component(mergedConfig);
