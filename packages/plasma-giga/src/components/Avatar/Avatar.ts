import { avatarConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Avatar.config';

const mergedConfig = mergeConfig(avatarConfig, config);
const Avatar = component(mergedConfig);

export { Avatar, mergedConfig };
