import { underlineConfig } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Underline.config';

const mergedConfig = mergeConfig(underlineConfig, config);

export const Underline = component(mergedConfig);
