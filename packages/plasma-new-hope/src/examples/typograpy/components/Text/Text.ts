import { textConfig } from '../../../../components/Typography';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Text.config';

const mergedConfig = mergeConfig(textConfig, config);

export const Text = component(mergedConfig);
