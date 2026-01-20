import { textFieldGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextFieldGroup.config';

const mergedConfig = mergeConfig(textFieldGroupConfig, config);

/**
 * Группа TextField.
 */
export const TextFieldGroup = component(mergedConfig);
