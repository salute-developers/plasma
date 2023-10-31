import { displayConfig } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Display.config';

const mergedConfig = mergeConfig(displayConfig, config);

export const Display = component(mergedConfig);
