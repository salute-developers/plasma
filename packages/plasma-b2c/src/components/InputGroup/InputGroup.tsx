import { inputGroupConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './InputGroup.config';

const mergedConfig = mergeConfig(inputGroupConfig, config);

/**
 * Группа Input.
 */
export const InputGroup = component(mergedConfig);
