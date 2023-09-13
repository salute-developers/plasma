import { linkConfig } from '../../../../components/Link';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Link.config';

const mergedConfig = mergeConfig(linkConfig, config);

export const Link = component(mergedConfig);
