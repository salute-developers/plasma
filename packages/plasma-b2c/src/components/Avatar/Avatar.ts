import { avatarConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Avatar.config';

const mergedConfig = mergeConfig(avatarConfig, config);
const AvatarComponent = component(mergedConfig);

export const Avatar = AvatarComponent;
