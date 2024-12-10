import { ratingConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Rating.config';

const mergedConfig = mergeConfig(ratingConfig, config);

export const Rating = component(mergedConfig);
