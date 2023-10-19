import { radioboxConfig } from '../../../../components/Radiobox';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Radiobox.config';

const mergedConfig = mergeConfig(radioboxConfig, config);

export const Radiobox = component(mergedConfig);
