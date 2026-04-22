import { tourCardConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TourCard.config';

const mergedConfig = mergeConfig(tourCardConfig, config);
export const TourCard = component(mergedConfig);
