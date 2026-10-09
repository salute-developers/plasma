import { component, mergeConfig, userMessageConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './UserMessage.config';

export const userMessageMergedConfig = mergeConfig(userMessageConfig, config);
export const UserMessage = component(userMessageMergedConfig);
