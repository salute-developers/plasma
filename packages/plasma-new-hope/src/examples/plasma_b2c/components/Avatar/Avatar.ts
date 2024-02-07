import { avatarConfig } from '../../../../components/Avatar';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Avatar.config';

const mergedConfig = mergeConfig(avatarConfig, config);

export const Avatar = component(mergedConfig);
