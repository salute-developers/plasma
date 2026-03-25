import { avatarConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Avatar.config';

const mergedConfig = mergeConfig(avatarConfig, config);
const Avatar = component(mergedConfig);

export { Avatar, mergedConfig };
