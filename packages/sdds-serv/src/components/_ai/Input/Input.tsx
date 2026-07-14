import { component, inputConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Input.config';

export const inputMergedConfig = mergeConfig(inputConfig, config);
export const Input = component(inputMergedConfig);
