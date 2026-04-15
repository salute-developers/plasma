import { avatarGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

const mergedConfig = mergeConfig(avatarGroupConfig);

export const AvatarGroup = component(mergedConfig);
