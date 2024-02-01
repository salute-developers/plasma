import { avatarGroupConfig } from '../../../../components/AvatarGroup';
import { component, mergeConfig } from '../../../../engines';

const mergedConfig = mergeConfig(avatarGroupConfig);

export const AvatarGroup = component(mergedConfig);
