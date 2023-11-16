import { headlineConfig } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Headline.config';

const mergedConfig = mergeConfig(headlineConfig, config);

export const Headline = component(mergedConfig);
