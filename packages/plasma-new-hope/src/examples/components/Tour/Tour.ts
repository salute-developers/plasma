import { component, mergeConfig } from 'src/engines';
import { tourConfig } from 'src/components/Tour';

import { config } from './Tour.config';

const mergedConfig = mergeConfig(tourConfig, config);
export const Tour = component(mergedConfig);
