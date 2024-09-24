import { attachConfig } from '../../../../components/Attach';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Attach.config';

const mergedConfig = mergeConfig(attachConfig, config);

export const Attach = component(mergedConfig);
