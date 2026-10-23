import { ratingInputConfig } from '../../../components/RatingInput';
import { component, mergeConfig } from '../../../engines';

import { config } from './RatingInput.config';

const mergedConfig = mergeConfig(ratingInputConfig, config);

export const RatingInput = component(mergedConfig);
