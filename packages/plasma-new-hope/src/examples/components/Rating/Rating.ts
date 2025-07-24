import { ratingConfig } from '../../../components/Rating';
import { component, mergeConfig } from '../../../engines';

import { config } from './Rating.config';

const mergedConfig = mergeConfig(ratingConfig, config);

export const Rating = component(mergedConfig);
