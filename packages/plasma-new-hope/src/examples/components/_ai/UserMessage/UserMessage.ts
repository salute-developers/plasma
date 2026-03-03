import { userMessageConfig } from '../../../../components/_ai/UserMessage';
import { component, mergeConfig } from '../../../../engines';

import { config } from './UserMessage.config';

const mergedConfig = mergeConfig(userMessageConfig, config);

export const UserMessage = component(mergedConfig);
