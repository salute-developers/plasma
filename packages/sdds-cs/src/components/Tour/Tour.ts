import { tourConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Tour.config';

const mergedConfig = mergeConfig(tourConfig, config);

export const Tour = component(mergedConfig);
