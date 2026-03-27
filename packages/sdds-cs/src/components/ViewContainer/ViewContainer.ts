import { viewContainerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './ViewContainer.config';

const mergedConfig = mergeConfig(viewContainerConfig, config);

export const ViewContainer = component(mergedConfig);
