import { bodyConfig } from '../../../../components/Typography';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Body.config';

const mergedConfig = mergeConfig(bodyConfig, config);

export const Body = component(mergedConfig);
