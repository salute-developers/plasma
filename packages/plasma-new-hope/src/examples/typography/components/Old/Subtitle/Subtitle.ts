import { subtitleConfig } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Subtitle.config';

const mergedConfig = mergeConfig(subtitleConfig, config);

export const Subtitle = component(mergedConfig);
