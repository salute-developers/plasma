import { ratingInputConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './RatingInput.config';

const mergedConfig = mergeConfig(ratingInputConfig, config);

export const RatingInput = component(mergedConfig);
