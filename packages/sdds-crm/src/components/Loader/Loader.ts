import { loaderConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Loader.config';

const mergedConfig = mergeConfig(loaderConfig, config);

export const Loader = component(mergedConfig);
