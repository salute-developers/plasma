import { avatarGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const mergedConfig = mergeConfig(avatarGroupConfig);

export const AvatarGroup = component(mergedConfig);
