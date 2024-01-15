import { badgeConfig } from '../../../../components/Badge';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Badge.config';

const mergedConfig = mergeConfig(badgeConfig, config);

export const Badge = component(mergedConfig);
