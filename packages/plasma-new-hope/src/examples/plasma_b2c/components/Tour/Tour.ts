import { tourConfig } from '../../../../components/Tour';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Tour.config';

const mergedConfig = mergeConfig(tourConfig, config);

export const Tour = component(mergedConfig);
