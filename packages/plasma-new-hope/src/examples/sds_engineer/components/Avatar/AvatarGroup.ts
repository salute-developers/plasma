import { avatarGroupConfig } from '../../../../components/Avatar';
import { component, mergeConfig } from '../../../../engines';

import { config } from './AvatarGroup.config';

const mergedConfig = mergeConfig(avatarGroupConfig, config);

export const AvatarGroup = component(mergedConfig);
